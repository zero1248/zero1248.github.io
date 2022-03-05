---
title: Cadence Capture 操作总结
date: 2019-03-04 17:00:14
tags:
    - 软件使用
---

---

1、放置跨页符

Place -> Off-Page Connector

<!--more-->

---

2、更改颜色、字体等偏好

option -> preferences



---

3、生成PDF

file -> Print Setup -> 名称选择 Adobe PDF（或其他软件） -> file -> Print -> OK 后选路径即可



------

4、创建原理图文件夹 —— 选择原理图文件夹 -> 选design -> new schematic 

创建原理图文件 —— 选择原理图文件夹 -> 选design -> new schematic page



---

5、重命名

原理图：在页面主菜单 design -> rename，或 dsn 下右键 -> rename

工程文件 opj：只能在 windows 下重命名

设计文件 dsn：不要再 window 下重命名，这样明明后，工程文件就找不到数据库了，应该 file -> save as。



---

6、创建元件库

- file -> new -> library

- 选中新建的库文件，右键 -> new part，弹出对话框

- 输入 name 和 rart reference prefix（U、R、C等），封装可以先空着。如果分几部分建立，part per pkg 填相应数量

- 添加引脚：选中 -> place -> pin array

- 改引脚名称：双击改名即可，如果需要加横线表示低有效，在每个字母后面加 “\”

- 统一改引脚名称：edit-properties

- option -> package properties可以编辑该 package 的 footprint，名称，索引符号，分裂元件数量
- 创建分裂元件
  - 在 parts per pkg 中选择分裂数量即可，若相似的几部分，选 homogeneous，若不同，选 heterogeneous
  - 电源只放在一个部分即可，不需要每个部分都放，如运放
  - CTRL+N 切换不同部分



---

7、开启/关闭引脚名称显示

option -> part properties



---

8、取消格点吸附

工具栏快捷键 snap to grid 可以取消/开启吸附栅格点。



---

9、画斜线

拉线时按住 shift



---

10、Capture 自带 Library 路径： 

cadence--spb_16.3 -- tools -- capture -- library



---

11、总线



总线命名不能以空格或数字结束。



总线命名有3种规则：BUSNAME[0..31]或BUSNAME[0:31]或BUSNAME[0-31]。wire命名时不能带[ ]。直接BUSNAME0、BUSNAME1等。



如果不用总线入口，而把wire线直接连到总线上，在连接处也有连接点，但并没有真正的电气连接。



如果使用总线入口，总线必须通过bus entry和信号线实现互连。并且总线和信号线都要命名，并符合命名规范。



如果不用总线入口，总线和wire信号线之间只能通过网络名称实现电气互连。



两段总线如果形成T型连接，则自动放置连接点，电气上是互连的。两段十字型的总线默认没有连接点，要形成电气互连，必须手动放置连接点。



---

12、器件重新编号

选择工程文件 -> tools -> Annotate -> (Action)Reset to ? ->  确定 ->tools -> Annotate -> incremental reference update



---

13、鼠标变成长十字快捷键  

按 F6



---

14、查看所有器件、网络

schematic 上右键 -> Edit object properties



---

15、字母上加横线

命名时字母后加反斜杠



---

16、建封装时从 excel 批量复制

Shift + Insert



---

17、编辑器件 Pin Group

view -> package -> edit -> properties



---

18、新建 symbol 库

file -> new library -> olb 右键 new symbol，可新建 power、跨页符、标题栏、pin shape、端口标示



---

19、快速新建封装

file -> new library -> olb 右键 new part from spreadsheet

重新修改右键 split part



---

20、插入可编辑的 visio 图形

- Place -> OleObject

- 选择 由文件创建

- 点击浏览，选择 visio 文件后点确定

- 在原理图中画方框（方框后期也可以随意拖动和调整大小）



---

21、元件不能删除和移动

右键该器件，选 edit part，然后退出即可