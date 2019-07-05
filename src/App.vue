<template>
  <div id="app">
    <Aside class="left"></Aside>
    <router-view name="main" class="right"></router-view>
  </div>
</template>

<script>
import Aside from './components/Aside.vue'

export default {
  name: 'app',
  components: {
    Aside
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  position: relative;
}
.left{
  position: absolute;
}
.right{
  position: absolute;
  left: 250px;
  width: calc(100% - 250px);
}
</style>
