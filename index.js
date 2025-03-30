
// Creazione Della Struttura del server:

import express from "express"
import routes from "./modules/routes.mjs";

const app = express();
const port = 8000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("Risposta inviata con successo.");
    return res.status(201).json({msg: "Bevenuto nel mio Api."});
})

app.use("/api", routes);

app.listen(port, () => {return console.log(`>> Ecco il server in esecuzione: http://localhost:${port}/`)});