// importiamo la connessione al database
const connection = require("../data/db");

// index
const index = (req, res) => {
  // creo la query
  const sql = "SELECT * FROM movies";

  // eseguo la query
  connection.query(sql, (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ error: `Errore nell'esecuzione della query: ${err}` });
    const movies = results.map((movie) => {
      return {
        ...movie,
        image: req.imagePath + movie.image,
      };
    });
    res.send(movies);
  });
};

// show
const show = (req, res) => {
  // recupero l'id parametro
  const { id } = req.params;

  // creo la query per il movie
  const sqlMovie = "SELECT * FROM movies WHERE id = ?";

  // eseguo la query del movie
  connection.query(sqlMovie, [id], (err, resultMovie) => {
    if (err) {
      return res.status(500).json({
        error: `Errore nell'esecuzione della query: ${err}`,
      });
    }

    if (resultMovie.length === 0) {
      return res.status(404).json({ error: "Film non trovato" });
    }

    // creo l'oggetto movie con immagine
    const movie = {
      ...resultMovie[0],
      image: req.imagePath + resultMovie[0].image,
    };

    // creo la query per le reviews 
    const sqlReviews = "SELECT * FROM reviews WHERE movie_id = ?"; 

    // eseguo la query delle reviews 
    connection.query(sqlReviews, [id], (err, resultReviews) => {
      if (err) {
        return res.status(500).json({
          error: `Errore nell'esecuzione della query reviews: ${err}`,
        });
      }

      const movieWithReviews = {
        ...movie,
        reviews: resultReviews || [],
      };

      // invio la risposta completa una sola volta
      res.send(movieWithReviews);
    });
  });
};

module.exports = {
  index,
  show,
};
