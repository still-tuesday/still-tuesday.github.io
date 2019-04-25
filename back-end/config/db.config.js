authConfig = require("./auth.config");

module.exports = {
  url: `mongodb+srv://${authConfig.username}:${
    authConfig.password
  }@cluster0-nhfee.mongodb.net/test?retryWrites=true`
};
