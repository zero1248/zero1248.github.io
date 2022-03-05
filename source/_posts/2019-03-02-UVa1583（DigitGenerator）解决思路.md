---
title: UVa1583（DigitGenerator）解决思路
date: 2019-03-02 22:46:23
tags:
    - 算法
---

---

#### 问题描述

如果x加上x的各个位数字之和得到y，就说x是y的生成元；给出n（1≤n≤100000），求最小生成元。无解输出0。例如，n=216，121，2005时的解分别为198 , 0, 1979。

<!--more-->


#### 题目分析

本题核心部分在于判断是否存在小于给定数字的一个数字，其本身与其各位数字之和等于给定数字，并不复杂。

由于输入数字范围并不大，因此可以考虑用事先计算好范围内所有数字的最小元，然后通过查表的方式输出。而且建立查找表的过程也很简单，不需要计算生成元，而是从小到大遍历数值范围一遍，将数字与各位数值相加，便可作为生成元存放到对应的表中。

另外，也可以每次都直接根据输入值来计算其生成元，省去了存放查找表的内存开销，但是每次都要重新计算。如果每次计算是用暴力方法遍历计算，会导致时间溢出，因此可根据题目的特点进行优化：

由于生成元的数值本身加上各位数值即为输入数字，因此，根据输入数字的数量级，生成元最多比输入数值小 9x6=54（其实是9x5=45）。因此在求解生成元时，无需从 1 开始遍历，只需从比输入数值小 50 的数值开始遍历即可。至于输入小于 50 的情况也无需考虑，只是在负数的地方浪费了一点时间，不会影响平均时间复杂度。


#### 解法一：查表

```
#include <iostream>
#include <stdio.h>
#include <string.h>

using namespace std;

#define MAXM 100005
int ans[MAXM];

int main(){

    int t, n;
    memset(ans, 0, sizeof(ans));
    for(int m=1; m<MAXM; m++){
        int x=m, y=m;
        while(x>0){
            y += x%10;
            x /= 10;
        }
        if(y>MAXM)
            continue;
        if(ans[y]==0 || m<ans[y])
            ans[y] = m;
    }
//    for(int i=1; i<MAXM; i++){
//        printf("%7d %7d\n", i, ans[i]);
//    }
    scanf("%d", &t);
    while(t--){
        scanf("%d", &n);
        printf("%d\n", ans[n]);
    }

    return 0;
}
```


#### 解法二：暴力枚举

```
#include <iostream>
#include <stdio.h>
#include <string.h>

using namespace std;

int main(){

    int t, n;
    scanf("%d", &t);
    while(t--){
        scanf("%d", &n);
        int x = 0;
        int sum = 0;
        int ans = 0;
        for(int i=n-50; i<n; i++){
            x = i;
            sum = x;
            while(x>0){
                sum += x%10;
                x /= 10;
            }
            if( sum == n){
                ans = i;
                break;
            }
        }
        printf("%d\n", ans);
    }
    
    return 0;
}
```