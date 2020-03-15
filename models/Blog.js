const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: String,
    image: {
        type: String,
        default: "https://picsum.photos/seed/picsum/400/225"
    },
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;