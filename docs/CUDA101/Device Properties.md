---
slug: Device-Properties
title: Device Properties
sidebar_position: 9
authors:
  name: Joyen Benitto
  title: Device Properties
  url: https://github.com/JoyenBenitto
  image_url: https://avatars.githubusercontent.com/u/75515758?v=4
tags: [cuda, index]
---

- Nvidia released their first CUDA toolkit in 2007.
- Now we are in #nvcc --version
- Also we have different set of CUDA capable devices which we referred to as CUDA compute capability, Ranging form 1 - 7. 
- Depending on the device compute capability, basic properties of CUDA capable device can vary.
  (Example: The thread numbers can vary from lvl 1 - 5 and the shared memory might be less for lvl 1 while be better for lvl-5).
- When we program a CUDA application to run on device with multiple compute capabilities, then we need a way to query the device properties on the fly.

|Property|Explanation|
|---|---|
|Name| ACII string identifying the device|
|Major/Minor| Major and minor revision numbers defining the device's compute capability|
|maxThreadsPerBlock|Maximum number of threads per block|
|totalGlobalMem|Total amount of global memory available on the device in bytes|
|maxThreadsDim[3]|maximum size of each dimension of a block|
|maxGridSize[3]|maximum size of each dimension of a grid|
|clockRate|clock frequency in Kilohertz|
|sharedMemPerBlock|Maximum amount of shared memory available to a thread block in bytes|
|Warp Size| Warp size for the device|

*There are more properties refer to the datasheet*

```cpp
#include "cuda_runtime.h"
#include "device_launch_parameters.h"

#include <stdio.h>

void query_device(){
	int deviceCount= 0;
	cudaGetDeviceCount(&deviceCount);

	if(deviceCount == 0){
		printf("No CUDA Support Device found")
	}

	int devNo = 0;
	cudaDeviceProp iProp;
	cudaDeviceProperties(&iprop, devNo);
		
}
```

#cudaDeviceProp is used to create a reference to a CUDA device property type variable.

you can find the property of the devices by:
```cpp
iprop.name
iprop.minor
iprop.sharedMemPerblock
```
