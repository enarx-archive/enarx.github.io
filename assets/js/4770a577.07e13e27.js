"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3730],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,b=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59828:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],l={},c="WebAssembly with Grain",p={unversionedId:"WebAssembly/Grain",id:"WebAssembly/Grain",title:"WebAssembly with Grain",description:"1. Setting up the environment",source:"@site/docs/WebAssembly/Grain.md",sourceDirName:"WebAssembly",slug:"/WebAssembly/Grain",permalink:"/docs/WebAssembly/Grain",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/WebAssembly/Grain.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebAssembly with AssemblyScript",permalink:"/docs/WebAssembly/AssemblyScript"},next:{title:"WebAssembly with Zig",permalink:"/docs/WebAssembly/Zig"}},s={},m=[],u={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webassembly-with-grain"},"WebAssembly with Grain"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Setting up the environment"),(0,a.kt)("p",{parentName:"li"},"To install Grain on your local system, follow the instructions given ",(0,a.kt)("a",{parentName:"p",href:"https://grain-lang.org/docs/getting_grain"},"here"),", and to install Wasmtime to run our .wasm file, you can take a look at their ",(0,a.kt)("a",{parentName:"p",href:"https://wasmtime.dev/"},"website"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Code"),(0,a.kt)("p",{parentName:"li"},"Open your preferred text editor and make a file with .gr extension. Grain recommends VS Code to work with .gr files. Installation of grain extension for VS code is highly recommended."),(0,a.kt)("p",{parentName:"li"},"The Fibonacci code in Grain is as follows :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"let rec fibonacci = (n) => {\n  if (n == 0 || n == 1) {\n    n\n  } else {\n    fibonacci(n - 1) + fibonacci(n - 2)\n  }\n}\n\nprint(fibonacci(7))\n")),(0,a.kt)("p",{parentName:"li"},"We need to mention that a function is recursive with the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"rec"),"in Grain.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Compiling the code"),(0,a.kt)("p",{parentName:"li"},"To compile your Grain code, simply run :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"grain fibonacci.gr\n")),(0,a.kt)("p",{parentName:"li"},"This would print ",(0,a.kt)("inlineCode",{parentName:"p"},"13")," on your terminal and generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"fibonacci.gr.wasm")," file."))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Running .wasm file in Wasmtime"),(0,a.kt)("p",{parentName:"li"},"To run our .wasm file in wasmtime, run the following command"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"wasmtime fibonacci.gr.wasm\n")))))}f.isMDXComponent=!0}}]);