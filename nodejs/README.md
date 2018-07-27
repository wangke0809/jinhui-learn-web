# nvm

nvm项目地址：https://github.com/creationix/nvm

## What is nvm?

**官方介绍**：Node Version Manager - Simple bash script to manage multiple active node.js versions.  

`nvm`其实就是个`Node.js`的版本管理工具，假如你要在不同版本的`Node.js`环境下测试程序，由于电脑上只能存在一个版本的`Node.js`，你要先卸载掉，然后安装其他版本的，岂不是很麻烦？`nvm`就是用来解决这个问题的，只需要通过简单的命令，你就可以安装不同版本的`Node.js`，并且可以轻松的切换`Node.js`的版本。

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

最后检查是否安装成功`nvm --version`，如果显示nvm版本，那么安装就完成了。mac下如何安装，去官网看一眼，目前你的开发环境已经配置好了，安装`nvm`的过程看看就好，自己可以先不装。

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

## 举个例子

以AJAX项目为例，AJAX的项目中服务端使用koa2搭建，所以本地需要先安装一下koa2，命令如下 

```bash
npm i koa # or npm install koa
```

这里值得注意的是，`npm i`完全等同于`npm install`，`i`是`install`的一个别名，一个缩写。 

执行完安装命令后，最后会提示安装失败： 

```bash
npm WARN enoent ENOENT: no such file or directory, open '/ajax/package.json'
```

原因是没有找到`package.json`文件，好吧，那我这样安装： 

```bash
npm i koa -g
```

`g`是`global`的首字母，意思是全局安装，全局安装的话：


- 将安装包放在 /usr/local 下或者你 node 的安装目录。 
- 可以直接在命令行里使用。 

然后新建了一个`server.js`文件，引入`koa`，写一个简单的`Hello World`：

```js
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

通过命令`node server.js`运行这个脚本，在浏览器中`http://127.0.0.1:3000`可以看到`Hello World`。  

之前带你刷过你一koa2文档，不知道你还记得不...反正我是记得，我想起来几个必须的koa`中间件`，以管理静态资源为例，我要引入`koa-static`，同样的，我需要：

```bash
npm i koa-static -g
```

具体如何用这个中间件，这里先不介绍。至此，我又为这个AJAX项目安装了一个新的包，那么问题来了，其他人下载这个工程后，是不是也要手动敲命令行，一条一条去安装包，一两个包还好，几十个依赖包的时候岂不是很麻烦，怎么办？看下面喽。


## npm init

`npm init`用来初始化生成一个新的`package.json`文件。 运行后他会一步一步提问，对package.json文件进行配置，如项目名称，作者，项目地址等。也可以直接`npm init -y`跳过提问环节，直接生成一个新对`package.json`文件。

我使用`npm init -y`生成的`package.json`文件内容如下：

```json
{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

这个时候再试试执行命令`npm i koa`，此时就可以成功安装了，执行后会在工程目录下新建一个`node_modules`目录，该目录下为`npm`安装的各种依赖包。再打开`package.json`看看？发现内容没什么变化。执行`npm i koa`只是把包安装到了本地，包并没有写入`package.json`中，如何写入？安装的时候增加参数`--save`或者`-S`，二者等价：`npm i koa --save`，执行该命令后，`package.json`内容如下：

```json
{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "koa": "^2.5.2"
  }
}
```

观察发现，增加了`dependencies`一项，而且可以知道，安装的`koa`版本是`2.5.2`，`npm`如何安装指定版本的包与`2.5.2`前面的`^`表示什么意思？去[npm官网](https://docs.npmjs.com/cli/install)看看，或者百度下吧。

这里我对`package.json`进行修改：

```json
{
  "name": "ajax",
  "version": "1.0.0",
  "description": "learn ajax: simple ajax server",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "koa": "^2.5.2"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/wangke0809/jinhui-learn-web.git"
  }
}
```

之前不是通过`node server.js`运行脚本吗？所以在`package.js`中修改了入口函数`main`为`server.js`,在`scripts`中增加了`start`命令，命令内容为`node server.js`，这样的话就可以通过`npm start`或者`npm run start`来运行该脚本了。因为目前项目比较简单，我可以`node server.js`，当项目变得负责后，`node server.js`后面可能要跟一大堆参数，每次输入该命令很麻烦，所以通过`npm`中的`script`保存这些命令和参数，这样让开发变得更加优雅。

可以看看自己项目中的`package.json`有什么内容？

## npm install

当其他人下载了项目后，因为之前通过`package.json`管理了依赖，其他人只需输入`npm install`就可以下载所有的依赖包啦。

简单总结下吧：

- **npm install packageX**
  - 会把`packageX`包安装到`node_modules`目录中
  - 不会修改`package.json`
  - 之后运行`npm install`命令时，不会自动安装 该`packageX`
- **npm install packageX --save**
  - 会把`packageX`包安装到node_modules目录中 
  - 会在`package.json`的**`dependencies`**属性下添加 `packageX`
  - 之后运行`npm install`命令时，会自动安装`packageX`到`node_modules`目录中 
- **npm install packageX –save-dev**
  - 会把`packageX`包安装到`node_modules`目录中 
  - 会在`package.json`的**`devDependencies`**属性下添加 `packageX`
  - 之后运行`npm install`命令时，会自动安装`packageX`到`node_modules`目录中 
- **npm install --production **
  - 安装`package.json`中`dependencies`里面的包，不会安装`devDependencies`里面的包

一般，运行时需要用到的包使用`--save`或者`-S`，开发时需要用到的包使用`--save-dev`或者`-D`。 



还有一点，还记得`.gitignore`吗？忽略不需要被`git`管理的文件，`node_modules`就不需要，于是我**谷歌**(写文章的时候百度了一下，没啥有用的信息，所以，你懂的)了一下`npm .gitignore`，找到了[这个](https://github.com/github/gitignore/blob/master/Node.gitignore)，把他放到了`ajax`目录下。



## 其他问题

- [npm install 生成的package-lock.json是什么文件？](https://www.zhihu.com/question/62331583)
- [npm和yarn的区别](https://juejin.im/post/5ab89cc4f265da237506e367)



没人会拿npm当面试问题吧...自己理解，会用就好喽。更复杂的配置，看自己项目和开源的项目吧。