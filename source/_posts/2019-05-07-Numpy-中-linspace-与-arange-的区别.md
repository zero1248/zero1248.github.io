---
title: Numpy 中 linspace() 与 arange() 的区别
date: 2019-05-07 19:09:31
tags:
    - 编程语言
    - Python
---

---

从功能上，两者都是生成一个 numpy.ndarray 类型的等差数列。 

<!--more-->

```
arange(start=None, stop=None, step=None, dtype=None)
linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None)
```

- numpy.arange() 的参数是 start，stop 和 step（步长）
- numpy.linspace() 的参数是 start，stop 和 num（数量）

**numpy.arange() 是将从 start 到 stop 的区间，按照步长 step 生成含 (stop-start)/step 个元素的向量，结果中不包含 stop。**

例如：
```
v = np.arange(0, 1, 0.1)
print(v)
```
的结果是：

```
[ 0.   0.1  0.2  0.3  0.4  0.5  0.6  0.7  0.8  0.9]
```

**numpy.linspace() 是将从 start 到 stop 的区间，按照步长 (stop-start)/(num-1) 生成含 num 个元素的向量，结果中包含 stop。**

例如：
```
u = np.linspace(0, 1, 10)
print(u)
```
的结果是：
```
[ 0.          0.11111111  0.22222222  0.33333333  0.44444444  0.55555556
  0.66666667  0.77777778  0.88888889  1.        ]
```
其步长为 (1 - 0)/(10-1) = 0.111…，共 10 个元素。

而
```
u = np.linspace(0, 1, 11)
print(u)
```
的结果是：
```
[ 0.   0.1  0.2  0.3  0.4  0.5  0.6  0.7  0.8  0.9  1. ]
```
其步长为 (1 - 0)/(11-1) = 0.1，共 11 个元素。