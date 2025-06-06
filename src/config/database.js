const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://mohitgour9539:cWqDtBRrxFOaD7uS@namastnode.43jn7hq.mongodb.net/devTin"
  );
};

module.exports = connectDB;
