const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/",async (req,res)=>{
    res.send('Test')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
