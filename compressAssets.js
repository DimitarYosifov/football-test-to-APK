//   npm i fast-folder-size@2.0.0
//   npm i tinify
//   "compress_assets": "node scripts/compressAssets.js"

const tinify = require("tinify");
const process = require("process");
const fs = require('fs');
const chalk = require('chalk');
const fastFolderSize = require('fast-folder-size');

tinify.key = "79K1JpQfVYcYXSmBcJVcYFqh6HP4b2m8";

let initialSize = 0;
let finalSize = 0;  // TODO...

const mainPath = "www/assets/";
let mainFolder = fs.readdirSync(mainPath);

fastFolderSize(mainPath, (err, bytes) => {
    if (err) {
        throw err;
    }
    initialSize = formatBytes(bytes);
    // mainFolder.forEach(folderName => {
    //     console.log(`${mainPath}${folderName}/`);
    //     compress(`${mainPath}${folderName}/`, folderName);
    // });

    const folderName = "";
    console.log(`${mainPath}${folderName}/`);
    compress(`${mainPath}${folderName}/`, folderName);
})

formatBytes = function (bytes) {
    var units = ['B', 'KB', 'MB', 'GB', 'TB'], i;
    for (i = 0; bytes >= 1024 && i < 4; i++) {
        bytes /= 1024;
    }
    return bytes.toFixed(2) + units[i];
}

async function compress(folder, folderName) {
    const files = fs.readdirSync(folder);
    let currentFolderInitialSize = 0;

    fastFolderSize(folder, (err, bytes) => {
        if (err) {
            throw err;
        }
        currentFolderInitialSize = formatBytes(bytes);
    })


    for (const file of files) {

        const isImg = file.split(".")[1] !== "json" && file.split(".")[1] !== "ftpp";
        if (isImg) {
            // grab original img
            const source = tinify.fromFile(`${folder}/${file}`);
            // path 
            const filePath = `${folder}${file}`;
            const tempFilePath = `_${file}`;

            await new Promise(resolve => {

                // TEST!
                // try {
                //     setTimeout(() => {
                //         resolve();
                //     }, 100);
                // } catch (error) {
                //     console.log(chalk.red.bold(`asset: ${folderName} failed to compress!`));
                //     resolve();
                // }

                source.toFile(tempFilePath, () => {
                    try {
                        // setTimeout(() => {
                        fs.unlinkSync(filePath);
                        fs.renameSync(tempFilePath, filePath);
                        console.log(file, ` (${folderName}) created`);
                        resolve();
                        // }, 100);
                    } catch (error) {
                        console.log(chalk.red.bold(`asset: ${folderName} failed to compress!`));
                        resolve();
                    }
                });
            })
        }
    }

    fastFolderSize(folder, (err, bytes) => {
        if (err) {
            throw err;
        }
        finalSize += bytes;
        console.log(chalk.blue.bold(`${folderName} assets size compressed from ${currentFolderInitialSize} to ${formatBytes(bytes)}`));
    })
}

process.on('exit', () => {
    console.log(chalk.blue.bold(`game assets size compressed from ${initialSize} to ${formatBytes(finalSize)}`));
})
