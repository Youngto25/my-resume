<template>
  <div class="wrapper">
    <div class="content">
      <footer>Portfolio</footer>
      <main>
        <card @xxx="open" v-for="(item,index) in items" :item="item" :key="index"></card>
      </main>
    </div>
    <section class="more" v-show="show">
      <div class="imgs-wrapper">
        <img v-for="(y,index) in src" :src="y" alt="" @click="close" :key="index">
      </div>
    </section>
  </div>
</template>
<script>
import Card from './Item'
let items = [
  {
    title: 'lengzi',
    src: ['lengzi.jpg'],
    describ: '一款基于<span class="mark"> Vue 框架</span>的<span class="mark"> UI 组件库</span>。该项目是参照 element-UI、iView 等 UI 库思路，目前已支持Button、Input、Grid、Layout、Toast、Tabs、Popover、Collapse 组件。每个组件均经历从<span class="mark">需求分析</span>到 Mocha <span class="mark">单元测试</span>，并用 Travis CI 实现<span class="mark">持续集成</span>，最终以 VuePress 为基础制作官方文档，并于 npmjs.org 发布了 1.1.0 版本，<span class="mark">npm install lengzi </span>即可安装使用。',
    useWhat: ['HTML5','ES6','Vue','Parcel','SCSS','Vuepress','Mocha','Travis CI'],
    yuanma: 'https://github.com/Youngto25/leng',
    liulan: 'https://youngto25.github.io/leng/'
  },
  {
    title: 'Yweather',
    src: ['weather.png'],
    describ: '一款基于<span class="mark"> Vue 框架</span>的在线天气查询网站，可查询全国3000+地区的天气状况，并预报未来一周天气情况。利用<span class="mark"> element-UI </span>组件构建页面及动画效果，使用<span class="mark"> Echarts.js </span>开源可视化库来优化数据呈现方式，使用<span class="mark"> Vue CLI </span>进行打包。',
    useWhat: ['HTML5','ES6','Vue','axios','Vue CLI','SCSS','element-UI','Echarts.js'],
    yuanma: 'https://github.com/Youngto25/Yweather',
    liulan: 'https://youngto25.github.io/Yweather/dist/index.html'
  },
  {
    title: 'Cnode',
    src: ['cnode.png'],
    describ: '该项目使用 <span class="mark"> Vue 框架</span> 还原 CNode 官方社区，项目调用 CNode 官方社区提供的 API，以 <span class="mark">Vue CLI</span> 创建项目模版，使用 <span class="mark">axios</span> 获取数据，使用 <span class="mark">Vue Router</span> 进行前端路由的切换及传参，使用 watch 监听路由的变化，利用媒体查询完成<span class="mark">移动端适配</span>，Webpack 打包。',
    useWhat: ['HTML5','ES6','Vue','axios','Vue CLI','vue-router','SCSS'],
    yuanma: 'https://github.com/Youngto25/cnode',
    liulan: 'https://youngto25.github.io/cnode/dist/index.html'
  },
  {
    title: '微信小程序——Love Animation',
    src: ['picture_page.png','introduce_page.png','download.png'],
    describ: '一款图片以自然为主题的可供浏览的<span class="mark">微信小程序</span>，若有喜欢的图片可进行在线下载。使用 <span class="mark">wx.request</span> 来获取图片的相关信息，通过 <span class="mark">onPageScroll</span> 监听浏览页的滚动来预加载图片，使用 <span class="mark">wx.downloadFile</span> 来下载图片。',
    yuanma: 'https://github.com/Youngto25/love-animation'
  },
  {
    title: 'Young music',
    src: ['FirstPage.png','RankPage.png','SearchPage.png','PlayPage.png','LyricsPage.png'],
    describ: '一款自制的<span class="mark">音乐播放器</span>，集音乐推荐、音乐排行、音乐搜索及播放于一体。使用 express require require-promise cors 来<span class="mark">伪造请求</span>获得数据，使用<span class="mark">懒加载</span>来加载图片，使用<span class="mark">防抖</span>技术优化搜索框输入，使用 <span class="mark">audio API</span>实现播放，使用<span class="mark">手势库</span>监测页面的滑动情况，使用<span class="mark">webpack</span>对代码进行打包。',
    useWhat: ['HTML5','ES6','Webpack','SCSS','Express','require','cors'],
    yuanma: 'https://github.com/Youngto25/Young-Music',
    liulan: 'https://youngto25.github.io/Young-Music/dist/index.html'
  },
  {
    title: '导航',
    src: ['nav.png'],
    describ: '一款极简的<span class="mark">导航网页</span>，支持搜索功能。26个字母对应26个网站，可以自行编辑每个字母所对应的网站，按下字母即可跳转到相应网站。使用 <span class="mark">localStorage</span> 本地保存相关网站信息，可以切换搜索接口<span class="mark"> Bing Google </span>进行搜索。',
    useWhat: ['HTML5','ES6','Webpack','SCSS'],
    yuanma: 'https://github.com/Youngto25/nav',
    liulan: 'https://youngto25.github.io/nav/dist/index.html'
  },
  {
    title: '画板',
    src: ['canvas.jpg'],
    describ: '一个简单的利用 <span class="mark">Canvas</span> 制作的<span class="mark">画板</span>。通过检测设备是否有 ontouchstart 对象来判断为何种设备，调用不同的代码以达到<span class="mark">不同设备的适配</span>。',
    useWhat: ['HTML5','Canvas','ES6','Webpack','SCSS','手机端适配'],
    yuanma: 'https://github.com/Youngto25/blog/tree/master/docs',
    liulan: 'https://youngto25.github.io/blog/docs/dist/index.html'
  },
  {
    title: '哆啦A梦',
    src: ['doraemon.jpg'],
    describ: '一个使用纯原生 JS 开发，动态制作一个哆啦A梦的小作品。该作品主要思路是通过间隔计时器遍历预设的 CSS 代码字符串，将其一个个显示在页面上，并在 style 标签上作同样处理，以使代码 CSS 生效。此外，还实现了遍历的调速功能。',
    useWhat: ['HTML5','CSS3','ES6','移动端适配'],
    yuanma: 'https://github.com/Youngto25/make-a-doraemon',
    liulan: 'https://youngto25.github.io/make-a-doraemon/doraemon.html'
  }
]

