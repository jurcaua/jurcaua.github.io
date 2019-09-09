import React from "react";
import { getYearsAgo, getMonthsAgo } from "./Utils";
import { BIRTHDAY, JAPANESE_STARTED_LEARNING, JLPT_LEVEL_GOING_FOR, JLPT_LEVEL_CURRENTLY_HAVE } from "./Info";
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

var currentLanguage = "en";

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
      year: "年",
      years: "年",
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
            Currently {getYearsAgo(BIRTHDAY)} years old, and a fourth year student at the <b>University of Toronto</b>{" "}
            -- studying Computer Science with focuses in Algorithms, System Design, and Game Design.
          </Typography>,
          <Typography style={styles.paragraph}>
            I worked for <b>Ubisoft Toronto</b> (Watch Dogs Legion) on the tools team for 15 months.
            Responsible for a variety of things, my focuses were:
          </Typography>
        ],
        currentExperiences: [
          {
            primary: "Leading development on a company-wide service-consolidating meeting productivity tool",
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
          <Typography style={styles.paragraph}>Other related experience in the industry includes:</Typography>
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
            primary: "Working as Systems Support doing data validation, and integration and regression testing",
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
        tooltip: "Notable projects and experience."
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
                  I have been learning Japanese for about {<b>{getTimeLearningJapaneseString("en")}</b>}. I currently
                  hold a {<b>JLPT N{JLPT_LEVEL_CURRENTLY_HAVE}</b>} certification I received Dec. 2017 and will be
                  attempting the <b>N{JLPT_LEVEL_GOING_FOR}</b> level this coming Dec. 2019.
                </Typography>
                <br />
                <Typography style={styles.paragraph}>
                  I can have a casual conversation with few issues, and can keep up with native speaking patterns and
                  colloquial speech.
                </Typography>
              </React.Fragment>
            ),
            icon: "translate"
          },
          {
            summary: "Gaming",
            details: (
              <Typography style={styles.paragraph}>
                <b>My love for programming came from games!</b> I started out playing Flash and CD-ROM games as kid,
                moving on to classic games like Pokemon, Spyro, and my all-time favourite video game series, Kingdom
                Hearts! Now I enjoy making games as much as I enjoy playing them (something my kid-self would've never
                believed)!
              </Typography>
            ),
            icon: "videogame_asset"
          },
          {
            summary: "Basketball",
            details: (
              <Typography style={styles.paragraph}>
                I played basketball at a <b>competitive level</b> for majority of my life, leading up to university.
                Playing on countless teams and in countless leagues, and being trained by veterans in the game -- it
                built a certain <u>hardwork</u> and <u>team-centered</u> mindset that sticks with me to this day.
              </Typography>
            ),
            icon: "fitness_center"
          },
          {
            summary: "Coffee",
            details: (
              <React.Fragment>
                <Typography style={styles.paragraph}>
                  I absolutely <i>ADORE</i> a good cup of {<Emoji symbol="☕" />}. While I rarely feel the effects of
                  caffeine, I stick with it for the taste! I believe a nice cup of black coffee is the best thing to sip on while programming.
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
            <b>Ubisoft</b>というゲーム会社のツールチームで15ヶ月のインターンシップをしていました。 私の専門は以下のとおりです。
          </Typography>
        ],
        currentExperiences: [
          {
            primary: "Leading development on a company-wide service-consolidating meeting productivity tool",
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
            primary: "Working for an augmented reality startup -- as a programmer and tech consultant",
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
            primary: "Working as Systems Support doing data validation, and integration and regression testing",
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
        tooltip: "最高の作ったプロジェクト"
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
                  に挑戦する予定です。
                </Typography>
                <br />
                <Typography style={styles.paragraph}>
                  ビジネスレベルではなければ、問題なく日本語でコミュニケーションをとることが出来ます。
                </Typography>
              </React.Fragment>
            ),
            icon: "translate"
          },
          {
            summary: "ゲーム",
            details: (
              <Typography style={styles.paragraph}>
                <b>My love for programming came from games!</b> I started out playing Flash and CD-ROM games as kid,
                moving on to classic games like Pokemon, Spyro, and my all-time favourite video game series, Kingdom
                Hearts! Now I enjoy making games as much as I enjoy playing them (something my kid-self would've never
                believed )!
              </Typography>
            ),
            icon: "videogame_asset"
          },
          {
            summary: "バスケットボール",
            details: (
              <Typography style={styles.paragraph}>
                I played basketball at a <b>competitive level</b> for majority of my life, leading up to university.
                Playing on countless teams and in countless leagues, and being trained by veterans in the game -- it
                built a certain <u>hardwork</u> and <u>team-centered</u> mindset that sticks with me to this day.
              </Typography>
            ),
            icon: "fitness_center"
          },
          {
            summary: "コーヒー",
            details: (
              <React.Fragment>
                <Typography style={styles.paragraph}>
                  よくした{<Emoji symbol="☕" />}
                  が大好きです。いれたてのコーヒーの味は最高ですけれども、カフェインの効果があまり感じないんです。プログラミングする時にはよく集中するため、コーヒーは私の一番好きな飲み物です。
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

  let yearsString = `${years}${space}${years === 1 ? basicStrings[lang].time.year : basicStrings[lang].time.years}`;
  let monthsString = "";
  if (months > 0) {
    months = `${space}${basicStrings[lang].time.connector}${space}${months}${space}${
      months === 1 ? basicStrings[lang].time.month : basicStrings[lang].time.months
      }`;
  }
  return `${yearsString}${monthsString}`;
}

/*
content: [
          { summary: "日本語", details: "" },
          {
            summary: "ゲーム",
            details: (
              <div>
                <Typography style={styles.paragraph}>
                  最初にゲームはネットでとかしていましたが、それからポケモンやSpyroや一番の好きなゲーム、キングダムハーツをしていました！Now
                  I enjoy making games as much as I enjoy playing
                  them　(something my kid-self would've never believed )!
                </Typography>
              </div>
            )
          },
          { summary: "バスケットボール", details: "" },
          { summary: "コーヒー", details: "" }
        ]


{
            summary: "日本語",
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
            summary: "ゲーム",
            details: (
              <Typography style={styles.paragraph}>
                <b>
                  プログラミングが好きということの理由は、子供頃にゲームはずっとをしていたんですから。{" "}
                </b>
                最初にゲームはネットでとかしていましたが、それからポケモンやSpyroや一番の好きなゲーム、キングダムハーツをしていました！
                Now I enjoy making games as much as I enjoy playing them
                (something my kid-self would've never believed )!
              </Typography>
            ),
            icon: "videogame_asset"
          }
*/
