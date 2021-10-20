<template>
  <a href="#">
    <img class="imgStyle uk-border-circle" :src="person.photo_url" alt="">
  </a>
</template>

<script>
export default {
  name: "UsersImage",
  props: {
    person: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
  .imgContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: flex-start;
  }
  .imgStyle{
    height: 30px;
    width: 30px;
    margin-right: 5px;

  }
</style>