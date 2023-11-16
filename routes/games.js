var express = require("express");
const games_controlers = require("../controllers/games");
var router = express.Router();
/* GET costumes */
router.get("/", games_controlers.games_view_all_Page);
/* GET detail games page */
router.get("/detail", games_controlers.games_view_one_Page);
/* GET create costume page */
router.get("/create", games_controlers.games_create_Page);
/* GET create update page */
/* GET delete games page */
router.get("/delete", games_controlers.games_delete_Page);
router.get("/update", games_controlers.games_update_Page);

module.exports = router;
