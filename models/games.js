const mongoose = require("mongoose");
const gamesSchema = mongoose.Schema({
  game_name: {
    type: String,
    required: [true, "Games Name is required"],
  },
  player_count: {
    type: String,
    required: true,
  },
  ticket_price: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Games", gamesSchema);
