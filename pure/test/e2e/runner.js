process.env.NODE_ENV = "testing";
var child_process = require("child_process");
var server = require("../../server.js");

server.ready.then(() => {
  var opts = process.argv.slice(2);
  if (opts.indexOf("--config") === -1) {
    opts = opts.concat(["--config", "test/e2e/nightwatch.conf.js"]);
  }

  var runner = child_process.spawn("./node_modules/.bin/nightwatch", opts, {
    stdio: "inherit"
  });

  runner.on("exit", function(code) {
    server.close();
    process.exit(code);
  });

  runner.on("error", function(err) {
    server.close();
    throw err;
  });
});
