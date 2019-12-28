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
    copyConfirmNotification: "Copied to clipboard!",
    tabs: {
      me: {
        label: "Me",
        tooltip: "Qualification overview.",
        summary: [
          <Typography style={styles.paragraph}>
            Currently {getYearsAgo(BIRTHDAY)} years old, and a fourth year student at the{" "}
            <b>University of Toronto</b> -- studying Computer Science with focuses in Algorithms,
            System Design, and Game Design.
          </Typography>,
          <Typography style={styles.paragraph}>
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
          <Typography style={styles.paragraph}>
            Other related experience in the industry includes:
          </Typography>
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
        content: [
          {
            name: "Holo-Mole",
            shortDescription:
              "Augmented reality game on a physical rainbow hologram, built in Unity.",
            image:
              "https://github.com/jurcaua/github_image_hosting/blob/master/HoloMole/yt1.jpg?raw=true",
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
            image:
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
            name: "TranslatAR",
            shortDescription:
              "Real-time Augmented Reality translation app with image recognition in Unity.",
            image:
              "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/devpost1.jpg?raw=true",
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
                <Typography style={styles.paragraph}>
                  I have been learning Japanese for about{" "}
                  {<b>{getTimeLearningJapaneseString("en")}</b>}. I currently hold a{" "}
                  {<b>JLPT N{JLPT_LEVEL_CURRENTLY_HAVE}</b>} certification I received Dec. 2017 and
                  am awaiting my results for the <b>N{JLPT_LEVEL_GOING_FOR}</b> level test I took
                  this past December.
                </Typography>
                <br />
                <Typography style={styles.paragraph}>
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
              <Typography style={styles.paragraph}>
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
              <Typography style={styles.paragraph}>
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
                <Typography style={styles.paragraph}>
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
    copyConfirmNotification: "コーピした!",
    tabs: {
      me: {
        label: "私について",
        tooltip: "資格概要",
        summary: [
          <Typography style={styles.paragraph}>
            現在、<b>トロント大学</b>に通っている{getYearsAgo(BIRTHDAY)}
            歳の四年生です。
            コンピューターサイエンスのアルゴリズムやシステムデザインやゲームデザインを中心に学んでいます。
          </Typography>,
          <Typography style={styles.paragraph}>
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
          <Typography style={styles.paragraph}>業界に関連する経験は以下のとおりです。</Typography>
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
        content: [
          {
            name: "ホグラたたき",
            shortDescription: "本物のレインボーホログラムのARゲーム。",
            image:
              "https://github.com/jurcaua/github_image_hosting/blob/master/HoloMole/yt1.jpg?raw=true",
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
            image:
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
            name: "TranslatAR",
            shortDescription: "画像認識によって、リアルタイム環境翻訳のARの携帯アプリケーション。",
            image:
              "https://github.com/jurcaua/github_image_hosting/blob/master/TranslatAR/devpost1.jpg?raw=true",
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
                <Typography style={styles.paragraph}>
                  私は{<b>{getTimeLearningJapaneseString("jp")}</b>}
                  日本語を勉強しています。 2017年の12月に
                  <b>日本語能力試験の{JLPT_LEVEL_CURRENTLY_HAVE}級</b>に合格し、今年の年末に
                  <b>{JLPT_LEVEL_GOING_FOR}級</b>
                  に挑戦しました（結果未定）。
                </Typography>
                <br />
                <Typography style={styles.paragraph}>
                  上級ビジネスレベルではなければ、問題なく日本語でコミュニケーションをとることが出来ます。
                </Typography>
              </React.Fragment>
            ),
            icon: "translate"
          },
          {
            summary: "ゲーム",
            details: (
              <Typography style={styles.paragraph}>
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
              <Typography style={styles.paragraph}>
                (翻訳確認中) <br />
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
                <Typography style={styles.paragraph}>
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
