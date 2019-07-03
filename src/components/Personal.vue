<template>
  <div class="wrapper">
    <header></header>
    <main>个人介绍</main>
  </div>
</template>
<script>
export default {
  name: 'Personal'
}
</script>
<style lang="scss" scoped>
.wrapper{
  width: calc(100% - 300px);
  height: 100vh;
  header{
    width: 100%;
    height: 100px;
    background: red;
  }
}
</style>
