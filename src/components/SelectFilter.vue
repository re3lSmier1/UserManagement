<template>
  <div>
    <label for="roleStatus" class="uk-text-small">Role Status</label>
    <select class="uk-select" @change="onChange($event)" v-model="role">
      <option v-for="item in getOptions" :value="item">{{ item }}</option>

    </select>
  </div>
</template>

<script>
export default {
  name: "SelectFilter",
  data() {
    return {
      role: ""
    }
  },
  computed: {
    getOptions: function (){
      return this.$store.state.filterOptions
    }
  },
  methods: {
    onChange(event) {
      this.$store.dispatch('setCurrentRole', this.role)
    }
  }
}
</script>

<style scoped>

</style>