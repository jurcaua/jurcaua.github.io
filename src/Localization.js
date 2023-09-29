import React from "react";

// Package Imports
import { Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";

// Local Imports
import { DEFAULT_LANGUAGE } from "./Constants";
import { getYearsAgo, getMonthsAgo } from "./Utils";
import { BIRTHDAY, ATG_STARTED_WORKING, JAPANESE_STARTED_LEARNING, JLPT_LEVEL_CURRENTLY_HAVE } from "./Info";
import Emoji from "./Emoji";
import {
  projectTagMappings,
  groupedProjectTagMappings,
  ignoreGroups,
  customFilters,
} from "./tabs/projects/ProjectsConfig";
import { LinkedInIcon, GithubIcon } from "./SocialMediaIcons";

let currentLanguage = DEFAULT_LANGUAGE;

const basicStrings = {
  en: {
    time: {
      year: "year",
      years: "years",
      month: "month",
      months: "months",
      connector: "and",
      space: " ",
    },
  },
  jp: {
    time: {
      year: "年間",
      years: "年間",
      month: "ヶ月",
      months: "ヶ月",
      connector: "の",
      space: "",
    },
  },
};

const timeSpan = {
  en: (years = 0, months = 0) => {
    return `${years > 0 ? `${years} year${years > 1 ? `s` : ``}` : ``} ${
      months > 0 ? `${years > 0 ? ` and ` : ``}${months} month${months > 1 ? `s` : ``}` : ``
    }`;
  },
  jp: (years = 0, months = 0) => {
    return `${years > 0 ? `${years}年` : ``}${months > 0 ? `${months}ヶ月` : `間`}`;
  },
};

export const strings = {
  en: {
    nameFirst: "Alexander",
    nameSeperator: " ",
    nameLast: "Jurcau",
    greeting: "Hello there! I'm Alex.",
    resumeDocuments: [{ text: "View My Resume!", sublink: "resume.pdf" }],
    copyButtonTooltip: "Copy to clipboard",
    copyConfirmNotification: "Copied to clipboard!",
    changeLanguage: "日本語に変更 (Japanese)",
    socialMedia: [
      {
        name: "LinkedIn",
        icon: LinkedInIcon,
        url: "https://www.linkedin.com/in/jurcaua/",
      },
      {
        name: "Github",
        icon: GithubIcon,
        url: "https://github.com/jurcaua",
      },
      {
        name: "Email",
        icon: EmailIcon,
        url: "mailto:jurcaua@gmail.com?subject=Hey%20Alex!",
      },
    ],
    tabs: {
      me: {
        label: "Me",
        tooltip: "Qualification overview.",
        summary: [
          <Typography variant="h5">
            Currently working at{" "}
            <b>
              <a href="https://arstechguild.inc/#/" target="_blank" rel="noopener noreferrer">
                ARSTECH GUILD Inc.
              </a>{" "}
              in Tokyo, Japan
            </b>{" "}
            for a total of {getFormattedYearsMonthsSince("en", ATG_STARTED_WORKING)} on an unannounced project (see
            resume for details).
          </Typography>,
          <Typography variant="h5">
            I am {getYearsAgo(BIRTHDAY)} years old, and a <b>University of Toronto</b> alumnus, where I studied Computer
            Science with focuses in Algorithms, System Design, and Game Design.
          </Typography>,
          <Typography variant="h5">
            Also previously working at Ubisoft on Watch Dogs Legion for ~2 years, my notable contributions can be seen
            below:
          </Typography>,
        ],
        currentExperiences: [
          {
            primary: "Leading development on a company-wide service-consolidating meeting productivity tool",
            secondary: "Python, C#",
            icon: "code",
          },
          {
            primary: "Maintaining our automated integration-testing pipeline",
            secondary: "C++",
            icon: "code",
          },
          {
            primary: "Developing an online service management web tool",
            secondary: "React / Redux, Python, C++",
            icon: "code",
          },
          {
            primary: "Resolving Sony TRC onlines / UI issues",
            secondary: "C++",
            icon: "code",
          },
        ],
        otherExperiencesHeader: (
          <Typography variant="h5">Other related experience in the industry includes:</Typography>
        ),
        otherExperiences: [
          {
            primary: "Working for an augmented reality startup -- as a programmer and tech consultant",
            secondary: "Unity",
            icon: "videogame_asset",
            dialogTitle: "ARnocular - Augmented Reality Software Developer",
            dialogText: [
              "Implemented a system that dynamically downloads AssetBundles and displays 3D models from a database, requesting and parsing CSV files",
              "Developed an accurate linear regress system using GPS points to smoothly move between perceived user locations",
              "Collaborated smoothly with Git version control; experience with Prod/QA/Dev pipeline, branching, merging, stashing, working with a remote repo",
            ],
          },
          {
            primary: "Teaching video game design to at-risk youth, following a game to completion",
            secondary: "Construct 2",
            icon: "school",
            dialogTitle: "Youth Fusion - Game Design Program Coordinator",
            dialogText: [
              "Taught for a local non-profit after-school program aimed to decreasing high school drop-out rates by teaching all aspects of video game development",
              "Oversaw the development of 2 fully polished games, following a Prototyping/Alpha/Beta/Gold staging process",
              "Verbally communicated complex game design concepts to children in simple and easy-to-understand ways",
            ],
          },
          {
            primary: "Working as Systems Support doing data validation, and integration and regression testing",
            secondary: "SQL Server (TSQL)",
            icon: "table_chart",
            dialogTitle: "Inmar - Systems Support",
            dialogText: [
              "Developed SSIS packages for data transfer between SQL Server databases and uploads/downloads from/to Excel files",
              "Developed T-SQL scripts for comprehensive field level discrepancy reports",
              "Created testing automation jobs for data integrity and consistency, including test case creation, execution and results logging",
            ],
          },
        ],
      },
      projects: {
        label: "Projects",
        tooltip: "Notable personal projects and experience.",
        displaying: num => `Displaying ${num} projects`,
        dialog: {
          linksTitle: "Related Links",
        },
        filter: {
          button: "Filter",
          currentFiltersTitle: "Current Filters",
          dialog: {
            title: "Project Filters",
            resetFiltersButton: "Reset",
            cancelButton: "Cancel",
            applyButton: "Apply Filters",
          },
        },
        content: {
          "tungsten-and-sparky": {
            name: "Tungsten and Sparky",
            shortDescription:
              "The socket brothers are in trouble! Help  tungsten and sparky survive an onslaught of killer forks, only using the electric cable that binds them both as a weapon.",
            mainImage: "https://img.itch.zone/aW1nLzM0NDUwMjIucG5n/original/8DpP37.png",
            images: [
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNjQzNjEyLzM0Njg5MzEuanBn/original/mDFSPt.jpg",
                caption: "",
              },
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNjQzNjEyLzM0NDkzMTQuanBn/original/Zyfi%2FT.jpg",
                caption: "",
              },
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNjQzNjEyLzM0NDkzMTMuanBn/original/QjRZqP.jpg",
                caption: "",
              },
            ],
            tags: ["L2", "T1", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/FinnbarrOC/TOJam2020_CSC",
              },
              {
                title: "itch.io (Play now!)",
                url: "https://masonachu.itch.io/tungstenandsparky",
              },
            ],
          },
          espionage: {
            name: "EspionAge",
            shortDescription:
              "Heroes never die; legends never retire. A comedic stealth-adventure game that takes place in a retirement home.",
            mainImage: "https://img.itch.zone/aW1hZ2UvNTk5NTUyLzMyOTMyMDgucG5n/original/yw4VbA.png",
            video: "https://www.youtube.com/watch?v=3FfadIq6LHg",
            images: [
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNTk5NTUyLzMyOTMwOTEucG5n/original/anHZl4.png",
                caption: "",
              },
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNTk5NTUyLzMxODIxNzUucG5n/original/ShDYpp.png",
                caption: "",
              },
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNTk5NTUyLzMyOTMyMDkucG5n/original/TxAkQ5.png",
                caption: "",
              },
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNTk5NTUyLzMyOTMwOTAucG5n/original/6%2F5Eh7.png",
                caption: "",
              },
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNTk5NTUyLzMyOTMyMDgucG5n/original/yw4VbA.png",
                caption: "",
              },
            ],
            tags: ["L1", "T0", "T6", "T9", "O2", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/FinnbarrOC/EspionAge",
              },
              {
                title: "itch.io (Play now!)",
                url: "https://espionage.itch.io/espionage",
              },
            ],
          },
          "fisherman-foes": {
            name: "Fisherman Foes: Ocean Commotion",
            shortDescription:
              "Fight your fellow fisherman to be the king-of-the-hill, and win in this 2D multiplayer battle, with only your rod as your weapon.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/artwork1.png?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/movement.gif?raw=true",
                caption: "Start off on a peaceful ship!",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot3.png?raw=true",
                caption: "Hit some stormy weather...",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/iceberg.gif?raw=true",
                caption:
                  "The final iceberg stage provides a great end to the game with great height and a dangerous surrounding waters.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot5.png?raw=true",
                caption: "The main menu.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/character-select.gif?raw=true",
                caption: "Character lobby.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot4.png?raw=true",
                caption: "The controls screen.",
              },
            ],
            tags: ["L1", "T0", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/TOJAM13",
              },
              {
                title: "itch.io (Play now!)",
                url: "https://jurcaua.itch.io/fisherman-foes",
              },
            ],
          },
          "event-listeners": {
            name: "Event Listeners",
            shortDescription:
              "Web app made to be the center of clubs and events for the University of Toronto - school project prototype (100% grade).",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/dashboard-logged-in.png?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/create-post.gif?raw=true",
                caption: "Creating an event user flow.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/search-clubs.png?raw=true",
                caption: "Club search page.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/create-club.gif?raw=true",
                caption: "Creating a club user flow.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/featured-clubs.gif?raw=true",
                caption: "Dashboard featured clubs.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/user-profile.gif?raw=true",
                caption: "User profile page.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/club-profile.gif?raw=true",
                caption: "Club profile page.",
              },
            ],
            tags: ["L3", "L4", "T2", "T3", "T4", "T5", "T9", "T13", "O2", "O6"],
            links: [
              {
                title: "Website",
                url: "https://event-listeners.herokuapp.com/",
              },
            ],
          },
          soundplow: {
            name: "Soundplow",
            shortDescription: "Soundcloud .mp3 downloader + integrated UI (PySide / Qt) - made in Python",
            mainImage: "https://github.com/jurcaua/github_image_hosting/blob/master/Soundplow/gif1.gif?raw=true",
            images: [
              {
                imgPath: "https://github.com/jurcaua/github_image_hosting/blob/master/Soundplow/gif1.gif?raw=true",
                caption: "Search and download tracks instantly.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Soundplow/screenshot2.png?raw=true",
                caption: "Download tracks live as they are liked by any registered user.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Soundplow/screenshot3.png?raw=true",
                caption: "Batch-download from a list of track URLs.",
              },
            ],
            tags: ["L0", "T7", "T9", "O5"],
            links: [
              {
                title: "Github",
                url: "https://github.com/jurcaua/soundplow",
              },
            ],
          },
          "holo-mole": {
            name: "Holo-Mole",
            shortDescription: "Augmented reality game on a physical rainbow hologram, built in Unity.",
            mainImage: "https://github.com/jurcaua/github_image_hosting/blob/master/HoloMole/screenshot1.png?raw=true",
            tags: ["L1", "T0", "T6", "T9", "O0", "O2", "O3", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/Hologram-Whack-A-Mole",
              },
            ],
            video: "https://www.youtube.com/watch?v=XwkHZDINBOI",
          },
          "google-spy": {
            name: "Google Spy",
            shortDescription: "Take full control of in-game characters in Unity by voice via Google Assistant.",
            mainImage: "https://github.com/jurcaua/github_image_hosting/blob/master/GoogleSpy/screenshot1.PNG?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GoogleSpy/screenshot3.PNG?raw=true",
                caption: "Possible actions are displayed as you try to navigate the level only using your voice.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GoogleSpy/screenshot4.PNG?raw=true",
                caption: "Avoid being spotted by the evil apple enemies!",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GoogleSpy/screenshot1.PNG?raw=true",
                caption: "",
              },
            ],
            tags: ["L1", "L3", "T0", "T6", "T9", "T11", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/GoogleSpy",
              },
              {
                title: "Devpost",
                url: "https://devpost.com/software/googlespy",
              },
            ],
          },
          kleptomanihat: {
            name: "Kleptomanihat",
            shortDescription:
              "A hat kleptomaniac imprisoned for life is magically released. Control him as he runs around town, collecting hats as he goes.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/main-menu.PNG?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/prison-structure.PNG?raw=true",
                caption: "Break out of prison!",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/boss-1.PNG?raw=true",
                caption: "Defeat a plethora of unique bosses!",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/basketball.PNG?raw=true",
                caption: "Take a moment to enjoy the city life with some basketball.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/movie-theatre.PNG?raw=true",
                caption: "Enjoy a relaxing movie!",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/final-boss-1.PNG?raw=true",
                caption: "Become part of the movie!",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/final-boss-2.PNG?raw=true",
                caption: "And find the greatest hat of all time...",
              },
            ],
            tags: ["L1", "T0", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/Kleptomanihat",
              },
              {
                title: "itch.io (Play now!)",
                url: "https://jurcaua.itch.io/kleptomanihat",
              },
            ],
          },
          translatar: {
            name: "TranslatAR",
            shortDescription: "Real-time Augmented Reality translation app with image recognition in Unity.",
            mainImage: "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/devpost1.jpg?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/translatAR-test-pic1.png?raw=true",
                caption: "",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/translatAR-test-pic2.png?raw=true",
                caption: "",
              },
            ],
            tags: ["L1", "T0", "T6", "O1", "O3"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/TranslatAR",
              },
              {
                title: "Devpost",
                url: "https://devpost.com/software/translatar-ha36kr",
              },
            ],
            video: "https://youtu.be/GyIVdzyi8pY",
          },
          "snake-dimensions": {
            name: "Snake Dimensions",
            shortDescription: "3D version of the classic game of Snake, built for Android using Unity.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/raw/master/Snake%20DIMENSIONS/Screenshot_20170102-123935.png",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Snake%20DIMENSIONS/Screenshot_20170102-123958.png?raw=true",
                caption: "Simple 3D controls screen.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Snake%20DIMENSIONS/Screenshot_20170102-124203.png?raw=true",
                caption: "Avoid falling blocks and running into yourself to get the highscore.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Snake%20DIMENSIONS/Screenshot_20170102-124324.png?raw=true",
                caption: "Special FPS mode triggered via random powerup!",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Snake%20DIMENSIONS/Screenshot_20170102-124602.png?raw=true",
                caption: "Integrated local highscores!",
              },
            ],
            tags: ["L1", "T0", "T6", "T9", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/Snake-Dimensions",
              },
              {
                title: "Google Play",
                url: "https://play.google.com/store/apps/details?id=com.jurk.co.snakedimensions",
              },
              {
                title: "itch.io (Play now!)",
                url: "https://jurcaua.itch.io/snake-dimensions",
              },
            ],
            video: "https://www.youtube.com/watch?v=X5Rv26UH0jo",
          },
          website: {
            name: "Personal Website",
            shortDescription: "This website - entirely custom and made in React w/ Material UI.",
            longDescription: (
              <React.Fragment>
                <Typography>
                  <u>Main Features:</u>
                </Typography>
                <Typography variant="body1">- Optimized and tested on all screen-sizes.</Typography>
                <Typography variant="body1">
                  - Entirely custom and robust localization system (personally translated into Japanese!)
                </Typography>
                <Typography variant="body1" style={{ marginLeft: "8px" }}>
                  ⤷ All areas of the website are built around this to keep everything consistent.
                </Typography>
                <Typography variant="body1">
                  - High-detail and highly-customizable project showcasing framework.
                </Typography>
                <Typography variant="body1" style={{ marginLeft: "8px" }}>
                  ⤷ Responsive and easily configurable filtering system.
                </Typography>
                <Typography variant="body1" style={{ marginLeft: "8px" }}>
                  ⤷ Support for videos, images, and gifs, all in one scrollable view.
                </Typography>
              </React.Fragment>
            ),
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/Personal%20Website/2020-01-02%2016_04_56-Window.png?raw=true",
            tags: ["L3", "L4", "T2", "T3", "T9", "T13", "O6"],
            links: [
              {
                title: "Github",
                url: "https://github.com/jurcaua/jurcaua.github.io",
              },
              {
                title: "Website",
                url: "http://jurcau.com/",
              },
            ],
          },
          "re-lec": {
            name: "Re-Lec",
            shortDescription:
              "Platform that allows students to record lectures and view other recorded lectures, under a token-earning system.",
            mainImage: "https://github.com/jurcaua/github_image_hosting/blob/master/Re-Lec/logo_relec.png?raw=true",
            tags: ["L1", "L3", "L4", "T0", "T3", "T6", "T9", "O2", "O6"],
          },
          "code-bumpin": {
            name: "Code Bumpin'",
            shortDescription: "A 3D platformer prototype based on music visualization.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/raw/master/Code%20Bumpin'/code-bumpin-v3%202017-01-23%2019-51-19-10.bmp",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-1.png?raw=true",
                caption: "Collect the green pickup to push the walls that are closing in!",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-2.png?raw=true",
                caption: "Collect the blue pickup to slow down time (and the music)!",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-3.png?raw=true",
                caption: "It's easiest to collect the pickups if you sync up with the music!",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-4.png?raw=true",
                caption: "Game over screen.",
              },
            ],
            tags: ["L1", "T0", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/code-bumpin",
              },
              {
                title: "itch.io (Play now!)",
                url: "https://jurcaua.itch.io/code-bumpin",
              },
            ],
            video: "https://www.youtube.com/watch?v=Yfn3moFHb3s&feature=youtu.be",
          },
          gamenani: {
            name: "GameNani",
            shortDescription:
              "Drag-and-drop analytics developer tool for Unity3D, seamlessly reporting player behaviour.",
            mainImage: "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot3.jpg?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot1.jpg?raw=true",
                caption: "Every object has toggleable live analytics.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot2.jpg?raw=true",
                caption: "All key presses are logged and can be displayed live in-game.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot3.jpg?raw=true",
                caption: "Our companion app can display detailed statistics for each play session.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot4.jpg?raw=true",
                caption: "Specific data per-session can also be looked into.",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot5.jpg?raw=true",
                caption: "Key presses statistics are also displayed in the same way!",
              },
            ],
            tags: ["L1", "T0", "T6", "T9", "O1", "O4", "O5"],
            links: [
              {
                title: "GitHub (Tool)",
                url: "https://github.com/jurcaua/GameNaniGrapher",
              },
              {
                title: "GitHub (Game)",
                url: "https://github.com/jurcaua/GameNani",
              },
              {
                title: "DevPost",
                url: "https://devpost.com/software/thacks2",
              },
            ],
          },
          "space-shooter": {
            name: "Space Shooter",
            shortDescription:
              "Modified version of a Unity tutorial, adding custom firing mechanics for aimed shooting.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/Space%20Shooter/Screenshot_20170110-221144-cropped.png?raw=true",
            tags: ["L1", "T0", "T6", "T9", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/SpaceShooter-Android",
              },
            ],
            video: "https://www.youtube.com/watch?v=yUQojrvAw1k",
          },
          "airplane-sim": {
            name: "Airplane Simulator",
            shortDescription:
              "Completely hand-made physics-based airplane simulator made in high school, coded in Java.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/AirplaneSim/2019-12-30%2021_50_28-Settings.png?raw=true",
            tags: ["L5", "O2"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/airplaneSimulator",
              },
            ],
          },
        },
      },
      interests: {
        label: "Interests",
        tooltip: "Things I like.",
        header: "Welcome to my world!",
        subheader: "I also do a couple more things outside of work!",
        clickPrompt: "Click one of my interests!",
        content: {
          japanese: {
            summary: "Japanese",
            details: (
              <React.Fragment>
                <Typography variant="h5">
                  Fluent in Japanese, I have been learning for about{" "}
                  {<b>{getFormattedYearsMonthsSince("en", JAPANESE_STARTED_LEARNING)}</b>} and counting!
                  <br />I currently hold a {<b>JLPT N{JLPT_LEVEL_CURRENTLY_HAVE}</b>} certification I received Dec.
                  2021, which is the highest proficiency level currently available.
                </Typography>
                <br />
                <Typography variant="h5">
                  I can have casual or business level conversations without any issues, and can keep up with native
                  speaking patterns and colloquial speech. In both a work environment, and in my personal life, I have
                  experience giving presentations, teaching, mentoring, managing, interviewing in Japanese.
                  <br /> Additionally, I consistently do translation of internal documents, and have even competed in
                  literature translation competitions from English to Japanese. Interpretation is also something I have
                  done from the context of casual interactions, all the way to full-fledged project proposals to company
                  executives.
                </Typography>
              </React.Fragment>
            ),
            icon: "translate",
          },
          gaming: {
            summary: "Gaming",
            details: (
              <Typography variant="h5">
                <b>My love for programming came from games!</b> I started out playing Flash and CD-ROM games as kid,
                moving on to classic games like Pokemon, Spyro, and my all-time favourite video game series, Kingdom
                Hearts! Now I enjoy making games as much as I enjoy playing them (something my kid-self would've never
                believed)!
              </Typography>
            ),
            icon: "videogame_asset",
          },
          basketball: {
            summary: "Basketball",
            details: (
              <Typography variant="h5">
                I played basketball at a <b>competitive level</b> for majority of my life, leading up to university.
                Playing on countless teams and in countless leagues, and being trained by veterans in the game -- it
                built a certain <u>hardwork</u> and <u>team-centered</u> mindset that sticks with me to this day.
              </Typography>
            ),
            icon: "fitness_center",
          },
          coffee: {
            summary: "Coffee",
            details: (
              <React.Fragment>
                <Typography variant="h5">
                  I absolutely <i>ADORE</i> a good cup of {<Emoji symbol="☕" />}. While I rarely feel the effects of
                  caffeine, I stick with it for the taste! I believe a nice cup of black coffee is the best thing to sip
                  on while programming.
                </Typography>
              </React.Fragment>
            ),
            icon: "free_breakfast",
          },
        },
      },
    },
  },
  jp: {
    nameFirst: "ジュルコ",
    nameSeperator: "・",
    nameLast: "アレックス",
    greeting: "こんにちは！アレックスです。",
    resumeDocuments: [
      { text: "履歴書（未更新）", sublink: "履歴書.pdf" },
      { text: "職務経歴書（未更新）", sublink: "職務経歴書.pdf" },
    ],
    copyButtonTooltip: "コピー",
    copyConfirmNotification: "コピーしました！",
    changeLanguage: "Change the language to English! (英語)",
    socialMedia: [
      {
        name: "LinkedIn",
        icon: LinkedInIcon,
        url: "https://www.linkedin.com/in/jurcaua/",
      },
      {
        name: "Github",
        icon: GithubIcon,
        url: "https://github.com/jurcaua",
      },
      {
        name: "メール",
        icon: EmailIcon,
        url: "mailto:jurcaua@gmail.com?subject=Hey%20Alex!",
      },
    ],
    tabs: {
      me: {
        label: "私について",
        tooltip: "資格概要",
        summary: [
          <Typography variant="h5">
            現在、
            <b>
              東京の
              <a href="https://arstechguild.inc/#/" target="_blank" rel="noopener noreferrer">
                ARSTECH GUILD株式会社
              </a>
            </b>
            で{getFormattedYearsMonthsSince("jp", ATG_STARTED_WORKING)}
            、未発表のプロジェクトに取り組んでおります。
          </Typography>,
          <Typography variant="h5">
            トロント大学を卒業、コンピューターサイエンスのアルゴリズム、システムデザイン、ゲームデザイン等、を中心に学んでおりました。
          </Typography>,
          <Typography variant="h5">私の専門と、前職のUbisoft（2年間弱の職歴）への貢献は以下のとおりです。</Typography>,
        ],
        currentExperiences: [
          {
            primary: "自社のあらゆるサービスを統合する会議の効率を上げるためのツールの開発を担当",
            secondary: "Python, C#",
            icon: "code",
          },
          {
            primary: "自動化された統合テストパイプラインの維持",
            secondary: "C++",
            icon: "code",
          },
          {
            primary: "オンラインサービスを管理するWebツールの開発",
            secondary: "React / Redux, Python, C++",
            icon: "code",
          },
          {
            primary: "Sony TRC オンライン・UIの不具合の改善",
            secondary: "C++",
            icon: "code",
          },
        ],
        otherExperiencesHeader: <Typography variant="h5">業界に関連する経験は以下のとおりです。</Typography>,
        otherExperiences: [
          {
            primary: "拡張現実を扱うスタートアップ企業ープログラマー/技術コンサルタントとして",
            secondary: "Unity",
            icon: "videogame_asset",
            dialogTitle: "ARnocular - Augmented Reality Software Developer",
            dialogText: [
              "CSVファイルをリクエストと解析を行い、AssetBundlesを動的にダウンロードし、データベースから3Dモデルを表示するシステムを実装",
              "GPSによってユーザの行動を正確に分析する線形回帰システムを開発",
              "Gitのバージョン管理による協同作業：Prod/QA/Devのパイプライン、ブランチ、マージ、スタッシング、リモートのリポジトリーの使用の経験",
            ],
          },
          {
            primary: "不安定な生活環境にいる学生に、1から完成までゲームデザインを指導",
            secondary: "Construct 2",
            icon: "school",
            dialogTitle: "Youth Fusion - Game Design Program Coordinator",
            dialogText: [
              "地域の高校の中退率を下げるための非営利の放課後プログラムでゲーム開発の面白さやあらゆることを生徒に教えた",
              "プロトタイプ版・アルファ版・ベータ版・マスターアップ版の開発段階に従い、2つの完成度の高いゲームの開発を監督",
              "複雑なゲームデザインコンセプトを子供たちにシンプルでわかりやすい方法で説明",
            ],
          },
          {
            primary: "データ検証、統合およびリグレッションテストを行いながらシステムのサポートとして働いた",
            secondary: "SQL Server (TSQL)",
            icon: "table_chart",
            dialogTitle: "Inmar - Systems Support",
            dialogText: [
              "SQLサーバーデータベースとExcelファイル間のデータ転送のSSISパッケージを開発",
              "SQLフィールドの不一致を発見するT-SQLのテスト・スクリプトを開発",
              "テストケースの作成、実行、結果のログ記録など、データの整合性と一貫性のためのテスト自動化の仕事を作成",
            ],
          },
        ],
      },
      projects: {
        label: "プロジェクト",
        tooltip: "注目のプロジェクト",
        displaying: num => <b>{num}件のプロジェクトを表示</b>,
        dialog: {
          linksTitle: "関連リンク",
        },
        filter: {
          button: "絞り込み",
          currentFiltersTitle: "現在の絞り込み",
          dialog: {
            title: "プロジェクトの絞り込み",
            resetFiltersButton: "リセット",
            cancelButton: "キャンセル",
            applyButton: "絞り込む",
          },
        },
        content: {
          "tungsten-and-sparky": {
            name: "Tungsten and Sparky",
            shortDescription: "",
            mainImage: "https://img.itch.zone/aW1nLzM0NDUwMjIucG5n/original/8DpP37.png",
            images: [
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNjQzNjEyLzM0Njg5MzEuanBn/original/mDFSPt.jpg",
                caption: "",
              },
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNjQzNjEyLzM0NDkzMTQuanBn/original/Zyfi%2FT.jpg",
                caption: "",
              },
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNjQzNjEyLzM0NDkzMTMuanBn/original/QjRZqP.jpg",
                caption: "",
              },
            ],
            tags: ["L2", "T1", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/FinnbarrOC/TOJam2020_CSC",
              },
              {
                title: "itch.io (今すぐプレイ！)",
                url: "https://masonachu.itch.io/tungstenandsparky",
              },
            ],
          },
          espionage: {
            name: "EspionAge（エスピオネージ）",
            shortDescription:
              "ヒーローは決して死せず、レジェンドに引退はない。老人ホームが舞台の、滑稽なステルス･アドベンチャーゲーム。",
            mainImage: "https://img.itch.zone/aW1hZ2UvNTk5NTUyLzMyOTMyMDgucG5n/original/yw4VbA.png",
            video: "https://www.youtube.com/watch?v=3FfadIq6LHg",
            images: [
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNTk5NTUyLzMyOTMwOTEucG5n/original/anHZl4.png",
                caption: "",
              },
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNTk5NTUyLzMxODIxNzUucG5n/original/ShDYpp.png",
                caption: "",
              },
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNTk5NTUyLzMyOTMyMDkucG5n/original/TxAkQ5.png",
                caption: "",
              },
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNTk5NTUyLzMyOTMwOTAucG5n/original/6%2F5Eh7.png",
                caption: "",
              },
              {
                imgPath: "https://img.itch.zone/aW1hZ2UvNTk5NTUyLzMyOTMyMDgucG5n/original/yw4VbA.png",
                caption: "",
              },
            ],
            tags: ["L1", "T0", "T6", "T9", "O2", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/FinnbarrOC/EspionAge",
              },
              {
                title: "itch.io (今すぐプレイ！)",
                url: "https://espionage.itch.io/espionage",
              },
            ],
          },
          "fisherman-foes": {
            name: "フィッシャーズ決戦",
            shortDescription: "釣り竿一本で闘い抜け！ライバルを突き放し、「お山の大将ゲーム」を勝ち抜こう！",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/artwork1.png?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/movement.gif?raw=true",
                caption: "穏やかな船で始めよう！",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot3.png?raw=true",
                caption: "時には嵐にも巻き込まれ。。。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/iceberg.gif?raw=true",
                caption:
                  "最後の氷山のステージでは、想像を超える高さと、危険な海に囲まれた、最高のエンディングを迎える！",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot5.png?raw=true",
                caption: "メインメニュー。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/character-select.gif?raw=true",
                caption: "キャラクターセレクト画面",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot4.png?raw=true",
                caption: "操作説明画面",
              },
            ],
            tags: ["L1", "T0", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/TOJAM13",
              },
              {
                title: "itch.io (今すぐプレイ！)",
                url: "https://jurcaua.itch.io/fisherman-foes",
              },
            ],
          },
          "event-listeners": {
            name: "Event Listeners（イベント・リスナー）",
            shortDescription:
              "トロント大学のサークルやイベント情報を集約するWebアプリケーションというアイディア ～ スクールプロジェクトとして、満点を獲得～",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/dashboard-logged-in.png?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/create-post.gif?raw=true",
                caption: "イベントの作り方。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/search-clubs.png?raw=true",
                caption: "サークル検索ページ。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/create-club.gif?raw=true",
                caption: "サークルの作り方。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/featured-clubs.gif?raw=true",
                caption: "ダッシュボードで取り上げているサークル一覧。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/user-profile.gif?raw=true",
                caption: "ユーザーのプロフィール。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/club-profile.gif?raw=true",
                caption: "サークルのプロフィール",
              },
            ],
            tags: ["L3", "L4", "T2", "T3", "T4", "T5", "T9", "T13", "O2", "O6"],
            links: [
              {
                title: "ウェブサイト",
                url: "https://event-listeners.herokuapp.com/",
              },
            ],
          },
          soundplow: {
            name: "Soundplow（サウンドプラウ）",
            shortDescription:
              "Pythonで作られたSoundcloudからのMP3をダウンロードするアプリケーション。GUI込み（PySide / Qt）。",
            mainImage: "https://github.com/jurcaua/github_image_hosting/blob/master/Soundplow/gif1.gif?raw=true",
            images: [
              {
                imgPath: "https://github.com/jurcaua/github_image_hosting/blob/master/Soundplow/gif1.gif?raw=true",
                caption: "検索して、ダウンロードする。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Soundplow/screenshot2.png?raw=true",
                caption: "いいね！された曲をリアルタイムでダウンロード。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Soundplow/screenshot3.png?raw=true",
                caption: "曲のURLをリスト入力すれば、一括ダウンロードも可能。",
              },
            ],
            tags: ["L0", "T7", "T9", "O5"],
            links: [
              {
                title: "Github",
                url: "https://github.com/jurcaua/soundplow",
              },
            ],
          },
          "holo-mole": {
            name: "ホグラたたき",
            shortDescription: "実際のレインボーホログラムに浮かび上がらせる、ARモグラ叩きゲーム。",
            mainImage: "https://github.com/jurcaua/github_image_hosting/blob/master/HoloMole/screenshot1.png?raw=true",
            tags: ["L1", "T0", "T6", "T9", "O0", "O2", "O3", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/Hologram-Whack-A-Mole",
              },
            ],
            video: "https://www.youtube.com/watch?v=XwkHZDINBOI",
          },
          "google-spy": {
            name: "グーグルスパイ",
            shortDescription: "Googleアシスタントを使って、声だけでゲームのキャラクターの操作が出来る。",
            mainImage: "https://github.com/jurcaua/github_image_hosting/blob/master/GoogleSpy/screenshot1.PNG?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GoogleSpy/screenshot3.PNG?raw=true",
                caption: "あなたの声が、コントローラー？！声でナビって進めよう！",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GoogleSpy/screenshot4.PNG?raw=true",
                caption: "敵はアップル？！奴らに見つかるな！",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GoogleSpy/screenshot1.PNG?raw=true",
                caption: "",
              },
            ],
            tags: ["L1", "L3", "T0", "T6", "T9", "T11", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/GoogleSpy",
              },
              {
                title: "Devpost",
                url: "https://devpost.com/software/googlespy",
              },
            ],
          },
          kleptomanihat: {
            name: "Kleptomanihat（クレプトマニハット）",
            shortDescription:
              "終身刑に処せられた盗癖のある人が、魔法の力で出獄された。彼をコントロールして、冒険しながら様々な帽子を集めよう！",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/main-menu.PNG?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/prison-structure.PNG?raw=true",
                caption: "脱獄しよう！",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/boss-1.PNG?raw=true",
                caption: "ユニークなボス達を倒せ！",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/basketball.PNG?raw=true",
                caption: "たまには息抜きも大事？都会生活をしながらバスケをしたり、",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/movie-theatre.PNG?raw=true",
                caption: "映画館へ行ったり、",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/final-boss-1.PNG?raw=true",
                caption: "そして、俳優デビューもしちゃったり？",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/final-boss-2.PNG?raw=true",
                caption: "目指すは、史上最高の帽子をみつけること！",
              },
            ],
            tags: ["L1", "T0", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/Kleptomanihat",
              },
              {
                title: "itch.io (Play now!)",
                url: "https://jurcaua.itch.io/kleptomanihat",
              },
            ],
          },
          translatar: {
            name: "TranslatAR（トランスレータル）",
            shortDescription: "画像認識により、リアルタイム環境翻訳を実現した、ARのスマホアプリ。",
            mainImage: "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/devpost1.jpg?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/translatAR-test-pic1.png?raw=true",
                caption: "",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/translatAR-test-pic2.png?raw=true",
                caption: "",
              },
            ],
            tags: ["L1", "T0", "T6", "O1", "O3"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/TranslatAR",
              },
              {
                title: "Devpost",
                url: "https://devpost.com/software/translatar-ha36kr",
              },
            ],
            video: "https://youtu.be/GyIVdzyi8pY",
          },
          "snake-dimensions": {
            name: "Snake Dimensions（スネーク・ディメンション）",
            shortDescription: "Unityで作られたアンドロイド向け3Dヘビゲーム。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/raw/master/Snake%20DIMENSIONS/Screenshot_20170102-123935.png",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Snake%20DIMENSIONS/Screenshot_20170102-123958.png?raw=true",
                caption: "シンプルな3Dコントロールメニュー。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Snake%20DIMENSIONS/Screenshot_20170102-124203.png?raw=true",
                caption: "障害物を避けながら、ハイスコアを目指そう！",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Snake%20DIMENSIONS/Screenshot_20170102-124324.png?raw=true",
                caption: "時々起こるパワーアップで、FPS（一人称視点）モードも楽しめる！",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Snake%20DIMENSIONS/Screenshot_20170102-124602.png?raw=true",
                caption: "ハイスコアを叩き出せ！",
              },
            ],
            tags: ["L1", "T0", "T6", "T9", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/Snake-Dimensions",
              },
              {
                title: "Google Play",
                url: "https://play.google.com/store/apps/details?id=com.jurk.co.snakedimensions",
              },
              {
                title: "itch.io (今すぐプレイ！)",
                url: "https://jurcaua.itch.io/snake-dimensions",
              },
            ],
            video: "https://www.youtube.com/watch?v=X5Rv26UH0jo",
          },
          website: {
            name: "自分のウェブサイト",
            shortDescription: "このウェブサイト。ReactとMaterial UIを使って、全て自分で作りました。",
            longDescription: (
              <React.Fragment>
                <Typography>
                  <u>主な特徴：</u>
                </Typography>
                <Typography variant="body1">- どんな画面サイズにも最適化・テスト</Typography>
                <Typography variant="body1">- 自分で作られたカスタムのローカライゼーションのシステム</Typography>
                <Typography variant="body1" style={{ marginLeft: "8px" }}>
                  ⤷ ウェブサイトにどこにもこのシステムが統合されています
                </Typography>
                <Typography variant="body1">
                  - 注目のプロジェクトにおける高性能のプロジェクトのショーケースのフレームワーク
                </Typography>
                <Typography variant="body1" style={{ marginLeft: "8px" }}>
                  ⤷ 良くカスタマイズ出来るレスポンシブな絞り込みのシステム
                </Typography>
                <Typography variant="body1" style={{ marginLeft: "8px" }}>
                  ⤷ 動画・画像・GIFが同じスクロール可能のビュー画面
                </Typography>
              </React.Fragment>
            ),
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/Personal%20Website/2020-01-02%2016_04_56-Window.png?raw=true",
            tags: ["L3", "L4", "T2", "T3", "T9", "T13", "O6"],
            links: [
              {
                title: "Github",
                url: "https://github.com/jurcaua/jurcaua.github.io",
              },
              {
                title: "ウェブサイト",
                url: "http://jurcau.com/",
              },
            ],
          },
          "re-lec": {
            name: "Re-Lec（リーレック）",
            shortDescription:
              "講義の動画を集約するWebシステム。講義を録画してアップロードすれば、トークンがもらえます。そのトークンを使って、他の講義の動画を観ることもできます。",
            mainImage: "https://github.com/jurcaua/github_image_hosting/blob/master/Re-Lec/logo_relec.png?raw=true",
            tags: ["L1", "L3", "L4", "T0", "T3", "T6", "T9", "O2", "O6"],
          },
          "code-bumpin": {
            name: "Code Bumpin'（コード・バンピン）",
            shortDescription: "3Dプラットフォームのプロトタイプ。音楽を可視化したゲーム。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/raw/master/Code%20Bumpin'/code-bumpin-v3%202017-01-23%2019-51-19-10.bmp",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-1.png?raw=true",
                caption: "迫りくる壁に押し潰されるな！緑のジェムを拾って、押し戻せ！",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-2.png?raw=true",
                caption: "青のジェムで時間を遅らせろ！",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-3.png?raw=true",
                caption: "音楽に合わせて動き回れ！これがハイスコアへの近道だ！",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-4.png?raw=true",
                caption: "ゲームオーバー。",
              },
            ],
            tags: ["L1", "T0", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/code-bumpin",
              },
              {
                title: "itch.io (Play now!)",
                url: "https://jurcaua.itch.io/code-bumpin",
              },
            ],
            video: "https://www.youtube.com/watch?v=Yfn3moFHb3s&feature=youtu.be",
          },
          gamenani: {
            name: "GameNani（ゲームナ二）",
            shortDescription:
              "ドラッグ＆ドロップ操作で、Unity 3Dのゲームを分析できる、開発者用ツール。プレイヤーの動作を、シームレスにリポートできます。",
            mainImage: "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot3.jpg?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot1.jpg?raw=true",
                caption: "色んなゲームのライブ統計を見ることが出来ます。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot2.jpg?raw=true",
                caption: "キー入力を記憶し、ゲーム内でライブ表示できます。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot3.jpg?raw=true",
                caption: "コンパニオンアプリでは、各セッションの細かい統計を表示することができます。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot4.jpg?raw=true",
                caption: "セッション毎の、細かい統計を見ることも出来ます。",
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot5.jpg?raw=true",
                caption: "入力されたキーの統計を同じように見ることも出来ます。",
              },
            ],
            tags: ["L1", "T0", "T6", "T9", "O1", "O4", "O5"],
            links: [
              {
                title: "GitHub（ツール）",
                url: "https://github.com/jurcaua/GameNaniGrapher",
              },
              {
                title: "GitHub（ゲーム）",
                url: "https://github.com/jurcaua/GameNani",
              },
              {
                title: "DevPost",
                url: "https://devpost.com/software/thacks2",
              },
            ],
          },
          "space-shooter": {
            name: "Space Shooter（スペース・シューター）",
            shortDescription: "Unityチュートリアルの修正版。狙撃の範囲を広げる機能を追加しました。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/Space%20Shooter/Screenshot_20170110-221144-cropped.png?raw=true",
            tags: ["L1", "T0", "T6", "T9", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/SpaceShooter-Android",
              },
            ],
            video: "https://www.youtube.com/watch?v=yUQojrvAw1k",
          },
          "airplane-sim": {
            name: "フライトシミュレーター",
            shortDescription: "高校の時に作った物理学のフライトシミュレータ。Javaで作られたアプリケーション。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/AirplaneSim/2019-12-30%2021_50_28-Settings.png?raw=true",
            tags: ["L5", "O2"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/airplaneSimulator",
              },
            ],
          },
        },
      },
      interests: {
        label: "興味",
        tooltip: "好きなこと",
        header: "私の世界へ、ようこそ！",
        subheader: "プライベートの私を紹介します！",
        clickPrompt: "私の興味にクリックしてください！",
        content: {
          japanese: {
            summary: "日本語",
            details: (
              <React.Fragment>
                <Typography variant="h5">
                  私は{<b>{getFormattedYearsMonthsSince("jp", JAPANESE_STARTED_LEARNING)}</b>}
                  日本語を勉強しています。 2021年の12月に
                  <b>日本語能力試験の{JLPT_LEVEL_CURRENTLY_HAVE}級</b>に合格しました。
                </Typography>
                <br />
                <Typography variant="h5">
                  日常会話やビジネスレベルにおいて、日本語でコミュニケーションをとることが出来ます。
                  最近では、日本での就職活動を通して、ビジネスメールの書き方や面接のスキルを向上させることができました。
                </Typography>
              </React.Fragment>
            ),
            icon: "translate",
          },
          gaming: {
            summary: "ゲーム",
            details: (
              <Typography variant="h5">
                <b>幼い頃、ゲームが大好きだったため、プログラミングを始めようと思いました。</b>
                その頃からキングダムハーツを初め、ポケモン、スパイロ・ザ・ドラゴン等をしました。
                現在はゲームを「作る」のはゲームを「する」のと同じくらい好きな事です。
                (昔の自分だったら、信じられないかもしれません。)
              </Typography>
            ),
            icon: "videogame_asset",
          },
          basketball: {
            summary: "バスケットボール",
            details: (
              <Typography variant="h5">
                大学まで、人生のほとんどを、<b>バスケットボール</b>に費やしました。
                優れた選手に指導をされつつ、数々のチームに所属していました。 その時に培った
                <u>ハードワーク</u>や、<u>チームワーク</u>を優先することは、今も残っています。
              </Typography>
              /* Formal version:
              私は大学までの人生の大半、競技バスケットボールをしていました。(をして過ごしました。)
              下のチームやリーグで試合をし、試合の中で優れた選手に訓練されてきました。
              それらが確かな努力とチームワークを優先する思考を形成し、今日(こんにち)まで私の信念です。
              */
            ),
            icon: "fitness_center",
          },
          coffee: {
            summary: "コーヒー",
            details: (
              <React.Fragment>
                <Typography variant="h5">
                  {<Emoji symbol="☕" />}無くしては、生きていくことができますせん。
                  カフェインの効果はあまり感じませんが、いれたてのコーヒーの味は最高なので、それでいいんです！
                  プログラミングをするときに飲むブラックコーヒーは、最高の一杯です。
                </Typography>
              </React.Fragment>
            ),
            icon: "free_breakfast",
          },
        },
      },
    },
  },
};

