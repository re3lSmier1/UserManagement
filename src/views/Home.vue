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
        <div>
          <label for="roleStatus" class="uk-text-small">Role Status</label>
          <select class="uk-select">
            <option>Option 01</option>
            <option>Option 02</option>
          </select>
        </div>
        <div class="newRoleContainer">
          <br>
          <button class="uk-button uk-button-primary">Create New Role</button>
        </div>

      </div>
      <br><br>
      <div class="uk-child-width-1-3@m" uk-grid>
        <div>
          <RoleCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import RoleCard from "../components/RoleCard";
export default {
  name: 'Home',
  components: {
    RoleCard

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