const express = require("express");

// fetching data
const cors = require("cors");
// Logger
const morgan = require("morgan");
const routeList = require("express-routes-catalogue");
const errorhandler = require("errorhandler");
// Storage
const session = require("express-session");
// Forms
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
// multipart/form-data, which is primarily used for uploading files.

const multer = require("multer");
const upload = multer({ dest: "../../uploads/" });
const path = require("path");
// static handler
const path = require("path");
const staticify = require("staticify")(
  path.join(__dirname, "public")
);
const publicPath = path.join(
  __dirname,
  "..",
  "frontend",
  "public"
);

const staticify = require("staticify")(publicPath);
module.exports = (() => {
  console.log(publicPath);
  const app = express();
  //   routeList.terminal(app);
  app.use(errorhandler());
  app.use(morgan(":method :url :status"));
  // parse application/json
  app.use(express.json());
  // parse application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

  app.use(staticify.middleware);

  app.helpers({
    getVersionedPath: staticify.getVersionedPath,
  });
  app.use(cors());
  app.use(cookieParser());
  app.use(methodOverride());

  return app;
})();
