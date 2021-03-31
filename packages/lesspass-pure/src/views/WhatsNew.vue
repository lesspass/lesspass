<template>
  <div>
    <div class="mb-3">
      <h5>{{ $t("What is new ?") }}</h5>
    </div>
    <p>LessPass version: {{ version }}</p>
    <p>
      {{
        $t(
          "New20210331",
          "I took over the development on LessPass, to fix bugs and improve the interface. I simplified the login page to correct the problem with the login url for the self-hosted version. The master password is encrypted by default before being sent to the server side. It is always possible to uncheck this option but only for connections."
        )
      }}
    </p>
    <p>Guillaume</p>
    <a href="https://github.com/lesspass/lesspass/blob/master/CONTRIBUTING.md">
      {{
        $t(
          "WantToHelp",
          "Do you want to help me? Please feel free to contribute to LessPass"
        )
      }}
    </a>
  </div>
</template>
<script>
import { version } from "../../package.json";

export default {
  data() {
    return {
      version
    };
  }
};
</script>
