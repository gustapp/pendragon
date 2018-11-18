import bodyParser from "body-parser";
import compression from "compression";
import dotenv from "dotenv";
import express from "express";
import flash from "express-flash";
import expressValidator from "express-validator";
import lusca from "lusca";
import morgan from "morgan";
import passport from "passport";
import path from "path";

dotenv.config({ path: ".env.example" });

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(morgan("combined"));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

export default app;
