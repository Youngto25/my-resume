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
    <div class="download-button"><a href="./YangTao-FrontEnd-2019.pdf" target="_blank" download>下载 PDF 简历</a></div>
  </div>
</template>
<script>
export default {
  name: 'Personal'
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 999px){
  .wrapper{
    width: 100%;
    height: 100vh;
    justify-content: center;
    .touxiang{
      position: absolute;
      top: 0;
      margin-top: 100px;
      font-size: 24px;
    }
  }
}

@media screen and (min-width: 1000px){
  .wrapper{
    width: calc(100% - 250px);
    height: 100vh;
    .touxiang{
      margin-top: 50px;
      font-size: 40px;
    }
    .message{
      margin-top: 160px;
    }
  }
}

.wrapper{
  background: #f1f2f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  .touxiang{
  }
  .message{
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
    width: 70%;
    display:flex;
    justify-content: center;
    ul{
      li{
        width: 200px;
        text-align: center;
        font-size: 16px;
        padding: 8px 0;
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
  .download-button{
    cursor: pointer;
    margin-top: 50px;
    background: #f1f2f6;
    border: 1px solid rgba(0, 0, 0, 0.20);
    a{
      font-weight: 600px;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 180px;
      height: 50px;
      color: #000000;
    }
    &:hover{
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
    }
  }
}
</style>
