---
title: Altium Designer 原理图操作总结
tags:
  - 软件使用
abbrlink: a140eeab
date: 2019-03-04 18:17:53
---

---

1、统一改 IC 标号

Tools -> Annotate Schematic -> Reset All -> UpdateChanges List

<!--more-->

---

2、统一改封装

器件右键 -> Find Similar Objects -> Description 选 same -> Symbol Reference 选 same -> OK -> CTRL + A -> 改 current footprint -> 左击菜单外的工作台



改完之后因为过滤器其他器件为灰色，此时在工作台任意位置右键，点 Filter，clear filter



---

3、导出 BOM

需要将每一个器件的 comment 改成对应的阻值容值，template 选 BOM Default Template 95.xlt，最后点 Export