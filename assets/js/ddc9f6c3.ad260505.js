"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1328],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},274:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={sidebar_label:"Language Config",title:"Language Configuration",sidebar_position:3.99},s=void 0,u={unversionedId:"BedWars1058/configuration/language-configuration",id:"BedWars1058/configuration/language-configuration",title:"Language Configuration",description:"Creating custom scoreboards",source:"@site/docs/BedWars1058/configuration/language-configuration.md",sourceDirName:"BedWars1058/configuration",slug:"/BedWars1058/configuration/language-configuration",permalink:"/docs/BedWars1058/configuration/language-configuration",editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/configuration/language-configuration.md",tags:[],version:"current",sidebarPosition:3.99,frontMatter:{sidebar_label:"Language Config",title:"Language Configuration",sidebar_position:3.99},sidebar:"bw1058",previous:{title:"Upgrades Config",permalink:"/docs/BedWars1058/configuration/upgrades"},next:{title:"SlimeWorldManager Support",permalink:"/docs/BedWars1058/hooks/swm-hook"}},p=[{value:"Creating custom scoreboards",id:"creating-custom-scoreboards",children:[],level:3},{value:"Scoreboard placeholders",id:"scoreboard-placeholders",children:[{value:"Team placeholers:",id:"team-placeholers",children:[{value:"AKA &quot;PLACEHOLDERS NOT WORKING&quot;",id:"aka-placeholders-not-working",children:[],level:5},{value:"Global placeholders:",id:"global-placeholders",children:[],level:5},{value:"In Game placeholders:",id:"in-game-placeholders",children:[],level:5}],level:4}],level:3},{value:"Animations and timers",id:"animations-and-timers",children:[],level:3},{value:"Custom title/ sub-title for arena countdown",id:"custom-title-sub-title-for-arena-countdown",children:[],level:2}],m={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"creating-custom-scoreboards"},"Creating custom scoreboards"),(0,i.kt)("p",null,"You can create custom scoreboards per ",(0,i.kt)("a",{parentName:"p",href:"arena-groups"},"Arena Groups"),". So, let's suppose you have an arena group called ",(0,i.kt)("inlineCode",{parentName:"p"},"4v4v4v4"),", then you can create a custom scoreboard for the arenas using this arena group. You can edit the scoreboard for each arena state (waiting, starting, playing). So let's suppose you want to have a custom playing scoreboard. Just go in the language file, under the ",(0,i.kt)("inlineCode",{parentName:"p"},"scoreboard")," section and add yur arena group name and under it, the arena status name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'scoreboard:\n  4v4v4v4:\n    playing:\n    - "&f&lBED WARS"\n    - "&7{date}"\n    - ""\n    - "{TeamRedColor}&lB&f {TeamRedName}&f: {TeamRedStatus}"\n    - "{TeamBlueColor}&lB&f {TeamBlueName}&f: {TeamBlueStatus}"\n    - "{TeamGreenColor}&lG&f {TeamGreenName}&f: {TeamGreenStatus}"\n    - "{TeamYellowColor}&lY &f{TeamYellowName}&f: {TeamYellowStatus}"\n    - ""\n    - "&6{server_ip}"\n')),(0,i.kt)("h3",{id:"scoreboard-placeholders"},"Scoreboard placeholders"),(0,i.kt)("h4",{id:"team-placeholers"},"Team placeholers:"),(0,i.kt)("h5",{id:"aka-placeholders-not-working"},'AKA "PLACEHOLDERS NOT WORKING"'),(0,i.kt)("p",null,"Using team placeholders is easy. Let's suppose that you have a team called ",(0,i.kt)("inlineCode",{parentName:"p"},"Bread"),", then your team's placeholders are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{TeamBreadColor}")," - shows the team color."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{TeamBreadName}")," - shows the team name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{TeamBreadStatus}")," - shows the team status. (alive, dead etc.)")),(0,i.kt)("p",null,"A easier alternative is using ",(0,i.kt)("inlineCode",{parentName:"p"},"{team}")," placeholder which will take the team format from the message at path: ",(0,i.kt)("inlineCode",{parentName:"p"},"format-sb-team-generic")," (by default {TeamColor}{TeamLetter}&f {TeamName}: {TeamStatus}). This placeholder can be used in multiple lines and it will iterate the team list of the arena and will asign it a team. When the placeholder is used more than team list size the scoreboard line with {team} in it will be skipped."),(0,i.kt)("h5",{id:"global-placeholders"},"Global placeholders:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{date}")," - shows the date with the player's date format taken from his language file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{level}")," - shows the player level. This won't auto-refresh."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{currentXp}")," - shows the player's current xp. This won't auto-refresh."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{requiredXp}")," - shows the required xp to rankup. This won't auto-refresh."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{progress}")," - shows the progress bar. This won't auto-refresh."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{losses}")," - shows the player's losses. This won't auto-refresh."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{kills}")," - shows the player's total kills (when not used in game). Won't auto-refresh."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{player}")," - shows the player name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{deaths}")," - shows the player's total deaths (when not used in game). Won't auto-refresh."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{coins}")," - shows the player's money (Vault)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{finalKills}")," - show player's total final kills (when not used in game). Won't auto-refresh."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{finalDeaths}")," - show player's total final deaths (when not used in game). Won't auto-refresh."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{bedsDestroyed}")," - show total beds destroyed by player (when not used in game. Won't auto-refresh."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{wins}")," - show the number of games won by player."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{on}")," - show the number of players on the server (when not used in game)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{server_ip}")," - shows the server IP taken from config.yml."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{server}")," - shows the server MOTD from server.properties"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{version}")," - shows the plugin version.")),(0,i.kt)("h5",{id:"in-game-placeholders"},"In Game placeholders:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{deaths}")," - shows the player's deaths in current game (when used in game)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{kills}")," - shows the player's kills in current game (when used in game)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{deaths}")," - shows the player's deaths in current game (when used in game)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{finalKills}")," - show player's final kills in current game (when used in game)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{beds}")," - show beds destroyed by player in current game (when used in game)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{on}")," - show the number of players in current game (when used in game)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{map}")," - shows the map name of the current arena."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{max}")," - shows the slots of the current arena."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{time}")," - shows the time remaining before the arena starts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{nextEvent}")," - shows the Next Event of the game (Generator upgrades, Beds destroy etc.)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{time}")," - shows the time when the Next Event will happen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{group}")," - shows the arena group in the waiting lobby."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{map_name}")," - the map you're playing on (for arena display name use {map}).")),(0,i.kt)("h3",{id:"animations-and-timers"},"Animations and timers"),(0,i.kt)("p",null,"For more configuration options check the ",(0,i.kt)("a",{parentName:"p",href:"main-configuration"},"config.yml")," wiki."),(0,i.kt)("h2",{id:"custom-title-sub-title-for-arena-countdown"},"Custom title/ sub-title for arena countdown"),(0,i.kt)("p",null,"You can add a custom title for certain second by adding this to the language file ",(0,i.kt)("inlineCode",{parentName:"p"},"arena-start-countdown-title-[second]")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"[second]")," can be 4 etc. For adding a custom subTitle use this path: ",(0,i.kt)("inlineCode",{parentName:"p"},"arena-start-countdown-subtitle-[second]"),". Available placeholder: ",(0,i.kt)("inlineCode",{parentName:"p"},"{second}"),"."),(0,i.kt)("p",null,"Countdown titles and subtitles are shown when the current second is ",(0,i.kt)("inlineCode",{parentName:"p"},"currentSecond % 10 == 0 || currentSecond <= 5"),"."))}d.isMDXComponent=!0}}]);