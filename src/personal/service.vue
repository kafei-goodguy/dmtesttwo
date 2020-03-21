<template>
  <div>
    <div class="service-list">
      <router-link to="">
        <span class="iconfont">&#xe656;</span>
        <b>transations</b>
      </router-link>
      <router-link to="">
        <span class="iconfont">&#xe60e;</span>
        <b>transations</b>
      </router-link>
      <router-link to="">
        <span class="iconfont">&#xe68e;</span>
        <b>transations</b>
      </router-link>
      <router-link to="">
        <span class="iconfont">&#xe63e;</span>
        <b>transations</b>
      </router-link>
      <router-link to="">
        <span class="iconfont">&#xe66f;</span>
        <b>transations</b>
      </router-link>
      <router-link to="">
        <span class="iconfont">&#xe630;</span>
        <b>transations</b>
      </router-link>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="less">
  div.service-list{
    width: 100%;
    &::after {
      display: block;
      content: "";
      clear: both;
      visibility: hidden;
      line-height: 0;
    }
    a{
      display: block;
      width: calc(~"(100% - 20px)/2");
      padding: 15px 0px;
      float: left;
      box-shadow: 0px 0px 20px #eee;
      border-radius: 15px;
      margin: auto 5px 18px;
      transition: all 0.3s;
      span{
        display: block;
        width: 100%;
        text-align: center;
        line-height: 40px;
        font-size: 24px;
        color: #ff4d56;
      }
      b{
        display: block;
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: #2f3c52;
      }
      &:hover{
        background-color: #ff4d56;
        span{
          color: #fff;
        }
        b{
          color: #fff;
        }
      }
    }
  }
</style>
