
// Creazione delle rotte del sito in questione

import express from "express"
import { ShowPosts , IdPostsSearch, QueryPostsTagsSearch, DeleteIDPostsLists, AddPostinList, ModifiedPostsinList} from "./controllers/controllers.mjs";
import posts from "./posts.mjs";

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

export default routes