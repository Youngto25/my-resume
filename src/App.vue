<template>
  <div id="app">
    <Footer v-if="show" class="top"></Footer>
    <Aside class="left" v-show="visible"></Aside>
    <router-view name="main" class="right"></router-view>
  </div>
</template>

<script>
import Aside from './components/Aside.vue'
import Footer from './components/Footer.vue'
import Vue from 'vue'
const eventBus = new Vue()
Vue.prototype.$eventBus = eventBus
export default {
  name: 'app',
  data() {
    return {
      show: false,
      visible: true,
      clientWidth: null
    }
  },
  beforeMount(){
    this.judge()
    window.addEventListener('resize',this.judge)
  },
  mounted(){
    this.$eventBus.$on('exchange1',()=>{
      this.visible = true
    })
    this.$eventBus.$on('exchange2',()=>{
      this.visible = false
    })
  },
  methods:{
    judge(){
      this.clientWidth = document.documentElement.clientWidth
      if(this.clientWidth < 1000 ){
        this.$eventBus.width = 900
        this.show = true
        this.visible = false
      }else{
        this.$eventBus.width = 1001
        this.show = false
        this.visible = true
      }
    }
  },
  components: {
    Aside,
    Footer
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

@media screen and (max-width: 999px){
  
}

@media screen and (min-width: 1000px){
  .right{
    left: 250px;
    width: calc(100% - 250px);
  }
}
.top{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
}

.left{
  position: absolute;
  z-index: 10;
}
.right{
  position: absolute;
  z-index: 1;
}
</style>
