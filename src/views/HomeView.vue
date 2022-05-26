<template>
  <div class="home">
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <van-tabbar v-model="active" :router="true">
        <van-tabbar-item :replace="true" to="/index" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item :replace="true" to="/type" icon="cart">分类</van-tabbar-item>
        <van-tabbar-item :replace="true" to="/shoplist" icon="shop">商品列表</van-tabbar-item>
        <van-tabbar-item :replace="true" to="/cart" icon="cart">购物车</van-tabbar-item>
        <van-tabbar-item :replace="true" to="/userInfo" icon="setting">个人中心</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data(){
    return{
      active: 0
    }
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  padding-bottom: 70px;


  .main{
    width: 100%;
  }
}
</style>
