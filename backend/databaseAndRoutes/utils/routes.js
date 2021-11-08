// post

// post already exists

// get

// get all

// edit

// user

router.post("/register", register, token.issue);
router.post("/signin", signIn, token.issue);

function register(req, res, next) {
  userExists(req.body.username)
    .then((exists) => {
      if (exists) {
        return res.status(400).send({
          errorType: "USERNAME_UNAVAILABLE",
        });
      }
      createUser(req.body.username, req.body.password).then(
        () => next()
      );
    })
    .catch(() => {
      res.status(400).send({
        errorType: "DATABASE_ERROR",
      });
    });
}

function signIn(req, res, next) {
  getUserByName(req.body.username)
    .then((user) => {
      return user || invalidCredentials(res);
    })
    .then((user) => {
      return (
        user && hash.verify(user.hash, req.body.password)
      );
    })
    .then((isValid) => {
      return isValid ? next() : invalidCredentials(res);
    })
    .catch(() => {
      res.status(400).send({
        errorType: "DATABASE_ERROR",
      });
    });
}

function invalidCredentials(res) {
  res.status(400).send({
    errorType: "INVALID_CREDENTIALS",
  });
}

// delete

// cookies
// need to install and app.use(cookieParser())
app.get("/setCookie", (req, res) => {
  res.cookie("username", "sam");
  res.cookie("theme", "light");
  res.send("works!");
});
app.get("/setExpirationCookie", (req, res) => {
  res.cookie("shoppingCart", "lotsOfBooks", {
    expires: new Date(
      Date.now() + 1000 * 60 * 60 * 24 * 14
    ),
    httpOnly: true,
  });
  res.send("works!");
});

// sessions
// var parseurl = require("parseurl");
// var session = express-session
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {};
  }

  // get the url pathname
  var pathname = parseurl(req).pathname;

  // count the views
  req.session.views[pathname] =
    (req.session.views[pathname] || 0) + 1;

  next();
});

app.get("/foo", function (req, res, next) {
  res.send(
    "you viewed this page " +
      req.session.views["/foo"] +
      " times"
  );
});

app.get("/bar", function (req, res, next) {
  res.send(
    "you viewed this page " +
      req.session.views["/bar"] +
      " times"
  );
});

/**********************************************
 * Get the cookie
 * ==================================
 ***********************************************/
app.get("/getCookie", (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
});
