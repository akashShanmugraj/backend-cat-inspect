const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const brakeRoutes = require("./routes/brakesroutes.js");
const batteryRoutes = require("./routes/batteryroutes.js");
const tireRoutes = require("./routes/tireroutes.js");
const engineRoutes = require("./routes/engineroutes.js");
const headerRoutes = require("./routes/headerroutes.js");
const exteriorRoutes = require("./routes/exteriorroutes.js");
const gcsRoutes = require("./routes/cloudstorageroutes.js");
const sampleInfoRoutes = require("./routes/sampleinforoutes.js");
const reportRoutes = require("./routes/reportroute.js");

var fileupload = require('express-fileupload');
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

app.use(
    cors({
        origin: 'http://localhost:3000', // Allow only this origin
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific HTTP methods
        allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
        credentials: true // Allow credentials (cookies, authorization headers, etc.)
    })
  );

app.get("/", (req, res) => {
  res.send("API Working");
});

app.get("/help", (req, res) => {
  res.sendfile(__dirname + '/help.html');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`);
  });

app.use("/api/brakes", brakeRoutes);
app.use("/api/battery", batteryRoutes);
app.use("/api/tire", tireRoutes);
app.use("/api/engine", engineRoutes);
app.use("/api/header", headerRoutes);
app.use("/api/exterior", exteriorRoutes);
app.use("/api/upload", gcsRoutes);
app.use("/api/sampleinfo", sampleInfoRoutes);
app.use("/api/report", reportRoutes);

app.post("/testupload", function(req, res)
{
    var file;

    if(!req.files)
    {
        res.send("File was not found");
        return;
    }

    file = req.files.FormFieldName;  // here is the field name of the form
    res.send(`File ${file.name} Uploaded`);
});

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


const corsOptions = {
  origin: 'http://localhost:3000', // Allow only this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific HTTP methods
 allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
 credentials: true // Allow credentials (cookies, authorization headers, etc.)
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

app.use(express.json());

app.post('/api/tire/post', (req, res) => {
  res.status(204).send();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});