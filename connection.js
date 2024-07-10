const { ConnectionPoolMonitoringEvent } = require("mongodb");
const mongoose = require("mongoose");

const connectMogoDB = async (dbUrl) => {
  return mongoose.connect(dbUrl);
};

module.exports = connectMogoDB;
