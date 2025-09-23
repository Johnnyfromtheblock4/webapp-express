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
      // const image = req.imagePath + movie.image;
      // const { id, title, director, genre, abstract } = movies;
      // const obj = {
      //   id,
      //   title,
      //   director,
      //   genre,
      //   release_year,
      //   abstract,
      //   image,
      // };
      // return obj;
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

  // creo la query
  const sqlMovie = "SELECT * FROM movies WHERE id = ?";

  // eseguo la query passando ora i parametri
  connection.query(sqlMovie, [id], (err, resultMovie) => {
    if (err)
      return res.status(500).json({
        error: `errore nell'esecuzione della query: ${err}`,
      });

      const movie = {
      ...resultMovie[0],
      image: req.imagePath + resultMovie[0].image,
    };
    res.send(movie);
  });
};

module.exports = {
  index,
  show,
};
