
// Funzioni delle rotte corrispondenti:

import express from "express"
import posts from "../posts.mjs"

const ShowPosts = (req, res) =>{
    return res.status(201).json({msg: "Benvenuto nella lista dei Post:", lista: posts});
}

export {
    ShowPosts,
}