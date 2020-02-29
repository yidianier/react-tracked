(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,f=p["".concat(c,".").concat(b)]||p[b]||u[b]||o;return r?a.a.createElement(f,i({ref:t},l,{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(1),a=r(6),o=(r(0),r(113)),c={id:"caveats",title:"Caveats",sidebar_label:"Caveats"},i={id:"caveats",title:"Caveats",description:"Proxy and state usage tracking may not work 100% as expected.",source:"@site/docs/caveats.md",permalink:"/docs/caveats",sidebar_label:"Caveats",sidebar:"docs",previous:{title:"Recipes",permalink:"/docs/recipes"}},s=[{value:"Proxied states are referentially equal only in per-hook basis",id:"proxied-states-are-referentially-equal-only-in-per-hook-basis",children:[]},{value:"An object referential change doesn&#39;t trigger re-render if an property of the object is accessed in previous render",id:"an-object-referential-change-doesnt-trigger-re-render-if-an-property-of-the-object-is-accessed-in-previous-render",children:[]},{value:"Proxied state shouldn&#39;t be used outside of render",id:"proxied-state-shouldnt-be-used-outside-of-render",children:[]}],l={rightToc:s};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Proxy and state usage tracking may not work 100% as expected.\nThere are some limitations and workarounds."),Object(o.b)("h2",{id:"proxied-states-are-referentially-equal-only-in-per-hook-basis"},"Proxied states are referentially equal only in per-hook basis"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const state1 = useTrackedState();\nconst state2 = useTrackedState();\n// state1 and state2 is not referentially equal\n// even if the underlying state is referentially equal.\n")),Object(o.b)("p",null,"You should use ",Object(o.b)("inlineCode",{parentName:"p"},"useTrackedState")," only once in a component\nif you need referential equality of objects in the state."),Object(o.b)("h2",{id:"an-object-referential-change-doesnt-trigger-re-render-if-an-property-of-the-object-is-accessed-in-previous-render"},"An object referential change doesn't trigger re-render if an property of the object is accessed in previous render"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const state = useTrackedState();\nconst { foo } = state;\nreturn <Child key={foo.id} foo={foo} />;\n\nconst Child = React.memo(({ foo }) => {\n  // ...\n};\n// if foo doesn't change, Child won't render, so foo.id is only marked as used.\n// it won't trigger Child to re-render even if foo is changed.\n")),Object(o.b)("p",null,"You need to explicitly notify an object as used in a memoized component."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { trackMemo } from 'react-tracked';\n\nconst Child = React.memo(({ foo }) => {\n  trackMemo(foo);\n  // ...\n};\n")),Object(o.b)("h2",{id:"proxied-state-shouldnt-be-used-outside-of-render"},"Proxied state shouldn't be used outside of render"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const state = useTrackedState();\nconst dispatch = useUpdate();\ndispatch({ type: 'FOO', value: state.foo }); // This may lead unexpected behavior if state.foo is an object\ndispatch({ type: 'FOO', value: state.fooStr }); // This is OK if state.fooStr is a string\n")),Object(o.b)("p",null,"It's recommended to use primitive values for ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch"),", ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," and others."),Object(o.b)("p",null,"In case you need to pass an object itself, here's a workaround."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { getUntrackedObject } from 'react-tracked';\n\ndispatch({ type: 'FOO', value: getUntrackedObject(state.foo) });\n")))}d.isMDXComponent=!0}}]);