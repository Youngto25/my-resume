<template>
  <aside>
    <header>Blake's Resume</header>
    <div class="list">
      <div>
        <router-link :to="{name:'personal'}">
          <span class="compainer">
            <span class="chinese">关于</span>
            <span class="english">About Me</span>
          </span>
        </router-link>
      </div>
      <div>
        <router-link :to="{name:'portfolio'}">
          <span class="compainer">
            <span class="chinese">项目</span>
            <span class="english">portfolio</span>
          </span>
        </router-link>
      </div>
      <div>
        <router-link :to="{name:'skill'}">
          <span class="compainer">
            <span class="chinese">技能</span>
            <span class="english">Technical Station</span>
          </span>
        </router-link>
      </div>
      <div>
        <router-link :to="{name:'contact'}">
          <span class="compainer">
            <span class="chinese">联系</span>
            <span class="english">Contact</span>
          </span>
        </router-link>
      </div>
    </div>
    <footer>
      <div>
        <span @click="openGithub">
          <svg class="icon">
            <use xlink:href="#icon-github"></use>
          </svg>
        </span>
        <span @click="openJianshu">
          <svg class="icon">
            <use xlink:href="#icon-jianshu"></use>
          </svg>
        </span>
      </div>
    </footer>
  </aside>
</template>

<script>
import '../svg/svg'
export default {
  name: "Aider",
  methods: {
    openGithub(){
      window.open('https://github.com/Youngto25')
    },
    openJianshu(){
      window.open('https://www.jianshu.com/u/1c5fe5a330e2')
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
  position: relative;
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
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    span{
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: #fff;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      &:first-child{
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
