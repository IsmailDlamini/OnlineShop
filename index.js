import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("the api is running good");
});

app.listen(5000, console.log("running in port 5000...."));