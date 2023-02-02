const express = require("express");

const router = express.Router();

const projectControllers = require("./controllers/projectControllers");

router.get("/project", projectControllers.browse);

module.exports = router;
