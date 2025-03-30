
// Creazione delle rotte del sito in questione

import express from "express"
import { ShowPosts , IdPostsSearch, QueryPostsTagsSearch, DeleteIDPostsLists} from "./controllers/controllers.mjs";
import posts from "./posts.mjs";

const routes = express.Router();

// Prima Rotta:

routes.get("/posts/all", ShowPosts);

// Seconda Rotta:

routes.get("/posts/all/:id", IdPostsSearch);

// Terza Rotta:

routes.get("/posts", QueryPostsTagsSearch)

// Quarta Rotta

routes.delete("/posts/:id", DeleteIDPostsLists)

export default routes