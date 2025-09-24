// importiamo multer
const multer = require("multer");

// definiamo la variabile storage in cui effettuare l'upload
const storage = multer.diskStorage({
  destination: "./public/imgs/movies_cover", // definisco la cartella di destinazione
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName); //cb: funzione di callback. null: rappresenta l'errore uniquename la variabile definita precedentemente
  },
});

// creo l'oggetto upload sulla base di quanto definito nella variabile storage
const upload = multer({ storage });

module.exports = upload;
