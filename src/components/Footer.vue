<template>
  <footer>
    <h1 v-show="visible">Youngto's Resume</h1>
    <div class="exchange">
      <svg class="icon" v-if="show" @click="change1" data-icon="menu">
        <use xlink:href="#icon-menu"></use>
      </svg>
      <svg class="icon" v-else @click="change2" data-icon="close">
        <use xlink:href="#icon-close"></use>
      </svg>
    </div>
  </footer>
</template>
<script>
export default {
  data(){
    return {
      show: true,
      visible: true
    }
  },
  mounted(){
    this.$eventBus.$on('scrollPage',()=>{
      if(this.$eventBus.width>1000) return
      this.x()
    })
  },
  methods:{
    change1(){
      this.show = false
      this.visible = false
      this.$eventBus.$emit('exchange1')
    },
    change2(){
      this.x()
    },
    x(){
      this.show = true
      this.visible = true
      this.$eventBus.$emit('exchange2')
    }
  }
}
</script>
<style lang="scss" scoped>
footer{
  font-family: "SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
  width: 100%;
  height: 80px;
  background: #2f3542;
  display: flex;
  align-items: center;
  h1{
    color: #ffffff;
    margin-left: 20px;
    font-size: 20px;
  }
  .exchange{
    position: absolute;
    right: 20px;
    .icon{
      width: 36px;
      height: 36px;
      fill: #ffffff;
    }
  }
}
</style>