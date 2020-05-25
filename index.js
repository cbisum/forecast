const express= require("express");
const app =express();
const path = require("path");
const port = 5000;
app.use(express.static(path.join(__dirname, "client" , "build")))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(process.env.PORT || 5000, () => {
    console.log("app running")
})