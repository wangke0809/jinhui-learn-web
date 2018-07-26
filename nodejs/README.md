# nvm

nvm项目地址：https://github.com/creationix/nvm

## What is nvm?

**官方介绍**：Node Version Manager - Simple bash script to manage multiple active node.js versions.  

nvm其实就是个Node.js的版本管理工具，假如你要在不同版本的Node.js环境下测试程序，由于电脑上只能存在一个版本的Node.js，你要先卸载掉，然后安装其他版本的，岂不是很麻烦？nvm就是用来解决这个问题的，只需要通过简单的命令，你就可以安装不同版本的Node.js，并且可以轻松的切换Node.js的版本。

## Installation

关于软件的安装，一定要去官网看，官网一般都会有安装说明，浏览官网后，摘抄我在`Ubuntu16.04`下的安装步骤：

### Install script

To install or update nvm, you can use the install script using cURL: 

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

The script clones the nvm repository to `~/.nvm` and adds the source line to your profile (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or` ~/.bashrc`).

**Note**: On Linux, after running the install script, if you get nvm: command not found or see no feedback from your terminal after you type:

```bash
command -v nvm
```

最后检查是否安装成功`nvm --version`，如果显示nvm版本，那么安装就完成了。

## Usage

如何使用？当然也要去官网看啦，或者`nvm --help`。这里简单介绍下如果使用。

```bash
# 安装Node.js 7
nvm instal 7
# 查看版本
node -v
$ v7.10.1
# 安装Node.js 8
nvm instal 8
# 查看版本
node -v
$ v8.11.3
# 切换到Node.js 7
nvm use 7
$ Now using node v7.10.1 (npm v4.2.0)
# 切换到Node.js 8
nvm use 8
$ Now using node v8.11.3 (npm v5.6.0)
```

是不是很简单，很方便？

# npm

npm是Node.js的包管理工具，这个你应该很熟悉啦，安装Node.js时，npm也已经安装好了。由于你实习是基于已有的项目配置好的，所以下面介绍以下如何从头使用npm管理一个项目。

