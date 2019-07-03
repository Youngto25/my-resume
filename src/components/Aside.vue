<template>
  <aside>
    <ul>
      <li>
        <router-link :to="{name:'personal'}">About Me</router-link>
      </li>
      <li>
        <router-link :to="{name:'portfolio'}">作品</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Aider',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
aside{
  width: 300px;
  height: 100vh;
  background: teal;
}
</style>
