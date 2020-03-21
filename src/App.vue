<template>
  <div id="app">
    <div class="bg">
      <div class="box">
        <div class="nav">
          <router-view></router-view>
        </div>
        <div class="cards">
          <div class="column">
            <span>Cards</span>
            <router-link to="">View all cards</router-link>
          </div>
          <Cards></Cards>
        </div>
        <div class="box-left-bottom">
          <el-container>
            <el-aside width="200px">
              <div class="column">
                <span>Mian Service</span>
                <router-link to="">View all</router-link>
              </div>
              <Service></Service>
            </el-aside>
            <el-container>
              <el-main>
                <div class="column">
                  <span>Current</span>
                  <router-link to="">View all</router-link>
                </div>
                <Current></Current>
                <div class="column">
                  <span>Savings</span>
                  <router-link to="">View all</router-link>
                </div>
                <Savings></Savings>
              </el-main>
            </el-container>
          </el-container>
        </div>
        <div class="box-right">
          <Perright></Perright>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Cards from '@/personal/cards'
  import Service from '@/personal/service'
  import Current from '@/personal/current'
  import Savings from '@/personal/savings'
  import Perright from '@/personal/personal-right'
  export default {
    components: {
      Cards,Service,Current,Savings,Perright
    }
  }
</script>

<style scoped lang="less">
  body {
    margin: 0px;
  }

  div#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow-y: auto;
    div.bg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      min-height: 100vh;
      background-color: #fdebea;
      div.box {
        display: table;
        width: 90%;
        min-height: 600px;
        border: 5px solid #fddada;
        border-radius: 25px;
        background-color: #fff;
        overflow: hidden;
        position: relative;
        div.column {
          display: block;
          width: 100%;
          padding-bottom: 10px;
          position: relative;
           &::after{
             display: block;
            content: "";
            clear: both;
            visibility: hidden;
            line-height: 0;
           }
          span {
            float: left;
            display: block;
            font-size: 16px;
            color: #333;
            line-height: 30px;
          }
          a {
            float: right;
            display: block;
            font-size: 12px;
            color: #999;
            line-height: 30px;
            position: absolute;
            right: 0px;
            top: 0px;
          }
        }

        div.nav {
          width: calc(~"70% - 60px");
          padding: 20px 30px 0px;
        }

        div.cards {
          width: calc(~"70% - 60px");
          padding: 20px 30px 0px;
        }
        ul.current-list{
          margin-bottom: 10px;
        }
        div.box-left-bottom {
          width: calc(~"70% - 60px");
          padding: 20px 30px 0px;
          .el-main {
            padding: 0px 0px 0px 20px;
          }
        }
        div.box-right {
          position: absolute;
          right: 0px;
          top: 0px;
          width: calc(~"30% - 30px");
          height: calc(~"100% - 20px");
          padding: 20px 15px 0px;
          background-color: #fff;
          border-radius: 20px;
          box-shadow: 0px 0px 40px #ddd;
        }
      }
    }
  }

  @media screen and (max-width: 640px) {
    div#app {
      bg {
        box {
          div.nav {
            width: calc(~"100% - 20px");
            padding: 15px 10px 0px;
          }
           div.cards {
             width: calc(~"100% - 20px");
             padding: 15px 10px 0px;
           }
           div.box-left-bottom {
             width: calc(~"100% - 20px");
             padding: 15px 10px 0px;
           }
          div.box-right{
            position: static;
            width: calc(100% - 30px);
            border-radius: 20px;
            box-shadow: 0px 0px 0px #ddd;
          }
        }
      }
    }
  }
</style>