export function getLanguage() {
  return currentLanguage;
}

export function setLanguage(lang) {
  currentLanguage = lang;
}

export function localized() {
  return strings[currentLanguage];
}

export function getGroupedProjectTags(tag) {
  // Filter away preset ignore keys: https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6
  return Object.keys(groupedProjectTagMappings[currentLanguage])
    .filter(key => !ignoreGroups.includes(key))
    .reduce((obj, key) => {
      obj[key] = groupedProjectTagMappings[currentLanguage][key];
      return obj;
    }, {});
}

export const customBoolsToFunctions = customBools => {
  const customFilters = getCustomFilters();

  return Object.keys(customBools).reduce((lst, key) => {
    if (customBools[key]) {
      lst.push(customFilters[key].validate);
    }
    return lst;
  }, []);
};

export const getFilteredProjects = (filterTagList, miscFilterFunctionList = []) => {
  return Object.keys(localized().tabs.projects.content)
    .filter(
      projKey =>
        // 1. only get projects that have every tag given
        filterTagList.every(t => localized().tabs.projects.content[projKey].tags.includes(t)) &&
        // 2. custom functions the project should return true for
        (miscFilterFunctionList.length === 0 ||
          miscFilterFunctionList.every(f => f(localized().tabs.projects.content[projKey])))
    )
    .reduce((currentObj, key) => {
      currentObj[key] = localized().tabs.projects.content[key];
      return currentObj;
    }, {});
};

export const getCustomFilters = () => {
  return customFilters[currentLanguage];
};

export function localizedProjectTag(tag) {
  return projectTagMappings[currentLanguage][tag];
}

// *Sigh* This is basically a super overcomplicated function that takes in a language and will give you
// a nicely formatted string that is the amount of time ive been studying Japanese
// To make it more general I had to do some ugly stuff like define what a SPACE was because, whoops cant have spaces with Japanese!!
// Anyways I hope no one sees this but if so, welcome to my masterpiece.
export function getFormattedYearsMonthsSince(lang, since) {
  let years = getYearsAgo(since);
  let months = getMonthsAgo(since) - years * 12;
  if (months >= 12) {
    years += 1;
    months -= 12;
  }

  return timeSpan[lang](years, months);
}
