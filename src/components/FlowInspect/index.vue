<template>
  <div class="flow-inspect">
    <h4>流量监控</h4>
    <el-container>
      <el-row>
        <el-col :span="12">
          <v-chart :options="week" :style="vchartStyle"/>
        </el-col>
        <el-col :span="12">
          <!-- <v-chart :options="months" style="width: 100%; height: 100%;"/> -->
        </el-col>
        <el-col :span="12">
          <!-- <flow-user /> -->
        </el-col>
        <el-col :span="12">
          <!-- <flow-user /> -->
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'FlowInspect',
  data () {
    return {
      vchartStyle: {
        width: '100%',
        height: '100%'
      },
      week: {
        title: {
          text: '本周数据'
        },
        xAxis: {
          data: ['一', '二', '三', '四', '五', '六', '日']
        },
        yAxis: {
          type: 'value'
        },
        legend: {
          data: [ '用户量', '访问量' ]
        },
        tooltip: {
          trigger: 'axis'
        },
        series: []
      }
    }
  },
  methods: {
    loadData () {
      axios.get('/api/flow.json').then(({ data }) => {
        const week = data.week
        this.week.series.splice(0, 0, { name: '用户量', data: week.userCount, type: 'line', smooth: true }, { name: '访问量', data: week.totalVisits, type: 'line', smooth: true })
      })
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>

<style lang="stylus">
  .flow-inspect {
    height: 100%;
    .el-container {
      height: 100%;
    }
    .el-row {
      width: 100%;
      height: 100%;
      .el-col {
        height: 50%;
      }
    }
  }
</style>
