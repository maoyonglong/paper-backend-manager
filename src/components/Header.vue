<template>
  <div id="header">
    <h1 class="title">
      后台管理系统
      <a class="signout" @click="handleSignOut()">退出</a>
      <span class="curaccount">当前管理员： {{ username }}</span>
    </h1>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data () {
    return {
      username: store.state.username
    }
  },
  methods: {
    handleSignOut () {
      store.setState('username', '')
      store.setState('userType', null)
      store.setState('isLogin', false)
      this.$alert('您已成功退出登录！', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          this.$router.push({ path: '/' })
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  #header {
    margin: 0 -20px;
    text-align: left;
    background-color: #363636;
    .title {
      padding: 15px 30px;
      font-size: 20px;
      color: #fff;
    }
  }
  .signout, .curaccount {
    float: right;
    font-size: 16px;
    line-height 20px;
    margin: 2px 10px;
  }
  .signout {
    cursor: pointer;
  }
</style>
