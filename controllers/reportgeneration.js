const fs = require("fs");
const markdownpdf = require("markdown-pdf");

const Header = require("../schemas/headerschema");
const Battery = require("../schemas/batteryschema");
const Brakes = require("../schemas/brakesschema");
const Engine = require("../schemas/engineschema");
const Transmission = require("../schemas/transmissionschema");
const Tires = require("../schemas/tiresschema");

function jsonToMarkdown(jsonObject) {
  let markdown = "";
  for (const key in jsonObject) {
    markdown += `### ${key}\n`;
    const value = jsonObject[key];
    if (typeof value === "object") {
      markdown += jsonToMarkdown(value);
    } else {
      markdown += `- ${value}\n`;
    }
  }
  return markdown;
}

function conversion(filedata, filename) {
  const jsonData = JSON.parse(filedata);
  const markdownContent = jsonToMarkdown(jsonData);

  const markdownStream = new require("stream").Readable();
  markdownStream._read = () => {}; // _read is required but you can noop it
  markdownStream.push(markdownContent);
  markdownStream.push(null); // Indicates end-of-file basically - the end of the stream

  // Use markdown-pdf to convert the stream to PDF and save it
  markdownStream
    .pipe(markdownpdf())
    .pipe(fs.createWriteStream(`./reports/${filename}.pdf`))
    .on("finish", () => {
      console.log("PDF generated successfully.");
    });
}

const requestreport = async (req, res) => {
  const inspectionid = req.qeury.inspectionid;

  const header = await Header.findOne({ inspectionId: inspectionid });
  const battery = await Battery.findOne({ inspectionId: inspectionid });
  const brakes = await Brakes.findOne({ inspectionId: inspectionid });
  const engine = await Engine.findOne({ inspectionId: inspectionid });
  const transmission = await Transmission.findOne({
    inspectionId: inspectionid,
  });
  const tires = await Tires.findOne({ inspectionId: inspectionid });

  const filename = inspectionid;

  const reportdata = {
    header: header,
    battery: battery,
    brakes: brakes,
    engine: engine,
    transmission: transmission,
    tires: tires,
  };

  conversion(JSON.stringify(reportdata), filename);

  const fileuploadrequest = {
    files: {
      UploadFileField: {
        name: `${filename}.pdf`,
        data: fs.readFileSync(`./reports/${filename}.pdf`),
      },
    },
    body: {
      component: "reports",
    },
  };

  const response = {
    status: (code) => {
      return {
        send: (message) => console.log(`Status: ${code}, Message: ${message}`)
      };
    }
  };

  res.status(200).json(response);
};

module.exports = { requestreport };
