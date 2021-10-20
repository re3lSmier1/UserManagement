<template>
  <div class="roleCardContainer">

    <div class="roleSemiContainer">
      <div class="uk-text-right" v-if="!user.active">
        <span class="uk-badge " style="background-color: red">Inactive</span>
      </div>
      <div class="uk-text-right" v-else>
        <br>
      </div>

      <div>
        <h4>{{ user.name}}</h4>
        <p class="userRole">{{ user.type }}</p>
        <p class="uk-text-small">
          {{ user.description }}
        </p>
      </div>
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
            <p class="dateCreated" v-if="!user.editable">Last update: <span>{{ user.modified_on | moment("calendar") }} </span></p>
            <p class="dateCreated" v-if="user.editable">Date Created: <span>{{ user.created_on | moment("calendar") }} </span></p>
          </div>
          <div class="uk-width-1-2@s">
            <div class="uk-align-right" v-if="user.editable">
              <a href="#" class="uk-button uk-button-link uk-margin-small-right uk-text-bold">Edit</a>
              <a href="#" class="uk-button uk-button-link uk-text-danger uk-text-bold">Delete</a>
            </div>
            <div class="uk-align-right" v-if="!user.editable">
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