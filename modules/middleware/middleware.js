
// Implementazione del middleware.

const MsgMiddlewareErrorPath = (req, res, next) =>{
    console.log("Middleware Attivo...");
    res.status(404).json({ msg: "Mi dispiace il risulto che cerchi non esiste.", status: 404});
    next();
}

const MsgMiddlewareErrorServer = (error, req, res, next) =>{
    console.log("Middleware:", error.stack);
    res.status(error.status || 500).json({ msg: "Errore del Server, Riprova e Ricarica.", status: 500});
    next();
}

module.exports =  {
    MsgMiddlewareErrorPath,
    MsgMiddlewareErrorServer
}