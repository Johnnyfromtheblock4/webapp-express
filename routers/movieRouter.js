// importiamo express
const express = require("express");

// importo il router
const router = express.Router();

// improto il controller
const movieController = require("../controllers/movieController");

// definizione rotte
//index
router.get("/", movieController.index);

// show
router.get("/:id", movieController.show);

module.exports = router;
