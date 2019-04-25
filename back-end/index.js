const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");

const app = require("./app");

const log = console.log;

mongoose.Promise = global.Promise;

const server = app.listen(process.env.PORT || 3000, () => {
  mongoose
    .connect(dbConfig.url, {
      useNewUrlParser: true
    })
    .then(() => {
      log("Successfully connected to mongoDB");
      log(`Express is running on port ${server.address().port}`);
    })
    .catch(err => {
      log("Could not connect to mongoDB");
      log(`Error: ${err}`);
      log("Exiting now :(");
    });
});
