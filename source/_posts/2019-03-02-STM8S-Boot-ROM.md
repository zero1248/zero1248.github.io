---
title: STM8S Boot ROM
tags:
  - 硬件拾忆
  - STM8
abbrlink: fc6550d2
date: 2019-03-02 23:40:01
---

---

stm8s Boot ROM 是用于系统启动的只读存储器。

<!--more-->

在某些 STM8 型号中有 2K 字节的内部 Boot ROM，其中包含有用于启动的代码。这段代码的主要作用是利用 STM8 的 SPI，CAN 或 UART 接口，将应用程序代码，数据，选项字节（Option Byte）和中断向量表下载到内部的 FLASH 和 E2RPOM 中去。



执行的自举加载工作在 LIN 模式下，另一种引导装载程序通信协议在 UART2/UART3 和 UART1 中执行。



复位后，启动代码开始执行。更多详细内容参考 STM8 启动代码用户手册 UM0560。

