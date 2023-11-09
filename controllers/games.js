var Games = require("../models/games");
// List of all Costumes
exports.games_list = async function (req, res) {
  try {
    theGames = await Games.find();
    res.send(theGames);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
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
