<template>
  <div>
    <form id="settings-form" novalidate v-on:submit.prevent="saveAndExit">
      <div class="mb-3">
        <h5>{{ $t("Default password profile") }}</h5>
      </div>
      <div class="form-group">
        <label for="login">{{ $t("Username") }}</label>
        <div class="inner-addon left-addon">
          <i class="fa fa-user"></i>
          <input
            id="login"
            type="text"
            name="login"
            ref="login"
            class="form-control"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="none"
            v-bind:placeholder="$t('Username')"
            v-model="defaultPassword.login"
          />
        </div>
      </div>
      <div class="mb-4">
        <options v-bind:options="defaultPassword"></options>
      </div>
      <div class="mb-3">
        <h5>{{ $t("Other options") }}</h5>
      </div>
      <div class="mb-4">
        <label for="noAutoFillSite">{{ $t("Site") }}</label>
        <div class="form-check mb-3">
          <input
            id="noAutoFillSite"
            class="form-check-input"
            type="checkbox"
            v-model="settings.noAutoFillSite"
          />
          <label class="form-check-label" for="noAutoFillSite">
            <small>
              {{
                $t(
                  "noAutoFillSite",
                  "Stop filling in the site field automatically"
                )
              }}
            </small>
          </label>
        </div>
        <div class="form-check" v-if="!settings.noAutoFillSite">
          <input
            id="removeSiteSubdomain"
            class="form-check-input"
            type="checkbox"
            v-model="settings.removeSiteSubdomain"
          />
          <label class="form-check-label" for="removeSiteSubdomain">
            <small>
              {{ $t("removeSiteSubdomain", "Remove subdomain from site") }}
            </small>
          </label>
        </div>
        <small class="form-text text-danger" v-if="!settings.noAutoFillSite">
          {{
            $t(
              "DontUseItYet",
              "Backward compatibility not guaranteed. Dont use it yet!"
            )
          }}
        </small>
      </div>
      <div class="form-group">
        <label for="login">{{ $t("LessPass Database Url") }}</label>
        <div class="inner-addon left-addon">
          <i class="fa fa-user"></i>
          <input
            id="baseURL"
            type="text"
            name="baseURL"
            ref="baseURL"
            class="form-control"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="none"
            v-bind:placeholder="$t('LessPass Database Url')"
            v-model="settings.baseURL"
          />
        </div>
        <div
          v-if="settings.baseURL !== defaultBaseURL"
          class="text-danger mt-1"
        >
          <small>
            {{ $t("It is not recommended to change the default url.") }}
          </small>
        </div>
      </div>
      <label for="encryptMasterPassword">{{ $t("Login") }}</label>
      <div class="form-check mb-3">
        <input
          id="encryptMasterPassword"
          class="form-check-input"
          type="checkbox"
          v-model="settings.encryptMasterPassword"
        />
        <label class="form-check-label" for="encryptMasterPassword">
          <small>
            {{ $t("Encrypt my master password") }}
          </small>
        </label>
      </div>
      <div class="mb-3">
        <button type="submit" id="btn-submit-settings" class="btn btn-primary">
          {{ $t("Save") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Options from "../components/Options.vue";
import { mapState } from "vuex";
import { defaultBaseURL } from "../api/baseURL";

export default {
  computed: mapState(["defaultPassword", "settings"]),
  components: {
    Options
  },
  data: () => ({
    defaultBaseURL
  }),
  methods: {
    saveAndExit() {
      this.$store
        .dispatch("resetPassword")
        .then(() => this.$router.push({ name: "home" }));
    }
  }
};
</script>
