<template>
  <div class="wrapper">
    <footer>Technical Station</footer>
    <main>
      <div class="content">
        <ul>
          <li>
            <h3><span></span>Vue</h3>
            <p> 熟悉Vue常用功能，如组件、生命周期、双向绑定、Vue-router、Vuex ，熟练使用脚手架工具 Vue CLI。</p>
          </li>
          <li>
            <h3><span></span>小程序制作</h3>
            <p>可以独立进行小程序开发，熟悉 WXML WXSS JS 相关 API 及组件的使用。</p>
          </li>
          <li>
            <h3><span></span>HTML5 & CSS3 & ES6</h3>
            <p>熟悉 HTML5 及语义化，了解 Canvas 动画制作，掌握 CSS3 动画、过渡效果等常用技术，熟悉原生 JavaScript，会使用 ES6+ 常用规范。</p>
          </li>
          <li>
            <h3><span></span>HTTP</h3>
            <p>了解 HTTP 相关知识，了解常见的 Web 性能优化方案。</p>
          </li>
          <li>
            <h3><span></span>移动端页面</h3>
            <p>会使用 REM、vw/vh、响应式等技术制作适配手机设备的页面。</p>
          </li>
          <li>
            <h3><span></span>打包工具</h3>
            <p>熟悉模块化、工程化开发流程，可以熟练使用 webpack parcel 等打包工具。</p>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'Skill'
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 999px){
  .wrapper{
    width: 100%;
    height: 100vh;
    justify-content: center;
    footer{
      position: absolute;
      top: 0;
      margin-top: 100px;
    }
    main{
      margin-top: 50px;
    }
  }
}

@media screen and (min-width: 1000px){
  .wrapper{
    width: calc(100% - 250px);
    height: 100vh;
    footer{
      margin-top: 50px;
    }
    main{
      margin-top: 60px;
    }
  }
}

.wrapper{
  background: #f1f2f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  footer{
      font-size: 40px;
  }
  main{
    width: 80%;
    .content{
      background: #ffffff;
      padding: 8px;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
      ul{
        li{
          margin-bottom: 12px;
          h3{
            display: inline-flex;
            align-items: center;
            color: black;
            font-size: 16px;
            span{
              display: inline-block;
              height: 4px;
              width: 4px;
              border-radius: 50%;
              background: #4E4E4E;
              margin-right: 8px;
            }
          }
          p{
            margin-top: 4px;
            font-size: 14px;
            color: #4E4E4E;
          }
        }
      }
    }
  }
}
</style>