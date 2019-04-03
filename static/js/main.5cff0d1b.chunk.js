(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{195:function(e,t,a){e.exports=a(345)},200:function(e,t,a){},345:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),l=a.n(i),o=(a(200),a(28)),c=a(29),s=a(32),m=a(30),p=a(33),d=a(127),u=a(18),g=a.n(u),h=a(43),f=a.n(h),y=a(59),E=a.n(y),b=a(31),v=a.n(b),x=a(15),w=new Date(1997,8,25),C=a(125),O=new(a.n(C).a)({en:{nameFirst:"Alexander",nameSeperator:" ",nameLast:"Jurcau",tabs:{me:{label:"Me",tooltip:"Qualification overview."},projects:{label:"Projects",tooltip:"Notable projects and experience."},interests:{label:"Interests",tooltip:"Things I like."}},copyConfirmNotification:"Copied to clipboard!",currentExperiences:[{primary:"Leading development on a company-wide service-consolidating meeting productivity tool",secondary:"Python / C#",icon:"code"},{primary:"Maintaining our automated integration-testing pipeline",secondary:"C++",icon:"code"},{primary:"Developing an online service management web tool",secondary:"React / Redux",icon:"code"}],otherExperiences:[{primary:"Working for an augmented reality startup -- as a programmer and tech consultant",secondary:"Unity",icon:"videogame_asset",dialogTitle:"ARnocular - Augmented Reality Software Developer",dialogText:["Implemented a system that dynamically downloads AssetBundles and displays 3D models from a database, requesting and parsing CSV files","Developed an accurate linear regress system using GPS points to smoothly move between perceived user locations","Collaborated smoothly with Git version control; experience with Prod/QA/Dev pipeline, branching, merging, stashing, working with a remote repo"]},{primary:"Teaching video game design to at-risk youth, following a game to completion",secondary:"Construct 2",icon:"school",dialogTitle:"Youth Fusion - Game Design Program Coordinator",dialogText:["Taught for a local non-profit after-school program aimed to decreasing high school drop-out rates by teaching all aspects of video game development","Oversaw the development of 2 fully polished games, following a Prototyping/Alpha/Beta/Gold staging process","Verbally communicated complex game design concepts to children in simple and easy-to-understand ways"]},{primary:"Working as Systems Support doing data validation, and integration and regression testing",secondary:"SQL Server (TSQL)",icon:"table_chart",dialogTitle:"Inmar - Systems Support",dialogText:["Developed SSIS packages for data transfer between SQL Server databases and uploads/downloads from/to Excel files","Developed T-SQL scripts for comprehensive field level discrepancy reports","Created testing automation jobs for data integrity and consistency, including test case creation, execution and results logging"]}]},jp:{nameFirst:"\u30b8\u30e5\u30eb\u30b3",nameSeperator:"\u30fb",nameLast:"\u30a2\u30ec\u30c3\u30af\u30b9",tabs:{me:{label:"\u79c1\u306b\u3064\u3044\u3066",tooltip:"\u8cc7\u683c\u6982\u8981"},projects:{label:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",tooltip:"\u6700\u9ad8\u306e\u4f5c\u3063\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"},interests:{label:"\u8208\u5473",tooltip:"\u597d\u304d\u306a\u3053\u3068"}},copyConfirmNotification:"\u30b3\u30fc\u30d4\u3057\u305f!"}}),S={root:{marginLeft:"10%",marginRight:"10%"},header:{fontSize:"28px",textAlign:"center",align:"center"},paragraph:{fontSize:"22px"}},j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).calculateAge=function(){var e=Date.now()-w.getTime(),t=new Date(e);return Math.abs(t.getUTCFullYear()-1970)},a.getCurrentExperiences=function(){var e=O.currentExperiences;return r.a.createElement(x.g,null,e.map(function(e,t){return r.a.createElement(x.h,{key:t},r.a.createElement(x.i,null,r.a.createElement("i",{className:"material-icons"},e.icon)),r.a.createElement(x.j,{style:S.paragraph,primary:e.primary,secondary:e.secondary}))}))},a.handleOtherExperienceClick=function(e,t){a.setState({otherExperienceDialogOpen:!0,selectedOtherExperience:t})},a.handleOtherExperienceDialogClose=function(e){a.setState({otherExperienceDialogOpen:!1})},a.getOtherExperiences=function(){var e=O.otherExperiences;return r.a.createElement(x.g,null,e.map(function(e,t){return r.a.createElement(x.h,{key:t,button:!0,divider:!0,onClick:function(t){a.handleOtherExperienceClick(t,e)}},r.a.createElement(x.i,null,r.a.createElement("i",{className:"material-icons"},e.icon)),r.a.createElement(x.j,{style:S.paragraph,primary:e.primary,secondary:e.secondary}),r.a.createElement(x.i,null,r.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right")))}))},a.state={selectedOtherExperience:null,otherExperienceDialogOpen:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:S.root},r.a.createElement(g.a,{style:S.header},"Hello there! I'm Alex."),r.a.createElement(g.a,{style:S.paragraph},"Currently ",this.calculateAge()," years old, and a fourth year student at the ",r.a.createElement("b",null,"University of Toronto")," -- studying Computer Science with focuses in Algorithms, System Design, and Game Design."),r.a.createElement("br",null),r.a.createElement(g.a,{style:S.paragraph},"I am currently doing a 15 month internship at ",r.a.createElement("b",null,"Ubisoft Toronto")," ","where I work on the tools team. Responsible for a variety of things, my focuses lie in:"),this.getCurrentExperiences(),r.a.createElement(g.a,{style:S.paragraph},"Other related experience in the industry includes:"),r.a.createElement(x.g,null,this.getOtherExperiences()),this.state.selectedOtherExperience&&r.a.createElement(x.b,{open:this.state.otherExperienceDialogOpen,onClose:this.handleOtherExperienceDialogClose},r.a.createElement(x.e,null,this.state.selectedOtherExperience.dialogTitle,r.a.createElement(x.f,{onClick:this.handleOtherExperienceDialogClose,style:{position:"absolute",right:"10px",top:"10px"}},r.a.createElement("i",{className:"material-icons"},"close"))),r.a.createElement(x.c,null,this.state.selectedOtherExperience.dialogText.map(function(e){return r.a.createElement("div",{style:{display:"inline-flex",marginBottom:"10px"}},r.a.createElement("i",{className:"material-icons"},"arrow_right"),r.a.createElement(x.d,{style:{marginLeft:"10px",color:"#363738"}},e))}))))}}]),t}(n.Component),k=a(57),T=a.n(k),D=a(55),A=a.n(D),B=a(56),L=a.n(B),I=a(58),N=a.n(I),z=a(44),R={inline:{display:"inline-flex",align:"center"},text:{fontSize:"20px",textAlign:"center",marginTop:"10px",display:"inline-flex",align:"center"}},P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).emailRef=null,a.getCopyButton=function(){return document.queryCommandSupported("copy")?r.a.createElement(L.a,{position:"end"},r.a.createElement(A.a,{style:R.inline,onClick:a.copyToClipboard},r.a.createElement(T.a,{style:{fontSize:"20px"}},"file_copy"))):null},a.copyToClipboard=function(e){if(a.emailRef.select(),document.execCommand("copy"),e.target.focus(),!z.a.isActive(a.state.copyToastId)){var t=Object(z.a)(O.copyConfirmNotification,{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0});a.setState({copyToastId:t})}},a.state={copyToastId:null},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.text;return r.a.createElement("div",{align:"center"},r.a.createElement(N.a,{style:R.text,variant:"outlined",value:t,inputRef:function(t){return e.emailRef=t},InputProps:{endAdornment:this.getCopyButton(),style:{fontSize:15},readOnly:!0}}))}}]),t}(n.Component);a(332);z.a.configure();var _={root:{flexGrow:1,width:"100%"},appBar:{marginBottom:"20px"},title:{fontSize:"50px",textAlign:"center",marginTop:"10px"},footer:{fontSize:"20px",textAlign:"center",margin:"10px",align:"center"},svgButton:{position:"absolute",margin:"5px"}};function G(e){return(0,e.children)(Object(d.a)(e,["children"]))}var Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e,t){a.setState({currentTab:t})},a.changeLanguage=function(e,t){O.setLanguage(t),a.setState({})},a.state={currentTab:0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.currentTab;return r.a.createElement("div",{className:_.root},r.a.createElement(f.a,{position:"static",color:"default",style:_.appBar},"jp"!==O.getLanguage()&&r.a.createElement("div",{style:_.svgButton},r.a.createElement(x.a,{onClick:function(t){e.changeLanguage(t,"jp")}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"30",viewBox:"0 0 100 50"},r.a.createElement("rect",{fill:"#000",height:"50",width:"100"}),r.a.createElement("rect",{fill:"#fff",height:"46",width:"96",x:"2",y:"2"}),r.a.createElement("circle",{fill:"#bc002d",cx:"50",cy:"25",r:"12.5"})))),"en"!==O.getLanguage()&&r.a.createElement("div",{style:_.svgButton},r.a.createElement(x.a,{onClick:function(t){e.changeLanguage(t,"en")}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"30",viewBox:"0 0 9600 4800"},r.a.createElement("path",{fill:"#d52b1e",d:"m0 0h2400l99 99h4602l99-99h2400v4800h-2400l-99-99h-4602l-99 99H0z"}),r.a.createElement("path",{fill:"#fff",d:"m2400 0h4800v4800h-4800zm2490 4430-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"})))),r.a.createElement(g.a,{style:_.title,variant:"h2"},O.nameFirst,O.nameSeperator,O.nameLast),r.a.createElement(P,{text:"jurcaua@gmail.com"}),r.a.createElement(E.a,{value:t,onChange:this.handleChange,centered:!0},r.a.createElement(G,null,function(e){return r.a.createElement(x.k,{title:O.tabs.me.tooltip,placement:"bottom"},r.a.createElement("div",null,r.a.createElement(v.a,Object.assign({},e,{label:r.a.createElement("span",null,O.tabs.me.label),icon:r.a.createElement("i",{className:"material-icons"},"face")}))))}),r.a.createElement(G,null,function(e){return r.a.createElement(x.k,{title:O.tabs.projects.tooltip,placement:"bottom"},r.a.createElement("div",null,r.a.createElement(v.a,Object.assign({},e,{disabled:!0,label:r.a.createElement("span",null,O.tabs.projects.label),icon:r.a.createElement("i",{className:"material-icons"},"laptop_mac")}))))}),r.a.createElement(G,null,function(e){return r.a.createElement(x.k,{title:O.tabs.interests.tooltip,placement:"bottom"},r.a.createElement("div",null,r.a.createElement(v.a,Object.assign({},e,{disabled:!0,label:r.a.createElement("span",null,O.tabs.interests.label),icon:r.a.createElement("i",{className:"material-icons"},"favorite_border")}))))}))),0===t&&r.a.createElement(j,null),1===t&&r.a.createElement("div",null),2===t&&r.a.createElement("div",null),r.a.createElement(f.a,{position:"static",color:"default"},r.a.createElement(g.a,{style:_.footer},"\xa9 2019 Alexander Jurcau")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[195,1,2]]]);
//# sourceMappingURL=main.5cff0d1b.chunk.js.map