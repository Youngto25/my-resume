<template>
  <div class="wrapper">
    <footer>
      Contact
    </footer>
    <main>
      <div>
        <svg class="icon">
          <use xlink:href="#icon-weixin"></use>
        </svg>
        <span>yt2979337714</span>
      </div>
      <div>
        <svg class="icon">
          <use xlink:href="#icon-email"></use>
        </svg>
        <span>13625606990@163.com</span>
      </div>
      
    </main>
  </div>
</template>
<script>
export default {
  name: 'Contack'
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
      font-size: 24px;
    }
    main{
      width: 70%;
    }
  }
}

@media screen and (min-width: 1000px){
  .wrapper{
    width: calc(100% - 250px);
    height: 100vh;
    footer{
      margin-top: 50px;
      font-size: 40px;
    }
    main{
      margin-top: 200px;
      width: 60%;
    }
  }
}

.wrapper{
  background: #f1f2f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  footer{
  }
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
    padding: 8px;
    div{
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon{
        height: 40px;
        width: 40px;
        padding: 4px;
      }
      
    }
  }
}
</style>