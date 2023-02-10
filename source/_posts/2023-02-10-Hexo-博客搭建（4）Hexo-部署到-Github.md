---
title: Hexo 博客搭建（4）Hexo 部署到 Github
tags:
  - 软件使用
  - Hexo
abbrlink: 8464f732
date: 2023-02-10 10:59:41
---

本系列介绍如何使用 Hexo+github pages 搭建个人博客。

本文中介绍如何将 Hexo 工程部署到 github 上，并可以通过域名访问博客。

<!--more-->

Hexo 的优点在于，只要用户配置好各项参数，执行 hexo g（或者 hexo generate）就可以生成博客的静态页面，然后只需要执行一条 hexo d（或者 hexo deploy）就可以自动推送到绑定的 {github 用户名}.github.io 仓库中，然后就可以通过仓库同名的域名来访问博客了。



打开 Hexo 工程根目录下的 _config.yml 全局配置文件，定位到 deploy 的位置，然后进行修改。

```yaml
deploy: 

 type: git

 repository: git@github.com:{github 用户名}/{github 用户名}.github.io.git

 branch: master
```

注意缩进都是两个空格，另外冒号后面要有一个空格。



然后安装 git 部署插件，在 git bash 中输入：

`npm install hexo-deployer-git --save`



最后，打开 git bash，输入

`hexo g -d`

就可以完成部署。

如果已经单独执行过 hexo g，也可以只执行 hexo d。



至此已经可以将静态页面（public 文件夹下的内容）推送到先前创建的 {github 用户名}.github.io 仓库了，并且可以使用这个名字作为域名来访问自己的博客页面。注意每次上传后需要等待一段时间，才能刷新出来最新的页面。



关于主题修改、增加功能等的内容将在后续文章中写出。
