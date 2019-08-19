<template>
<div class="box">
    <div class="content-wrapper">
      <h2>{{ item.title }}</h2>
      <div class="img-wrapper">
        <img v-for="(good,index) in src" :src="good" alt="" @click="bigImg" ref="img" :key="index">
      </div>
      <div class="describ">
        <p>项目介绍：<span v-html="item.describ"></span></p>
        <p v-if="item.useWhat">技术栈：{{ format(item.useWhat) }}</p>
        <p>项目源码：<span @click="skip">{{ item.yuanma }}</span></p>
        <p v-if="item.liulan">预览链接：<span @click="skip">{{ item.liulan }}</span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  data(){
    return {}
  },
  mounted(){
    this.$el.querySelectorAll('.img-wrapper img').forEach((el)=>{
      el.style.width = `${100 / this.src.length}%`
    })
    this.$el.querySelectorAll('.mark').forEach(item=>{
      item.style.color = 'red'
    })
  },
  computed: {
    src: function(){
      return this.item.src.map(xxx=>
        require(`../assets/${xxx}`)
      )
    }
  },
  methods: {
    format(useWhat){
      return useWhat.map((what)=>
        `${what}`
      ).join(' + ')
    },
    bigImg(){
      this.$emit('xxx',this.src)
    },
    skip(e){
      window.open(e.target.innerText)
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 999px){
  .box{
    width: 98vw;
    margin: 10px 0;
    overflow: hidden;
    .content-wrapper{
      .img-wrapper{
        img{
          //max-height: 40vw;
        }
      }
    }
  }
}

@media screen and (min-width: 1000px){
  .box{
    width: 700px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
    margin-top: 40px;
    margin-bottom: 20px;
    .content-wrapper{
      .img-wrapper{
        img{
          padding: 0 2px;
          //height: auto;
        }
      }
    }
  }
}

.box{
  background: #ffffff;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-wrapper{
    width: 94%;
    h2{
      padding: 4px 0;
      font-size: 16px;
      font-weight: 400;
    }
    .img-wrapper{
      display: flex;
      width: 100%;
      img{
        &:hover{
          cursor: pointer;
        }
      }
    }
    .describ{ 
      margin: 8px 0;
      p{
        padding: 2px 0;
        font-size: 14px;
        color: #4E4E4E;
        &:not(:first-child){
          span{
            cursor: pointer;
            &:hover{
              color: #cccccc;
            }
          }
        }
      }
    }
  }
}
</style>
