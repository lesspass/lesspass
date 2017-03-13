<style>
  .fa-none {
    display: none
  }

  #passwordsList {
    min-height: 280px;
    padding-bottom: 1em;
  }

  .passwordProfile {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  .passwordProfile:last-child {
    border-bottom: none;
  }
</style>
<template>
  <div id="passwords">
    <div v-if="passwords.length === 0">
      <div class="row">
        <div class="col">
          You don't have any password profile saved in your database.
          <router-link :to="{ name: 'home'}">Would you like to create one?</router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row pb-3">
        <div class="col">
          <div class="inner-addon left-addon">
            <i class="fa fa-search"></i>
            <input class="form-control" name="search" placeholder="Search" v-model="searchQuery">
          </div>
        </div>
      </div>
      <div v-if="filteredPasswords.length === 0">
        <div class="row">
          <div class="col">
            Oops! There are no matches for "{{searchQuery}}". Please try broadening your search.
          </div>
        </div>
      </div>
      <div v-else>
        <div id="passwordsList">
          <password-profile class="passwordProfile"
                            v-bind:password="password"
                            v-for="password in filteredPasswords"
                            :key="password.id"></password-profile>
        </div>
        <div class="row mt-2" v-if="pagination.number_of_pages > 1">
          <div class="col-4">
            <i class="fa fa-arrow-left pointer"
               v-on:click="pagination.current_page -= 1"
               v-bind:class="{'fa-none':pagination.current_page === 1}"></i>
          </div>
          <div class="col-4 text-center">
            {{pagination.current_page}} / {{Math.ceil(passwords.length/pagination.per_page)}}
          </div>
          <div class="col-4 text-right">
            <i class="fa fa-arrow-right pointer"
               v-on:click="pagination.current_page += 1"
               v-bind:class="{'fa-none':pagination.current_page === pagination.number_of_pages}"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import PasswordProfile from '../components/PasswordProfile.vue';
  import {mapGetters} from 'vuex';

  function fetchPasswords(store) {
    return store.dispatch('getPasswords')
  }

  export default {
    name: 'passwords-view',
    data(){
      return {
        searchQuery: '',
        pagination: {
          number_of_pages: 1,
          per_page: 5,
          current_page: 1
        },
      }
    },
    components: {PasswordProfile},
    computed: {
      ...mapGetters(['passwords']),
      filteredPasswords(){
        const passwords = this.passwords.filter(password => {
          var loginMatch = password.login.match(new RegExp(this.searchQuery, 'i'));
          var siteMatch = password.site.match(new RegExp(this.searchQuery, 'i'));
          return loginMatch || siteMatch;
        });
        this.pagination.number_of_pages = Math.ceil(passwords.length / this.pagination.per_page);
        return passwords.slice(
          this.pagination.current_page * this.pagination.per_page - this.pagination.per_page,
          this.pagination.current_page * this.pagination.per_page
        );
      }
    },
    preFetch: fetchPasswords,
    beforeMount () {
      fetchPasswords(this.$store);
    },
  }
</script>
