<template>
  <table-manager
    v-if="pageName==='paperList'"
    class="paper-manager"
    v-bind="props"
    @add="handleAdd"
    @edit="handleEdit">
  </table-manager>
  <paper v-else-if="pageName==='paperImport'"></paper>
  <watch-paper v-else-if="pageName==='paperWatch'" :paperId="paperId"></watch-paper>
</template>

<script>
import axios from '@/axios'
import TableManager from '@/components/common/TableManager'
import Paper from './components/Paper'
import WatchPaper from './components/WatchPaper'
import columnConfig from './columnConfig'

export default {
  name: 'PaperManager',
  components: {
    TableManager,
    Paper,
    WatchPaper
  },
  data () {
    return {
      pageName: 'paperList',
      paperId: '',
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
    handleEdit (paper) {
      axios.post('/api/backend/rewritePaper', {
        paper
      }).then(({ data }) => {
        if (data.result) {
          this.$message({
            message: '修改成功！',
            type: 'success'
          })
        } else {
          this.$message({
            message: '修改失败！',
            type: 'error'
          })
        }
      })
    },
    handleWatch (item) {
      this.pageName = 'paperWatch'
      this.paperId = item._id
    },
    handleAdd (data) {
      this.pageName = 'paperImport'
      console.log(data)
    },
    loadPaperData () {
      axios.get('/api/backend/paperList').then(({ data }) => {
        this.props.data = data.result
      })
    }
  }
}
</script>

<style>
</style>
