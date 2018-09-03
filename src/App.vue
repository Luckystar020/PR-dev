
<template>
  <div id="app">
    <el-container style="height:1024px;">
      <el-header style="padding:0px;">
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#222222"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="font-weight: bold;">
          <el-menu-item index="1">
            <router-link to="/">
              Purchase
            </router-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">Inventory <el-badge is-dot :value="84" /></template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">Finance <el-badge is-dot class="item" /></el-menu-item>
          <el-menu-item index="4"><a href="" target="_blank">Account</a></el-menu-item>
          <el-menu-item index="5">Setting</el-menu-item>
        </el-menu>
      </el-header>


      <el-container>
        <el-aside width="250px">
          <el-menu
            id="nav-vertical"
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#222222"
            text-color="#fff"
            active-text-color="#ffd04b"
            style="font-weight: bold;">
            <el-menu-item disabled>
              <span>Purchase Request</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Purchase Orders</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>Vendor</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main><router-view/></el-main>

      </el-container>
  </el-container>




    <!-- <div id="nav">

      <router-link to="/">Purchases</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

  </div>
</template>


<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    }
  }
</script>
