<template>
  <div class="home">
    <div class="uk-container">
      <h2 class="uk-heading-bullet">User Roles Management</h2>
      <br><br>
      <div class="uk-child-width-1-3@m" uk-grid>
        <div>
         <br>
          <SearchText/>
        </div>
        <SelectFilter/>
        <div class="newRoleContainer">
          <br>
          <router-link to="/create" class="uk-button uk-button-primary">Create New Role</router-link>
        </div>

      </div>
      <br><br>
      <div class="uk-child-width-1-3@m" uk-grid>
        <div v-for="item in getUserRoles">
          <RoleCard  :user="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import RoleCard from "../components/RoleCard";
import SelectFilter from "../components/SelectFilter";
import SearchText from "../components/SearchText";
export default {
  name: 'Home',
  data() {
    return {
      search: ""
    }
  },
  components: {
    SearchText,
    SelectFilter,
    RoleCard
  },

  computed: {
    getUserRoles: function (){
      console.log(this.$store.getters.filterByRoles(this.$store.state.currentRole))
      return this.$store.getters.filterByRoles(this.$store.state.currentRole)

    },
    getOptions: function (){
      return this.$store.state.filterOptions
    }
  },

  mounted() {

  }
}
</script>

<style scoped>
  .home{
    padding: 30px
  }
  .newRoleContainer{
    text-align: right
  }
</style>