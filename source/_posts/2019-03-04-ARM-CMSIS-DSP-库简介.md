---
title: ARM CMSIS-DSP 库简介
tags:
  - 硬件拾忆
  - STM32
abbrlink: 5d8cceea
date: 2019-03-04 16:39:33
---

---

CMSIS 的 DSP 库主要提供以下数字信号处理算法：



1、BasicMathFunctions

提供基本的数据运算，如加减乘除，以 _f32 结尾的函数是浮点运算，以 _q8，_q15，_q31 结尾的函数是定点运算。

<!--more-->

2、FastMathFunctions

主要提供 SIN，COS 以及平方根 SPRT 的运算。



3、ComplexMathFunctions

复杂数学运算，主要是向量，求模等运算。



4、FilteringFunctions

主要是滤波函数，如 IIR，FIR，LMS 等。



5、MatrixFunctions

主要是矩阵运算。



6、TransformFunctions

变换功能。包括复数 FFT（CFFT）/负数 FFT 逆运算（CIFFT）、实数 FFT（RFFT）/实数 FFT 逆运算。



7、ControllerFunctions

控制功能，主要为 PID 控制函数。arm_sin_cos_f32/_q31.c 函数提供 360 点正余弦函数表和任意角度的正余弦函数值计算功能。



8、StatisticsFunctions

统计功能函数，如求平均值、计算 RMS 等。



9、SupportFunctions

支持功能函数，如数据拷贝，Q 格式和浮点格式相互转换。



10、CommonTables

arm_common_tables.c 文件提供位翻转或相关参数表。