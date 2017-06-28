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
        <h3 class="mt-5 mb-2">2 - Set your(s) master password(s)</h3>
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
    <div class="row">
      <div class="col">
        <h3 class="mt-5 mb-2">3 - Build your passwords:</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary" v-on:click="buildAllPasswords()">Build all passwords</button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3 class="mt-5 mb-2">4 - Copy paste old and new generated passwords:</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-bordered table-sm">
          <thead class="thead-inverse">
          <tr>
            <th class="text-center" colspan="8">Old profile</th>
            <th></th>
            <th class="text-center" colspan="8">New profile</th>
            <th></th>
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
            <td></td>
            <td class="text-center"><b>site</b></td>
            <td class="text-center"><b>login</b></td>
            <td class="text-center"><b>a-z</b></td>
            <td class="text-center"><b>A-Z</b></td>
            <td class="text-center"><b>0-9</b></td>
            <td class="text-center"><b>%!@</b></td>
            <td class="text-center"><b>length</b></td>
            <td class="text-center"><b>counter</b></td>
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
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import MasterPassword from 'lesspass-pure/src/components/MasterPassword.vue'
  import migration from '@/services/migration';
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
        newPasswordProfiles: []
      }
    },
    methods: {
      buildAllPasswords(){
        var oldProfiles = JSON.parse(this.oldProfiles);
        if (!this.changeMyMasterPassword) {
          this.newMasterPassword = this.oldMasterPassword
        }
        migration.buildAllPasswords(migration.transformProfilesFromV1ToV2(oldProfiles), this.oldMasterPassword, this.newMasterPassword)
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
