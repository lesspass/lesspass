<template>
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col">
        <h1>LessPass Move (v0.1.0-alpha)</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3 class="mt-2 mb-4"><span class="badge badge-pill badge-primary">1</span> Import your profiles</h3>
        <div class="login">
          <div class="form-group">
            <label for="url" class="sr-only">Url</label>
            <input id="url" type="url" class="form-control" placeholder="Url" v-model="url">
          </div>
          <div class="form-group">
            <label for="email" class="sr-only">Email</label>
            <input id="email" type="email" class="form-control" placeholder="Email" v-model="email">
          </div>
          <div class="form-group">
            <master-password
              id="password"
              label="Master Password"
              v-model="password"
              v-bind:email="email"
              v-bind:showEncryptButton="true"
              EncryptButtonHelp="Click me to encrypt this password before sending it to lesspass.com"
              EncryptButtonText="Encrypt my master password"></master-password>
          </div>
          <button class="btn btn-primary"
                  v-on:click="importProfiles()"
                  v-if="oldProfiles.length===0">Import your profiles
          </button>
          <div v-else>
            <button class="btn btn-success"
                    v-on:click="oldProfiles = []">
              <i class="fa fa-check"></i> {{oldProfiles.length}} profiles
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <h3 class="mt-2 mb-4"><span class="badge badge-pill badge-primary">2</span> Master Password</h3>
        <form>
          <div class="form-group">
            <master-password
              id="oldMasterPassword"
              label="Old Master Password"
              v-model="oldMasterPassword"></master-password>
            <master-password
              id="newMasterPassword"
              label="New Master Password"
              v-model="newMasterPassword"
              v-if="changeMyMasterPassword"></master-password>
          </div>
        </form>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" v-model="changeMyMasterPassword">
            Change your master password
          </label>
        </div>
      </div>
      <div class="col">
        <h3 class="mt-2 mb-4"><span class="badge badge-pill badge-default">3</span> Select rules (optional)</h3>
        <form action="">
          <div class="form-check" v-for='rule in rules'>
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" v-bind:value="rule.name" v-model="rule.checked">
              {{rule.description}}
            </label>
          </div>
        </form>
      </div>
      <div class="col">
        <h3 class="mt-2 mb-4"><span class="badge badge-pill badge-primary">4</span> Build your passwords</h3>
        <button class="btn btn-primary" v-on:click="buildAllPasswords()">Build your passwords</button>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h3 class="my-5"><span class="badge badge-pill badge-primary">5</span> Copy paste old and new generated
          passwords</h3>
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
  import OptionThumb from '@/components/OptionThumb';
  import axios from 'axios';

  export default {
    name: 'index',
    components: {
      MasterPassword,
      OptionThumb
    },
    data(){
      return {
        url: 'https://lesspass.com',
        email: '',
        password: '',
        oldProfiles: [],
        changeMyMasterPassword: false,
        oldMasterPassword: '',
        newMasterPassword: '',
        newPasswordProfiles: [],
        rules: [
          {
            name: 'V1ToV2DefaultRule',
            checked: true,
            order: 1,
            description: 'Transform default V1 profile into default V2 profile',
            instance: new V1ToV2DefaultRule()
          },
          {
            name: 'V1ToV2Rule',
            checked: true,
            order: 2,
            description: 'Migrate version 1 to version 2',
            instance: new V1ToV2Rule()
          }
        ]
      }
    },
    methods: {
      buildAllPasswords(){
        if (!this.changeMyMasterPassword) {
          this.newMasterPassword = this.oldMasterPassword
        }

        const controller = new RulesController();
        this.rules
          .sort((r1, r2) => {
            return r1.order - r2.order;
          })
          .filter(rule => {
            return rule.checked;
          })
          .forEach(rule => {
            controller.addRule(rule.instance);
          });

        password.buildAllPasswords(controller.applyRules(this.oldProfiles), this.oldMasterPassword, this.newMasterPassword)
          .then(newPasswordProfiles => {
            this.newPasswordProfiles = newPasswordProfiles;
          });
      },
      importProfiles(){
        axios.get('/api/passwords/', {
          baseURL: this.url, auth: {
            username: this.email,
            password: this.password
          }
        }).then(response => {
          this.oldProfiles = response.data.results;
        })
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
