const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/iNotebookBackend";

const connectToMongo = () => {
  mongoose.connect(mongoURI, (err) => {
    if (err) {
      console.log("Could'nt conneted to DB");
    } else {
      console.log("Connected to DB");
    }
  });
};

module.exports = connectToMongo;
