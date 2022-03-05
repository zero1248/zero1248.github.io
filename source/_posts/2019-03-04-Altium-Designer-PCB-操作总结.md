---
title: Altium Designer PCB 操作总结
date: 2019-03-04 18:28:14
tags:
    - 软件使用
---

---

1、定原点（PCB文件原点）

Edit -> origin

<!--more-->

---

2、定义尺寸（可以最开始定，也可以最后定）

先画mechanical layer，再复制到 keep-out-layer（要粘贴时先点Edit->paste special），然后  Design -> Board Shape -> Redefine Board Shape



---

3、测量距离

ctrl+M 



---

4、 更换线型

ctrl+space，用“<”和“>”可改变倒角曲率半径



---

5、铺地

place -> polygon pour -> connect to GND，选 top layer 或 bottom layer，选 pour over all same objects -> 选范围 -> 确定



---

6、焊盘

贴片焊盘用 top layer，过孔焊盘用multi layer



---

7、旋转

空格



---

8、打开/关闭层

L



---

9、切换层

小键盘 *



---

10、添加层

design ->layer stack manager ->点击 Toplayer 或 Bottomlayer -> 信号层 add layer/内电层 add plane

如果要分割，不要添加 net



---

11、泪滴

Tools -> Teardoops



---

12、铺铜皮

Place -> 矩形 Fill / 多边形 Solid region



---

13、灌铜

Place -> Polygon Pour（需要设置 net，也可以不设）

灌铜掏空：Place -> Polygon Pour Cutout



---

14、走线换层

shift + ctrl +鼠标滑轮



---

15、原理图更新到 PCB 时出现 unknown pin

删除 PCB 图中所有 net（design -> netlist）



---

16、元件换层

拖住按 L



---

17、选中需要修整的铜皮  M+G

修钝角 P+Y



---

18、PCB 图中修改丝印字体

任一丝印右键 -> find similar objects -> text width 选 same -> OK -> 在 PCB inspector 中修改



---

19、隐藏网络飞线

N -> Hide Connections 选 Net