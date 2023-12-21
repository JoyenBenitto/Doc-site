"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[3880],{2076:(d,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>h,toc:()=>l});var n=r(5893),t=r(1151);const s={slug:"Organization-of-thread-in-a-CUDA-program-Part-1",title:"Organization of thread in a CUDA program Part-1",sidebar_position:4,authors:{name:"Joyen Benitto",title:"Organization of thread in a CUDA program Part-1",url:"https://github.com/JoyenBenitto",image_url:"https://avatars.githubusercontent.com/u/75515758?v=4"},tags:["cuda","index"]},i="ThreadIdx",h={id:"CUDA101/Organization_of_threads_p1",title:"Organization of thread in a CUDA program Part-1",description:"- CUDA runtime uniquely initialised #threadIdx variable for each thread depending on where that particular thread is located in the thread block.",source:"@site/docs/CUDA101/Organization_of_threads_p1.md",sourceDirName:"CUDA101",slug:"/CUDA101/Organization-of-thread-in-a-CUDA-program-Part-1",permalink:"/Doc-site/docs/CUDA101/Organization-of-thread-in-a-CUDA-program-Part-1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CUDA101/Organization_of_threads_p1.md",tags:[{label:"cuda",permalink:"/Doc-site/docs/tags/cuda"},{label:"index",permalink:"/Doc-site/docs/tags/index"}],version:"current",sidebarPosition:4,frontMatter:{slug:"Organization-of-thread-in-a-CUDA-program-Part-1",title:"Organization of thread in a CUDA program Part-1",sidebar_position:4,authors:{name:"Joyen Benitto",title:"Organization of thread in a CUDA program Part-1",url:"https://github.com/JoyenBenitto",image_url:"https://avatars.githubusercontent.com/u/75515758?v=4"},tags:["cuda","index"]},sidebar:"tutorialSidebar",previous:{title:"CUDA-Programming",permalink:"/Doc-site/docs/CUDA101/cuda-programming"},next:{title:"Organization of thread in a CUDA program Part-2",permalink:"/Doc-site/docs/CUDA101/Organization-of-thread-in-a-CUDA-program-Part-2"}},c={},l=[{value:"Example Exercise#",id:"example-exercise",level:2}];function x(d){const e={code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...d.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"threadidx",children:"ThreadIdx"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"CUDA runtime uniquely initialised #threadIdx variable for each thread depending on where that particular thread is located in the thread block."}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.em,{children:"threadIdx"})," is a #dim3 type variable"]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Example-1:"})," consider a 1-D grid with 1 thread block with 8 threads"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"threadIdx_example1.png",src:r(4514).Z+"",width:"434",height:"134"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Thread Name"}),(0,n.jsx)(e.th,{children:"ThreadIdx.X"}),(0,n.jsx)(e.th,{children:"ThreadIdx.Y"}),(0,n.jsx)(e.th,{children:"ThreadIdx.Z"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"A"})}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"B"})}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"C"})}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"D"})}),(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"E"})}),(0,n.jsx)(e.td,{children:"4"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"F"})}),(0,n.jsx)(e.td,{children:"5"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"G"})}),(0,n.jsx)(e.td,{children:"6"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"H"})}),(0,n.jsx)(e.td,{children:"7"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Example-2:"})," consider a 1-D grid with 2 thread block with 8 threads"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"threadIdx_example2.png",src:r(6119).Z+"",width:"434",height:"134"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Thread Name"}),(0,n.jsx)(e.th,{children:"ThreadIdx.X"}),(0,n.jsx)(e.th,{children:"ThreadIdx.Y"}),(0,n.jsx)(e.th,{children:"ThreadIdx.Z"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"A"})}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"B"})}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"C"})}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"D"})}),(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"E"})}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"F"})}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"G"})}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"H"})}),(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Example-3:"})," consider a 1-D grid with 4 thread block with 4 threads per block as shown below."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"threadidx_example3.png",src:r(5897).Z+"",width:"455",height:"179"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Thread Name"}),(0,n.jsx)(e.th,{children:"ThreadIdx.X"}),(0,n.jsx)(e.th,{children:"ThreadIdx.Y"}),(0,n.jsx)(e.th,{children:"ThreadIdx.Z"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"P"})}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"Q"})}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"R"})}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"S"})}),(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"T"})}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"U"})}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"V"})}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"X"})}),(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Example-4:"})," consider a 1-D grid with 4 thread block with 8 threads per block as shown below."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"threadIdx_exmaple4.png",src:r(4335).Z+"",width:"377",height:"253"})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Thread Name"}),(0,n.jsx)(e.th,{children:"ThreadIdx.X"}),(0,n.jsx)(e.th,{children:"ThreadIdx.Y"}),(0,n.jsx)(e.th,{children:"ThreadIdx.Z"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"P"})}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"Q"})}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"R"})}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"S"})}),(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"T"})}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"U"})}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"X"})}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:(0,n.jsx)(e.strong,{children:"Y"})}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"example-exercise",children:"Example Exercise#"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Example-5:"})," Lets code a CUDA program that is going to launch a 2-D grid which has 256 threads arranged into 2 thread blocks in x-dimension and y-dimension. So we will have 16 threads per block with 8 thread in x and y-dimension."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:'#include "cuda_runtime.h"\n#include "device_launch_parameters.h"\n\n\n#include <stdio.h>\n\n//Device Code\n__global__ void print_thread() {\n    printf("x: %d  y: %d  z: %d \\n", threadIdx.x, threadIdx.y, threadIdx.z);\n}\n\n//Host code\nint main() {\n\n    int nx, ny;\n\n    nx = 16;\n    ny = 16;\n\n    //kernel launch parameters\n\n    dim3 block(8, 8);\n    dim3 grid(nx/block.x, ny/block.y);\n\n    print_thread << <grid, block >> > (); // async call\n    printf("Hello from CPU \\n");\n    cudaDeviceSynchronize();// will make the prgram stall till all the launched kernels have finished execution\n\n\n    cudaDeviceReset();\n    return 0;\n}\n'})})]})}function a(d={}){const{wrapper:e}={...(0,t.a)(),...d.components};return e?(0,n.jsx)(e,{...d,children:(0,n.jsx)(x,{...d})}):x(d)}},4514:(d,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/threadIdx_example1-542f0b5d9e04375732636a4afce47a9b.png"},6119:(d,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/threadIdx_example2-7df2bbc141a121e7992dd1adbfd4bec6.png"},4335:(d,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/threadIdx_exmaple4-0627e932bca762925685b9a1571cd5cb.png"},5897:(d,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/threadidx_example3-5ae0d9fa6b7295e93040833b0cb3a1d6.png"},1151:(d,e,r)=>{r.d(e,{Z:()=>h,a:()=>i});var n=r(7294);const t={},s=n.createContext(t);function i(d){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function h(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(t):d.components||t:i(d.components),n.createElement(s.Provider,{value:e},d.children)}}}]);