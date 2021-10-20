<template>
  <div class="uk-padding">
    <div class="uk-container">
      <h2 class="uk-heading-bullet">{{ this.$route.name }}</h2>
      <div>
        <form  @submit.prevent="validateForm('form-1')"  data-vv-scope="form-1">
          <fieldset class="uk-fieldset">

            <div class="uk-margin">
              <label class="uk-text-small uk-text-muted" for="">Name of Role</label>
              <input class="uk-input" type="text"
                     placeholder="Your Name" name="roleName" v-validate="'required'"
                     v-model="roleName" :class="{'input': true, 'is-danger': errors.has('form-1.roleName') }" data-vv-as="role name">
              <span v-show="errors.has('form-1.roleName')" class=" uk-text-danger uk-text-small">{{ errors.first('form-1.roleName') }}</span>
            </div>
            <div class="uk-margin">
              <label class="uk-text-small uk-text-muted" for="">Type of Role</label>
              <select class="uk-select" name="roleType" v-model="roleType" v-validate="'required'"
                      :class="{'input': true, 'is-danger': errors.has('form-1.roleType') }" data-vv-as="role type">
                <option value="admin">Admin</option>
                <option value="job_admin">Job Admin</option>
              </select>
              <span v-show="errors.has('form-1.roleType')" class=" uk-text-danger uk-text-small">{{ errors.first('form-1.roleType') }}</span>
            </div>
            <div class="uk-margin">
              <label class="uk-text-small uk-text-muted" for="">Description of Role</label>
              <textarea class="uk-textarea" rows="3"
                        style="resize: none"
                        v-model="roleDescription" data-vv-as="role description"
                        placeholder="Enter a description of the role" name="roleDescription"
                        v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('form-1.roleDescription') }"></textarea>

              <span v-show="errors.has('form-1.roleDescription')" class=" uk-text-danger uk-text-small">{{ errors.first('form-1.roleDescription') }}</span>
            </div>
            <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">

              <div>
                <label><input class="uk-checkbox uk-text-small uk-text-muted " type="checkbox" checked v-model="isEditable"> Editable</label>
                <label><input class="uk-checkbox uk-text-small uk-text-muted uk-margin-left" type="checkbox" v-model="isActive"> Active</label>
              </div>
            </div>

            <div class="uk-margin">
              <button class="uk-button uk-button-secondary uk-align-right" style="background-color: #004e9c;">Send</button>
            </div>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import UIkit from "uikit";
export default {
  name: "AddOrEditRole",
  data () {
    return {
      roleName: '',
      roleType: '',
      roleDescription: '',
      isEditable: false,
      isActive: false
    }
  },
  methods: {
    validateForm(scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          this.$store.dispatch('AddNewRole',{
            name: this.roleName,
            type: this.roleType,
            description: this.roleDescription,
            editable: this.isEditable,
            active: this.isActive,
            created_on: Date.now(),
            modified_on: Date.now(),
          })
          UIkit.notification('New Role created');
          this.$router.push('/')
          /*alert('Form Submitted!');*/

        }
      });
    }
  }
}
</script>

<style scoped>

</style>