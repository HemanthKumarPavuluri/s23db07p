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
// Handle Costume create on POST.
exports.games_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Games();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"game_name":"goat", "player_count":"12", "ticket_price":2000}
  document.game_name = req.body.game_name;
  document.player_count = req.body.player_count;
  document.ticket_price = req.body.ticket_price;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// Handle games delete form on DELETE.
exports.games_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: Games delete DELETE " + req.params.id);
};
// Handle games update form on PUT.
exports.games_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: Games update PUT" + req.params.id);
};

// VIEWS
// Handle a show all view
exports.games_view_all_Page = async function (req, res) {
  try {
    theGames = await Games.find();
    res.render("games", { title: "Games Search Results", results: theGames });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
