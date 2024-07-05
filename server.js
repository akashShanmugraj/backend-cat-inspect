const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");

const brakeRoutes = require("./routes/brakesroutes.js");
const batteryRoutes = require("./routes/batteryroutes.js");
const tireRoutes = require("./routes/tireroutes.js");
const engineRoutes = require("./routes/engineroutes.js");
const headerRoutes = require("./routes/headerroutes.js");
const exteriorRoutes = require("./routes/exteriorroutes.js");

const app = express();

//dotenv config
dotenv.config();

console.log(process.env.MONGO_URI);

//mongoose connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Your server startup logic here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.get("/help", (req, res) => {
  res.sendfile(__dirname + '/help.html');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`);
  });

app.use("/api/brakes", brakeRoutes);
app.use("/api/battery", batteryRoutes);
app.use("/api/tire", tireRoutes);
app.use("/api/engine", engineRoutes);
app.use("/api/header", headerRoutes);
app.use("/api/exterior", exteriorRoutes);

app.use("/api/reqinfo", (req, res) => {
  const requestObject = {
    "req.app": req.app,
    "req.baseurl": req.baseUrl,
    "req.body": req.body,
    "req.cookie": req.cookie,
    "req.hostname": req.hostname,
    "req.ipv6": req.ipv6,
    "req.params": req.params,
    "req.path": req.path,
    "req.protocol": req.protocol,
    "req.query": req.query,
    "req.route": req.route,
    "req.tlsInsecure": req.tlsInsecure,
    "req.auth": req.auth,
  };
  res.send(requestObject);
  }
)