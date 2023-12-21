"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[383],{5086:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});var a=i(5893),r=i(1151);const t={slug:"cuda-programming",title:"CUDA-Programming",sidebar_position:3,authors:{name:"Joyen Benitto",title:"CUDA-Programming",url:"https://github.com/JoyenBenitto",image_url:"https://avatars.githubusercontent.com/u/75515758?v=4"},tags:["cuda","index"]},l=void 0,s={id:"CUDA101/cuda_prog",title:"CUDA-Programming",description:"Understanding the basic elements of CUDA program:",source:"@site/docs/CUDA101/cuda_prog.md",sourceDirName:"CUDA101",slug:"/CUDA101/cuda-programming",permalink:"/docs/CUDA101/cuda-programming",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CUDA101/cuda_prog.md",tags:[{label:"cuda",permalink:"/docs/tags/cuda"},{label:"index",permalink:"/docs/tags/index"}],version:"current",sidebarPosition:3,frontMatter:{slug:"cuda-programming",title:"CUDA-Programming",sidebar_position:3,authors:{name:"Joyen Benitto",title:"CUDA-Programming",url:"https://github.com/JoyenBenitto",image_url:"https://avatars.githubusercontent.com/u/75515758?v=4"},tags:["cuda","index"]},sidebar:"tutorialSidebar",previous:{title:"CUDA-101",permalink:"/docs/CUDA101/cuda101"},next:{title:"Organization of thread in a CUDA program Part-1",permalink:"/docs/CUDA101/Organization-of-thread-in-a-CUDA-program-Part-1"}},d={},o=[{value:"Understanding the basic elements of CUDA program:",id:"understanding-the-basic-elements-of-cuda-program",level:3},{value:"Elements of the CUDA program",id:"elements-of-the-cuda-program",level:3},{value:"Getting started with our first CUDA code",id:"getting-started-with-our-first-cuda-code",level:3},{value:"Understanding grid and block",id:"understanding-grid-and-block",level:2},{value:"Grid",id:"grid",level:3},{value:"Block",id:"block",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"understanding-the-basic-elements-of-cuda-program",children:"Understanding the basic elements of CUDA program:"}),"\n",(0,a.jsx)(n.p,{children:"Almost every #CUDA  program follows the basic set of steps"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Initialization of data form CPU"}),"\n",(0,a.jsx)(n.li,{children:"Transfer data form CPU context to GPU context"}),"\n",(0,a.jsx)(n.li,{children:"Kernel launch with needed grid/block size"}),"\n",(0,a.jsx)(n.li,{children:"Transfer  results back to CPU context from GPU context"}),"\n",(0,a.jsx)(n.li,{children:"Reclaim the memory from both CPU and GPU"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"A #CUDA application might do this steps multiple times"}),"\n",(0,a.jsx)(n.h3,{id:"elements-of-the-cuda-program",children:"Elements of the CUDA program"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Host Code(Main function) - Runs the code in the CPU"}),"\n",(0,a.jsx)(n.li,{children:"Device Code - Runs the code in GPU"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The host code is responsible for the sequential part of the program and calling the #Device_code with proper device configurations."}),"\n",(0,a.jsx)(n.h3,{id:"getting-started-with-our-first-cuda-code",children:"Getting started with our first CUDA code"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'#include "cuda_runtime.h"\n#include "device_launch_parameters.h"\n#include <stdio.h>\n\n//Device Code\n__global__ void hello_cuda(){\n\tprintf("Hello from CUDA world \\n");\n}\n\n//Host code\nint main(){ \n\t//kernel launch parameters\n\thello_cuda<< <1,10>> > (); // async call\n\tprintf("Hello from CPU \\n");\n\tcudaDeviceSynchronize();// will make the prgram stall till all the launched kernels have finished execution\n\tcudaDeviceReset();\n\treturn 0;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"understanding-grid-and-block",children:"Understanding grid and block"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"grids_blocs_viz.png",src:i(7083).Z+"",width:"651",height:"435"})}),"\n",(0,a.jsx)(n.h3,{id:"grid",children:"Grid"}),"\n",(0,a.jsx)(n.p,{children:"Grid is the collection of all the threads launch for a kernel, in the above code we had 20 threads. A three dimensional view of the grid can be visualised using the Cartesian coordinate system."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Each of the small cube can be visualised as a single thread."}),"\n",(0,a.jsx)(n.li,{children:"There will be some threads in the X, Y and Z dimension here we have 4 threads in each dimension, i.e we have 64 threads."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"block",children:"Block"}),"\n",(0,a.jsx)(n.p,{children:"Threads in a grid is organised in to groups called thread blocks, these thread blokes allows the CUDA toolkit to synchronise and manage workload without heavy performance penalties."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Thread block in a grid is a subset of a grid, hence we can also arrange it in Coordinate axis."}),"\n",(0,a.jsx)(n.li,{children:"Example: if our 64 thread grid is arranged into 8 thread blocks, each having two threads in all three dimension."}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Kernel launch parameters tells the compiler on how much blocks exist and the number of threads per block."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"Kernel_name<<< number_of_blocks, \n\t\t\t\tthread_per_block >>> (arguments)\n"})}),"\n",(0,a.jsx)(n.p,{children:"The kernel launch takes four parameters but for now we will go ahead with two, now like how we did previously if we use integer we can specify only one dimension only. we use #dim3\ndata type to declare a three dimensional variable."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"dim3 variable_name(X, Y, Z);\n"})}),"\n",(0,a.jsx)(n.p,{children:"dim3 is a vector type which in 1 by default, to access the individual values use the below."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"variable_name.x\nvariable_name.y\nvariable_name.z\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example:"})," Lets say we need to launch the hello_world kernel with one dimensional grid with 32 thread arranged into 8 thread blocks, where each block having 4 threads in x dimension arrangement of the grid would look like this. This can be represented as:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"dim3 block(4,1,1);\n"})}),"\n",(0,a.jsx)(n.p,{children:"This would be our second kernel launch parameter. First parameter is the number of blocks in each dimension."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"dim3 grid(8,1,1)\n"})}),"\n",(0,a.jsx)(n.p,{children:"so we can launch our kernel using:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"dim3 block(4,1,1);\ndim3 grid(8,1,1);\n\nkernel_name<<<grid, block>>>();\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example 2"}),": Now try creating the following shown below. A 2D grid, with total of 64 threads arranged in 16 threads in x dimension and 4 threads in y dimension. Each thread block will have 8 threads in x dimension and 2 thread in y dimension."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{target:"_blank",href:i(4196).Z+"",children:"example_2.png"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'#include "cuda_runtime.h"\n#include "device_launch_parameters.h"\n#include <stdio.h>\n\n//Device Code\n__global__ void hello_cuda(){\n\tprintf("Hello from CUDA world \\n");\n}\n\n//Host code\nint main(){ \n\t//kernel launch parameters\n\tdim3 block(8,2,1);\n\tdim3 grid(2,2,1);\n\n\thello_cuda<<<grid, block>>>();\n\tcudaDeviceSynchronize();// will make the prgram stall till all the launched kernels have finished execution\n\tcudaDeviceReset();\n\treturn 0;\n}\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"The same can also be implemented as:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'#include "cuda_runtime.h"\n#include "device_launch_parameters.h"\n#include <stdio.h>\n\n//Device Code\n__global__ void hello_cuda(){\n\tprintf("Hello from CUDA world \\n");\n}\n\n//Host code\nint main(){ \n\t//kernel launch parameters\n  int nx, ny;\n  nx = 16;\n  ny = 4;\n  \n\tdim3 block(8,2,1);\n\tdim3 grid(nx /block.x, ny/block.y);\n\n\thello_cuda<<<grid, block>>>();\n\tcudaDeviceSynchronize();// will make the prgram stall till all the launched kernels have finished execution\n\tcudaDeviceReset();\n\treturn 0;\n}\n'})}),"\n",(0,a.jsx)(n.h1,{id:"limitations",children:"Limitations:"}),"\n",(0,a.jsx)(n.p,{children:"#limitation_for_block_size is that we can maximum have 1024 for X and Y direction and 64 for the Z direction."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"X* Y* Z <= 1024\n"})}),"\n",(0,a.jsx)(n.p,{children:"The limitation for the number of thread blocks in each dimension is that you can maximum have 2^32 - 1 in x direction, 65536 threads in other dimension."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"On not adhering to the above there will be kernel launch failures."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},4196:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/files/example_2-0ed32b2c546dda649ba8d3f004636a27.png"},7083:(e,n,i)=>{i.d(n,{Z:()=>a});const a=i.p+"assets/images/grids_blocs_viz-9fb292c482c2e56857d3a2e140f38aa1.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>l});var a=i(7294);const r={},t=a.createContext(r);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);