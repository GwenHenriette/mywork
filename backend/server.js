"use strict";
const dotenv = require("dotenv").config({ path: __dirname + "/.env" }); // Required for .env file
const config = require("./config/config");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", config.frontend_url);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
  next();
});


console.log("config.frontend_url: " + process.env.FRONTEND_URL);
console.log("config.frontend_url: " + config.frontend_url);

var routeLogin = require("./routes/loginRoute");
var routeFeedback = require("./routes/feedbackRoute");
var apRoute = require("./routes/antipsychoticsGuideRoute");
var InsomniaSedativesGuideRoute = require("./routes/InsomniaSedativesGuideRoute");
var insomniaDeprescribingRoute = require("./routes/insomniaDeprescribingRoute");
var InsomniaClinicalRoute = require("./routes/InsomniaClinicalRoute");
var InsomniaSafetyRoute = require("./routes/InsomniaSafetyRoute");
var MoodStabilizersRoute = require("./routes/MoodStabilizersRoute");
var PsychotropicMonitoringSectionRoute = require("./routes/PsychotropicMonitoringSectionRoute");
var AntidepressantGuideRoute = require("./routes/AntidepressantGuideRoute");
var AntidepressantSafetyRoute = require("./routes/AntidepressantSafetyRoute");
var AntidepressantsClinicalRoute = require("./routes/AntidepressantsClinicalRoute");
var SearchResultsRoute = require("./routes/SearchResultsRoute");
var CognitiveEnhancersGuideRoute = require("./routes/CognitiveEnhancersGuideRoute");
var CognitiveEnhancersClinicalRoute = require("./routes/CognitiveEnhancersClinicalRoute");
var searchRouter = require("./routes/searchRoute");
var NPSManagementRoute = require("./routes/NPSManagementRoute");
var neuropsychiatricRoute = require("./routes/neuropsychiatricRoute");
var AntipsychoticSafetyRoute = require('./routes/AntipsychoticSafetyRoute');
var deliriumRoute = require("./routes/deliriumRoute");
var PolypharmacyCommonRoute = require("./routes/PolypharmacyCommonRoute");
var PolypharmacyRouteNotable = require("./routes/PolypharmacyRouteNotable");
var PrinciplesPolypharmacyRoute = require("./routes/PrinciplesPolypharmacyRoute");

//for parsing application/json
app.use(express.json());
app.use(cors({ origin: true }));
app.use("/api", routeLogin);
app.use("/api", routeFeedback);
app.use("/api", apRoute);
app.use("/api", InsomniaSedativesGuideRoute);
app.use("/api", insomniaDeprescribingRoute);
app.use("/api", InsomniaClinicalRoute);
app.use("/api", InsomniaSafetyRoute);
app.use("/api", MoodStabilizersRoute);
app.use("/api", PsychotropicMonitoringSectionRoute);
app.use("/api", AntidepressantGuideRoute);
app.use("/api", AntidepressantSafetyRoute);
app.use("/api", AntidepressantsClinicalRoute);
app.use("/api", SearchResultsRoute);
app.use("/api", CognitiveEnhancersGuideRoute);
app.use("/api", CognitiveEnhancersClinicalRoute);
app.use("/api/search", searchRouter);
app.use("/api", NPSManagementRoute);
app.use("/api", neuropsychiatricRoute);
app.use('/api', AntipsychoticSafetyRoute);
app.use("/api", deliriumRoute);
app.use("/api", PolypharmacyCommonRoute);
app.use("/api", PolypharmacyRouteNotable);
app.use("/api", PrinciplesPolypharmacyRoute);

app.get("/", function (req, res) {
  res.send("Express on Vercel");
});

const port = config.api_port || 8887;

app.listen(port, function () {
  console.log("Server started on port " + port);
});
