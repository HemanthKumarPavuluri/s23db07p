var express = require("express");
var router = express.Router();
// Require controller modules.
var api_controller = require("../controllers/api");
var games_controller = require("../controllers/games");
/// API ROUTE ///
// GET resources base.
router.get("/", api_controller.api);
/// Games ROUTES ///
// POST request for creating a Games.
router.post("/games", games_controller.games_create_post);
// DELETE request to delete Games.
router.delete("/games/:id", games_controller.games_delete);
// PUT request to update Games.
router.put("/games/:id", games_controller.games_update_put);
// GET request for one Games.
router.get("/games/:id", games_controller.games_detail);
// GET request for list of all Games items.
router.get("/games", games_controller.games_list);
module.exports = router;
