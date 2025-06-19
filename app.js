if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
// console.log(process.env);

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listings.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   console.log("working");
//   res.send("Working properly");
// });

// let MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
let dbUrl = process.env.ATLASDB_URL;

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("ERROR in MONGO SESSION STORE", err);
});

//Implementing session.
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// app.get("/demouser",async (req,res)=>{
//   let fakeUser=new User({
//     email : "student@gmail.com",
//     username : "sigma-student",
//   })
//   let registeredUser=await User.register(fakeUser,"helloworld")
//   res.send(registeredUser)
// })

async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then((result) => {
    // console.log(result);
    console.log("MDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

// { ps1 }

app.use("/listings", listingRouter);

//Reviews
app.use("/listings/:id/reviews", reviewRouter);

app.use("/", userRouter);

// app.all("/{*any}", (req, res, next) => {
//   // app.all("*", (req, res, next) => {
//   // // app.get("/*name", (req, res) => {
//   next(new ExpressError(404, "Page not found"));
//   res.render("error.ejs");
//   console.log("Request to invalid path.");
// });

app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

//Defining middleware for error handling.
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  console.log(err);
  // console.log(err._message);
  // res.status(statusCode).send(message);
  res.status(statusCode).render("error.ejs", { message });
});

app.listen("8080", () => {
  console.log("Server is listening on port 8080");
});
