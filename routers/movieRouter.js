// importiamo express
const express = require("express");

// importo il router
const router = express.Router();

// importo il middleware multer
const upload = require("../middlewares/multer");

// improto il controller
const movieController = require("../controllers/movieController");

// definizione rotte
//index
router.get("/", movieController.index);

// show
router.get("/:id", movieController.show);

// store
router.post("/", upload.single("image"), movieController.store);

module.exports = router;
