console.log("__filename: " + __filename);
console.log("__dirname: " + __dirname);
console.log("------------------------------")
/* 
process 객체 = 현재 실행 중인 노드 프로세스 정보 */

console.log("process.verson: ", process.version);
console.log("process.arch: ", process.arch);
console.log("process.platform: ", process.platform);
console.log("process.cpuUsage: ", process.cpuUsage());
console.log("------------------------------")

/* os 모듈 - 운영체제 */
const os = require("os");
console.log("os.type: ", os.type());
console.log("os.cpus: ", os.cpus());
console.log("os.homedir: ", os.homedir());
console.group("os.freemem: ", os.freemem());//사용가능한 메모리 정보
console.log("------------------------------")

/* 
path 모듈 */
const path = require("path");
const file = __filename;
console.log("path.extname: ", path.extname(file));//확장자만 가져오는 것.
console.log("path.parse: ", path.parse(file)); //가져올 수 있는 경로를 모두 구분 시켜주는 것.