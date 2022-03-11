---
title: Arduino IDE 配置 ESP32 开发环境
tags:
  - 硬件拾亿
  - Arduino
  - ESP32
abbrlink: 64d1c9e3
date: 2022-03-11 10:27:59
---

#### 〇、说明

Arduino IDE 默认是不支持 ESP32 开发板的，但是可以通过开发板管理器安装其他开发板的开发环境。

对于 ESP32，可以通过自动下载或者手动下载的方式来安装其开发环境，但由于网络原因，自动下载经常失败。以下对两种方法都做以下介绍，如果自动下载不成功，可以按照第二种方法手动安装。

<!--more-->

#### 一、方法一：自动安装

1、安装最新版 Arduino IDE，下载网址： [Software | Arduino](https://www.arduino.cc/en/software)

2、打开 Arduino 软件，点击菜单栏的 文件 - 首选项。

![Image](Image.png)

在附加开发板管理器网址处填写：[https://dl.espressif.com/dl/package_esp32_index.json](https://links.jianshu.com/go?to=https%3A%2F%2Fdl.espressif.com%2Fdl%2Fpackage_esp32_index.json)

![image-20220311103631117](image-20220311103631117.png)

然后保存，重启 Arduino 软件。

3、在菜单栏中选择：工具 - 开发板 - 开发板管理

![Image](Image-16469662483601.png)

在开发板管理器上，搜索 esp32，可以看到 esp32 by Espressif Systems，点击右下角的安装，等待安装完成即可。这个过程可能比较慢，取决于网络，请耐心等待。如果安装失败，可以尝试重新安装。

![Image](Image-16469662638152.png)

在这一步中，笔者更改 esp32 的各个版本尝试，都没能成功。这种情况下应改用手动安装方式。

注意如果这里安装失败，要把 `用户文件夹\AppData\Local\Arduino15\` 路径下下载失败的内容清理掉。

---

二、方法二：手动安装

1、用 `${Arduino}` 表示 Arduino 软件的安装目录。
在 `${Arduino}/hardware` 文件夹下建一个文件夹 espressif，然后将 arduino-esp32（[espressif/arduino-esp32: Arduino core for the ESP32 (github.com)](https://github.com/espressif/arduino-esp32)） 克隆到这里（git clone 或者 下载安装包都可以）。

![Image](Image-16469667339993.png)

点击 tools 文件夹下的 get.exe 安装编译器。（将文件夹名 arduino-esp32 改成 esp32，编译的时候不会有警告）

2、开发板选项中出现 esp32 开发板

![Image](Image-16469667911374.png)

#### 编译的时候又报错，说找不到 xtensa-esp32-elf-g++ 编译器。。。

3、上一步的问题在于，运行 tools 文件夹下的 get.exe 的时候其实没有运行成功，而是中断了（因为要下载东西，估计也是网络问题）。这个程序的功能是下载几个东西，中断后下载失败。

${Arduino}/hardware/espressif/esp32/tools 目录下经过运行 get.exe 应该有以下几个文件夹，如果没有，说明 get.exe 运行失败。

![Image](Image-16469668587285.png)

4、分析缺失的内容，然后手动下载

有可能因为版本不同，需要的文件夹不同，具体需要哪些文件夹，可以查看 get.py：

```python
if __name__ == '__main__':
    identified_platform = identify_platform()
    print('Platform: {0}'.format(identified_platform))
    tools_to_download = load_tools_list(current_dir + '/../package/package_esp32_index.template.json', identified_platform)
    mkdir_p(dist_dir)
    for tool in tools_to_download:
        get_tool(tool)
    print('Platform Tools Installed')
```

发现是根据  `../package/package_esp32_index.template.json` 这个文件中的内容来下载东西。

打开该文件可以看到，要安装的第一个 tools 模块是 riscv32-esp-elf-gcc（版本不同有可能稍有区别），下面给出了不同系统架构下的该软件的下载链接。

![image-20220311105435361](image-20220311105435361.png)

为了确认自己的 host 类型，可以运行一下前面的 get.exe，在命令行界面刚出来的时候，会显示系统信息和平台信息。如：

```
System: Windows, Info: Windows-10-10.0.17763

Platform: i686-mingw32
```

所以就下载 i686-mingw32 下面对应的下载链接中的内容，下载后解压放到 `${Arduino}/hardware/espressif/esp32/tools` 目录下。

其他模块类似，都是下载相应的版本然后放在一起就行。注意有的模块下载后文件夹的命名可能需要修改，不要带有版本号等其他信息。

![Image](Image-16469673472086.png)

全部模块都下载后就可以在 Arduino 软件中选择开发板，并正常编译了。





