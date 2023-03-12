const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts); // third-party middleware
app.use(express.static("public")); // built-in middleware

app.get("/", (req, res) => {
  const mahasiswa = [
    { nama: "Alfin Budiyanto", email: "alfinbudiyanto@gmail.com" },
    { nama: "Erik", email: "erik@gmail.com" },
    { nama: "Doddy Ferdiansyah", email: "doddy@gmail.com" },
  ];
  res.render("index", {
    nama: "Alfin Budiyanto",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layouts",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layouts",
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();

  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layouts",
    contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("detail", {
    title: "Halaman Detail Contact",
    layout: "layouts/main-layouts",
    contact,
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
