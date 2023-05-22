"use strict";var e=require("react/jsx-runtime"),r=require("react"),t=function(){return t=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var s in r=arguments[t])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e},t.apply(this,arguments)};var o=function(r){var o=r.primary,s=void 0!==o&&o,i=r.size,n=void 0===i?"medium":i,a=r.backgroundColor,c=r.label,l=function(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)r.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(t[o[s]]=e[o[s]])}return t}(r,["primary","size","backgroundColor","label"]),m=s?"storybook-button--primary":"storybook-button--secondary";return e.jsx("button",t({type:"button",className:["storybook-button","storybook-button--".concat(n),m].join(" "),style:{backgroundColor:a}},l,{children:c}))},s=function(r){var s=r.user,i=r.onLogin,n=r.onLogout,a=r.onCreateAccount;return e.jsx("header",{children:e.jsxs("div",t({className:"storybook-header"},{children:[e.jsxs("div",{children:[e.jsx("svg",t({width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},{children:e.jsxs("g",t({fill:"none",fillRule:"evenodd"},{children:[e.jsx("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),e.jsx("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),e.jsx("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]}))})),e.jsx("h1",{children:"Acme"})]}),e.jsx("div",{children:s?e.jsxs(e.Fragment,{children:[e.jsxs("span",t({className:"welcome"},{children:["Welcome, ",e.jsx("b",{children:s.name}),"!"]})),e.jsx(o,{size:"small",onClick:n,label:"Log out"})]}):e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"small",onClick:i,label:"Log in"}),e.jsx(o,{primary:!0,size:"small",onClick:a,label:"Sign up"})]})})]}))})};exports.Button=o,exports.Footer=function(){return e.jsxs("footer",t({className:"footer items-center text-neutral-content mx-auto max-w-7xl p-4 px-2 sm:px-6 lg:px-8"},{children:[e.jsxs("div",t({className:"flex flex-col items-center sm:items-start w-full"},{children:[e.jsxs("picture",{children:[e.jsx("source",{srcSet:"https://runtimeverification.com/assets/img/rv-logo-dark.png",media:"(prefers-color-scheme: dark)"}),e.jsx("img",{className:"h-[32px]",src:"https://runtimeverification.com/assets/img/rv-logo.png",alt:"Runtime Verification logo"})]}),e.jsx("p",t({className:"mt-2 text-md-left copyright link link-primary no-underline"},{children:e.jsx("a",t({href:"https://goo.gl/maps/TkuJSdoA3oNPpc486",target:"_blank"},{children:"301 N Neil St. Suite 412, Champaign, IL 61820"}))}))]})),e.jsx("div",t({className:"text-gray-600 w-full"},{children:e.jsxs("p",t({className:"text-center w-full"},{children:["".concat((new Date).getFullYear()," © all rights reserved | "),e.jsx("a",t({href:"https://runtimeverification.com/privacy-policy",className:"link-primary"},{children:"privacy policy"}))," | ",e.jsx("a",t({href:"https://runtimeverification.com/terms-of-use",className:"link-primary"},{children:"terms of use"}))]}))})),e.jsxs("div",t({className:"grid-flow-col gap-2 justify-self-center md:justify-self-end"},{children:[e.jsx("a",t({href:"https://github.com/runtimeverification",target:"_blank"},{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"https://runtimeverification.com/assets/img/footer/footer-github-dark.png",media:"(prefers-color-scheme: dark)"}),e.jsx("img",{className:"w-[24px] h-[24px] ml-1 mr-1",src:"https://runtimeverification.com/assets/img/footer/footer-github.png",alt:"GitHub logo"})]})})),e.jsx("a",t({href:"https://discord.gg/CurfmXNtbN ",target:"_blank"},{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"https://runtimeverification.com/assets/img/footer/footer-discord-dark.png",media:"(prefers-color-scheme: dark)"}),e.jsx("img",{className:"w-[24px] h-[24px] ml-1 mr-1",src:"https://runtimeverification.com/assets/img/footer/footer-discord.png",alt:"Discord logo"})]})})),e.jsx("a",t({href:"https://t.me/rv_inc",target:"_blank"},{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"https://runtimeverification.com/assets/img/footer/footer-telegram-dark.png",media:"(prefers-color-scheme: dark)"}),e.jsx("img",{className:"w-[24px] h-[24px] ml-1 mr-1",src:"https://runtimeverification.com/assets/img/footer/footer-telegram.png",alt:"Telegram logo"})]})})),e.jsx("a",t({href:"https://twitter.com/rv_inc",target:"_blank"},{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"https://runtimeverification.com/assets/img/footer/footer-twitter-dark.png",media:"(prefers-color-scheme: dark)"}),e.jsx("img",{className:"w-[24px] h-[24px] ml-1 mr-1",src:"https://runtimeverification.com/assets/img/footer/footer-twitter.png",alt:"Twitter logo"})]})})),e.jsx("a",t({href:"https://runtimeverification.medium.com/",target:"_blank"},{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"https://runtimeverification.com/assets/img/footer/footer-medium-dark.png",media:"(prefers-color-scheme: dark)"}),e.jsx("img",{className:"w-[24px] h-[24px] ml-1 mr-1",src:"https://runtimeverification.com/assets/img/footer/footer-medium.png",alt:"Medium logo"})]})})),e.jsx("a",t({href:"https://www.youtube.com/channel/UCZeDdn8F5ARtK5LmRngiLnA",target:"_blank"},{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"https://runtimeverification.com/assets/img/footer/footer-youtube-dark.png",media:"(prefers-color-scheme: dark)"}),e.jsx("img",{className:"w-[24px] h-[24px] ml-1 mr-1",src:"https://runtimeverification.com/assets/img/footer/footer-youtube.png",alt:"YouTube logo"})]})})),e.jsx("a",t({href:"https://www.facebook.com/RuntimeVerificationInc",target:"_blank"},{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"https://runtimeverification.com/assets/img/footer/footer-facebook-dark.png",media:"(prefers-color-scheme: dark)"}),e.jsx("img",{className:"w-[24px] h-[24px] ml-1 mr-1",src:"https://runtimeverification.com/assets/img/footer/footer-facebook.png",alt:"Facebook logo"})]})})),e.jsx("a",t({href:"https://www.linkedin.com/company/3142238/",target:"_blank"},{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"https://runtimeverification.com/assets/img/footer/footer-linkedin-dark.png",media:"(prefers-color-scheme: dark)"}),e.jsx("img",{className:"w-[24px] h-[24px] ml-1 mr-1",src:"https://runtimeverification.com/assets/img/footer/footer-linkedin.png",alt:"Linkedin logo"})]})}))]}))]}))},exports.Header=s,exports.Page=function(){var o=r.useState(),i=o[0],n=o[1];return e.jsxs("article",{children:[e.jsx(s,{user:i,onLogin:function(){return n({name:"Jane Doe"})},onLogout:function(){return n(void 0)},onCreateAccount:function(){return n({name:"Jane Doe"})}}),e.jsxs("section",t({className:"storybook-page"},{children:[e.jsx("h2",{children:"Pages in Storybook"}),e.jsxs("p",{children:["We recommend building UIs with a"," ",e.jsx("a",t({href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"},{children:e.jsx("strong",{children:"component-driven"})}))," ","process starting with atomic components and ending with pages."]}),e.jsx("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),e.jsxs("ul",{children:[e.jsx("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),e.jsx("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),e.jsxs("p",{children:["Get a guided tutorial on component-driven development at"," ",e.jsx("a",t({href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer"},{children:"Storybook tutorials"})),". Read more in the"," ",e.jsx("a",t({href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"},{children:"docs"})),"."]}),e.jsxs("div",t({className:"tip-wrapper"},{children:[e.jsx("span",t({className:"tip"},{children:"Tip"}))," Adjust the width of the canvas with the"," ",e.jsx("svg",t({width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},{children:e.jsx("g",t({fill:"none",fillRule:"evenodd"},{children:e.jsx("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})}))})),"Viewports addon in the toolbar"]}))]}))]})};
//# sourceMappingURL=index.js.map
