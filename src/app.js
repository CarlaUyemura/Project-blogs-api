const express = require('express');
require('express-async-errors');
const { userRouter } = require('./router/user.router');
const errorMiddleware = require('./middlewares/error');
const { loginRouter } = require('./router/login.router');
// ...

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use(errorMiddleware.error);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
