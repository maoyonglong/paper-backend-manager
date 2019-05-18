<template>
  <TableManager
    v-bind="props"
    @edit="handleEdit"
    @add="handleAdd"
    @delete="handleDelete"
    @muti-delete="handleMutiDelete"
  ></TableManager>
</template>

<script>
import store from '@/store'
import axios from '@/axios'
import columnConfig from './columnConfig'
import TableManager from '../common/TableManager'

export default {
  name: 'AdminManager',
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
      axios.get('/api/admin.json').then(({ data }) => {
        this.props.data = data
      })
    }
  }
}
</script>

<style>

</style>
