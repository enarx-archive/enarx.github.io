"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9670],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),h=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=h(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||s;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var h=2;h<s;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2166:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return h},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],l={},o="Syscall Proxy",h={unversionedId:"Technical/Syscall-Proxy",id:"Technical/Syscall-Proxy",isDocsHomePage:!1,title:"Syscall Proxy",description:"Enarx needs to support Keeps that are built on encrypted virtual machine technologies such as AMD SEV and IBM Power PEF. This means that we need to boot an operating system inside the guest virtual machine. However, existing operating systems do not meet the Enarx design principles (especially: minimal trusted computing base [TCB], external network stack and memory safety). Therefore, this page outlines a plan for building a minimal operating system which intends to service only the minimal requirements to run Enarx.",source:"@site/docs/Technical/Syscall-Proxy.md",sourceDirName:"Technical",slug:"/Technical/Syscall-Proxy",permalink:"/docs/Technical/Syscall-Proxy",editUrl:"https://github.com/enarx/docs/blob/main/docs/Technical/Syscall-Proxy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Process-Flow",permalink:"/docs/Technical/Process-Flow"},next:{title:"Hardware and CPU",permalink:"/docs/Technical/Hardware"}},c=[{value:"Existing Systems",id:"existing-systems",children:[],level:2},{value:"The Plan",id:"the-plan",children:[{value:"Syscall Proxying",id:"syscall-proxying",children:[],level:3},{value:"Syscall Categories and their Layers",id:"syscall-categories-and-their-layers",children:[],level:3},{value:"The VMM / \u03bcKernel Interface",id:"the-vmm--\u03bckernel-interface",children:[],level:3},{value:"The Kernel / \u03bcKernel Interface",id:"the-kernel--\u03bckernel-interface",children:[],level:3},{value:"The \u03bcKernel / Userspace Interface",id:"the-\u03bckernel--userspace-interface",children:[],level:3},{value:"Why not implement the \u03bcKernel as a unikernel?",id:"why-not-implement-the-\u03bckernel-as-a-unikernel",children:[],level:3},{value:"How does attestation work?",id:"how-does-attestation-work",children:[],level:3}],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"syscall-proxy"},"Syscall Proxy"),(0,s.kt)("p",null,"Enarx needs to support Keeps that are built on encrypted virtual machine technologies such as AMD SEV and IBM Power PEF. This means that we need to boot an operating system inside the guest virtual machine. However, existing operating systems do not meet the Enarx design principles (especially: minimal trusted computing base ","[TCB]",", external network stack and memory safety). Therefore, this page outlines a plan for building a minimal operating system which intends to service only the minimal requirements to run Enarx."),(0,s.kt)("h1",{id:"high-level-architecture"},"High-Level Architecture"),(0,s.kt)("h2",{id:"existing-systems"},"Existing Systems"),(0,s.kt)("p",null,"A traditional virtualization stack (such as Qemu + Linux) is typically composed of four components:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The Virtual Machine Manager (e.g. Qemu)"),(0,s.kt)("li",{parentName:"ol"},"The VM BIOS / Firmware (e.g. OVMF)"),(0,s.kt)("li",{parentName:"ol"},"The Guest Bootloader"),(0,s.kt)("li",{parentName:"ol"},"The Guest Kernel")),(0,s.kt)("p",null,"In a traditional setup, the first two of these components are provided by the Host and the latter two are provided by the Tenant. The VMM sets up the virtual machine environment using KVM and handles the events generated by KVM. The VM BIOS has the main job of loading the guest bootloader from the guest disk image; though it often performs some other basic hardware initialization and provides a boot-time environment such as UEFI. Once the bootloader is loaded, its job is to find the guest kernel from the guest disk image. Finally, the kernel boots the rest of the system."),(0,s.kt)("p",null,"This setup involves multiple interfaces that have varying degrees of stabilization:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The VMM => BIOS Interface"),(0,s.kt)("li",{parentName:"ol"},"The BIOS => Bootloader Interface"),(0,s.kt)("li",{parentName:"ol"},"The BIOS => Kernel Interface")),(0,s.kt)("p",null,"Because of the Enarx goal to reduce the trusted computing base and associated attack surfaces, these interfaces offer substantial complexity that is not desirable. Further, since the Host is not trusted, introducing the Host to the trust chain via a Host-provided BIOS is not workable. Even still, because of the complexity of the various interfaces involved between the VMM and the guest kernel, there is a complexity problem that makes security issues difficult to debug."),(0,s.kt)("h2",{id:"the-plan"},"The Plan"),(0,s.kt)("p",null,"In order to remove these problems, Enarx plans to produce three components when running in a VM-based TEE:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The Enarx VMM"),(0,s.kt)("li",{parentName:"ol"},"The Enarx \u03bcKernel"),(0,s.kt)("li",{parentName:"ol"},"The Enarx Userspace WASM / WASI Runtime")),(0,s.kt)("p",null,"These three components will be tightly coupled and shipped as an integrated system. The interfaces between the components will be considered an internal implementation detail that can be changed at any time. Enarx tenants will validate the cryptographic measurement of the three components (VMM Guest Memory Setup, \u03bcKernel and Userspace Runtime) as a single unit to reduce combinatorial complexity."),(0,s.kt)("h3",{id:"syscall-proxying"},"Syscall Proxying"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/enarx/enarx.github.io/main/assets/images/syscall_proxy.svg",alt:"Enarx Syscall Proxy"})),(0,s.kt)("p",null,"In order to keep the TCB small, especially the exclusion of a full network stack, we intend to proxy syscalls to the host. This allows us to use as many of the host resources as possible while maintaining a small Keep size. It also allows for performance optimizations as Enarx gets more mature.  The above chart shows a full trace of a single syscall across the various components. This works as follows:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"An Enarx application, compiled to WebAssembly, makes a WASI call, for example: ",(0,s.kt)("inlineCode",{parentName:"p"},"read()"),". This causes a transition from the JIT-compiled code into our guest userspace Rust code. This does not entail a full context switch and should be fast.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The hand-crafted Rust code should translate the WASI call into a Linux ",(0,s.kt)("inlineCode",{parentName:"p"},"read()")," syscall. From here we leave Ring 3 (on ",(0,s.kt)("inlineCode",{parentName:"p"},"x86"),"; other architectures have similar structures) and jump into the \u03bcKernel, performing a context switch. At this point, some syscalls will be handled internally by the \u03bcKernel, for example, memory allocation where the virtual machine has sufficiently allocated pages to handle the request immediately.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"All syscalls which cannot be handled internally by the \u03bcKernel must be passed to the host, so the guest \u03bcKernel passes the syscall request to the host (Linux) kernel. As an optimization, some syscalls may be handled by the host (Linux) kernel directly. For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"read()")," of a socket can be handled immediately by the host kernel, avoiding future context switches. This requires the (future) development of a Linux kernel module to handle these request directly in the host kernel. Since this is an optimization step, we can wait until the interfaces have settled before pursuing this.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"All syscalls which cannot be handled internally by the host kernel must cause a ",(0,s.kt)("inlineCode",{parentName:"p"},"vmexit")," in the host VMM. For example, a request for additional pages to be mapped into the guest must be passed to the VMM since that is the component which manages the allocated pages. Like previous layers, any syscalls which can be handled directly in the VMM (for example allocation from a pre-allocated memory pool) should be handled immediately to avoid future context switches.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In some cases, the VMM will have to re-enter the host kernel in order to fulfil the request. This is the slowest performance path and should be avoided wherever possible."))),(0,s.kt)("h3",{id:"syscall-categories-and-their-layers"},"Syscall Categories and their Layers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Memory Allocation: Memory allocation syscalls should be served by the \u03bcKernel from pre-allocated pools of huge pages. Allocation of huge pages should be passed through to the host layers.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Networking: All networking syscalls should be passed to the host layers. This ensures that the network stack lives outside the TCB.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Filesystem: The guest \u03bcKernel should implement a filesystem on top of block encryption and authentication. Block IO should be passed to the host layers. It may even be possible to implement this functionality directly in userspace to reduce the number of context switches. Block authentication, block encryption and the filesystem should be implemented as reusable crates for use in other (non-VM-based keep) contexts.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Threading: Techniques like NUMA are extremely hard to implement. Therefore, the \u03bcKernel should pass this to the host layers where possible. One particular strategy to accomplish this is to perform vCPU hotplug. When a new thread is created in the guest userspace, a new vCPU is created by the VMM. Therefore there is always a 1:1 mapping between userspace threads and vCPUs. The guest \u03bcKernel can pool pre-allocated vCPUs to increase performance."))),(0,s.kt)("h3",{id:"the-vmm--\u03bckernel-interface"},"The VMM / \u03bcKernel Interface"),(0,s.kt)("p",null,"We need to devise a TBD interface for interactions between the VMM and the guest \u03bcKernel."),(0,s.kt)("h3",{id:"the-kernel--\u03bckernel-interface"},"The Kernel / \u03bcKernel Interface"),(0,s.kt)("p",null,"This interface represents a series of optimizations in the previous interface. For syscalls which can be handled by the host kernel without VMM involvement, we should make a new device to handle these. Perhaps we might call this ",(0,s.kt)("inlineCode",{parentName:"p"},"virtio-syscall"),". Because this is an opimization, it can be delayed until the VMM / \u03bcKernel interface is more stable."),(0,s.kt)("h3",{id:"the-\u03bckernel--userspace-interface"},"The \u03bcKernel / Userspace Interface"),(0,s.kt)("p",null,'Although this interface will not be exposed directly to applications, we plan to have the \u03bcKernel implement a subset of the Linux Syscall ABI. The userspace runtime will be a static Linux ELF binary. This makes debugging of the two components significantly easier. It also allows the VMM / \u03bcKernel pair to be reused in contexts outside Enarx. The subset of the Linux Syscall ABI will be configurable at compile time, and only the syscalls necessary to execute Enarx will be included in the Enarx build of the \u03bcKernel binary. This ensures that the Keep only exposes the smallest possible attack surface to the Host, while giving opportunities for different syscall sets, or syscall masks, ("application profiles") to be created and managed for other use cases.'),(0,s.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,s.kt)("h3",{id:"why-not-implement-the-\u03bckernel-as-a-unikernel"},"Why not implement the \u03bcKernel as a unikernel?"),(0,s.kt)("p",null,"While this isn't off the table completely for future iterations (perhaps for further improvements to performance), there are a lot of drawbacks to this. For example, if we use the Linux Syscall ABI we can use standard Linux static ELF binaries. This is pretty great for being able to reproduce issues outside of the minimal VM context. There are also cases where some registers on some architectures which behave differently depending on which privilege level you are at. If, for example, the JIT were to attempt to spill onto these registers we could end up with very hard to debug problems."),(0,s.kt)("h3",{id:"how-does-attestation-work"},"How does attestation work?"),(0,s.kt)("p",null,"This is TBD. Ideally we would bring up the guest and the tenant would talk directly to the userspace runtime. But specific attestation workflows may make this difficult (for example: pre-SNP SEV). This remains a currently undefined architecture for now."))}p.isMDXComponent=!0}}]);