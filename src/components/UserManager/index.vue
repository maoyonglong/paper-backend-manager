<template>
  <table-manager
    v-bind="props"
    @edit="handleEdit"
    @add="handleAdd"
    @delete="handleDelete"
    @muti-delete="handleMutiDelete">
    </table-manager>
</template>

<script>
import store from '@/store'
import axios from '@/axios'
import TableManager from '@/components/common/TableManager'
import columnConfig from './columnConfig'

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
          this.$router.push({ path: '/backend' })
        }
      })
      return
    }
    this.loadUserData()
  },
  methods: {
    handleEdit (item) {
      console.log(item)
    },
    handleAdd (data) {
      console.log(data)
    },
    handleDelete (data) {
      console.log(data)
    },
    handleMutiDelete (selection) {
      // this.props.data = this.props.data.filter(item => !selection.includes(item))
      console.log(selection)
    },
    loadUserData () {
      axios.get('/api/user.json').then(({ data }) => {
        this.props.data = data
      })
    }
  }
}
</script>

<style lang="stylus">

</style>
