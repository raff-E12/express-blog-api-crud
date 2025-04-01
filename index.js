
// Creazione Della Struttura del server:

const express = require("express");
const  routes = require("./modules/routes.js");
const { MsgMiddlewareErrorPath, MsgMiddlewareErrorServer } = require("./modules/middleware/middleware.js");

const app = express();
const port = 8000;

app.use(express.static("public"));
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
    console.log("Risposta inviata con successo.");
    return res.status(200).json({msg: "Bevenuto nel mio Api."});
})

app.get("/doc", (req, res, error) => {
    return res.status(200).json({ msg: "Questo è un Progetto fatto per lo scopo dimostrativo, quindi in qualsiasi caso può variare e aggiornarsi nel tempo con le varie modifiche."});
})

app.use(MsgMiddlewareErrorServer);
app.use(MsgMiddlewareErrorPath);

app.listen(port, () => {return console.log(`>> Ecco il server in esecuzione: http://localhost:${port}/`)});