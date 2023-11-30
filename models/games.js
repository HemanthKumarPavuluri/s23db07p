const mongoose = require("mongoose");
const gamesSchema = mongoose.Schema({
  game_name: {
    type: String,
    required: [true, "Games Name is required"],
  },
  player_count: {
    type: Number,
    required: true,
    min:0,
    max:100,
  },
  ticket_price: {
    type: Number,
    required: true,
    min:0,
    max:100,
  },
});
module.exports = mongoose.model("Games", gamesSchema);
