const Koa = require('koa');
const json = require('koa-json');
const serve = require('koa-static');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
const path = require('path');

const app = new Koa();
var router = new Router();
// 使用json中间件，直接返回JSON信息
app.use(json());
// 使用static中间件，加载静态资源，HTML，CSS，JS等
app.use(serve(
    path.join( __dirname, '.')
));
// 使用解析请求参数的中间件
app.use(bodyParser());
// 使用路由中间件
// 测试GET用的路由
router.get('/love', async (ctx, next) =>{
    // 获取get请求的参数
    let name = ctx.query.name;
    ctx.body = { message: 'I love u. ' + name };
});

// 网站首页（根目录）
router.get('/', async (ctx, next) =>{
    ctx.body = { message: 'Hi~' };
});
// 测试POST用的路由
router.post('/post', async (ctx, next) =>{
    // 获取POST请求参数
    console.log(ctx.request)
    let name = ctx.request.body.name;
    ctx.body = { message: 'post data name: ' + name };
});

app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');
