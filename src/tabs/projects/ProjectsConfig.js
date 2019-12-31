// The grouping here is meant for filtering to them be already well-organized within their own groups of tags
export const groupedProjectTagMappings = {
  en: {
    language: {
      L0: "Python",
      L1: "C#",
      L2: "C++",
      L3: "Javascript",
      L4: "HTML/CSS",
      L5: "Java",
      L6: "T-SQL",
      L7: "Racket",
      L8: "Haskell",
      L9: "Dafny"
    },
    technology: {
      T0: "Unity",
      T1: "Unreal",
      T2: "React",
      T3: "Node",
      T4: "Mongo",
      T5: "Redux",
      T6: "Visual Studio",
      T7: "Qt",
      T8: "Perforce",
      T9: "Git",
      T10: "ELK",
      T11: "Firebase",
      T12: "Google Assistant",
      T13: "Material UI"
    },
    other: {
      O0: "Hologram",
      O1: "Game Jam / Hackathon",
      O2: "School Project",
      O3: "AR",
      O4: "Game",
      O5: "Tool",
      O6: "Web App"
    }
  },
  jp: {
    language: {
      L0: "Python",
      L1: "C#",
      L2: "C++",
      L3: "Javascript",
      L4: "HTML/CSS",
      L5: "Java",
      L6: "T-SQL",
      L7: "Racket",
      L8: "Haskell",
      L9: "Dafny"
    },
    technology: {
      T0: "Unity",
      T1: "Unreal",
      T2: "React",
      T3: "Node",
      T4: "Mongo",
      T5: "Redux",
      T6: "Visual Studio",
      T7: "Qt",
      T8: "Perforce",
      T9: "Git",
      T10: "ELK",
      T11: "Firebase",
      T12: "Google アシスタント",
      T13: "Material UI"
    },
    other: {
      O0: "ホログラム",
      O1: "ハッカソン",
      O2: "学校のプロジェクト",
      O3: "AR",
      O4: "ゲーム",
      O5: "ツール",
      O6: "Webアプリケーション"
    }
  }
};

var flattenObject = function(ob) {
  let toReturn = {};

  for (let i in ob) {
    if (!ob.hasOwnProperty(i)) continue;

    if (typeof ob[i] == "object") {
      let flatObject = flattenObject(ob[i]);
      for (let x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};

// This object is meant to just have all the mappings in a single object
export const projectTagMappings = {
  en: flattenObject(groupedProjectTagMappings.en),
  jp: flattenObject(groupedProjectTagMappings.jp)
};
