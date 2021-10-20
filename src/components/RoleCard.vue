<template>
  <div class="roleCardContainer">

    <div class="roleSemiContainer">
      <div class="uk-text-right" v-if="!user.active">
        <span class="uk-badge " style="background-color: red">Inactive</span>
      </div>
      <h4>{{ user.name}}</h4>
      <p class="userRole">{{ user.type }}</p>
      <p class="uk-text-small">
        {{ user.description }}
      </p>
      <div >
        <span v-for="person in user.users">
          <UsersImage :person="person"/>
        </span>
      </div>
    </div>
    <div>
      <div class="roleActionContainer">
        <div class="" uk-grid>
          <div class="uk-width-1-2">
            <p class="dateCreated">Date Created: <span>{{ user.created_on | moment("calendar") }} </span></p>
          </div>
          <div class="uk-width-1-2@s">
            <div>
              <a href="#" class="uk-button uk-button-link uk-margin-small-right">Edit</a>
              <a href="#" class="uk-button uk-button-link">Delete</a>
            </div>
            <div class="uk-align-right">
              <span uk-icon="lock" style="padding-right: 15px"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersImage from "./UsersImage";
export default {
  name: "RoleCard",
  components: {UsersImage},
  props: {
    user:{
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
  .roleCardContainer{

    border: 1px solid rgba(153, 153, 153, 0.3);
    border-radius: 5px;
  }
  .roleSemiContainer{
    padding: 15px;
  }
  .roleActionContainer{
    background-color: rgba(153, 153, 153, 0.3);
    padding: 10px;
  }
  .userRole{
    margin-top: -20px;
    font-size:  14px;
    text-transform: capitalize;
  }
  .dateCreated{
    font-size: small;
  }
</style>