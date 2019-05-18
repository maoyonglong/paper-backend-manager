<template>
  <table-manager
    v-if="pageName==='paperList'"
    class="paper-manager"
    v-bind="props"
    @add="handleAdd">
  </table-manager>
  <paper v-else-if="pageName==='paperImport'"></paper>
</template>

<script>
import axios from '@/axios'
import TableManager from '@/components/common/TableManager'
import Paper from './components/Paper'
import columnConfig from './columnConfig'

export default {
  name: 'PaperManager',
  components: {
    TableManager,
    Paper
  },
  data () {
    return {
      pageName: 'paperList',
      props: {
        columnConfig,
        title: '试卷管理',
        isAddDefault: false,
        data: [],
        operation: {
          width: 300,
          btns: [
            {
              type: 'primary',
              icon: 'el-icon-search',
              size: 'mini',
              text: '查看',
              click: this.handleWatch
            }
          ]
        }
      }
    }
  },
  mounted () {
    this.loadPaperData()
  },
  methods: {
    handleWatch (item) {
      console.log(item)
    },
    handleAdd (data) {
      this.pageName = 'paperImport'
      console.log(data)
    },
    loadPaperData () {
      axios.get('/api/paperList.json').then(({ data }) => {
        this.props.data = data
      })
    }
  }
}
</script>

<style>

</style>
