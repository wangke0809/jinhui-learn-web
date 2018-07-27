# AJAX

本文主要介绍AJAX概念和实现。

## 什么是AJAX

`AJAX`是`Asynchronous JavaScript and XML`的缩写，字面翻译为`异步的JavaScript和XML`,大致解释为使用`JavaScrip`异步请求网络。

需要注意的是：

- `AJAX`不是新的编程语言，而是一种使用现有标准的**方法**。
- `AJAX`最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。  
- `AJAX`不需要任何浏览器插件，但需要用户浏览器允许执行`JavaScript`。 

## AJAX原理

浏览器访问一个站点页面是通过`HTTP`协议访问，`AJAX`当然也一样，整体上来说，`AJAX`的原理为当页面加载完成后，通过`JavaScript`发送一次`HTTP`请求，请求后端接口获取数据，然后使用获取到的数据，那么这里就涉及到关键的一点，如何使用`JavaScript`发送`HTTP`请求？



### **XMLHttpRequest 对象** 

`XMLHttpRequest 对象`用于发起`HTTP`请求和服务器交换数据。主要参考[这里](http://www.w3school.com.cn/ajax/ajax_xmlhttprequest_create.asp)，可以看一下参考链接的`XHR 创建对象`，`XHR 请求`，`XHR 响应`，`XHR readyState`四个部分。 关于这个对象，需要知道2个方法1个事件4个状态：



```javascript
// 两个方法

// 规定请求的类型、URL 以及是否异步处理请求。
// method：请求的类型；GET 或 POST
// url：文件在服务器上的位置
// async：true（异步）或 false（同步）
open(method,url,async)
// 将请求发送到服务器。
// string：仅用于 POST 请求
send(string)

// 一个事件

// onreadystatechange 事件

// readyState 的四个状态
```

## 做个试验

使用`npm`创建工程在`nodejs`目录下的文档已经提到，本目录(`ajax`)下`server.js`为服务端程序，已经详细注释。`ajax.html`用不同方式实现了`AJAX`。通过`npm start`运行工程，服务端接口参见`server.js`具体内容。当然，别忘了先`npm install`。

接口提示：

GET接口：`/love?name=xxx`
POST接口：`/post`，参数名`name`
ajax.html页面：`/ajax.html`

## 作业！

见ajax.html

```javascript
// 使用XMLHTTP对象，完成下面my_ajax函数
// 输入类似jq的ajax，传入一个config
// config中包含请求类型，参数，以及成功回调函数
function my_ajax(config){

}

// 通过调用my_ajax实现get请求接口
function my_get() {
	var config = {};
	my_ajax(config);
}

// 通过调用my_ajax实现post请求接口
function my_post() {
	var config = {};
	my_ajax(config);
}
```
