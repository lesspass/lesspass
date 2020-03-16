"use strict";

const textStylingReset = "\x1b[0m";
const textColorGreen = "\x1b[32m";
const textColorRed = "\x1b[31m";

// When the project is installed on MacOS(darwin), install the pod files.
const process = require("process");
const isMacOs = process.platform === "darwin";

if (isMacOs) {
  console.log("Installing pod files...");
  const { exec } = require("child_process");
  exec("npm run ios-pod-install", error => {
    if (error) {
      console.error(
        `${textColorRed}error ${textStylingReset}An unexpected error occured: ${error}`
      );
      return;
    }

    console.log(
      `${textColorGreen}succes ${textStylingReset}Pod files installed.`
    );
  });
}
