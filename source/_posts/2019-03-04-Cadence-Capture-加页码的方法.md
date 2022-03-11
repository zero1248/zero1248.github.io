---
title: Cadence Capture 加页码的方法
tags:
  - 软件使用
abbrlink: d55e31d2
date: 2019-03-04 17:43:48
---

---

1、 选中 .dsn 文件（工程文件）

2、执行 tools 菜单里的 Annotate 命令

3、在弹出的 Annotate 对话框中选择 Packaging 页

4、在 action 栏选择 Add Intersheet References

5、点击 “确定” 按钮进入 Intersheet References 对话框，勾选第一项：Place on off page connectors

<!--more-->

注意，在 title block 里面一定要有正确的页码，比如 1 of 8，  2 of 8 等等，这个是打页码的依据。



添加 title block的方法： place -> title block。



如果要删除 off page connector 的页面编号，在 Annotate 对话框中，选择 Delete Intersheet References 即可删除。