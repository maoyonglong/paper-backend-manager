<template>
  <el-container class='login-wrap'>
    <el-header>
      <h2>欢迎使用后台管理系统</h2>
    </el-header>
    <el-main>
      <el-form :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" required></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pwd" type="password" required></el-input>
        </el-form-item>
        <el-form-item align="right">
          <el-button type="primary" @click="handleLogin()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import axios from '@/axios'
import store from '@/store'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        pwd: ''
      }
    }
  },
  methods: {
    handleLogin () {
      let username = this.form.username
      let pwd = this.form.pwd
      axios.post('/api/backend/login', { username, pwd }).then(({ data }) => {
        if (data.status === true) {
          const result = data.result
          console.log(result.type)
          store.setState({
            'isLogin': true,
            'userType': result.type,
            'username': username
          })
          this.$alert('成功登录，即将跳转到系统主页面！', '提示', {
            confirmButtonText: '确定',
            callback: action => {
              this.$router.push({ path: '/backend' })
            }
          })
        } else {
          this.$message({
            type: 'error',
            message: '用户名或者密码错误！'
          })
        }
      }).catch(() => {
        this.$message({
          type: 'error',
          message: '网络错误或者请求接口不存在！'
        })
      })
    }
  }
}
</script>

<style>
  .login-wrap {
    width: 450px;
    height: 400px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
