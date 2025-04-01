
// Implementazione del middleware.

const MsgMiddlewareErrorPath = (req, res, next) =>{
    console.log("Middleware Attivo...");
    res.status(404).json({ msg: "Mi dispiace il risulto che cerchi non esiste."});
    next();
}

const MsgMiddlewareErrorServer = (error, req, res, next) =>{
    console.log("Middleware:", error);
    res.status(500).json({ msg: "Errore del Server, Riprova e Ricarica."});
    next();
}

module.exports =  {
    MsgMiddlewareErrorPath,
    MsgMiddlewareErrorServer
}