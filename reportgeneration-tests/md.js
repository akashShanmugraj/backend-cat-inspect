const markdownpdf = require("markdown-pdf");
const fs = require("fs");

const markdownPath = "output.md"; // Path to your markdown file
const pdfPath = "output.pdf"; // Desired output PDF file path

fs.createReadStream(markdownPath)
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream(pdfPath))
  .on("finish", () => {
    console.log("PDF generated successfully.");
  });