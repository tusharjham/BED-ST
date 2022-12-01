const mongoose = require("mongoose");

const mongo = async () => {
  await mongoose
    .connect(`${process.env.DATABASE_URL}`)
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err.toString()));
};

module.exports = mongo;
