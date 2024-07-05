const fs = require('fs');

// Example function to convert JSON object to Markdown (very basic)
function jsonToMarkdown(jsonObject) {
  let markdown = '';
  for (const key in jsonObject) {
    markdown += `### ${key}\n`;
    const value = jsonObject[key];
    if (typeof value === 'object') {
      markdown += jsonToMarkdown(value); // Recursive call for nested objects
    } else {
      markdown += `- ${value}\n`;
    }
  }
  return markdown;
}

// Read JSON file and convert
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const jsonData = JSON.parse(data);
  const markdownContent = jsonToMarkdown(jsonData);
  fs.writeFile('output.md', markdownContent, (err) => {
    if (err) {
      console.error(err);
    }
  });
});