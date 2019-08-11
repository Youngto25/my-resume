<template>
<div id="box">   
  <div id="float" class="div1">     
    <aside>
      <header>Youngto's Resume</header>
      <div class="list">
        <div>
          <router-link :to="{name:'personal'}">
            <span class="compainer" @click.capture="addStyle">
              <span class="chinese">关于</span>
              <span class="english">About Me</span>
            </span>
          </router-link>
        </div>
        <div>
          <router-link :to="{name:'portfolio'}">
            <span class="compainer" @click.capture="addStyle">
              <span class="chinese">项目</span>
              <span class="english">portfolio</span>
            </span>
          </router-link>
        </div>
        <div>
          <router-link :to="{name:'skill'}">
            <span class="compainer" @click.capture="addStyle">
              <span class="chinese">技能</span>
              <span class="english">Technical Station</span>
            </span>
          </router-link>
        </div>
        <div>
          <router-link :to="{name:'contact'}">
            <span class="compainer" @click.capture="addStyle">
              <span class="chinese">联系</span>
              <span class="english">Contact</span>
            </span>
          </router-link>
        </div>
      </div>
      <footer>
        <span @click="openGithub">
          <svg class="icon">
            <use xlink:href="#icon-github"></use>
          </svg>
        </span>
        <span @click="openCodepen">
          <svg class="icon">
            <use xlink:href="#icon-codepen"></use>
          </svg>
        </span>
        <span @click="openJianshu">
          <svg class="icon">
            <use xlink:href="#icon-jianshu"></use>
          </svg>
        </span>
      </footer>
    </aside>
  </div>   
</div> 
</template>

<script>
import '../svg/svg'
export default {
  name: "Aider",
  methods: {
    openGithub(){
      window.open('https://github.com/Youngto25')
    },
    openCodepen(){
      window.open('https://codepen.io/youngto25/')
    },
    openJianshu(){
      window.open('https://www.jianshu.com/u/1c5fe5a330e2')
    },
    addStyle(e){
      this.$el.querySelectorAll('.compainer').forEach(item=>{
        item.classList.remove('active')
      })
      if(e.target.classList.contains('compainer')){
          e.target.classList.add('active')
        }else{
          e.target.parentNode.classList.add('active')
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
aside {
  font-family: "SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
  width: 250px;
  height: 100vh;
  background: #2f3542;
  position: fixed;
  .list {
    div {
      width: 250px;
      font-size: 18px;
      padding: 5px 0;
      .compainer{
        display: inline-block;
        width: 250px;
        height: 44px;
        line-height: 44px;
        &.active{
          span{
            color: #eccc68;
            font-weight: 400;
          }
        }
        .chinese{
          color: #fff;
          display: inline-block;
          width: 50px;
          margin-left: 50px;
        }
        .english{
          color: #fff;
          font-size: 14px;
        }
      }
      &:hover{
          background: #57606f;
          .compainer{
          .chinese{
            color: #eccc68;
            font-weight: 400;
          }
          .english{
            color: #eccc68;
            font-weight: 400;
          }
        }
      }
    }
  }
  header,
  .list {
    position: absolute;
  }
  header {
    font-family: inherit;
    color: #ffffff;
    font-size: 28px;
    top: 100px;
    width: 250px;
    text-align: center;
  }
  .list {
    top: 200px;
  }
  footer{
    position: absolute;
    left: 50%;
    top: 850px;
    transform: translateX(-50%);
    width: 200px;
    text-align: center;
    span{
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: #fff;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      &:not(:last-child){
        margin-right: 10px;
      }
      &:hover{
        background: #57606f;
        fill: #eccc68;
        cursor: pointer;
      }
      .icon{
        height: 40px;
        width: 40px;
      }
    }
  }
}
</style>
