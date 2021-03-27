const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

//init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//allow cross origin
app.use(cors());

//routes
app.get("/");

app.listen(port, () => console.log(`Server id running at Port ${port}!`));
