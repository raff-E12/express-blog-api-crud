
// Creazione delle rotte del sito in questione

import express from "express"
import { ShowPosts , IdPostsSearch, QueryPostsTagsSearch} from "./controllers/controllers.mjs";
import posts from "./posts.mjs";

const routes = express.Router();

// Prima Rotta:

routes.get("/posts/all", ShowPosts);

// Seconda Rotta:

routes.get("/posts/:id", IdPostsSearch);

// Terza Rotta:

routes.get("/posts", QueryPostsTagsSearch)

export default routes