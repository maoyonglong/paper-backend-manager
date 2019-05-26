<template>
  <div class="table-manager" ref="tableManager">
    <h4 class="main-title">{{ title }}</h4>
    <el-table
      v-if="tableHeight !== 0"
      stripe
      :height="tableHeight"
      @selection-change="handleSelectionChange"
      ref="table"
      :data="data"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column v-for="cc in columnConfig" :key="cc.label" :label="cc.label" :prop="cc.prop" :width="cc.width || 140">
        <template slot-scope="scope">
          <el-input v-if="scope.$index === editIdx" type="text" v-model="scope.row[scope.column.property]"></el-input>
          <span v-else>{{ scope.row[scope.column.property] }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" prop="" label="操作" :width="operation.width">
        <template slot-scope="scope">
          <el-button v-for="(btn,idx) in operation.btns" :key="btn+idx"
            :type="btn.type" :icon="btn.icon" :size="btn.size || 'mini'" @click="btn.click(data[scope.$index])">
            {{ btn.text }}
          </el-button>
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="toggleEdit(scope)">{{ scope.$index === editIdx ? '确认' : '编辑' }}</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="muti-opeartion">
      <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini" @click="handleAdd">添加</el-button>
      <el-button type="danger" icon="el-icon-delete" size="mini" @click="handleMutiDelete()">删除选中项</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableManager',
  props: {
    title: String,
    columnConfig: Array,
    isAddDefault: {
      type: Boolean,
      default () {
        return true
      }
    },
    operation: {
      type: Object,
      default () {
        return {
          width: 180,
          btns: []
        }
      }
    },
    data: Array
  },
  data () {
    return {
      editIdx: -1,
      tableHeight: 0,
      isEdit: true,
      selection: []
    }
  },
  mounted () {
    this.certainHeight()
  },
  methods: {
    deleteDialog (callback) {
      this.$confirm('删除所选内容，将导致其无法恢复，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        callback()
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    certainHeight () {
      this.tableHeight = this.$refs.tableManager.offsetHeight - 106
    },
    handleSelectionChange (selection) {
      this.selection = selection
    },
    toggleEdit ({ $index }) {
      if (this.editIdx === $index) {
        this.$emit(this.isEdit ? 'edit' : 'add', this.data[this.editIdx])
        this.isEdit = true
        this.editIdx = -1
      } else {
        this.editIdx = $index
      }
    },
    handleAdd () {
      if (this.isAddDefault) {
        this.editIdx = this.data.push({}) - 1
        const wrapper = document.querySelector('.el-table__body-wrapper')
        setTimeout(() => {
          wrapper.scrollTop = wrapper.scrollHeight
          wrapper.scrollLeft = 0
        }, 30)
        this.isEdit = false
      } else {
        this.$emit('add', this.data)
      }
    },
    handleDelete ({ $index }) {
      this.deleteDialog(() => {
        this.$emit('delete', this.data.splice($index, 1))
      })
    },
    handleMutiDelete () {
      this.deleteDialog(() => {
        const data = this.data
        const selection = this.selection
        for (let i = 0; i < data.length; i++) {
          if (selection.includes(data[i])) {
            data.splice(i, 1)
            i--
          }
        }
        this.$emit('delete', selection)
      })
    }
  }
}
</script>

<style lang="stylus">
.table-manager {
  width: 100%
  height: 100%
  overflow: auto
}

.muti-opeartion {
  padding: 10px
  background-color: #f4f4f4
  text-align: left
}
</style>
