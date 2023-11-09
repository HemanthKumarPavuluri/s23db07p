var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

require("dotenv").config();
const connectionString = process.env.MONGO_CON;
mongoose = require("mongoose");
mongoose.connect(connectionString);
var Games = require("./models/games");
// Get the default connection
var db = mongoose.connection;

// Bind connection to error event
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Connection open event
db.once("open", function () {
  console.log("Connection to DB succeeded");
});

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var gamesRouter = require("./routes/games");
var boardRouter = require("./routes/board");
var chooseRouter = require("./routes/choose");
var resourceRouter = require("./routes/resource");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/games", gamesRouter);
app.use("/board", boardRouter);
app.use("/choose", chooseRouter);
app.use("/resource", resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Games.deleteMany();
  let instance1 = new Games({
    game_name: "Cricket",
    player_count: "11 players",
    ticket_price: 2000,
  });
  instance1
    .save()
    .then((doc) => {
      console.log("First object saved");
    })
    .catch((err) => {
      console.error(err);
    });

  let instance2 = new Games({
    game_name: "Kabaddi",
    player_count: "7 players",
    ticket_price: 500,
  });
  instance2
    .save()
    .then((doc) => {
      console.log("Second object saved");
    })
    .catch((err) => {
      console.error(err);
    });

  let instance3 = new Games({
    game_name: "Kho-Kho",
    player_count: "9 players",
    ticket_price: 200,
  });
  instance3
    .save()
    .then((doc) => {
      console.log("Third object saved");
    })
    .catch((err) => {
      console.error(err);
    });
}
let reseed = true;
if (reseed) {
  recreateDB();
}

module.exports = app;
