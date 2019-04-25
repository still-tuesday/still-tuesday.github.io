const mongoose = require ('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const PostSchema = mongoose.Schema({
    postTitle: {
        type: String,
        required: true
    },
    postDesc: {
        type: String,
        required: true
    },
    postFilePath: {
        type: String,
        required: true
    },
    featuredImageURL: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Post', PostSchema);