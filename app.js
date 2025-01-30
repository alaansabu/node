const { readFile, writeFile } = require('fs');
const util = require('util');

// Promisify readFile and writeFile
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        // Read the files asynchronously
        const first = await readFilePromise("./content/mod1.txt", "utf-8");
        const second = await readFilePromise("./content/mod.txt", "utf-8");

        // Write to a new file asynchronously
        await writeFilePromise("./content/subfolder/minde-gernade.txt", `${first} ${second}`);

        console.log("File written successfully!");
        console.log(first, second);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Start the process
start();
