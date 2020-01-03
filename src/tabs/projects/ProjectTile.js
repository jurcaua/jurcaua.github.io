import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ProjectTagList from "./ProjectTagList";

const useStyles = makeStyles(theme => ({
  // Ref: https://mui-treasury.com/components/shadow
  card: {
    boxShadow: "0 8px 20px -12px rgba(0,0,0,0.3)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
    }
  }
}));

const ProjectTile = ({ project, highlights, onClick, ...rest }) => {
  const classes = useStyles(rest);

  const { name, shortDescription, mainImage, tags } = project;

  const handleClick = event => {
    onClick(event, project);
  };

  return (
    <Card className={classes.card} onClick={handleClick}>
      <CardActionArea>
        <CardMedia component="img" alt={name} src={mainImage} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {shortDescription}
          </Typography>
          <ProjectTagList tags={tags} highlights={highlights} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectTile;
