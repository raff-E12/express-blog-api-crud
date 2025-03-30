
// Creazione delle rotte del sito in questione

import express from "express"
import { ShowPosts } from "./controllers/controllers.mjs";

const routes = express.Router();

// Prima Rotta:

routes.get("/posts", ShowPosts);

export default routes