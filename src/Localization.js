import React from "react";
import { getYearsAgo, getMonthsAgo } from "./Utils";
import {
  BIRTHDAY,
  JAPANESE_STARTED_LEARNING,
  JLPT_LEVEL_GOING_FOR,
  JLPT_LEVEL_CURRENTLY_HAVE
} from "./Info";
import { Typography } from "@material-ui/core";
import Emoji from "./Emoji";
import { DEFAULT_LANGUAGE } from "./Constants";
import { projectTagMappings } from "./tabs/projects/ProjectsConfig";

let currentLanguage = DEFAULT_LANGUAGE;

const basicStrings = {
  en: {
    time: {
      year: "year",
      years: "years",
      month: "month",
      months: "months",
      connector: "and",
      space: " "
    }
  },
  jp: {
    time: {
      year: "年間",
      years: "年間",
      month: "ヶ月",
      months: "ヶ月",
      connector: "の",
      space: ""
    }
  }
};

export const strings = {
  en: {
    nameFirst: "Alexander",
    nameSeperator: " ",
    nameLast: "Jurcau",
    greeting: "Hello there! I'm Alex.",
    openResume: "View My Resume!",
    copyButtonTooltip: "Copy to clipboard",
    copyConfirmNotification: "Copied to clipboard!",
    changeLanguage: "言語を日本語に変える! (Japanese)",
    tabs: {
      me: {
        label: "Me",
        tooltip: "Qualification overview.",
        summary: [
          <Typography variant="h5">
            Currently {getYearsAgo(BIRTHDAY)} years old, and a fourth year student at the{" "}
            <b>University of Toronto</b> -- studying Computer Science with focuses in Algorithms,
            System Design, and Game Design.
          </Typography>,
          <Typography variant="h5">
            I worked for <b>Ubisoft Toronto</b> (Watch Dogs Legion) on the tools team for 15 months.
            Responsible for a variety of things, my focuses were:
          </Typography>
        ],
        currentExperiences: [
          {
            primary:
              "Leading development on a company-wide service-consolidating meeting productivity tool",
            secondary: "Python, C#",
            icon: "code"
          },
          {
            primary: "Maintaining our automated integration-testing pipeline",
            secondary: "C++",
            icon: "code"
          },
          {
            primary: "Developing an online service management web tool",
            secondary: "React / Redux, Python, C++",
            icon: "code"
          },
          {
            primary: "Resolving Sony TRC onlines / UI issues",
            secondary: "C++",
            icon: "code"
          }
        ],
        otherExperiencesHeader: (
          <Typography variant="h5">Other related experience in the industry includes:</Typography>
        ),
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
            primary: "Teaching video game design to at-risk youth, following a game to completion",
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
      projects: {
        label: "Projects",
        tooltip: "Notable projects and experience.",
        displaying: num => `Displaying ${num} projects`,
        dialog: {
          linksTitle: "Related Links"
        },
        content: [
          {
            name: "Fisherman Foes",
            shortDescription:
              "Fight your fellow fisherman to be the king-of-the-hill, and win in this 2D multiplayer battle, with only your rod as your weapon.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/artwork1.png?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot2.png?raw=true",
                caption: "Start off on a peaceful ship!"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot3.png?raw=true",
                caption: "Hit some stormy weather..."
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot1.png?raw=true",
                caption:
                  "The final iceberg stage provides a great end to the game with great height and a dangerous surrounding waters."
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot5.png?raw=true",
                caption: "The main menu."
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot4.png?raw=true",
                caption: "The controls screen."
              }
            ],
            tags: ["L1", "T0", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/TOJAM13"
              },
              {
                title: "itch.io (Play now!)",
                url: "https://jurcaua.itch.io/fisherman-foes"
              }
            ]
          },
          {
            name: "Event Listeners",
            shortDescription:
              "Web app made to be the center of clubs and events for the University of Toronto - school project prototype (100% grade).",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/dashboard-logged-in.png?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/create-post.gif?raw=true",
                caption: "Creating an event user flow."
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/search-clubs.png?raw=true",
                caption: "Club search page."
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/create-club.gif?raw=true",
                caption: "Creating a club user flow."
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/featured-clubs.gif?raw=true",
                caption: "Dashboard featured clubs."
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/user-profile.gif?raw=true",
                caption: "User profile page."
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/club-profile.gif?raw=true",
                caption: "Club profile page."
              }
            ],
            tags: ["L3", "L4", "T2", "T3", "T4", "T5", "T9", "T13", "O2", "O6"],
            links: [
              {
                title: "Website",
                url: "https://event-listeners.herokuapp.com/"
              }
            ]
          },
          {
            name: "Holo-Mole",
            shortDescription:
              "Augmented reality game on a physical rainbow hologram, built in Unity.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/HoloMole/screenshot1.png?raw=true",
            tags: ["L1", "T0", "T6", "T9", "O0", "O2", "O3", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/Hologram-Whack-A-Mole"
              }
            ],
            video: "https://www.youtube.com/watch?v=XwkHZDINBOI"
          },
          {
            name: "Google Spy",
            shortDescription:
              "Take full control of in-game characters in Unity by voice via Google Assistant.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/GoogleSpy/screenshot1.PNG?raw=true",
            tags: ["L1", "L3", "T0", "T6", "T9", "T11", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/GoogleSpy"
              },
              {
                title: "Devpost",
                url: "https://devpost.com/software/googlespy"
              }
            ]
          },
          {
            name: "Kleptomanihat",
            shortDescription:
              "A hat kleptomaniac imprisoned for life is magically released. Control him as he runs around town, collecting hats as he goes.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/main-menu-cropped.png?raw=true",
            tags: ["L1", "T0", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/Kleptomanihat"
              },
              {
                title: "itch.io (Play now!)",
                url: "https://jurcaua.itch.io/kleptomanihat"
              }
            ]
          },
          {
            name: "TranslatAR",
            shortDescription:
              "Real-time Augmented Reality translation app with image recognition in Unity.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/devpost1.jpg?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/translatAR-test-pic1.png?raw=true",
                caption: ""
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/translatAR-test-pic2.png?raw=true",
                caption: ""
              }
            ],
            tags: ["L1", "T0", "T6", "O1", "O3"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/TranslatAR"
              },
              {
                title: "Devpost",
                url: "https://devpost.com/software/translatar-ha36kr"
              }
            ],
            video: "https://youtu.be/GyIVdzyi8pY"
          },
          {
            name: "Snake Dimensions",
            shortDescription:
              "3D version of the classic game of Snake, built for Android using Unity.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/raw/master/Snake%20DIMENSIONS/Screenshot_20170102-123935.png",
            tags: ["L1", "T0", "T6", "T9", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/Snake-Dimensions"
              },
              {
                title: "Google Play",
                url: "https://play.google.com/store/apps/details?id=com.jurk.co.snakedimensions"
              },
              {
                title: "itch.io (Play now!)",
                url: "https://jurcaua.itch.io/snake-dimensions"
              }
            ],
            video: "https://www.youtube.com/watch?v=X5Rv26UH0jo"
          },
          {
            name: "Re-Lec",
            shortDescription:
              "Platform that allows students to record lectures and view other recorded lecture, under token-earning system.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/Re-Lec/logo_relec.png?raw=true",
            tags: ["L1", "L3", "L4", "T0", "T3", "T6", "T9", "O2", "O6"]
          },
          {
            name: "Code Bumpin'",
            shortDescription: "A 3D platformer prototype based on music visualization.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/raw/master/Code%20Bumpin'/code-bumpin-v3%202017-01-23%2019-51-19-10.bmp",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-1.png?raw=true",
                caption: "Collect the green pickup to push the walls that are closing in!"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-2.png?raw=true",
                caption: "Collect the blue pickup to slow down time (and the music)!"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-3.png?raw=true",
                caption: "It's easiest to collect the pickups if you sync up with the music!"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-4.png?raw=true",
                caption: "Game over screen."
              }
            ],
            tags: ["L1", "T0", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/code-bumpin"
              },
              {
                title: "itch.io (Play now!)",
                url: "https://jurcaua.itch.io/code-bumpin"
              }
            ],
            video: "https://www.youtube.com/watch?v=Yfn3moFHb3s&feature=youtu.be"
          },
          {
            name: "Game Nani",
            shortDescription:
              "Drag-and-drop analytics developer tool for Unity3D, seamlessly reporting player behaviour.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot3.jpg?raw=true",
            tags: ["L1", "T0", "T6", "T9", "O1", "O4", "O5"],
            links: [
              {
                title: "GitHub (Tool)",
                url: "https://github.com/jurcaua/GameNaniGrapher"
              },
              {
                title: "GitHub (Game)",
                url: "https://github.com/jurcaua/GameNani"
              },
              {
                title: "DevPost",
                url: "https://devpost.com/software/thacks2"
              }
            ]
          },
          {
            name: "Space Shooter",
            shortDescription:
              "Modified version of a Unity tutorial, adding custom firing mechanics for aimed shooting.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/Space%20Shooter/Screenshot_20170110-221144-cropped.png?raw=true",
            tags: ["L1", "T0", "T6", "T9", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/SpaceShooter-Android"
              }
            ],
            video: "https://www.youtube.com/watch?v=yUQojrvAw1k"
          },
          {
            name: "Airplane Simulator",
            shortDescription:
              "Completely hand-made physics based airplane simulator coded in Java.",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/AirplaneSim/2019-12-30%2021_50_28-Settings.png?raw=true",
            tags: ["L5", "O2"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/airplaneSimulator"
              }
            ]
          }
        ]
      },
      interests: {
        label: "Interests",
        tooltip: "Things I like.",
        header: "Welcome to my world!",
        subheader: "I also do a couple more things outside of work!",
        clickPrompt: "Click one of my interests!",
        content: [
          {
            summary: "Japanese",
            details: (
              <React.Fragment>
                <Typography variant="h5">
                  I have been learning Japanese for about{" "}
                  {<b>{getTimeLearningJapaneseString("en")}</b>}. I currently hold a{" "}
                  {<b>JLPT N{JLPT_LEVEL_CURRENTLY_HAVE}</b>} certification I received Dec. 2017 and
                  am awaiting my results for the <b>N{JLPT_LEVEL_GOING_FOR}</b> level test I took
                  this past December.
                </Typography>
                <br />
                <Typography variant="h5">
                  I can have a casual or simple business level conversation with few issues, and can
                  keep up with native speaking patterns and colloquial speech.
                </Typography>
              </React.Fragment>
            ),
            icon: "translate"
          },
          {
            summary: "Gaming",
            details: (
              <Typography variant="h5">
                <b>My love for programming came from games!</b> I started out playing Flash and
                CD-ROM games as kid, moving on to classic games like Pokemon, Spyro, and my all-time
                favourite video game series, Kingdom Hearts! Now I enjoy making games as much as I
                enjoy playing them (something my kid-self would've never believed)!
              </Typography>
            ),
            icon: "videogame_asset"
          },
          {
            summary: "Basketball",
            details: (
              <Typography variant="h5">
                I played basketball at a <b>competitive level</b> for majority of my life, leading
                up to university. Playing on countless teams and in countless leagues, and being
                trained by veterans in the game -- it built a certain <u>hardwork</u> and{" "}
                <u>team-centered</u> mindset that sticks with me to this day.
              </Typography>
            ),
            icon: "fitness_center"
          },
          {
            summary: "Coffee",
            details: (
              <React.Fragment>
                <Typography variant="h5">
                  I absolutely <i>ADORE</i> a good cup of {<Emoji symbol="☕" />}. While I rarely
                  feel the effects of caffeine, I stick with it for the taste! I believe a nice cup
                  of black coffee is the best thing to sip on while programming.
                </Typography>
              </React.Fragment>
            ),
            icon: "free_breakfast"
          }
        ]
      }
    }
  },
  jp: {
    nameFirst: "ジュルコ",
    nameSeperator: "・",
    nameLast: "アレックス",
    greeting: "こんにちは！アレックスです。",
    openResume: "履歴書",
    copyButtonTooltip: "コーピする",
    copyConfirmNotification: "コーピした!",
    changeLanguage: "Change the language to English! (英語)",
    tabs: {
      me: {
        label: "私について",
        tooltip: "資格概要",
        summary: [
          <Typography variant="h5">
            現在、<b>トロント大学</b>に通っている{getYearsAgo(BIRTHDAY)}
            歳の四年生です。
            コンピューターサイエンスのアルゴリズムやシステムデザインやゲームデザインを中心に学んでいます。
          </Typography>,
          <Typography variant="h5">
            <b>Ubisoft</b>というゲーム会社のツールチームで15ヶ月のインターンシップをしていました。
            私の専門は以下のとおりです。
          </Typography>
        ],
        currentExperiences: [
          {
            primary:
              "Leading development on a company-wide service-consolidating meeting productivity tool",
            secondary: "Python, C#",
            icon: "code"
          },
          {
            primary: "Maintaining our automated integration-testing pipeline",
            secondary: "C++",
            icon: "code"
          },
          {
            primary: "Developing an online service management web tool",
            secondary: "React / Redux, Python, C++",
            icon: "code"
          },
          {
            primary: "Resolving Sony TRC onlines / ui issues",
            secondary: "C++",
            icon: "code"
          }
        ],
        otherExperiencesHeader: (
          <Typography variant="h5">業界に関連する経験は以下のとおりです。</Typography>
        ),
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
            primary: "Teaching video game design to at-risk youth, following a game to completion",
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
      projects: {
        label: "プロジェクト",
        tooltip: "最高の作ったプロジェクト",
        displaying: num => <b>{num}件が表示されている</b>,
        dialog: {
          linksTitle: "関連リンク"
        },
        content: [
          {
            name: "フィッシャー大将",
            shortDescription: "釣り竿一本で釣り人と戦って、お山の大将ゲームを勝ち抜こう！",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/artwork1.png?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot2.png?raw=true",
                caption: "和やかな船で始まろう！"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot3.png?raw=true",
                caption: "雲行きが怪しい。。。"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot1.png?raw=true",
                caption: "最後の氷山のステージには、すごく楽しい高さと危険な周りの海がありますよ！"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot5.png?raw=true",
                caption: "メインメニュー。"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/FishermanFoes/screenshot4.png?raw=true",
                caption: "操作の設定のメニュー。"
              }
            ],
            tags: ["L1", "T0", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/TOJAM13"
              },
              {
                title: "itch.io (プレイ出来る！)",
                url: "https://jurcaua.itch.io/fisherman-foes"
              }
            ]
          },
          {
            name: "Event Listeners",
            shortDescription:
              "トロント大学の部活を養うWebアプリケーション。満点を取った大学のプロジェクト。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/dashboard-logged-in.png?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/create-post.gif?raw=true",
                caption: "イベントの作り方。"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/search-clubs.png?raw=true",
                caption: "サークル検索ページ。"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/create-club.gif?raw=true",
                caption: "ユーザーの作り方。"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/featured-clubs.gif?raw=true",
                caption: "ホームページでのサークル。"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/user-profile.gif?raw=true",
                caption: "ユーザーのプロファイル。"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/EventListeners/club-profile.gif?raw=true",
                caption: "サークルのプロファイル"
              }
            ],
            tags: ["L3", "L4", "T2", "T3", "T4", "T5", "T9", "T13", "O2", "O6"],
            links: [
              {
                title: "Website",
                url: "https://event-listeners.herokuapp.com/"
              }
            ]
          },
          {
            name: "ホグラたたき",
            shortDescription: "本物のレインボーホログラムのARゲーム。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/HoloMole/screenshot1.png?raw=true",
            tags: ["L1", "T0", "T6", "T9", "O0", "O2", "O3", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/Hologram-Whack-A-Mole"
              }
            ],
            video: "https://www.youtube.com/watch?v=XwkHZDINBOI"
          },
          {
            name: "グーグルスパイ",
            shortDescription:
              "Googleアシスタントを使って音声だけでゲームのキャラクターを操作が出来る。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/GoogleSpy/screenshot1.PNG?raw=true",
            tags: ["L1", "L3", "T0", "T6", "T9", "T11", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/GoogleSpy"
              },
              {
                title: "Devpost",
                url: "https://devpost.com/software/googlespy"
              }
            ]
          },
          {
            name: "Kleptomanihat",
            shortDescription:
              "終身刑に処せられた窃盗協が魔力的に出獄された。彼をコントロールして、冒険しながら様々な帽子を集めよう！",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/Kleptomanihat/main-menu-cropped.png?raw=true",
            tags: ["L1", "T0", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/Kleptomanihat"
              },
              {
                title: "itch.io (Play now!)",
                url: "https://jurcaua.itch.io/kleptomanihat"
              }
            ]
          },
          {
            name: "TranslatAR",
            shortDescription: "画像認識によって、リアルタイム環境翻訳のARの携帯アプリケーション。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/devpost1.jpg?raw=true",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/translatAR-test-pic1.png?raw=true",
                caption: ""
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/translatAR-test-pic2.png?raw=true",
                caption: ""
              }
            ],
            tags: ["L1", "T0", "T6", "O1", "O3"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/TranslatAR"
              },
              {
                title: "Devpost",
                url: "https://devpost.com/software/translatar-ha36kr"
              }
            ],
            video: "https://youtu.be/GyIVdzyi8pY"
          },
          {
            name: "Snake Dimensions",
            shortDescription: "Unityで作られたアンドロイド向けの3Dのヘビゲーム。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/raw/master/Snake%20DIMENSIONS/Screenshot_20170102-123935.png",
            tags: ["L1", "T0", "T6", "T9", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/Snake-Dimensions"
              },
              {
                title: "Google Play",
                url: "https://play.google.com/store/apps/details?id=com.jurk.co.snakedimensions"
              },
              {
                title: "itch.io (プレイ出来る！)",
                url: "https://jurcaua.itch.io/snake-dimensions"
              }
            ],
            video: "https://www.youtube.com/watch?v=X5Rv26UH0jo"
          },
          {
            name: "Re-Lec",
            shortDescription:
              "トーケンを稼ぐため、学生が講義を録画してアップロード出来る携帯とWebアプリケーション。それから、トーケンを払うと、他のアップロードした講義も観ることになります。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/Re-Lec/logo_relec.png?raw=true",
            tags: ["L1", "L3", "L4", "T0", "T3", "T6", "T9", "O2", "O6"]
          },
          {
            name: "Code Bumpin'",
            shortDescription: "音楽の視覚化をもとにした3Dプラットフォーム・ゲーム。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/raw/master/Code%20Bumpin'/code-bumpin-v3%202017-01-23%2019-51-19-10.bmp",
            images: [
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-1.png?raw=true",
                caption: "緑のピックアップを集めると、だんだん近づかれている壁を押し戻すよ！"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-2.png?raw=true",
                caption: "青いピックアップを集めると、時間と音楽が遅くなるよ！"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-3.png?raw=true",
                caption: "音楽に合わせると、簡単に集められるよ！"
              },
              {
                imgPath:
                  "https://github.com/jurcaua/github_image_hosting/blob/master/Code%20Bumpin'/game-4.png?raw=true",
                caption: "ゲームオーバー。"
              }
            ],
            tags: ["L1", "T0", "T6", "T9", "O1", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/code-bumpin"
              },
              {
                title: "itch.io (Play now!)",
                url: "https://jurcaua.itch.io/code-bumpin"
              }
            ],
            video: "https://www.youtube.com/watch?v=Yfn3moFHb3s&feature=youtu.be"
          },
          {
            name: "Game Nani",
            shortDescription:
              "3DのUnityのゲームのユーザー行動を分析するドラッグ＆ドロップのツール。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/GameNani/screenshot3.jpg?raw=true",
            tags: ["L1", "T0", "T6", "T9", "O1", "O4", "O5"],
            links: [
              {
                title: "GitHub（ツール）",
                url: "https://github.com/jurcaua/GameNaniGrapher"
              },
              {
                title: "GitHub（ゲーム）",
                url: "https://github.com/jurcaua/GameNani"
              },
              {
                title: "DevPost",
                url: "https://devpost.com/software/thacks2"
              }
            ]
          },
          {
            name: "Space Shooter",
            shortDescription: "良く狙える射撃を修正したUnityチュートリアルのゲーム。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/Space%20Shooter/Screenshot_20170110-221144-cropped.png?raw=true",
            tags: ["L1", "T0", "T6", "T9", "O4"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/SpaceShooter-Android"
              }
            ],
            video: "https://www.youtube.com/watch?v=yUQojrvAw1k"
          },
          {
            name: "Airplane Simulator",
            shortDescription:
              "高等学校の時に作った物理的なフライトシミュレータ。Javaで作られたアプリケーション。",
            mainImage:
              "https://github.com/jurcaua/github_image_hosting/blob/master/AirplaneSim/2019-12-30%2021_50_28-Settings.png?raw=true",
            tags: ["L5", "O2"],
            links: [
              {
                title: "GitHub",
                url: "https://github.com/jurcaua/airplaneSimulator"
              }
            ]
          }
        ]
      },
      interests: {
        label: "興味",
        tooltip: "好きなこと",
        header: "私の世界へ、ようこそ！",
        subheader: "プライベートの私を紹介します！",
        clickPrompt: "私の興味にクリックしてください！",
        content: [
          {
            summary: "日本語",
            details: (
              <React.Fragment>
                <Typography variant="h5">
                  私は{<b>{getTimeLearningJapaneseString("jp")}</b>}
                  日本語を勉強しています。 2017年の12月に
                  <b>日本語能力試験の{JLPT_LEVEL_CURRENTLY_HAVE}級</b>に合格し、今年の年末に
                  <b>{JLPT_LEVEL_GOING_FOR}級</b>
                  に挑戦しました（結果未定）。
                </Typography>
                <br />
                <Typography variant="h5">
                  上級ビジネスレベルではなければ、問題なく日本語でコミュニケーションをとることが出来ます。
                </Typography>
              </React.Fragment>
            ),
            icon: "translate"
          },
          {
            summary: "ゲーム",
            details: (
              <Typography variant="h5">
                <b>ゲームが大好きなため、プログラミングをしようと思いました。</b>
                幼い頃、フラッシュゲームやCD-ROMが大好きだったので、
                その頃からキングダムハーツを始め、ポケモン、スパイロ・ザ・ドラゴン等をしました。
                現在はゲームをする事はゲームを作るのと同程度好きな事です。
                (昔の自分だったら、その事を信じる事は出来ないかもしれません。)
              </Typography>
            ),
            icon: "videogame_asset"
          },
          {
            summary: "バスケットボール",
            details: (
              <Typography variant="h5">
                人生のほとんど、大学までを<b>競技バスケットボール</b>に費やしました。
                優れた選手に指導をされつつ、数々のチームに所属していました。 未だにその時に習った
                <u>頑張り</u>や<u>チームワーク</u>を優先する考え方が残っています。
              </Typography>
              /* Formal version:
              私は大学までの人生の大半、競技バスケットボールをしていました。(をして過ごしました。)
              下のチームやリーグで試合をし、試合の中で優れた選手に訓練されてきました。
              それらが確かな努力とチームワークを優先する思考を形成し、今日(こんにち)まで私の信念です。
              */
            ),
            icon: "fitness_center"
          },
          {
            summary: "コーヒー",
            details: (
              <React.Fragment>
                <Typography variant="h5">
                  (翻訳確認中) <br />
                  よくした{<Emoji symbol="☕" />}
                  が大好きです。いれたてのコーヒーの味は最高ですけれども、カフェインの効果があまり感じないんです。
                  プログラミングする時にはよく集中するため、コーヒーは私の一番好きな飲み物です。
                </Typography>
              </React.Fragment>
            ),
            icon: "free_breakfast"
          }
        ]
      }
    }
  }
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

export function localizedProjectTag(tag) {
  return projectTagMappings[currentLanguage][tag];
}

// *Sigh* This is basically a super overcomplicated function that takes in a language and will give you
// a nicely formatted string that is the amount of time ive been studying Japanese
// To make it more general I had to do some ugly stuff like define what a SPACE was because, whoops cant have spaces with Japanese!!
// Anyways I hope no one sees this but if so, welcome to my masterpiece.
export function getTimeLearningJapaneseString(lang) {
  let years = getYearsAgo(JAPANESE_STARTED_LEARNING);
  let months = getMonthsAgo(JAPANESE_STARTED_LEARNING) - years * 12;
  if (months >= 12) {
    years += 1;
    months -= 12;
  }

  const { space } = basicStrings[lang].time;

  let yearsString = `${years}${space}${
    years === 1 ? basicStrings[lang].time.year : basicStrings[lang].time.years
  }`;
  let monthsString = "";
  if (months > 0) {
    months = `${space}${basicStrings[lang].time.connector}${space}${months}${space}${
      months === 1 ? basicStrings[lang].time.month : basicStrings[lang].time.months
    }`;
  }
  return `${yearsString}${monthsString}`;
}
