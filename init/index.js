const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

let MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then((result) => {
    // console.log(result);
    console.log("MDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68413960610b6583078bb9f5",
  }));
  await Listing.insertMany(initData.data);
  //{ } this is a object so we will access key data int the data.js
  console.log("Data was initialized");
};

initDB();
