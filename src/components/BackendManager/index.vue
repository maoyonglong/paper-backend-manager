<template>
  <el-container class="page-wrap">
    <el-header>
      <Header/>
    </el-header>
    <el-container class="content-wrap">
      <el-aside>
        <Aside/>
      </el-aside>
      <el-main
        class="main"
        v-loading="state.isMainLoading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import store from '@/store'
import Aside from '@/components/Aside'
import Header from '@/components/Header'

export default {
  name: 'BackendManager',
  data () {
    return {
      state: store.state
    }
  },
  components: {
    Aside,
    Header
  },
  mounted () {
    if (!this.state.isLogin) {
      this.$alert('请先登录！', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          this.$router.push({ path: '/' })
        }
      })
    }
  }
}
</script>

<style>
.page-wrap {
  height: 100%;
}
.content-wrap {
  height: calc(100%-60px);
  padding: 15px 0;
}
.main {
  height: 100%;
  padding: 0;
  margin: 0 20px;
  border: 6px solid #363636;
  border-radius: 6px;
  background-color: #f4f4f4;
}
</style>
