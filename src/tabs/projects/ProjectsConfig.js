export const ignoreGroups = ["hidden"];

// The grouping here is meant for filtering to them be already well-organized within their own groups of tags
export const groupedProjectTagMappings = {
  en: {
    hidden: {
      title: "Hidden",
      mappings: {
        "!0": "None"
      }
    },
    language: {
      title: "Language",
      mappings: {
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
      }
    },
    technology: {
      title: "Technology",
      mappings: {
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
      }
    },
    other: {
      title: "Other",
      mappings: {
        O0: "Hologram",
        O1: "Game Jam / Hackathon",
        O2: "School Project",
        O3: "AR",
        O4: "Game",
        O5: "Tool",
        O6: "Web App"
      }
    }
  },
  jp: {
    hidden: {
      title: "秘密",
      mappings: {
        "!0": "無"
      }
    },
    language: {
      title: "言語",
      mappings: {
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
      }
    },
    technology: {
      title: "テクノロジー",
      mappings: {
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
      }
    },
    other: {
      title: "雑多",
      mappings: {
        O0: "ホログラム",
        O1: "ハッカソン",
        O2: "学校のプロジェクト",
        O3: "AR",
        O4: "ゲーム",
        O5: "ツール",
        O6: "Webアプリケーション"
      }
    }
  }
};

const flattenGroupObject = root => {
  return Object.keys(root).reduce((obj, lang) => {
    // loop over languages
    // Obj will be the final object we return, which should be {en: {all flattened mappings}, jp: {all flattened mappings}}
    obj[lang] = Object.keys(root[lang]).reduce((langObj, groupKey) => {
      // loop over groupings
      // langObj will be the seperate en / jp as above
      Object.keys(root[lang][groupKey].mappings).forEach(key => {
        // loop over only mapping object
        // where for each mapping we set to the current language object directly the same key:value pair
        langObj[key] = root[lang][groupKey].mappings[key];
      });
      return langObj;
    }, {});
    return obj;
  }, {});
};

// This object is meant to just have all the mappings in a single object
export const projectTagMappings = flattenGroupObject(groupedProjectTagMappings);
