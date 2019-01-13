module.exports = {
  src_folders: ["test/e2e/specs"],
  output_folder: "test/e2e/reports",
  globals_path: "test/e2e/globals.js",
  selenium: {
    start_process: false
  },
  test_settings: {
    default: {
      launch_url: "http://localhost:8080",
      selenium_port: 9515,
      selenium_host: "localhost",
      default_path_prefix: "",
      globals: {
        waitForConditionTimeout: 5000
      },
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: [
            "--headless",
            "--no-sandbox",
            "--disable-gpu",
            "--allow-running-insecure-content",
            "--ignore-certificate-errors",
            "--window-size=1920x1080"
          ]
        }
      }
    }
  }
};
