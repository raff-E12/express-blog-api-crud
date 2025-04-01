
// Funzioni delle rotte corrispondenti:

const express = require("express");
const posts  = require("../posts");

const ShowPosts = (req, res) =>{
    return res.status(200).json({msg: "Benvenuto nella lista dei Post:", posts: posts});
}

const IdPostsSearch = (req, res) => {
    const Number_index = parseInt(String(req.params.id).slice(1));
    // console.log(Number_index);
    if (isNaN(Number_index)) {
        return res.send(401).json({ msg: "Il Parametro non è un numero, mi dispiace."});
    }
    const finder_posts = posts.find( post => post.id === Number_index);

    if (!finder_posts) {
        return res.status(404).json({ msg: "Post non è stato trovato"});
    }

    // console.log(finder_posts);
    return res.status(200).json({ msg: "Ecco il Post che hai cercato:", post: finder_posts});
}

const QueryPostsTagsSearch = (req, res) =>{
    // console.log(req.query);
    const { query: {tags, tags2} } = req;
    // console.log(tags, tags2);
    const tags_vl = [tags, tags2];
    let tags_posts_finder = posts.filter( post => { return tags_vl.some( tag => post.tags.includes(tag)) });
    // console.log(tags_posts_finder);
    if (tags_posts_finder.length === 0) {
        return res.status(401).json({ msg: "I post con i tag usati non esistono"});
    }
    return res.status(200).json({ msg: "Ecco i post trovati con i tag:", posts: tags_posts_finder });
}

const DeleteIDPostsLists =  (req, res) =>{
    const params_id = parseInt(String(req.params.id).slice(1));
    // console.log(params_id);
    if (isNaN(params_id)) {
        return res.send(401).json({ msg: "Il Parametro non è un numero, mi dispiace."});
    }
    const finder_posts = posts.findIndex( post => post.id === params_id);
    // console.log(finder_posts);
    if (!finder_posts) {
        return res.status(404).json({ msg: "Post non è stato trovato"});
    }
    posts.splice(finder_posts, finder_posts);
    return res.status(200).json({ msg: "L'operazione è stata eseguita con successo"});
}

const AddPostinList = (req, res) => {
    const { body } = req;
    // console.log(body);
    const posts_add = { id: posts[ posts.length - 1].id + 1, ...body};
    posts.push(posts_add);
    return res.status(200).json({ msg: "Il post è stato aggiunto con successo"});
}

const ModifiedPostsinList =  (req, res) =>{
    const { params: { id }, body } = req;
    const index_post = parseInt(String(id).slice(1));
    // console.log(index_post);
    if (isNaN(index_post)) {
        return res.status(401).json({ msg: "Il valore deve essere un numero."});
    }
    const finder_post = posts.find( post => post.id === index_post);
    if (!finder_post) {
        return res.status(404).json({ msg: "Il post corrispondente non esiste."});
    }
    posts[finder_post] = {...posts[finder_post], ...body};
    return res.status(200).json({ msg: "Il post è stato aggiornato, con successo."});
}

module.exports = {
    ShowPosts,
    IdPostsSearch,
    QueryPostsTagsSearch,
    DeleteIDPostsLists,
    AddPostinList,
    ModifiedPostsinList
}