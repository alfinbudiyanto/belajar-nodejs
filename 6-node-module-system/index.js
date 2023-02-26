// const nama = "Alfin Budiyanto";
// const cetakNama = (nama) => `Hi nama saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require("fs"); // core module
// const cetakNama = require("./coba"); // local module
// const moment = require('moment')  // third party module / nom module / node_modules

// console.log("Hello Alfin");

// const cetakNama = require("./coba");
// const PI = require("./coba");
const coba = require("./coba");

console.log(
  coba.cetakNama("Alfin"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);
