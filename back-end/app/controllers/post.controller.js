const Post = require("../models/post.model");

const log = console.log;

getPostByTitle = (req, res) => {
  Post.paginate(
    {
      postTitle: req.params.title
    },
    {
      page: 1,
      limit: 5,
      sort: {
        createdAt: -1
      }
    }
  )
    .then(posts => {
      res.status(200).send(posts);
    })
    .catch(err => {
      res.status(400).send(`Error: ${err}`);
    });
};

getPostsByCategory = (req, res) => {
  Post.paginate(
    {
      category: req.params.category
    },
    {
      page: req.params.page,
      limit: 5,
      sort: {
        createdAt: -1
      }
    }
  )
    .then(posts => {
      res.status(200).send(posts);
    })
    .catch(err => {
      res.status(400).send(`Error: ${err}`);
    });
};

// addPost = (req, res) => {
//   const newPost = new Post({
//     postTitle: req.body.postTitle,
//     postDesc: req.body.postDesc,
//     postFilePath: req.body.postFilePath,
//     featuredImageURL: req.body.featuredImageURL,
//     category: req.body.category
//   });

//   newPost
//     .save()
//     .then(post => {
//       res.status(200).send(post);
//     })
//     .catch(err => {
//       res.status(400).send(`Error: ${newPost} ${err}`);
//     });
// };

// updatePost = (req, res) => {
//   const updatedPost = new Post({
//     postTitle: req.body.postTitle,
//     postDesc: req.body.postDesc,
//     postFilePath: req.body.postFilePath,
//     featuredImageURL: req.body.featuredImageURL,
//     category: req.body.category
//   });

//   Post.findOneAndUpdate(
//     {
//       postTitle: req.body.postTitle
//     },
//     updatedPost
//   )
//     .then(post => {
//       res.status(200).send(post);
//     })
//     .catch(err => {
//       res.status(400).send(`Error: ${err}`);
//     });
// };

// deletePost = (req, res) => {
//   Post.remove({
//     _id: req.params.id
//   }).catch(err => {
//     res.status(400).send(`Error: Could not delete | ${err}`);
//   });
// };

module.exports = {
  getPostByTitle,
  getPostsByCategory,
  // addPost,
  // updatePost,
  // deletePost
};
