<template>
  <table-manager
    v-bind="props"
    @edit="handleEdit"
    @add="handleAdd"
    @delete="handleDelete">
    </table-manager>
</template>

<script>
import store from '@/store'
import axios from '@/axios'
import columnConfig from './columnConfig'
import TableManager from '../common/TableManager'

export default {
  name: 'UserManager',
  components: {
    TableManager
  },
  data () {
    return {
      props: {
        title: '用户管理',
        columnConfig,
        data: []
      }
    }
  },
  mounted () {
    if (store.state.userType !== 'super') {
      this.$alert('你无权访问该页面内容！', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          this.$router.push({ path: '/' })
        }
      })
      return
    }
    this.loadUserData()
  },
  methods: {
    handleEdit (data) {
      this.handleInputPass(data, 'rewriteUser', { exclude: ['time'] }, ['修改用户成功！', '服务器错误！'], [undefined, this.loadUserData])
    },
    judgeInput (data, config) {
      let datas = this.props.data
      let status = false
      const judgeStatus = ({ exclude, unique }) => {
        for (let i = 0, len = columnConfig.length; i < len; i++) {
          let column = columnConfig[i]
          let label = column.label
          let prop = column.prop
          // 如果字段参与检测
          if (exclude && exclude.indexOf(prop) < 0) {
            if (!data[prop]) {
              return { status, msg: `${label}不能为空` }
            }
            // 如果字段不能重复
            if (unique && unique.indexOf(prop) >= 0) {
              let isExsited = false
              datas.forEach((item, idx) => {
                if (item[prop] === data[prop] && idx !== datas.length - 1) {
                  isExsited = true
                }
              })
              if (isExsited) {
                return { status, msg: `${label}已经存在！` }
              }
            }
          }
        }
        return { status: true }
      }
      return judgeStatus(config)
    },
    handleInputPass (data, url, config, [success, error], [successCallback, errorCallback]) {
      let inputPass = this.judgeInput(data, config)
      if (inputPass.status) {
        axios.post('/api/backend/' + url, data).then(({ data }) => {
          this.resloveMsg(data.result, [success, error], [this.loadUserData])
        })
        successCallback && successCallback()
      } else {
        this.$message({
          type: 'error',
          message: inputPass.msg
        })
        errorCallback && errorCallback()
      }
    },
    resloveMsg (status, [ success, error ], [ successCallback, errorCallback ]) {
      if (status) {
        this.$message({
          type: 'success',
          message: success
        })
        successCallback && successCallback()
      } else {
        this.$message({
          type: 'error',
          message: error
        })
        errorCallback && errorCallback()
      }
    },
    handleAdd (data) {
      this.handleInputPass(data, 'addUser', { unique: ['username'], exclude: ['time'] }, ['添加用户成功！', '服务器错误！'], [undefined, this.loadUserData])
    },
    handleDelete (data) {
      data.forEach(el => {
        axios.post('/api/backend/deleteUser', { username: el.username }).then(({ data }) => {
          this.resloveMsg(data.result, ['删除用户成功！', '服务器错误！'], [undefined, this.loadUserData])
        })
      })
    },
    loadUserData () {
      axios.get('/api/backend/userList').then(({ data }) => {
        this.props.data = data.result
      })
    }
  }
}
</script>

<style lang="stylus">

</style>
