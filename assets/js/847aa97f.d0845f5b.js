"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8616],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1699:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={},s="WebAssembly With .NET",p={unversionedId:"WebAssembly/dotnet",id:"WebAssembly/dotnet",title:"WebAssembly With .NET",description:"Environment Setup",source:"@site/docs/WebAssembly/dotnet.md",sourceDirName:"WebAssembly",slug:"/WebAssembly/dotnet",permalink:"/docs/WebAssembly/dotnet",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/WebAssembly/dotnet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebAssembly with Ruby",permalink:"/docs/WebAssembly/Ruby"},next:{title:"WebAssembly with Python",permalink:"/docs/WebAssembly/Python"}},u={},c=[{value:"Environment Setup",id:"environment-setup",level:2},{value:"Wasmtime",id:"wasmtime",level:3},{value:".NET Preview Version(7.0.0-preview.2)",id:"net-preview-version700-preview2",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webassembly-with-net"},"WebAssembly With .NET"),(0,i.kt)("h2",{id:"environment-setup"},"Environment Setup"),(0,i.kt)("p",null,"To Compile this demo, you must install the following: "),(0,i.kt)("h3",{id:"wasmtime"},"Wasmtime"),(0,i.kt)("p",null,"You will find wasmtime at ",(0,i.kt)("a",{parentName:"p",href:"https://wasmtime.dev/"},"wasmtime.dev")),(0,i.kt)("h3",{id:"net-preview-version700-preview2"},".NET Preview Version(7.0.0-preview.2)"),(0,i.kt)("p",null,"Important Note:\nYou must download and install this preview version of .NET 7.0.0-preview.2 in order to get this demo working.\nWith other versions of .NET, this demo will not compile and hence you will not be able to run it. "),(0,i.kt)("p",null,"You can download it here: ",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/7.0"},".NET Preview Version")),(0,i.kt)("h3",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,"We will use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SteveSandersonMS/dotnet-wasi-sdk"},"Experimental WASI SDK for .NET Core")," in order to get this demo up and running. "),(0,i.kt)("h3",{id:"step-1"},"Step 1"),(0,i.kt)("p",null,"First we will have to create a new .NET Console Application and we can create one using the following\ncommand:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new console -o MyFirstWasiApp\n")),(0,i.kt)("p",null,"You can name your Console Application as per your requirements in my case, I have named it ",(0,i.kt)("inlineCode",{parentName:"p"},"MyFirstWasiApp")),(0,i.kt)("p",null,"Note that by default, the canonical example that is being used when you build the Console Application in Step 1, is a Hello World Example that will return ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World")," as a result to the Console. "),(0,i.kt)("p",null,"Since we are following a standard convention of using the Fibonnaci Code Snippet in every Guide, you can replace the existing code which is present in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," file by this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C#"},'using System;\n\nnamespace MyFirstWasiApp\n{\n    public class Program\n    {\n\n        public void fibonacci(ref int num){\n            int a=1,b=0,temp;\n            while(num >= 0){\n                temp=a;\n                a=a+b;\n                b=temp;\n                num--;\n            }\n            Console.WriteLine("Fibonacci Term is: "+b);\n        }\n    \n\n        public static void Main(string[] args)\n        {\n            Program p = new Program();\n            int num=10;\n            p.fibonacci(ref num);\n        }\n        \n    }\n}\n')),(0,i.kt)("p",null,"Also Note that the With the current State of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Experimental WASI SDK")," it does not allow to take user input through the Console through the ",(0,i.kt)("inlineCode",{parentName:"p"},"ReadLine()")," method. "),(0,i.kt)("h3",{id:"step-2"},"Step 2"),(0,i.kt)("p",null,"Navigate to the newly created Console Application Directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd MyFirstWasiApp\n")),(0,i.kt)("h3",{id:"step-3"},"Step 3"),(0,i.kt)("p",null,"Now, in this third step, we will have to import the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Wasi.Sdk")," package to our Console Application in so that our WASM Binary can have support for WASI Bindings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Wasi.Sdk --prerelease\n")),(0,i.kt)("h3",{id:"step-4"},"Step 4"),(0,i.kt)("p",null,"Finally, you can build your application now using the following command: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet build\n")),(0,i.kt)("p",null,"Now, you will be able to see your Output WebAssembly Binary that this produces in the following Directory:\n",(0,i.kt)("inlineCode",{parentName:"p"},"bin/Debug/net7.0/MyFirstWasiApp.wasm"),". "),(0,i.kt)("p",null,"Now, you can run it on Wasmtime by executing: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wasmtime run MyFirstWasiApp.wasm\n")))}d.isMDXComponent=!0}}]);