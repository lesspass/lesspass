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
        v-on:deleted="pagination.currentPage=1"
        v-for="password in filteredPasswords"
        :key="password.id"></password-profile>
    </div>
    <div id="passwords__pagination" v-if="pagination.pageCount > 1">
      <paginate
        :page-count="pagination.pageCount"
        :click-handler="setCurrentPage"
        :containerClass="'pagination pagination-sm'"
        :page-class="'page-item'"
        :prev-class="'page-item'"
        :next-class="'page-item'"
        :page-link-class="'page-link'"
        :prev-link-class="'page-link'"
        :next-link-class="'page-link'"
        :prev-text="$t('Previous')"
        :next-text="$t('Next')">
      </paginate>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import PasswordProfile from '../components/PasswordProfile.vue';
  import {mapGetters} from 'vuex';
  import Paginate from 'vuejs-paginate';

  export default {
    name: 'passwords-view',
    data(){
      return {
        searchQuery: '',
        pagination: {
          pageCount: 1,
          perPage: 4,
          currentPage: 1
        },
      }
    },
    components: {
      PasswordProfile,
      Paginate
    },
    computed: {
      ...mapGetters(['passwords']),
      filteredPasswords(){
        const passwords = this.passwords.filter(password => {
          var loginMatch = password.login.match(new RegExp(this.searchQuery, 'i'));
          var siteMatch = password.site.match(new RegExp(this.searchQuery, 'i'));
          return loginMatch || siteMatch;
        });
        this.pagination.pageCount = Math.ceil(passwords.length / this.pagination.perPage);
        return passwords.slice(
          this.pagination.currentPage * this.pagination.perPage - this.pagination.perPage,
          this.pagination.currentPage * this.pagination.perPage
        );
      }
    },
    methods: {
      setCurrentPage(page){
        this.pagination.currentPage = page;
      }
    }
  }
</script>
