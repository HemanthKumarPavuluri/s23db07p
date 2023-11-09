var Costume = require("../models/games");
// List of all games
exports.games_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Games list");
};
// for a specific games.
exports.games_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Games detail: " + req.params.id);
};
// Handle games create on POST.
exports.games_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Games create POST");
};
// Handle games delete form on DELETE.
exports.games_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: Games delete DELETE " + req.params.id);
};
// Handle games update form on PUT.
exports.games_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: Games update PUT" + req.params.id);
};
