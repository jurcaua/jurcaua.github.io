import React from "react";
import LocalizedStrings from "react-localization";
import { getYearsAgo, getMonthsAgo } from "./Utils";
import { JAPANESE_STARTED_LEARNING } from "./Info";
import { Typography } from "@material-ui/core";
import Emoji from "./Emoji";

const styles = {
  root: {
    marginLeft: "10%",
    marginRight: "10%"
  },

  header: {
    fontSize: "28px",
    textAlign: "center",
    align: "center"
  },

  subheader: {
    fontSize: "22px",
    textAlign: "center",
    align: "center"
  },

  paragraph: {
    fontSize: "22px"
  },

  drawerSummary: {
    fontSize: "22px",
    marginLeft: "10px"
  }
};

function getTimeLearningJapaneseString() {
  const years = getYearsAgo(JAPANESE_STARTED_LEARNING);
  const months = getMonthsAgo(JAPANESE_STARTED_LEARNING) - years * 12;

  let yearsString = `${years} year${years == 1 ? "" : "s"}`;
  let monthsString = `${months} month${months == 1 ? "" : "s"}`;
  return `${yearsString} and ${monthsString}`;
}

export const strings = new LocalizedStrings({
  en: {
    nameFirst: "Alexander",
    nameSeperator: " ",
    nameLast: "Jurcau",
    greeting: "Hello there! I'm Alex.",
    openResume: "View My Resume!",
    tabs: {
      me: {
        label: "Me",
        tooltip: "Qualification overview."
      },
      projects: {
        label: "Projects",
        tooltip: "Notable projects and experience."
      },
      interests: {
        label: "Interests",
        tooltip: "Things I like.",
        header: "Welcome to my world!",
        content: [
          {
            summary: "Japanese Language",
            details: (
              <React.Fragment>
                <Typography style={styles.paragraph}>
                  I have been learning Japanese for about{" "}
                  {<b>{getTimeLearningJapaneseString()}</b>}. I currently hold a{" "}
                  {<b>JLPT N5</b>} certification I recieved Dec. 2017 and will
                  be attempting the <b>N3</b> level this coming Decemeber 2019.
                </Typography>
                <br />
                <Typography style={styles.paragraph}>
                  I can have a casual conversation with few issues, and can keep
                  up with native speaking patterns and colloquial speech.
                </Typography>
              </React.Fragment>
            ),
            icon: "translate"
          },
          {
            summary: "Gaming",
            details: (
              <Typography style={styles.paragraph}>
                <b>My love for programming came from games!</b> I started out
                playing Flash and CD-ROM games as kid, moving on to classic
                games like Pokemon, Spyro, and my all-time favourite video game
                series, Kingdom Hearts! Now I enjoy making games as much as I
                enjoy playing them (something my kid-self would've never
                believed )!
              </Typography>
            ),
            icon: "videogame_asset"
          },
          {
            summary: "Basketball",
            details: (
              <Typography style={styles.paragraph}>
                I played basketball at a <b>competitive level</b> for majority
                of my life, leading up to university. Playing on countless teams
                and in countless leagues, and being trained by veterans in the
                game -- it built a certain <u>hardwork</u> and{" "}
                <u>team-centered</u> mindset that sticks with me to this day.
              </Typography>
            ),
            icon: "fitness_center"
          },
          {
            summary: "Coffee",
            details: (
              <React.Fragment>
                <Typography style={styles.paragraph}>
                  I absolutely <i>ADORE</i> a good cup of{" "}
                  {<Emoji symbol="☕" />}. While I rarely feel the effects of
                  caffeine, I stick with it for the taste!
                </Typography>
                <br />
                <Typography style={styles.paragraph}>
                  I believe a nice cup of black coffee is the best thing to sip
                  on while programming.
                </Typography>
              </React.Fragment>
            ),
            icon: "free_breakfast"
          }
        ]
      }
    },
    copyConfirmNotification: "Copied to clipboard!",
    currentExperiences: [
      {
        primary:
          "Leading development on a company-wide service-consolidating meeting productivity tool",
        secondary: "Python / C#",
        icon: "code"
      },
      {
        primary: "Maintaining our automated integration-testing pipeline",
        secondary: "C++",
        icon: "code"
      },
      {
        primary: "Developing an online service management web tool",
        secondary: "React / Redux",
        icon: "code"
      }
    ],
    otherExperiences: [
      {
        primary:
          "Working for an augmented reality startup -- as a programmer and tech consultant",
        secondary: "Unity",
        icon: "videogame_asset",
        dialogTitle: "ARnocular - Augmented Reality Software Developer",
        dialogText: [
          "Implemented a system that dynamically downloads AssetBundles and displays 3D models from a database, requesting and parsing CSV files",
          "Developed an accurate linear regress system using GPS points to smoothly move between perceived user locations",
          "Collaborated smoothly with Git version control; experience with Prod/QA/Dev pipeline, branching, merging, stashing, working with a remote repo"
        ]
      },
      {
        primary:
          "Teaching video game design to at-risk youth, following a game to completion",
        secondary: "Construct 2",
        icon: "school",
        dialogTitle: "Youth Fusion - Game Design Program Coordinator",
        dialogText: [
          "Taught for a local non-profit after-school program aimed to decreasing high school drop-out rates by teaching all aspects of video game development",
          "Oversaw the development of 2 fully polished games, following a Prototyping/Alpha/Beta/Gold staging process",
          "Verbally communicated complex game design concepts to children in simple and easy-to-understand ways"
        ]
      },
      {
        primary:
          "Working as Systems Support doing data validation, and integration and regression testing",
        secondary: "SQL Server (TSQL)",
        icon: "table_chart",
        dialogTitle: "Inmar - Systems Support",
        dialogText: [
          "Developed SSIS packages for data transfer between SQL Server databases and uploads/downloads from/to Excel files",
          "Developed T-SQL scripts for comprehensive field level discrepancy reports",
          "Created testing automation jobs for data integrity and consistency, including test case creation, execution and results logging"
        ]
      }
    ]
  },
  jp: {
    nameFirst: "ジュルコ",
    nameSeperator: "・",
    nameLast: "アレックス",
    greeting: "こんにちは！アレックスです。",
    openResume: "履歴書",
    tabs: {
      me: {
        label: "私について",
        tooltip: "資格概要"
      },
      projects: {
        label: "プロジェクト",
        tooltip: "最高の作ったプロジェクト"
      },
      interests: {
        label: "興味",
        tooltip: "好きなこと",
        header: "私の世界へ、ようこそ！",
        content: []
      }
    },
    copyConfirmNotification: "コーピした!"
  }
});
