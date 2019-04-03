import LocalizedStrings from "react-localization";

export const strings = new LocalizedStrings({
  en: {
    nameFirst: "Alexander",
    nameSeperator: " ",
    nameLast: "Jurcau",
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
        tooltip: "Things I like."
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
        tooltip: "好きなこと"
      }
    },
    copyConfirmNotification: "コーピした!"
  }
});
