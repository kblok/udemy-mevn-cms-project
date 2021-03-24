const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema({
    name: {
        type: String
    },
    slug: {
        type: String
    },
})

const Category = (module.exports = mongoose.model('Category', CategorySchema));