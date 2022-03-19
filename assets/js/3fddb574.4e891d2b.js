"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6401],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8756:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_label:"Shop Config",title:"Shop Configuration",sidebar_position:3.5},c=void 0,l={unversionedId:"BedWars1058/configuration/shop",id:"BedWars1058/configuration/shop",title:"Shop Configuration",description:"If you want different prices per arena group you should use a server as a single arena (BUNGEE serverType).",source:"@site/docs/BedWars1058/configuration/shop.md",sourceDirName:"BedWars1058/configuration",slug:"/BedWars1058/configuration/shop",permalink:"/docs/BedWars1058/configuration/shop",editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/configuration/shop.md",tags:[],version:"current",sidebarPosition:3.5,frontMatter:{sidebar_label:"Shop Config",title:"Shop Configuration",sidebar_position:3.5},sidebar:"bw1058",previous:{title:"Generators Config",permalink:"/docs/BedWars1058/configuration/generators-configuration"},next:{title:"Levels Config",permalink:"/docs/BedWars1058/configuration/levels"}},u=[{value:"How to create items like the armor category",id:"how-to-create-items-like-the-armor-category",children:[],level:3}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you want different prices per arena group you should use a server as a single arena (BUNGEE serverType)."),(0,o.kt)("p",null,"Make sure you're using the right material name when changing item materials in config."),(0,o.kt)("p",null,"For a list of materials, sounds, and potions, check the ",(0,o.kt)("a",{parentName:"p",href:"resrouces"},"resources page")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# This category contains various settings\nshop-settings:\n  # Quick-buy button\n  quick-buy-category:\n    material: NETHER_STAR\n    amount: 1\n    data: 0\n    enchanted: false\n\n  # This item is used to fill empty\n  # spaces in the quick buy category\n  quick-buy-empty-item:\n    material: RED_STAINED_GLASS_PANE\n    amount: 1\n    data: 4\n    enchanted: false\n\n  # Separator item between categories and items\n  regular-separator-item:\n    material: GRAY_STAINED_GLASS_PANE\n    amount: 1\n    data: 7\n    enchanted: false\n\n  # Separator item under selected category\n  selected-separator-item:\n    material: GREEN_STAINED_GLASS_PANE\n    amount: 1\n    data: 13\n    enchanted: false\n\n# This is not a shop category\n# They are just shop special entities\nshop-specials:\n  # Here you configure which item should spawn the "BedBug" entity\n  silverfish:\n    enable: true\n    material: SNOWBALL\n    data: 0\n    health: 8.0\n    damage: 4.0\n    speed: 0.25\n    despawn: 15\n  # Here you configure which item should spawn the "Dream Defender" entity\n  iron-golem:\n    enable: true\n    material: HORSE_SPAWN_EGG\n    data: 0\n    health: 100.0\n    despawn: 240\n    speed: 0.25\n\n# This is not a shop category\n# This section contains the items you receive at the quick-buy shop category by default \nquick-buy-defaults:\n  element1:\n    # Path to the category content\n    path: blocks-category.category-content.wool\n    # Where to place it in the inventory\n    # Allowed slots interval [19; 26)U[28;35)U[37;44)\n    slot: 19\n\n# This is a category\n# You can add and remove categories\n# To create a new category just copy, and paste under this section\n# don\'t forget to rename it\nblocks-category:\n  # The slot where to place the category\n  # in the shop index. Value interval [1;8]\n  category-slot: 1\n  \n  # Category display item\n  category-item:\n    material: ORANGE_TERRACOTTA\n    data: 1\n    amount: 1\n    enchanted: false\n\n  # Contents to show when you open\n  # the category\n  category-content:\n    # Content 1\n    wool:\n      #Content settings\n      content-settings:\n      # Where to put the category content\n      # in the shop category\n      # Allowed slots interval [19; 26)U[28;35)U[37;44)\n        content-slot: 19\n        # Set this to true to give on respawn\n        is-permanent: true\n        # Set this to true to downgrade on death\n        # Requires permanent true\n        is-downgradable: false\n      \n      # Content tiers\n      # Use one single tier for unupgradable items\n      # You can add as many tiers you want\n      content-tiers:\n        # Tier 1 options\n        tier1:\n          # Display item in shop category\n          tier-item:\n            material: WHITE_WOOL\n            data: 0\n            amount: 16\n            enchanted: false\n          # Tier settings\n          tier-settings:\n            cost: 4\n            # Available currencies: iron, gold, emerald, diamond and vault (for economy)\n            currency: iron\n          # Here you add the items you receive\n          # When you buy this tier\n          buy-items:\n            wool:\n              material: WHITE_WOOL\n              data: 0\n              amount: 16\n              # Optional\n              # Enchantments. Use comma to add more enchantments.\n              enchants: DIG_SPEED 1,ARROW_DAMAGE 1\n              # Optional\n              # Potions. This only applies to potions.\n              # Syntax: POTION_NAME SECONDS AMPLIFIER-1\n              potion: JUMP 45 5\n              # From 1.16+ you can give potions custom RGB color\n              # Read more here: https://minecraft.gamepedia.com/Potion#Item_data\n              potion-color: \'\'\n          # Here you add the commands to be executed when players\n          # buy this tier. Placeholders:\n          # {player} for player name, {player_uuid} for player uuid\n          # {team} for team identifier, {team_display} for team display name\n          # {team_color} for team color, {arena} for arena identifier\n          # {arena_display} for arena display name, {arena_world} for worldName\n          # {arena_group} for arena group name.\n          buy-cmds:\n            # Commands executed as player (buyer)\n            as-player:\n            - some command\n            # Commands dispatched by console\n            as-console:\n            - say hello {player}\n              \n')),(0,o.kt)("h3",{id:"how-to-create-items-like-the-armor-category"},"How to create items like the armor category"),(0,o.kt)("p",null,"BedWars1058 provides a configuration called ",(0,o.kt)("inlineCode",{parentName:"p"},"weight")," that cand be added under:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"namehere-category:\n    category-content:\n      element1:\n        content-settings:\n          weight: 1\n")),(0,o.kt)("p",null,"If you buy a content from that shop category with weight 2 you won't be able to buy content with lower weight in this category. Like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"armor-category:\n    category-content:\n      iron:\n        content-settings:\n          weight: 1\n      diamond:\n        content-settings:\n          weight: 2\n")),(0,o.kt)("p",null,"In this example you'll no longer be able to buy the iron armor after buying the diamond armor."))}d.isMDXComponent=!0}}]);