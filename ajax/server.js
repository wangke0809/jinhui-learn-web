const Koa = require('koa');
const json = require('koa-json');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();

// 使用json中间件
app.use(json());
// 使用static中间件
app.use(serve(
    path.join( __dirname, '.')
));

app.use(async (ctx, next) => {
    await next();
    ctx.body = { message: 'I love u.' }
});

app.listen(3000);
console.log('app started at port 3000...');
