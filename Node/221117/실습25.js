const os = require("os");
console.group("os.freemem: ", os.freemem());
console.log("os.tatalmem: ", os.totalmem());
console.log("os.homedir: ", os.homedir());
console.log("--------------------------");


const path = require("path");
const file = __filename;
console.log("path.sep: ", path.sep);
console.log("path.extname: ", path.extname(file));
console.log("path.parse: ", path.parse(file));