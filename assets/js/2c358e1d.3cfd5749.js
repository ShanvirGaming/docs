"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7434],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=c(t),p=o,E=f["".concat(u,".").concat(p)]||f[p]||l[p]||i;return t?r.createElement(E,a(a({ref:n},d),{},{components:t})):r.createElement(E,a({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2833:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_label:"Sounds Config",title:"Sounds Configuration",sidebar_position:3.8},u=void 0,c={unversionedId:"BedWars1058/configuration/sounds-configuration",id:"BedWars1058/configuration/sounds-configuration",title:"Sounds Configuration",description:"If you want to change those configuration values make sure you choose the right bukkit sounds for your server version.",source:"@site/docs/BedWars1058/configuration/sounds-configuration.md",sourceDirName:"BedWars1058/configuration",slug:"/BedWars1058/configuration/sounds-configuration",permalink:"/docs/BedWars1058/configuration/sounds-configuration",editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/configuration/sounds-configuration.md",tags:[],version:"current",sidebarPosition:3.8,frontMatter:{sidebar_label:"Sounds Config",title:"Sounds Configuration",sidebar_position:3.8},sidebar:"bw1058",previous:{title:"Levels Config",permalink:"/docs/BedWars1058/configuration/levels"},next:{title:"Upgrades Config",permalink:"/docs/BedWars1058/configuration/upgrades"}},d=[],l={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you want to change those configuration values make sure you choose the right bukkit sounds for your server version."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Invalid sounds or empty fields will be ignored.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../resources"},"List of sounds")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"game-end: ITEM_TRIDENT_THUNDER\nrejoin-denied: ENTITY_VILLAGER_NO\nrejoin-allowed: ENTITY_SLIME_JUMP\nspectate-denied: ENTITY_VILLAGER_NO\nspectate-allowed: ENTITY_SLIME_JUMP\njoin-denied: ENTITY_VILLAGER_NO\njoin-allowed: ENTITY_SLIME_JUMP\nspectator-gui-click: ENTITY_SLIME_JUMP\ngame-countdown-others: ENTITY_CHICKEN_EGG\ngame-countdown-s5: ENTITY_CHICKEN_EGG\ngame-countdown-s4: ENTITY_CHICKEN_EGG\ngame-countdown-s3: ENTITY_CHICKEN_EGG\ngame-countdown-s2: ENTITY_CHICKEN_EGG\ngame-countdown-s1: ENTITY_CHICKEN_EGG\ngame-countdown-start: BLOCK_SLIME_BLOCK_FALL\nbed-destroy: ENTITY_ENDER_DRAGON_GROWL\nshop-insufficient-money: ENTITY_VILLAGER_NO\nshop-bought: ENTITY_VILLAGER_YES\nnext-event:\n  beds-destroy: ENTITY_ENDER_DRAGON_GROWL\n  diamond-II: ENTITY_PLAYER_LEVELUP\n  diamond-III: ENTITY_PLAYER_LEVELUP\n  emerald-II: ENTITY_GHAST_WARN\n  emerald-III: ENTITY_GHAST_WARN\n  dragons-spawn: ENTITY_ENDER_DRAGON_FLAP\nplayer-re-spawn: BLOCK_SLIME_BLOCK_FALL\narena-selector-open: ENTITY_CHICKEN_EGG\nstats-gui-open: ENTITY_CHICKEN_EGG\ntrap-sound: ENTITY_ENDERMAN_TELEPORT\n")))}f.isMDXComponent=!0}}]);