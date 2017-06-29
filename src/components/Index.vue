<template>
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col">
        <h1>LessPass Move</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3 class="mb-2">1 - Copy paste list of old profiles</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
            <textarea id="oldProfiles" name="oldProfiles" class="form-control" rows="10" v-model="oldProfiles"
                      placeholder="Copy list of password profiles"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <h3 class="mt-5 mb-2">2 - Set your master password(s)</h3>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <form class="form-inline">
              <input
                id="oldMasterPassword"
                type="password"
                placeholder="Old Master Password"
                v-model="oldMasterPassword">
              <input
                id="newMasterPassword"
                type="password"
                v-model="newMasterPassword"
                placeholder="New Master Password"
                v-if="changeMyMasterPassword">
            </form>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="changeMyMasterPassword">
                Click me to change your master password at the same time
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <h3 class="mt-5 mb-2">3 - Select rules:</h3>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <form action="">
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value="V1ToV2DefaultRule" v-model="rules">
                  Transform default V1 profile into default V2 profile
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input" value="V1ToV2Rule" v-model="rules">
                  Migrate version 1 to version 2
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3 class="mt-5 mb-2">4 - Build your passwords:</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary" v-on:click="buildAllPasswords()">Build all passwords</button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3 class="mt-5 mb-2">5 - Copy paste old and new generated passwords:</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-bordered table-sm" v-if="newPasswordProfiles.length > 0">
          <thead class="thead-inverse">
          <tr>
            <th class="text-center" colspan="9">Old profile</th>
            <th></th>
            <th class="text-center" colspan="9">New profile</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="text-center"><b>site</b></td>
            <td class="text-center"><b>login</b></td>
            <td class="text-center"><b>a-z</b></td>
            <td class="text-center"><b>A-Z</b></td>
            <td class="text-center"><b>0-9</b></td>
            <td class="text-center"><b>%!@</b></td>
            <td class="text-center"><b>length</b></td>
            <td class="text-center"><b>counter</b></td>
            <td class="text-center"><b>v</b></td>
            <td></td>
            <td class="text-center"><b>site</b></td>
            <td class="text-center"><b>login</b></td>
            <td class="text-center"><b>a-z</b></td>
            <td class="text-center"><b>A-Z</b></td>
            <td class="text-center"><b>0-9</b></td>
            <td class="text-center"><b>%!@</b></td>
            <td class="text-center"><b>length</b></td>
            <td class="text-center"><b>counter</b></td>
            <td class="text-center"><b>v</b></td>
          </tr>
          <tr v-for="profile in newPasswordProfiles" v-if="profile.oldPassword!==profile.newPassword">
            <td>
              {{profile.oldProfile.site}}
            </td>
            <td>
              {{profile.oldProfile.login}}
            </td>
            <td class="text-center">
              <option-thumb :thumbUp="profile.oldProfile.lowercase"></option-thumb>
            </td>
            <td class="text-center">
              <option-thumb :thumbUp="profile.oldProfile.uppercase"></option-thumb>
            </td>
            <td class="text-center">
              <option-thumb :thumbUp="profile.oldProfile.numbers"></option-thumb>
            </td>
            <td class="text-center">
              <option-thumb :thumbUp="profile.oldProfile.symbols"></option-thumb>
            </td>
            <td class="text-center"
                v-bind:class="{'bg-warning': profile.oldProfile.length !== profile.newProfile.length }">
              {{profile.oldProfile.length}}
            </td>
            <td class="text-center"
                v-bind:class="{'bg-warning': profile.oldProfile.counter !== profile.newProfile.counter }">
              {{profile.oldProfile.counter}}
            </td>
            <td class="text-center">
              {{profile.oldProfile.version}}
            </td>
            <td class="text-center">
              <button class="btn btn-default btn-sm" v-on:click="copyPassword(profile.oldPassword)">
                <i class="fa fa-clipboard"></i>
              </button>
              <button class="btn btn-default btn-sm" v-on:click="copyPassword(profile.newPassword)">
                <i class="fa fa-clipboard"></i>
              </button>
            </td>
            <td>
              {{profile.newProfile.site}}
            </td>
            <td>
              {{profile.newProfile.login}}
            </td>
            <td class="text-center">
              <option-thumb :thumbUp="profile.newProfile.lowercase"></option-thumb>
            </td>
            <td class="text-center">
              <option-thumb :thumbUp="profile.newProfile.uppercase"></option-thumb>
            </td>
            <td class="text-center">
              <option-thumb :thumbUp="profile.newProfile.numbers"></option-thumb>
            </td>
            <td class="text-center">
              <option-thumb :thumbUp="profile.newProfile.symbols"></option-thumb>
            </td>
            <td class="text-center"
                v-bind:class="{'bg-warning': profile.oldProfile.length !== profile.newProfile.length }"
                contenteditable="true">
              {{profile.newProfile.length}}
            </td>
            <td class="text-center"
                v-bind:class="{'bg-warning': profile.oldProfile.counter !== profile.newProfile.counter }">
              {{profile.newProfile.counter}}
            </td>
            <td class="text-center">
              {{profile.newProfile.version}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import MasterPassword from 'lesspass-pure/src/components/MasterPassword.vue'
  import password from '@/domain/password'
  import {V1ToV2DefaultRule, V1ToV2Rule, RulesController} from '@/domain/rules';
  import copy from '@/services/copy-text-to-clipboard';
  import OptionThumb from '@/components/OptionThumb'
  export default {
    name: 'index',
    components: {
      MasterPassword,
      OptionThumb
    },
    data(){
      return {
        oldProfiles: "[]",
        changeMyMasterPassword: false,
        oldMasterPassword: '',
        newMasterPassword: '',
        newPasswordProfiles: [],
        rules: ['V1ToV2DefaultRule', 'V1ToV2Rule']
      }
    },
    methods: {
      buildAllPasswords(){
        var oldProfiles = JSON.parse(this.oldProfiles);

        if (!this.changeMyMasterPassword) {
          this.newMasterPassword = this.oldMasterPassword
        }

        var instanciatedRules={
            'V1ToV2DefaultRule':new V1ToV2DefaultRule(),
            'V1ToV2Rule':new V1ToV2Rule(),
        };
        const controller = new RulesController();
        this.rules.forEach(rule =>{
          controller.addRule(instanciatedRules[rule]);
        });

        password.buildAllPasswords(controller.applyRules(oldProfiles), this.oldMasterPassword, this.newMasterPassword)
          .then(newPasswordProfiles => {
            this.newPasswordProfiles = newPasswordProfiles;
          });
      },
      copyPassword(password){
        const copied = copy(password);
      },
      clearProfileUpdate(profile){
        var version = profile.newProfile.version;
        profile.newProfile = profile.oldProfile;
        profile.newProfile.version = version;
        profile.updated = false;
      }
    }
  }
</script>
