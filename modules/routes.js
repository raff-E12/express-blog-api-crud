
// Creazione delle rotte del sito in questione

const express =  require("express");
const { ShowPosts , IdPostsSearch, QueryPostsTagsSearch, DeleteIDPostsLists, AddPostinList, ModifiedPostsinList} = require("./controllers/controllers.js");
const posts = require("./posts.js");

const routes = express.Router();

// Prima Rotta:

routes.get("/posts/all", ShowPosts);

// Seconda Rotta:

routes.get("/posts/all/:id", IdPostsSearch);

// Terza Rotta:

routes.get("/posts", QueryPostsTagsSearch);

// Quarta Rotta

routes.delete("/posts/:id", DeleteIDPostsLists);

// Sesta Rotta

routes.post("/posts/all", AddPostinList);

// Settima Rotta

routes.patch("/posts/all/:id", ModifiedPostsinList);

module.exports = routes