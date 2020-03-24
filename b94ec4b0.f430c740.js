/*! For license information please see b94ec4b0.f430c740.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(6),s=(n(0),n(121)),o=n(124),i=n(125),c={id:"tutorial-01",title:"Tutorial - Person Name with useState",sidebar_label:"Person Name (useState)"},l={id:"tutorial-01",title:"Tutorial - Person Name with useState",description:"This tutorial shows tiny example code with useState.",source:"@site/docs/tutorial-01.md",permalink:"/docs/tutorial-01",sidebar_label:"Person Name (useState)",sidebar:"docs",previous:{title:"Comparison with other projects",permalink:"/docs/comparison"},next:{title:"Tutorial - ToDo App with useReducer",permalink:"/docs/tutorial-02"}},u=[{value:"src/App.js",id:"srcappjs",children:[]},{value:"src/store.js",id:"srcstorejs",children:[]},{value:"src/EditPerson.js",id:"srceditpersonjs",children:[]},{value:"src/ShowPerson.js",id:"srcshowpersonjs",children:[]},{value:"src/utils.js",id:"srcutilsjs",children:[]},{value:"CodeSandbox",id:"codesandbox",children:[]}],p={rightToc:u};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This tutorial shows tiny example code with useState."),Object(s.b)("h2",{id:"srcappjs"},"src/App.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(i.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { Provider } from './store';\nimport EditPerson from './EditPerson';\nimport ShowPerson from './ShowPerson';\n\nconst App = () => (\n  <Provider>\n    <EditPerson />\n    <ShowPerson />\n  </Provider>\n);\n\nexport default App;\n\n"))),Object(s.b)(i.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { Provider } from './store';\nimport EditPerson from './EditPerson';\nimport ShowPerson from './ShowPerson';\n\nconst App: React.FC = () => (\n  <Provider>\n    <EditPerson />\n    <ShowPerson />\n  </Provider>\n);\n\nexport default App;\n\n")))),Object(s.b)("p",null,"This is the root component."),Object(s.b)("h2",{id:"srcstorejs"},"src/store.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(i.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { useState } from 'react';\nimport { createContainer } from 'react-tracked';\n\nconst useValue = () => useState({});\n\nexport const {\n  Provider,\n  useTrackedState,\n  useUpdate: useSetState,\n} = createContainer(useValue);\n\n"))),Object(s.b)(i.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { useState } from 'react';\nimport { createContainer } from 'react-tracked';\n\nexport type State = {\n  firstName?: string;\n  lastName?: string;\n};\n\nconst useValue = () => useState<State>({});\n\nexport const {\n  Provider,\n  useTrackedState,\n  useUpdate: useSetState,\n} = createContainer(useValue);\n\n")))),Object(s.b)("p",null,"The store is created by useState.\nuseUpdate is renamed to useSetState for exporting."),Object(s.b)("h2",{id:"srceditpersonjs"},"src/EditPerson.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(i.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useSetState, useTrackedState } from './store';\n\nconst EditPerson = () => {\n  const setState = useSetState();\n  const state = useTrackedState();\n  const setFirstName = (e) => {\n    const firstName = e.target.value;\n    setState((prev) => ({ ...prev, firstName }));\n  };\n  const setLastName = (e) => {\n    const lastName = e.target.value;\n    setState((prev) => ({ ...prev, lastName }));\n  };\n  return (\n    <div>\n      <div>\n        First Name:\n        <input value={state.firstName || ''} onChange={setFirstName} />\n      </div>\n      <div>\n        Last Name:\n        <input value={state.lastName || ''} onChange={setLastName} />\n      </div>\n    </div>\n  );\n};\n\nexport default EditPerson;\n\n"))),Object(s.b)(i.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useSetState, useTrackedState } from './store';\n\nconst EditPerson: React.FC = () => {\n  const setState = useSetState();\n  const state = useTrackedState();\n  const setFirstName = (e) => {\n    const firstName = e.target.value;\n    setState((prev) => ({ ...prev, firstName }));\n  };\n  const setLastName = (e) => {\n    const lastName = e.target.value;\n    setState((prev) => ({ ...prev, lastName }));\n  };\n  return (\n    <div>\n      <div>\n        First Name:\n        <input value={state.firstName || ''} onChange={setFirstName} />\n      </div>\n      <div>\n        Last Name:\n        <input value={state.lastName || ''} onChange={setLastName} />\n      </div>\n    </div>\n  );\n};\n\nexport default EditPerson;\n\n")))),Object(s.b)("p",null,"This component is to edit person object."),Object(s.b)("h2",{id:"srcshowpersonjs"},"src/ShowPerson.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(i.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import React, { useState } from 'react';\n\nimport { useTrackedState } from './store';\nimport { useFlasher } from './utils';\n\nconst ShowPerson = () => {\n  const state = useTrackedState();\n  const [onlyFirstName, setOnlyFirstName] = useState(false);\n  return (\n    <div ref={useFlasher()}>\n      <button type=\"button\" onClick={() => setOnlyFirstName((s) => !s)}>\n        {onlyFirstName ? 'Showing only first name' : 'Showing full name'}\n      </button>\n      {onlyFirstName ? (\n        <div>First Name: {state.firstName}</div>\n      ) : (\n        <div>\n          Full Name: {state.firstName} {state.lastName}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default ShowPerson;\n\n"))),Object(s.b)(i.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import React, { useState } from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\nimport { useFlasher } from './utils';\n\nconst ShowPerson: React.FC = () => {\n  const state = useTrackedState();\n  const [onlyFirstName, setOnlyFirstName] = useState(false);\n  return (\n    <div ref={useFlasher()}>\n      <button type=\"button\" onClick={() => setOnlyFirstName((s) => !s)}>\n        {onlyFirstName ? 'Showing only first name' : 'Showing full name'}\n      </button>\n      {onlyFirstName ? (\n        <div>First Name: {state.firstName}</div>\n      ) : (\n        <div>\n          Full Name: {state.firstName} {state.lastName}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default ShowPerson;\n\n")))),Object(s.b)("p",null,"This is the ShowPerson component.\nIt shows only first name or full name."),Object(s.b)("h2",{id:"srcutilsjs"},"src/utils.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(i.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n"))),Object(s.b)(i.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef<HTMLLIElement>(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n")))),Object(s.b)("p",null,"This is a utility function to show which components render."),Object(s.b)("h2",{id:"codesandbox"},"CodeSandbox"),Object(s.b)("p",null,"You can try ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://codesandbox.io/s/recursing-chatterjee-rlw9s"}),"working example"),"."))}m.isMDXComponent=!0},119:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===s)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||m[b]||s;return n?a.a.createElement(d,i({ref:t},l,{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},124:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(119),o=n.n(s),i=n(92),c=n.n(i);const l=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:s,values:i}=e,[p,m]=Object(r.useState)(s),b=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===e,className:o()("tab-item",c.a.tabItem,{"tab-item--active":p===e}),key:e,ref:e=>b.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(b,e.target,e),onFocus:()=>m(e),onClick:()=>m(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===p)[0]))}},125:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);