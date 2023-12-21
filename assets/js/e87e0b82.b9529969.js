"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[9153],{700:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=i(5893),n=i(1151);const s={slug:"Device-Properties",title:"Device Properties",sidebar_position:9,authors:{name:"Joyen Benitto",title:"Device Properties",url:"https://github.com/JoyenBenitto",image_url:"https://avatars.githubusercontent.com/u/75515758?v=4"},tags:["cuda","index"]},o=void 0,c={id:"CUDA101/Device Properties",title:"Device Properties",description:"- Nvidia released their first CUDA toolkit in 2007.",source:"@site/docs/CUDA101/Device Properties.md",sourceDirName:"CUDA101",slug:"/CUDA101/Device-Properties",permalink:"/docs/CUDA101/Device-Properties",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CUDA101/Device Properties.md",tags:[{label:"cuda",permalink:"/docs/tags/cuda"},{label:"index",permalink:"/docs/tags/index"}],version:"current",sidebarPosition:9,frontMatter:{slug:"Device-Properties",title:"Device Properties",sidebar_position:9,authors:{name:"Joyen Benitto",title:"Device Properties",url:"https://github.com/JoyenBenitto",image_url:"https://avatars.githubusercontent.com/u/75515758?v=4"},tags:["cuda","index"]},sidebar:"tutorialSidebar",previous:{title:"Memory transfer between host and device",permalink:"/docs/CUDA101/Memory-transfer-between-host-and-device"}},d={},a=[];function l(e){const t={code:"code",em:"em",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Nvidia released their first CUDA toolkit in 2007."}),"\n",(0,r.jsx)(t.li,{children:"Now we are in #nvcc --version"}),"\n",(0,r.jsx)(t.li,{children:"Also we have different set of CUDA capable devices which we referred to as CUDA compute capability, Ranging form 1 - 7."}),"\n",(0,r.jsx)(t.li,{children:"Depending on the device compute capability, basic properties of CUDA capable device can vary.\n(Example: The thread numbers can vary from lvl 1 - 5 and the shared memory might be less for lvl 1 while be better for lvl-5)."}),"\n",(0,r.jsx)(t.li,{children:"When we program a CUDA application to run on device with multiple compute capabilities, then we need a way to query the device properties on the fly."}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Explanation"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Name"}),(0,r.jsx)(t.td,{children:"ACII string identifying the device"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Major/Minor"}),(0,r.jsx)(t.td,{children:"Major and minor revision numbers defining the device's compute capability"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxThreadsPerBlock"}),(0,r.jsx)(t.td,{children:"Maximum number of threads per block"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"totalGlobalMem"}),(0,r.jsx)(t.td,{children:"Total amount of global memory available on the device in bytes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxThreadsDim[3]"}),(0,r.jsx)(t.td,{children:"maximum size of each dimension of a block"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxGridSize[3]"}),(0,r.jsx)(t.td,{children:"maximum size of each dimension of a grid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"clockRate"}),(0,r.jsx)(t.td,{children:"clock frequency in Kilohertz"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sharedMemPerBlock"}),(0,r.jsx)(t.td,{children:"Maximum amount of shared memory available to a thread block in bytes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Warp Size"}),(0,r.jsx)(t.td,{children:"Warp size for the device"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"There are more properties refer to the datasheet"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'#include "cuda_runtime.h"\n#include "device_launch_parameters.h"\n\n#include <stdio.h>\n\nvoid query_device(){\n\tint deviceCount= 0;\n\tcudaGetDeviceCount(&deviceCount);\n\n\tif(deviceCount == 0){\n\t\tprintf("No CUDA Support Device found")\n\t}\n\n\tint devNo = 0;\n\tcudaDeviceProp iProp;\n\tcudaDeviceProperties(&iprop, devNo);\n\t\t\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"#cudaDeviceProp is used to create a reference to a CUDA device property type variable."}),"\n",(0,r.jsx)(t.p,{children:"you can find the property of the devices by:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"iprop.name\niprop.minor\niprop.sharedMemPerblock\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>o});var r=i(7294);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);