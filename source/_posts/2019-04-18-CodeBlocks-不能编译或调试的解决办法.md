---
title: CodeBlocks 不能编译或调试的解决办法
tags:
  - 软件使用
  - CodeBlocks
abbrlink: e6474535
date: 2019-04-18 22:11:34
---

---

今天新装了最新版的 Code::Blocks17.12，下载的时候选择了完整版（带了 MinGW），编译一切正常，但是 Debug 的时候报了错：

<!--more-->


```
ERROR: You need to specify a debugger program in the debuggers's settings.
(For MinGW compilers, it's 'gdb.exe' (without the quotes))
(For MSVC compilers, it's 'cdb.exe' (without the quotes))
```

这是因为没有设置调试器（以前用的那个版本好像安装完就能直接调试）。

如果下载的是完整版的，就按照以下步骤添加调试器路径：
Settings -> Debugger -> Default -> Executable path

路径为：CodeBlocks\MinGW\bin\gdb32.exe （也有可能是 gdb.exe）

如果路径下没有这个文件，就从 http://www.equation.com/servlet/equation.cmd?fa=gdb 下载一个。

如果是没法编译，也是下载一个 MinGW ，安装，然后配置系统变量。最后在 CodeBlocks 软件中 Settings -> Complier 选择 GUN GCC Compiler 编译器即可。