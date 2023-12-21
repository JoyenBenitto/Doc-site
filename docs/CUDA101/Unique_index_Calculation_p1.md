---
slug: Unique_index-Part-1
title: Unique index calculation part-1
sidebar_position: 6
authors:
  name: Joyen Benitto
  title: Unique index calculation part-1
  url: https://github.com/JoyenBenitto
  image_url: https://avatars.githubusercontent.com/u/75515758?v=4
tags: [cuda, index]
---

- In a #CUDA program it is very common to use #threadIdx, #blockIdx, #blockDim variable value to calculate the array indices. Now it is important to remember why we use #CUDA in the first place, it is because there are no dependencies or very less dependencies in the loop
- In the following section we are going to use these variables to access elements of the array transferred to the kernel.

```cpp
#include "cuda_runtime.h"
#include "device_launch_parameters.h"

#include <stdlib.h>
#include <stdio.h>

//Device Code
__global__ void unique_idx_calc_threadIdx(int * input) {
	int tid = threadIdx.x;
	printf("threadIdx.x : %d, value : %d \n", tid, input[tid]);
}

//Host code
int main() {

    int array_size = 8;
    int array_byte_size = sizeof(int) * array_size;
    int h_data[] = {31, 34, 41, 44, 23, 32, 34, 23};

	for(int i = 0; i < array_size; i++){
		printf("%d ", h_data[i]);
	}
	printf("\n \n");

	int * d_data;
	cudaMalloc((void**)&d_data, array_byte_size);
	cudaMemcpu(d_data, h_data, array_byte_size, cudaMemcpuHosToDevice);

	dim3 block(8);
	dim3 grid(1);
	unique_idx_calc_threadIdx <<<grid, block>>>(d_data);
	
    cudaDeviceSynchronize();
    
    cudaDeviceReset();
    return 0;
}
```

![Unique_index_eg1.png](./img/Unique_index_eg1.png)

for the above the threadIdx will be:

| Thead | threadIdx.x |
| ----- | ----------- |
| **A** | 0           |
| **B**     | 1           |
| **C**     | 2           |
| **D**     | 3           |
| **E**     | 0           |
| **F**     | 1           |
| **G**     | 2           |
| **H**     | 3           |     

We cannot use the above program to access the element of this array as it will print the value of A, B, C, D twice. so we will need to use #global_index to access these elements.

---

![Unique_index_eg2.png](./img/Unique_index_eg2.png)

| Thead | threadIdx.x |gridId|
| ----- | ----------- |---|
| **A** | 0           |0|
| **B** | 1           |1|
| **C** | 2           |2|
| **D** | 3           |3|
| **E** | 0           |4|
| **F** | 1           |5|
| **G** | 2           |6|
| **H** | 3           |7|
| I     |0             |8|
| J     |1             |9|
| K     |2            |10|
| L     |3             |11|
| M     |0             |12|
| N     |1             |13|
| O     |2             |14|
| P     |3             |15|

- #threadIdx values are initialized based on thread location in a #block. But ideally if we want to calculate index which increments sequentially as shown in the above table.
- To achieve this we are going to add #offset to #threadIdx values so that we can acquire #global_index for each thread in the #grid.
- for the threads in the first thread block the #offset is 0. The second thread block will have #offset of 4. The third block will have #offset of 8 and the final thread block will have #offset of 12.
- We can calculate the #global_unique_id or #global_index for a thread if we can add these #offset values to the #threadIdx values based on their #block.
- The below snippet shows the calculation formula of the #global_unique_id 

```cpp
gid = tid + offset;
gid = tid + blockIdx.x*blockDim.x;
```

- We can understand the above snippet with an example

```cpp
#include "cuda_runtime.h"
#include "device_launch_parameters.h"
 
#include <stdlib.h>
#include <stdio.h>


//Device Code

__global__ void unique_idx_calc_threadIdx(int * input) {
int tid = threadIdx.x;
int gid = tid + blockIdx.x*blockDim.x;
printf("threadIdx.x : %d, value : %d \n", tid, input[gid]);
}


//Host code
int main() {
	int array_size = 16;
	int array_byte_size = sizeof(int) * array_size;
	int h_data[] = {31, 34, 41, 44, 23, 32, 34, 23, 33, 24, 10, 49, 29, 35, 37, 22};
	for(int i = 0; i < array_size; i++){
		printf("%d ", h_data[i]);
	}

	printf("\n \n");
	int * d_data;

	cudaMalloc((void**)&d_data, array_byte_size);
	cudaMemcpy(d_data, h_data, array_byte_size, cudaMemcpyHostToDevice);

	dim3 block(4);
	dim3 grid(4);
	unique_idx_calc_threadIdx <<<grid, block>>>(d_data);
	cudaDeviceSynchronize();
	cudaDeviceReset();

	return 0;
}
```
