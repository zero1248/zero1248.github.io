---
title: Git 与 Github
tags:
  - 软件使用
  - Github
abbrlink: 4cd2af9a
date: 2019-02-20 13:43:23
---

---

### 〇、Github 与 Git 的关系

#### 1、Git 与 Github 简介

- Git 是一款免费、开源的分布式版本控制系统
- GitHub 是一个面向开源及私有软件项目的托管平台，因为只支持 Git 作为唯一的版本库格式进行托管，故名 GitHub。另外还有其他的平台，如国内的 [码云](https://gitee.com/) 
- Git 负责本地的代码版本控制，而 Github 负责远程托管

<!--more-->

#### 2、Git 的工作流程：

- 1）在工作目录（Working Directory）中修改文件。

- 2）暂存文件，将文件的快照放入暂存区域（Staging Area）。

- 3）提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录（Repository）。

- 其中：

  - Git **仓库目录 ** 是 Git 用来保存项目的元数据和对象数据库的地方。 这是 Git 中最重要的部分，从其它计算机克隆仓库时，拷贝的就是这里的数据。
  - **工作目录** 是对项目的某个版本独立提取出来的内容。 这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。
  - **暂存区域** 是一个文件，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中。 有时候也被称作`‘索引’'，不过一般说法还是叫暂存区域。

  [![1550655399046](https://i.loli.net/2019/02/22/5c6f7b352931b.png)]()

#### 3、Git 与 Github关系图示：

![1550656393570](https://i.loli.net/2019/02/22/5c6f7b3522b74.png)

---

### 一、注册 Github 账号

注册没有难度，这里不赘述，建议使用简单大方的用户名和注册邮箱，方便后期使用。

网址： [Github](https://github.com/)

---

### 二、下载安装 Git

网址： [Git](https://book.git-scm.com/downloads) （如果链接打不开可在网上搜索其他下载站点）

软件安装也没有什么难度，安装完成之后在任意文件夹下右键出现 Git Bash Here 说明安装成功。

在任意文件夹中都可以使用 Git Bash Here，既可以将所有需要代码版本管理的项目放在同一个文件夹中，也可以分散在任意地方，建议前者。

关于 Git 的一些资料

[Reference Manual](https://book.git-scm.com/docs)（可查看各种 Git 指令的说明）

[Pro Git](https://book.git-scm.com/book) （Git 的详细介绍）

---

### 三、安装 Git 后的配置

#### 1、如果是个人使用

大部分配置可以暂时忽略，仅设置用户名称和邮件地址即可：

通过 Git Bash Here 进入命令行界面，输入：

`git config --global user.name "YourName"`  （引号不可省略）

`git config --global user.email YourEmail`

YourName 和 YourEmail 设置成你 Github 里注册的用户名和邮箱。

**这里的设置是为了让 Github 根据用户名和邮箱去确定代码上传者的信息，也可以只设置其中一个。**

#### 2、如果是团队使用

若需要设置统一的提交信息格式，可以创建一个模板文件，通过 commit.template 来设置模板文件。

也可以通过 core.editor 修改编辑**提交信息**的默认编辑器。

详情都请查看 [Reference Manual](https://book.git-scm.com/docs) 中的 [自定义 Git - 配置 Git](https://book.git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-%E9%85%8D%E7%BD%AE-Git) ，也可以输入 `git config` 自行探索。

---

### 四、创建自己的代码仓库

#### 1、在 Github 上创建 Repository

1）点击 Github 页面右上角 “+” 号，点击 New repository

![1550660057745](https://i.loli.net/2019/02/22/5c6f7b3519899.png)

2）填写基本信息后，点击 Create repository

![1550660339034](https://i.loli.net/2019/02/22/5c6f7b3540ee4.png)

3）建成的仓库如下图

![1550660390202](https://i.loli.net/2019/02/22/5c6f7c69a0e58.png)

- README.md 文件是 markdown 格式的文件，通常用来描述项目信息（可以看看其他人是怎么写的），可以后期自己建立并上传。Github 会显示根目录下的 md 文件内容。

- 如果需要删除代码仓库，点击上图中的 Settings，在页面最下方的 Danger Zone 中有 Delete  this repository 按钮。

#### 2、在本地建立 Repository

##### 添加 SSH key

###### Github 的仓库链接有两种格式：

- https 格式，例如 https://github.com/YourName/YourRepo.git 
- SSH 格式，例如 git@github.com:YourName/YourRepo.git

- 两种形式的地址都可以用于 Github 与本地 Git 建立连接，但是如果用的是 https，每次上传代码的时候，都需要输入 Github 用户名和密码，因此**建议使用 SSH**。

###### 生成 SSH key 的步骤：

- 提示： Git Bash 命令行界面中，复制/粘贴的快捷键分别是 Ctrl+Ins 和 Shift+Ins

1> 在任意文件夹内右击，选择 Git Bash Here，进入命令行界面。

2> 输入 `ssh-keygen -t rsa -C "YourEmail@YourEmail.com"`

​	引号内是 Github 的登录邮箱，引号不能省略。

3> 一般不建议修改 SSH Key 的保存目录，因此连按三下回车，选择默认路径以及无密码。从提示信息中可以找到你的电脑上 SSH Key 的保存位置。

4> 从 3> 中的保存位置找到 id_rsa.pub 文件，通常路径为 `C:\Users\Administrator\.ssh`，用记事本或其他编辑软件打开并复制里面的内容。也可以在 Git Bash 命令行界面中输入 clip < ~/.ssh/id_rsa.pub 后按回车，若无错误提示表示复制成功。

5> 打开 Github，鼠标指向自己的头像，选择 Settings。

6> 在左边栏中选择 SSH and GPG keys，点击 New SSH Key，添加复制的 SSH Key 即可。如果个人有多台电脑，为了方便区分，SSH Key 的 Title 取一个辨识度较高的名字。

7> Git Bash 命令行界面中输入 `ssh -T git@github.com`

​	问是否继续连接，输入 yes ，按回车。

​	如果出现 `Hi YourName! You've successfully authenticated, but GitHub does not ...` 说明设置成功了。

##### 本地建立 Repository

###### 方法一：（git clone 指令）

使用 git clone 指令可以直接将 Github 上的代码仓库（可以是新建的，也可以是已经有内容的） clone 到本地仓库。

步骤如下：

1> 在 Github 页面进入准备 clone 到本地的代码仓库，点击如下图①位置的 Clone or download 即可复制代码仓库链接。注意应使用 SSH 格式的链接，在②位置可以切换两种格式。

![1550770191930](https://i.loli.net/2019/02/22/5c6f7b3549236.png)

2> 在欲存放代码的地方进入 Git Bash（不需要自己再建立文件夹），输入 `git clone git@github.com:YourName/YourRepo.git`（复制的仓库链接），即可完成本地仓库的建立。此时可直接上传新的代码文件至 Github，具体操作见后文。 

注意：如果选择了 https 格式的地址，想修改成 SSH 格式的地址，可以按照以下步骤操作：

git remote rm origin # 移除当前远端服务器

git remote -v # 查看当前 Github 仓库服务器地址，无返回信息说明已移除

git remote add origin git@github.com:YourName/YourRepo.git # 添加 SSH 格式地址

git remote -v # 再次查看当前 Github 仓库服务器地址，是否已修改成功

###### 方法二：（git init 指令）

使用 git init 指令可以在本地初始化一个代码仓库，然后与 Github 上的代码仓库进行连接，操作如下：

1> 在欲存放代码的地方建立项目文件夹，进入该文件夹后右击进入 Git Bash，输入 `git init`，可以看到此时在文件夹中生成了一个隐藏的 .git 文件夹，此文件夹内存放着此代码仓库的各种信息。

2> 如果在安装好 Git 后已经配置了用户名和邮箱，此步骤可跳过，否则输入

`git config --global user.name "YourName"`  （引号不可省略）

`git config --global user.email YourEmail`	

3> 输入 `git remote add origin git@github.com:yourName/yourRepo.git`，依旧建议使用 SSH 格式地址。此时就建立起了与 Github 服务器的连接。

在方法一中，由于是直接 clone 远端的 Github 仓库的内容，所以无论是新建的 Github 仓库，还是已经上传过内容的 Github 仓库，都可以完整地克隆到本地。

但在方法二中，由于是从本地先初始化了一个代码仓库，仓库中无任何内容，所以如果本地仓库中的内容和 Github 仓库中的内容不一致（例如 Github 仓库初始化时生成了 README.md 文件），就需要先把 Github 仓库中的内容下载（pull）到本地，保持两者的一致性之后，才能上传（push）代码到 Github 仓库，具体操作是输入 `git pull origin master` ，等代码下载完成，即可添加新内容并上传。

---

### 五、简单 Git 操作指令

#### 1、push 代码到 Github

假设要 push 一个名为 123.txt 的文件，在项目文件夹中进入 Git Bash，分别输入以下内容：

`git add 123.txt  # 将文件内容添加到缓存区快照`

`git commit -m "123.txt" # 将改动点记录到代码仓`

`git push origin master # 将改动提交到 Github 远端服务器，分支为 master`

说明：

- 若一次提交多个文件，可使用 `git add .` ，注意 "." 不能省略

- 第二行中引号内的内容是提交信息，会显示在 Github 上，如果需要提交很多信息，输入 `git commit` 即可，会弹出默认编辑器 GUN nano，如果不会使用该编辑器，可以运行 `git config --global core.editor "F：\Program Files\Sublime Text 3\sublime text.exe"` ，其中引号中是想修改的新编辑器的路径，根据自己电脑上的位置修改。

- master 是指该仓库的 master 分支，关于分支的概念请参考 Git 官网。

#### 2、从 Github pull 代码

`git pull origin master`

#### 3、查看工作目录状态

`git status`

以上几个指令是个人使用时最常用的指令，如果多人合作，或 fork 其他人的项目，可以从官网查询其他指令。