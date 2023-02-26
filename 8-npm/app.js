const validator = require("validator");
const chalk = require("chalk");

// console.log(validator.isEmail("alfin@gmail.com"));
// console.log(validator.isMobilePhone("0882345678", "id-ID"));
// console.log(validator.isNumeric("0782345678"));

// console.log(chalk.italic.bgBlue.black("Hello World!"));
const nama = "Alfin";
const pesan = chalk`Lorem, ipsum dolor {bgRed.black.bold sit amet} consectetur {bgGreen.italic.black adipisicing} elit. Nama saya : ${nama}`;
console.log(pesan);
