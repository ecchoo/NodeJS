const express = require("express");
const productRouter = require("./routes/productRoutes");
const basketRouter = require("./routes/basketRoutes");


const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Добавляем PUT
    next();
});

app.use('/api/products', productRouter)
app.use('/api/basket', basketRouter)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
