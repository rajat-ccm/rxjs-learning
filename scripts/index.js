const fs = require("fs");
const fsx = require("fs-extra");

const markdownContent = `
# Example Markdown File

This is a **sample** Markdown file created using Node.js.

- Bullet Point 1
- Bullet Point 2

\`\`\`typescript 
console.log('Hello, Markdown!');
\`\`\`
`;

var baseUrl = "../src/assets/tutorials";

function generateFiles() {
  // Read the JSON file
  fs.readFile("../src/assets/data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      jsonData.groups.forEach((group) => {
        var folderPath = createFolder(group, baseUrl);
        group.operators.forEach((operator) => {
          var filePath = createFile(operator, folderPath);
        });
      });
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  });
}

function createFolder(folder, parentPath = "") {
  const folderPath = `${parentPath}/${folder.value}`;

  // Check if folder already exists
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true }); // Create folder
    console.log(`Created folder: ${folderPath}`);
  } else {
    console.log(`Folder already exists: ${folderPath}`);
  }

  return folderPath;
}

function createFile(file, parentPath = "") {
  const fileName = file.value.trim()
  console.log(`file.value: ${fileName} ${fileName.length}`);
  if (!fileName) return;
  const filePath = `${parentPath}/${fileName}.md`;

  // Check if file already exists
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, markdownContent, "utf8");
    console.log(`Created file: ${filePath}`);
  } else {
    console.log(`File already exists: ${filePath}`);
  }
  return filePath;
}

// delete folder
fsx.emptyDirSync(baseUrl);

// Generate files
generateFiles();
