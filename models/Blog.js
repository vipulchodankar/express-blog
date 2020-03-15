const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://picsum.photos/seed/picsum/400/225"
    },
    body: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;