export default {
  name: 'Portfolio',
  components: {
    card: Card
  },
  data(){
    return {
      items: items,
      show: false,
      src: []
    }
  },
  mounted(){
    document.addEventListener('scroll',()=>{
      this.show = false
      this.$eventBus.$emit('scrollPage')
    })
  },
  methods: {
    open(x){
      if(this.$eventBus.width<1000) return
      this.src =  x
      this.show = true
      this.$nextTick(function(){
              this.$el.querySelectorAll('.imgs-wrapper img').forEach((el)=>{
                el.style.width = `${100 / x.length}%`
              })
        let offsetTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        this.$el.querySelector('.more').style.top = offsetTop + 'px'
      })
    },
    close(){
      this.show = false
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 999px){
  .wrapper{
    width: 100%;
    footer{
      margin-top: 100px;
      font-size: 24px;
    }
  }
}

@media screen and (min-width: 1000px){
  .wrapper{
    width: calc(100% - 250px);
    footer{
      margin-top: 50px;
      font-size: 40px;
    }
  }
}

.wrapper{
  .content{
    background: #f1f2f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    footer{
    }
  }
  .more{
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #252525;
    opacity: 0.96;
    display: flex;
    justify-content: center;
    align-items: center;
    .imgs-wrapper{
        width: 80%;
        display: flex;
        justify-content: center;
      img{
        cursor: pointer;
        padding: 0 2px;
      }
    }
  }
}
</style>