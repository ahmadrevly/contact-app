const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/rev");

// // Menambahkan 1 data
// const contact1 = new Contact({
//   nama: "Reva Fidela",
//   noHP: "08211112222",
//   email: "reva@gmail.com",
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));
