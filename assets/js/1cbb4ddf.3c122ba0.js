"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5539],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,y=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3369:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_label:"FAQ",sidebar_position:1.2},l="Frequently Asked Questions",p={unversionedId:"BedWars1058/faq",id:"BedWars1058/faq",title:"Frequently Asked Questions",description:"How do I edit an existing arena?",source:"@site/docs/BedWars1058/faq.md",sourceDirName:"BedWars1058",slug:"/BedWars1058/faq",permalink:"/docs/BedWars1058/faq",editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/faq.md",tags:[],version:"current",sidebarPosition:1.2,frontMatter:{sidebar_label:"FAQ",sidebar_position:1.2},sidebar:"bw1058",previous:{title:"Features",permalink:"/docs/BedWars1058/features"},next:{title:"Compatability",permalink:"/docs/BedWars1058/compatibility"}},d=[{value:"How do I edit an existing arena?",id:"how-do-i-edit-an-existing-arena",children:[],level:3},{value:"Why shop/ upgrades NPCs aren&#39;t spawning?",id:"why-shop-upgrades-npcs-arent-spawning",children:[],level:3},{value:"I can&#39;t place blocks, why?",id:"i-cant-place-blocks-why",children:[],level:3},{value:"Why can&#39;t I pvp?",id:"why-cant-i-pvp",children:[],level:3},{value:"My arenas don&#39;t reset, why?",id:"my-arenas-dont-reset-why",children:[],level:3},{value:"Why are my holograms broken?",id:"why-are-my-holograms-broken",children:[],level:3},{value:"Discord",id:"discord",children:[],level:3}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,i.kt)("h3",{id:"how-do-i-edit-an-existing-arena"},"How do I edit an existing arena?"),(0,i.kt)("p",null,"Just do ",(0,i.kt)("inlineCode",{parentName:"p"},"/bw setupArena <name>")," and you'll be able to change settings without loosing existing data."),(0,i.kt)("h3",{id:"why-shop-upgrades-npcs-arent-spawning"},"Why shop/ upgrades NPCs aren't spawning?"),(0,i.kt)("p",null,"Make sure you have ",(0,i.kt)("inlineCode",{parentName:"p"},"spawn-npcs")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"server.properties"),". Also if you have ",(0,i.kt)("inlineCode",{parentName:"p"},"WorldGuard")," plugin, please remove any regions from BedWars arenas."),(0,i.kt)("h3",{id:"i-cant-place-blocks-why"},"I can't place blocks, why?"),(0,i.kt)("p",null,"If you are not able to place blocks in some places, make sure it's not a BedWars rule. If it is normal not to be able to break, you will receive a message. In other cases you might have ",(0,i.kt)("inlineCode",{parentName:"p"},"spawn-protection")," activated and it won't allow you to build at the map's spawn. In this case, please set ",(0,i.kt)("inlineCode",{parentName:"p"},"spawn-protection")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"server.properties"),". If this didn't work, please make sure you didn't set the BedWars ",(0,i.kt)("strong",{parentName:"p"},"main lobby")," in the arena world, because it will prevent players from doing pvp, build etc.."),(0,i.kt)("h3",{id:"why-cant-i-pvp"},"Why can't I pvp?"),(0,i.kt)("p",null,"Please make sure you didn't set the BedWars ",(0,i.kt)("strong",{parentName:"p"},"main lobby")," in the arena world, because it will prevent players from doing pvp, build etc. Also if you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiVerse")," Plugin, make sure not to have the ",(0,i.kt)("inlineCode",{parentName:"p"},"pvp")," flag disabled, same thing if you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"WorldGuard")," Plugin (it would be better if you remove any regions from BedWars arenas). If you don't have those plugins of if it didn't worked, set ",(0,i.kt)("inlineCode",{parentName:"p"},"difficulty")," higher than ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"server.properties")," if you didn't yet!"),(0,i.kt)("h3",{id:"my-arenas-dont-reset-why"},"My arenas don't reset, why?"),(0,i.kt)("p",null,"Read about this ",(0,i.kt)("a",{parentName:"p",href:"setup/creating-arenas#map-resetting-system"},"here")),(0,i.kt)("h3",{id:"why-are-my-holograms-broken"},"Why are my holograms broken?"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/IYzHdK6.jpg?1",alt:"img"}),"\nThis is a client-side issue and it happens on modified clients (usually on 1.8.x)."),(0,i.kt)("h3",{id:"discord"},"Discord"),(0,i.kt)("p",null,"Couldn't find an answer? Join my ",(0,i.kt)("a",{href:"https://discord.gg/XdJfN2X"},(0,i.kt)("img",{src:"https://discordapp.com/api/guilds/201345265821679617/widget.png"}))))}c.isMDXComponent=!0}}]);