var chromedriver = require("chromedriver");

module.exports = {
  before: function(done) {
    chromedriver.start();
    done();
  },

  after: function() {
    chromedriver.stop();
  }
};
