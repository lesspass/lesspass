<style>
  #passwords__list {
    min-height: 235px;
    padding-bottom: 1em;
  }

  #passwords__pagination .pagination {
    margin-bottom: 0;
  }

  #passwords__pagination .page-link {
    cursor: pointer;
  }

  .passwords__profile {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  .passwords__profile:last-child {
    border-bottom: none;
  }
</style>
<template>
  <div id="passwords">
    <div id="passwords__search" class="pb-3">
      <div class="row">
        <div class="col">
          <div class="inner-addon left-addon">
            <i class="fa fa-search"></i>
            <input class="form-control" name="search" placeholder="Search" v-model="searchQuery">
          </div>
        </div>
      </div>
    </div>
    <div id="passwords__list">
      <div v-if="passwords.length === 0">
        <div class="row">
          <div class="col">
            {{$t('NoPassword', "You don't have any password profile saved in your database.")}}
            <router-link :to="{ name: 'home'}">{{$t('CreatePassword', 'Would you like to create one?')}}</router-link>
          </div>
        </div>
      </div>
      <div v-if="filteredPasswords.length === 0 && passwords.length > 0">
        <div class="row">
          <div class="col">
            {{$t('NoMatchFor', 'Oops! There are no matches for')}} "{{searchQuery}}".
            {{$t('UpdateYourSearch', 'Please try broadening your search.')}}
          </div>
        </div>
      </div>
      <password-profile
        class="passwords__profile"
        v-bind:password="password"
        v-on:deleted="pagination.current_page=1"
        v-for="password in filteredPasswords"
        :key="password.id"></password-profile>
    </div>
    <div id="passwords__pagination" v-if="pagination.number_of_pages > 1">
      <nav aria-label="...">
        <ul class="pagination pagination-sm">
          <li class="page-item"
              v-bind:class="{'disabled':pagination.current_page === 1}">
               <span class="page-link" href="#" tabindex="-1"
                     v-on:click="pagination.current_page -= 1">
                 {{$t('Previous')}}
               </span>
          </li>
          <li class="page-item"
              v-for="pageNumber in pagination.number_of_pages"
              v-bind:class="{'active':pageNumber === pagination.current_page}">
            <span class="page-link" href="#" v-on:click="pagination.current_page = pageNumber">{{pageNumber}}</span>
          </li>
          <li class="page-item"
              v-bind:class="{'disabled':pagination.current_page === pagination.number_of_pages}">
               <span class="page-link" href="#"
                     v-on:click="pagination.current_page += 1">
                 {{$t('Next')}}
               </span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import PasswordProfile from '../components/PasswordProfile.vue';
  import {mapGetters} from 'vuex';

  export default {
    name: 'passwords-view',
    data(){
      return {
        searchQuery: '',
        pagination: {
          number_of_pages: 1,
          per_page: 4,
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
    }
  }
</script>
