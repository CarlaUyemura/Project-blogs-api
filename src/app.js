const express = require('express');
require('express-async-errors');
const { userRouter } = require('./router/user.router');
const { loginRouter } = require('./router/login.router');
const { categoryRouter } = require('./router/categories.router');
const errorMiddleware = require('./middlewares/error');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use(errorMiddleware.error);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
