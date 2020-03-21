<template>
<div>
    <ul>
      <li class="cards" v-for="(item , i) in list" :key="i"></li>
      <li @click="add" class="add-btn">添加</li>
    </ul>
</div>
</template>

<script>
let baseInfo =[];
export default{
    data(){
        return {
            list:[baseInfo]
        }
    },
    methods:{
        add(){
            this.list.push(baseInfo);
        }
    }
}

</script>

<style scoped lang="less">
  ul{
    width: 100%;
    &::after{
      display: block;
      content: "";
      clear: both;
      visibility: hidden;
      line-height: 0;
    }
    li{
      display: block;
      float: left;
      width: calc(~"(100% - 30px)/3");
      margin-right: 15px;
      margin-bottom: 15px;
      height: 150px;
      border-radius: 30px;
      &:nth-child(3n){
        margin-right: auto;
      }
      &.cards{
        background-color: #ff4d56;
      }
      &.add-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #999;
        transition: opacity 0.3s;
        &:hover{
          opacity: 0.8;
          cursor: pointer;
        }
      }
    }

  }
</style>
