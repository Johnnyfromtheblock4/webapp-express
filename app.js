// importo express
const express = require("express");

// importo il pacchetto cors
const cors = require("cors");

// importo il middleware imagePathMiddleware
const imagePathMiddleware = require("./middlewares/imagePathMiddleware");

// importo il middleware notFound
const notFound = require("./middlewares/notFound");

// importo errorsHandler
const errorsHandler = require("./middlewares/errorsHandler");

// creo l'istanza dell'appa attraverso il mertodo express che ho importato
const app = express();

// definisco il numero della porto sulla quale far girare l'applicazione
const port = process.env.PORT;

// importo il ruoter
const movieRouter = require("./routers/movieRouter");

// registro il middleware per il cors
app.use(cors({ origin: process.env.FE_APP }));

// importo il middleware
app.use(express.static("public"));

// definisco l'imagePath
app.use(imagePathMiddleware);

// definisco la rotta base
app.get("/", (req, res) => {
  res.send("Rotta base del mio blog");
});

// definisco le rotte per i film
app.use("/api/movies", movieRouter);

// definisco il middleware notFound
app.use(notFound);

// definisco il middleware errorsHandler
app.use(errorsHandler);

// dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
