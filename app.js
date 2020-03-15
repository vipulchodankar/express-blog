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

app.get("/blogs/new", (req, res) => {
    res.render("new");
})

app.post("/blogs", (req, res) => {
    Blog.create(req.body.blog, (err, blog) => {
        if (err) {
            console.log("ERROR!", err);
            res.render("/new");
        } else {
            res.redirect("/blogs");
        }
    })
})

app.get("/blogs/:id", (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if (err) {
            console.log("ERROR!", err);
            res.redirect("/blogs");
        } else {
            res.render("show", { blog: blog });
        }
    })

})

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
    console.log(`Blog running at http://localhost:${PORT}`);
})