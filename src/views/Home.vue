<template>
  <div class="home">
    <div class="uk-container">
      <h2 class="uk-heading-bullet">User Roles Management</h2>
      <br><br>
      <div class="uk-child-width-1-3@m" uk-grid>
        <div>
         <br>
          <div uk-grid>
            <div class="uk-width-4-5@s">

              <input class="uk-input" type="text" placeholder="Search">
            </div>
            <div class="uk-width-1-5@s">
              <a href="" uk-icon="icon: search"></a>
            </div>
          </div>
        </div>
        <SelectFilter/>
        <div class="newRoleContainer">
          <br>
          <button class="uk-button uk-button-primary">Create New Role</button>
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
export default {
  name: 'Home',
  data() {
    return {
      role: "InActive"
    }
  },
  components: {
    SelectFilter,
    RoleCard
  },

  computed: {
    getUserRoles: function (){
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