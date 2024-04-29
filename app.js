const Koa = require("koa");
const json = require("koa-json");
const bodyParser = require("koa-bodyparser");
const router = require('./router');
const responseHandler = require("./handler/response");

const app = new Koa();

app.use(responseHandler());
app.use(json());
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

const port = 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
