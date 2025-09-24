// importo express
const express = require("express");
const cors = require("cors");

// importo middlewares
const imagePathMiddleware = require("./middlewares/imagePathMiddleware");
const notFound = require("./middlewares/notFound");
const errorsHandler = require("./middlewares/errorsHandler");

// creo app
const app = express();

// porto con fallback
const port = process.env.PORT || 3000;

// importo router
const movieRouter = require("./routers/movieRouter");

// middlewares globali
app.use(cors({ origin: process.env.FE_APP || "*" }));
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true })); // parse form senza file
app.use(express.static("public")); // cartella pubblica
app.use(imagePathMiddleware);

// rotta base
app.get("/", (req, res) => {
  res.send("Rotta base del mio blog");
});

// rotte API
app.use("/api/movies", movieRouter);

// error handlers
app.use(notFound);
app.use(errorsHandler);

// avvio server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
