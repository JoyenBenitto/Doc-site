"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[57],{4329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(5893),d=t(1151);const r={slug:"Unique_index-Part-1",title:"Unique index calculation part-1",sidebar_position:6,authors:{name:"Joyen Benitto",title:"Unique index calculation part-1",url:"https://github.com/JoyenBenitto",image_url:"https://avatars.githubusercontent.com/u/75515758?v=4"},tags:["cuda","index"]},s=void 0,c={id:"CUDA101/Unique_index_Calculation_p1",title:"Unique index calculation part-1",description:"- In a #CUDA program it is very common to use #threadIdx, #blockIdx, #blockDim variable value to calculate the array indices. Now it is important to remember why we use #CUDA in the first place, it is because there are no dependencies or very less dependencies in the loop",source:"@site/docs/CUDA101/Unique_index_Calculation_p1.md",sourceDirName:"CUDA101",slug:"/CUDA101/Unique_index-Part-1",permalink:"/docs/CUDA101/Unique_index-Part-1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CUDA101/Unique_index_Calculation_p1.md",tags:[{label:"cuda",permalink:"/docs/tags/cuda"},{label:"index",permalink:"/docs/tags/index"}],version:"current",sidebarPosition:6,frontMatter:{slug:"Unique_index-Part-1",title:"Unique index calculation part-1",sidebar_position:6,authors:{name:"Joyen Benitto",title:"Unique index calculation part-1",url:"https://github.com/JoyenBenitto",image_url:"https://avatars.githubusercontent.com/u/75515758?v=4"},tags:["cuda","index"]},sidebar:"tutorialSidebar",previous:{title:"Organization of thread in a CUDA program Part-2",permalink:"/docs/CUDA101/Organization-of-thread-in-a-CUDA-program-Part-2"},next:{title:"Unique index calculation part-2",permalink:"/docs/CUDA101/Unique_index-Part-2"}},a={},l=[];function h(e){const n={code:"code",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In a #CUDA program it is very common to use #threadIdx, #blockIdx, #blockDim variable value to calculate the array indices. Now it is important to remember why we use #CUDA in the first place, it is because there are no dependencies or very less dependencies in the loop"}),"\n",(0,i.jsx)(n.li,{children:"In the following section we are going to use these variables to access elements of the array transferred to the kernel."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include "cuda_runtime.h"\n#include "device_launch_parameters.h"\n\n#include <stdlib.h>\n#include <stdio.h>\n\n//Device Code\n__global__ void unique_idx_calc_threadIdx(int * input) {\n\tint tid = threadIdx.x;\n\tprintf("threadIdx.x : %d, value : %d \\n", tid, input[tid]);\n}\n\n//Host code\nint main() {\n\n    int array_size = 8;\n    int array_byte_size = sizeof(int) * array_size;\n    int h_data[] = {31, 34, 41, 44, 23, 32, 34, 23};\n\n\tfor(int i = 0; i < array_size; i++){\n\t\tprintf("%d ", h_data[i]);\n\t}\n\tprintf("\\n \\n");\n\n\tint * d_data;\n\tcudaMalloc((void**)&d_data, array_byte_size);\n\tcudaMemcpu(d_data, h_data, array_byte_size, cudaMemcpuHosToDevice);\n\n\tdim3 block(8);\n\tdim3 grid(1);\n\tunique_idx_calc_threadIdx <<<grid, block>>>(d_data);\n\t\n    cudaDeviceSynchronize();\n    \n    cudaDeviceReset();\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Unique_index_eg1.png",src:t(6788).Z+"",width:"526",height:"97"})}),"\n",(0,i.jsx)(n.p,{children:"for the above the threadIdx will be:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Thead"}),(0,i.jsx)(n.th,{children:"threadIdx.x"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"A"})}),(0,i.jsx)(n.td,{children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"B"})}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"C"})}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"D"})}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"E"})}),(0,i.jsx)(n.td,{children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"F"})}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"G"})}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"H"})}),(0,i.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"We cannot use the above program to access the element of this array as it will print the value of A, B, C, D twice. so we will need to use #global_index to access these elements."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Unique_index_eg2.png",src:t(1588).Z+"",width:"863",height:"103"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Thead"}),(0,i.jsx)(n.th,{children:"threadIdx.x"}),(0,i.jsx)(n.th,{children:"gridId"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"A"})}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"B"})}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"C"})}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"D"})}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"E"})}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"F"})}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"G"})}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"H"})}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"I"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"J"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"9"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"K"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"L"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"11"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"M"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"12"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"13"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"O"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"14"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"P"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"15"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"#threadIdx values are initialized based on thread location in a #block. But ideally if we want to calculate index which increments sequentially as shown in the above table."}),"\n",(0,i.jsx)(n.li,{children:"To achieve this we are going to add #offset to #threadIdx values so that we can acquire #global_index for each thread in the #grid."}),"\n",(0,i.jsx)(n.li,{children:"for the threads in the first thread block the #offset is 0. The second thread block will have #offset of 4. The third block will have #offset of 8 and the final thread block will have #offset of 12."}),"\n",(0,i.jsx)(n.li,{children:"We can calculate the #global_unique_id or #global_index for a thread if we can add these #offset values to the #threadIdx values based on their #block."}),"\n",(0,i.jsx)(n.li,{children:"The below snippet shows the calculation formula of the #global_unique_id"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"gid = tid + offset;\ngid = tid + blockIdx.x*blockDim.x;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We can understand the above snippet with an example"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include "cuda_runtime.h"\n#include "device_launch_parameters.h"\n \n#include <stdlib.h>\n#include <stdio.h>\n\n\n//Device Code\n\n__global__ void unique_idx_calc_threadIdx(int * input) {\nint tid = threadIdx.x;\nint gid = tid + blockIdx.x*blockDim.x;\nprintf("threadIdx.x : %d, value : %d \\n", tid, input[gid]);\n}\n\n\n//Host code\nint main() {\n\tint array_size = 16;\n\tint array_byte_size = sizeof(int) * array_size;\n\tint h_data[] = {31, 34, 41, 44, 23, 32, 34, 23, 33, 24, 10, 49, 29, 35, 37, 22};\n\tfor(int i = 0; i < array_size; i++){\n\t\tprintf("%d ", h_data[i]);\n\t}\n\n\tprintf("\\n \\n");\n\tint * d_data;\n\n\tcudaMalloc((void**)&d_data, array_byte_size);\n\tcudaMemcpy(d_data, h_data, array_byte_size, cudaMemcpyHostToDevice);\n\n\tdim3 block(4);\n\tdim3 grid(4);\n\tunique_idx_calc_threadIdx <<<grid, block>>>(d_data);\n\tcudaDeviceSynchronize();\n\tcudaDeviceReset();\n\n\treturn 0;\n}\n'})})]})}function o(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6788:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Unique_index_eg1-302d2d5347578c247fd7f6ebf0138138.png"},1588:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Unique_index_eg2-c004a250003c5bcd04cb692960b048ba.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(7294);const d={},r=i.createContext(d);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);