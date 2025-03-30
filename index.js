// Creazione Della Struttura del server:

import express from "express"

const app = express();
const port = 8000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.status(201).json({msg: "Bevenuto nel mio Api."});
})

app.listen(port, () => {return console.log(`>> Ecco il server in esecuzione: http://localhost:${port}/`)});