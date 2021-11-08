// const app = require("./config");
const express = require("express");
const app = express();

const cors = require("cors");
// Logger
const morgan = require("morgan");
const routeList = require("express-routes-catalogue");
const errorhandler = require("errorhandler");
const session = require("express-session");
// Forms
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
// multipart/form-data, which is primarily used for uploading files.

const multer = require("multer");
const upload = multer({ dest: "../../uploads/" });
const path = require("path");
const staticify = require("staticify")(
  path.join(__dirname, "..", "frontend", "public")
);
app.use(errorhandler());
app.use(morgan(":method :url :status"));
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());
app.use(methodOverride());

app.get("/", async (req, res) => {
  res.send("hello");
});
const thingRouter = require("./databaseAndRoutes/things");

app.listen(3003, () => {
  console.log("app listening on port 3003");
});
