import React from "react";

// External Package Imports
import PropTypes from "prop-types";
import { Tabs, Tooltip, Tab } from "@material-ui/core";
import { Link as RouterLink, matchPath } from "react-router-dom";

// Local Imports
import { MAIN_TABS, GetRootTabLinkToPath, DEFAULT_TAB_SLUG } from "../Constants";
import { localized } from "../Localization";

// This workaround is for this issue: https://github.com/mui-org/material-ui/issues/12597
function CloneProps(props) {
  const { children, ...other } = props;
  return children(other);
}

function TabItemLink({ item, icon, disabled }) {
  return (
    <CloneProps>
      {tabProps => (
        <Tooltip title={localized().tabs[item].tooltip} placement="bottom">
          <div>
            <Tab
              {...tabProps}
              disabled={disabled}
              label={localized().tabs[item].label}
              icon={<i className="material-icons">{icon}</i>}
              component={RouterLink}
              to={GetRootTabLinkToPath(item)}
              value={item}
            />
          </div>
        </Tooltip>
      )}
    </CloneProps>
  );
}

TabItemLink.propTypes = {
  item: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

TabItemLink.defaultProps = {
  disabled: false,
};

/* TODO: Investigate why "value" is necessary at useage TabItemLink in Tabs.\
This is currently a workaround since purely just having value in the wrapped component 
does not seem to work... highlighted tab does not seem to work at all otherwise. */

const TabNavigation = ({ pathname }) => {
  const getTabSlug = () => {
    return matchPath(pathname, { path: ["/:lang/:tab", "/:lang"], exact: false }).params.tab || DEFAULT_TAB_SLUG;
  };

  return (
    <Tabs value={getTabSlug()} centered>
      {Object.keys(MAIN_TABS).map(tabKey => (
        <TabItemLink
          key={tabKey}
          item={tabKey}
          disabled={MAIN_TABS[tabKey].disabled}
          icon={MAIN_TABS[tabKey].icon}
          // Don't remove this value key... some how they they're checking it...
          value={tabKey}
        />
      ))}
    </Tabs>
  );
};

export default TabNavigation;
