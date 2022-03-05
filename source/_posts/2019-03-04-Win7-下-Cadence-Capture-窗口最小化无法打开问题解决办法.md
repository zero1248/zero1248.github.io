---
title: Win7 下 Cadence Capture 窗口最小化无法打开问题解决办法
date: 2019-03-04 17:53:15
tags:
    - 软件使用
---

---

### 问题描述

打开 Capture 时，软件一直最小化到下方任务栏，点击后无反应。

<!--more-->

---

### 解决办法



#### 方法一：

直接删除 capture.ini



#### 方法二：

先关闭软件。



打开 capture.ini，找到 [Window Placement] 配置选项，将窗口大小改为默认大小。

*[Window Placement]*

*Max Position...=(-1,-1)*

*Min Position...=(-32000,-32000)*

*Normal Position=(138,105,1176,877)*

*Show...........=ShowNormal*

