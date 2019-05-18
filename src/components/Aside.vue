<template>
  <el-row id="aside">
    <el-col :span="24">
      <el-menu
        default-active="2"
        @select="handleSelect"
        @open="handleOpen"
        @close="handleClose">
        <!-- <el-menu-item index="1">
          <template slot="title">
            <router-link to="/flowInspect" class="router-link">
              <i class="el-icon-view"></i>
              <span>流量监控</span>
            </router-link>
          </template>
        </el-menu-item> -->
        <el-submenu index="2">
          <template slot="title">
            <a class="router-link">
              <i class="el-icon-menu"></i>
              <span>数据库管理</span>
            </a>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <router-link to="/backend/adminManager" class="router-link">
                <!-- <i class="el-icon-menu"></i> -->
                <span>管理员管理</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/backend/userManager" class="router-link">
                <!-- <i class="el-icon-menu"></i> -->
                <span>用户管理</span>
              </router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link to="/backend/paperManager" class="router-link">
                <!-- <i class="el-icon-menu"></i> -->
                <span>试卷管理</span>
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    handleSelect (key) {
      // console.log(key)
    },
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus">
  #aside {
    .el-menu {
      border-right: 0;
      .el-submenu__title {
        padding: 0 !important;
      }
      .el-menu-item-group__title {
        height: 0;
        padding: 0 !important;
      }
      .router-link {
        display: block;
        font-size: 0;
        text-decoration: none;
        background-color: #363636;
        > * {
          font-size: 14px;
          color: #fff;
        }
      }
      .el-menu-item {
        padding: 0 !important;
        :hover {
          background-color: #606060;
        }
      }
    }
  }
</style>
