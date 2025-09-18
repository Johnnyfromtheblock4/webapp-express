// importo express
const express = require("express");
const connection = require("./data/db");

// creo l'istanza dell'appa attraverso il mertodo express che ho importato
const app = express();

// definisco il numero della porto sulla quale far girare l'applicazione
const port = 3000;

// definisco la rotta base
app.get("/", (req, res) => {
  res.send("Rotta base del mio blog");
});

// dico al server di rimanere in ascolto sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});

