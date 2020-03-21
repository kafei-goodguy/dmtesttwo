<template>
  <ul class="current-list">
    <li>
      <span>1234567890123</span>
      <i></i>
      <b>$1,123.12</b>
    </li>
    <li>
      <span>1234567890123</span>
      <i></i>
      <b>$1,123.12</b>
    </li>
    <li>
      <span>1234567890123</span>
      <i></i>
      <b>$1,123.12</b>
    </li>
  </ul>
</template>

<script>
</script>

<style scoped lang="less">
  ul.current-list{
    width: 100%;
    li{
      display: block;
      width: 100%;
      &::after{
        display: block;
        	content: "";
        	clear: both;
        	visibility: hidden;
        	line-height: 0;
      }
      span{
        display: block;
        float: left;
        width: 110px;
        color: #a7a9b1;
        font-size: 14px;
        line-height: 28px;
        text-align: left;
      }
      i{
        display: block;
        float: left;
        width: calc(~"100% - 180px");
        margin: auto 5px;
        height: 18px;
        border-bottom: 1px dashed #e1ebe8;
      }
      b{
        display: block;
        float: left;
        width: 60px;
        color: #14233c;
        font-size: 12px;
        line-height: 28px;
        text-align: right;
      }
    }
  }
</style>
