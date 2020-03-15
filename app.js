const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");

mongoose.connect("mongodb://localhost/expressBlog", { useUnifiedTopology: true, useNewUrlParser: true });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect("/blogs");
})

app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log("ERROR!", err);
        } else {
            res.render("index", { blogs: blogs });
        }
    })
})

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
    console.log(`Blog running at http://localhost:${PORT}`);
})