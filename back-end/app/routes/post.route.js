const express = require('express');
const router = express.Router();

const post = require('../controllers/post.controller');

const postRoute = '/api/post';

// prod
router.get(`${postRoute}/getPostsByCategory/:category/:page`, post.getPostsByCategory);
router.get(`${postRoute}/getPostByTitle/:title`, post.getPostByTitle);

// prod_write
// router.post(`${postRoute}/addPost`, post.addPost);
// router.patch(`${postRoute}/updatePost`, post.updatePost);
// router.delete(`${postRoute}/deletePost/:id`, post.deletePost);

module.exports = router;