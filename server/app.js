const express = require("express");
const session = require('express-session');
const productRouter = require("./routes/productRoutes");
const basketRouter = require("./routes/basketRoutes");
const authRouter = require('./routes/authRoutes')
const profileRouter = require('./routes/profileRoutes')

const app = express();
const port = process.env.PORT || 3000;

app.use(session({
    secret: 'secret',
    resave: false,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000
    },
    saveUninitialized: true
}));

app.use(express.json());

app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.sendStatus(200); // Отправляем статус 200 для успешного ответа на запрос OPTIONS
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


app.use('/api/products', productRouter)
app.use('/api/basket', basketRouter)
app.use('/api/auth', authRouter)
app.use('/api/profile', profileRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
