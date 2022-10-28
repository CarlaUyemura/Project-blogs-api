const express = require('express');
// const { userRouter } = require('./router/user.router');
const errorMiddleware = require('./middlewares/error');
require('express-async-errors');
const { loginRouter } = require('./router/login.router');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
// app.use('/user', userRouter);
app.use(errorMiddleware.error);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
