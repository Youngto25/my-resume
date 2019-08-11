<template>
  <div class="wrapper">
    <div class="touxiang">About Me</div>
    <div class="message">
      <ul>
        <li><span>杨</span><span>涛</span></li>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  .touxiang{
    font-size: 40px;
    margin-top: 50px;
  }
  .message{
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
    width: 70%;
    display:flex;
    justify-content: center;
    margin-top: 160px;
    ul{
      li{
        width: 200px;
        text-align: center;
        font-size: 16px;
        padding: 4px 0;
        &:first-child{
          font-size: 24px;
          span{
            padding: 0 10px;
          }
        }
        &:first-child{
          padding-top: 8px;
        }
        &:last-child{
          padding-bottom: 8px;
        }
      }
    }
  }
}
</style>
