<template>
  <div class="header-nav">
    <div class="logo">
      <img src="../../build/logo.png" />
    </div>
    <div class="search">
      <input type="text" name="search" value="" placeholder="search..." />
      <span>
        <img src="../assets/search.png" />
        <input type="submit" name="submit-search" value="" />
      </span>
    </div>
    <div class="nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Dashboard</el-menu-item>
        <el-menu-item index="2">Services</el-menu-item>
        <el-menu-item index="3">History</el-menu-item>
        <el-menu-item index="4">Actions</el-menu-item>
      </el-menu>
    </div>
    <div class="nav-right">

              <el-row class="block-col-2">

                <el-col :span="12">
                  <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                      <i class="menu-right-btn">
                        <img src="../assets/menu.png" />
                      </i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>Dashboard</el-dropdown-item>
                      <el-dropdown-item>Services</el-dropdown-item>
                      <el-dropdown-item>History</el-dropdown-item>
                      <el-dropdown-item>Actions</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
    </div>
</div>
</template>

<script>
  export default {
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped lang="less">
  div.header-nav{
    width: 100%;
    position: relative;
    &::after{
      display: block;
      content: "";
      clear: both;
      visibility: hidden;
      line-height: 0;
    }
    div.logo{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      float: left;
      img{
        display: block;
        max-height: 80%;
      }
    }
    div.search{
      width: 200px;
      max-width: 200px;
      background-color: #f8f8f8;
      float: right;
      overflow: hidden;
      padding: 0px 15px;
      border-radius: 20px;
      margin-top: 10px;
      transition: all 0.3s 0s;
      input[type="text"]{
        display: block;
        width: calc(~"100% - 30px");
        float: left;
        background-color: transparent;
        outline: none;
        border: 0px;
        height: 30px;
        line-height: 30px;
        padding: 0px;
        font-size: 14px;
        color: #666666;
        &::-webkit-input-placeholder{
            color: #c7c8cd;
        }
      }
       span{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 30px;
        height: 30px;
        float: left;
        img{
          display: block;
          max-height: 80%;
        }
        input{
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          z-index: 10;
          opacity: 0;
        }
       }
    }
    div.nav{
      width: calc(~"100% - 300px");
      max-width: 450px;
      float: right;
      overflow: hidden;
      transform:scale(1,1);
      transform-origin: 0 0;
      transition: all 0.3s;
      margin-right: 20px;
      transition: all 0.3s 0.3s;

      .el-menu.el-menu--horizontal {
          border-bottom: 0px;
      }
      .el-menu--horizontal>.el-menu-item.is-active {
          border-bottom: 1px solid transparent;
      }
      .el-menu--horizontal>.el-menu-item {
          height: 50px;
          line-height: 50px;
      }
      .el-menu-item {
          width: 25%;
          padding: 0px 0px;
          text-align: center;
      }
    }
    div.nav-right{
      display: none;
      position: absolute;
      right: 0px;
      top: 0px;
      width: 50px;
      z-index: 20;
      i.menu-right-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: #fff;
        img{
          display: block;
          max-width: 50%;
          transition: all 0.5s;
        }
      }
    }

  }
@media screen and (max-width: 1024px) {
    /* 兼容平板 */
    div.header-nav{
      height: 50px;
      div.nav{
        transform: scale(0,0);
        transition: all 0.3s 0s;
      }
      div.search{
        width: 40%;
        margin-right: 60px;
        transition: all 0.3s 0.3s;
      }
      div.nav-right{
        display: block;
      }
    }
}
</style>
