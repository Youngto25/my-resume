<template>
  <div class="wrapper">
    <header></header>
    <main>
      
    </main>
    <div class="touxiang"></div>
    <div class="message">
      <ul>
        <li>Blake Yang</li>
        <li>求职岗位：前端工程师</li>
        <li>学历：本科</li>
        <li>毕业院校：合肥学院</li>
        <li>专业：网络工程</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Personal'
}
</script>
<style lang="scss" scoped>
.wrapper{
  width: calc(100% - 250px);
  height: 100vh;
  background: #f1f2f6;
  position: relative;
  header{
    width: 100%;
    height: 100px;
    background: #a4b0be;
  }
  .touxiang{
    height: 200px;
    width: 200px;
    background-image: url(http://img.mp.sohu.com/upload/20170806/72648a7c2e984c8e9da44dc676997692_th.png);
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -60px;
  }
  .message{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 170px;
    ul{
      li{
        width: 200px;
        text-align: center;
        margin-top: 20px;
        font-size: 16px;
        &:first-child{
          font-size: 24px;
        }
      }
    }
  }
}
</style>
