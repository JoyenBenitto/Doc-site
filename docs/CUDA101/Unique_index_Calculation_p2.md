---
slug: Unique_index-Part-2
title: Unique index calculation part-2
sidebar_position: 7
authors:
  name: Joyen Benitto
  title: Unique index calculation part-2
  url: https://github.com/JoyenBenitto
  image_url: https://avatars.githubusercontent.com/u/75515758?v=4
tags: [cuda, index]
---

**Example1:** Building up from the previous page assume that there is a grid with 4 blocks 2 in x-dimension and 2 in y-dimension. Each of these blocks have 4 threads in x-dimension only. Write a CUDA program to parse through each element.

- The previous offset won't work as it will return the same 8 elements from the x-dimension.
- Now we will need a block offset along with the thread offset.

```cpp
num_of_threads_row = gridDim.x * blockDim.x
num_of_threads_thread_block = blockDim.x


row_offset = num_of_threads_in_block * blockIdx.y
block_offset = number_of_threads_in_block * blockIdx.X
index = row_offset + block_offset + tid
```

The final equation of the above can be shown below as follows

```cpp
gid = gridDim.x*blockDim.x*blockIdx.y + 
		blcokIdx.x* blockDim.x + 
		threadIdx.x
```