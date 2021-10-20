<template>
  <div class="">
    <input class="uk-input" type="text" placeholder="Search" v-model="search" >
  </div>
</template>

<script>
export default {
  name: "SearchText",
  data(){
    return{
      search: ''
    }
  },
  watch:{
    search: function (){
      //console.log(this.search)
      this.$store.dispatch('setSearchKey', this.search)
    }
  }
}
</script>

<style scoped>

</style>