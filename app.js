// importo express
const express = require("express");

// creo l'istanza dell'appa attraverso il mertodo express che ho importato
const app = express();

// definisco il numero della porto sulla quale far girare l'applicazione
const port = process.env.PORT;

// importo il ruoter
const movieRouter = require("./routers/movieRouter");

// importo il middleware
app.use(express.static("public"));

// definisco la rotta base
app.get("/", (req, res) => {
  res.send("Rotta base del mio blog");
});

// definisco le rotte per i film
app.use("/api/movies", movieRouter);

// dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
