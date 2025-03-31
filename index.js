
// Creazione Della Struttura del server:

import express from "express"
import routes from "./modules/routes.mjs";

const app = express();
const port = 8000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Risposta inviata con successo.");
    return res.status(201).json({msg: "Bevenuto nel mio Api."});
})

app.get("/doc", (req, res) => {
    return res.status(201).json({ msg: "Questo è un Progetto fatto per lo scopo dimostrativo, quindi in qualsiasi caso può variare e aggiornarsi nel tempo con le varie modifiche."});
})

app.use("/api", routes);

app.listen(port, () => {return console.log(`>> Ecco il server in esecuzione: http://localhost:${port}/`)});