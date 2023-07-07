var express = require("express");
var router = express.Router();

// Require the controller that exports skill CRUD functions
var skillsCtrl = require("../controllers/skills");

// All actual paths start with "/skills"

// GET /skills
router.get("/", skillsCtrl.index);

//GET /skills/new
router.get("/new", skillsCtrl.new);

// GET /skills/:id
router.get("/:id", skillsCtrl.show);

module.exports = router;

//POST /skills
router.post("/", skillsCtrl.create);

//DELETE /skills
router.delete("/:id", skillsCtrl.delete);
