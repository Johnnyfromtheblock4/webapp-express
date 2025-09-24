// importiamo multer
const multer = require("multer");

// definiamo la cartella storage in cui effettuare l'upload
const storage = multer.diskStorage({
  destination: "./public/imgs/movies_cover", // definisco la cartellea di destinazione
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

module.exports = upload;
