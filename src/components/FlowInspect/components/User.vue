<template>
  <v-chart :options="options" ref="echarts" style="width: 100%; height: 100%;"/>
</template>

<script>
export default {
  data () {
    let data = []

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }

    return {
      options: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
    }
  },
  mounted () {
    console.log(this.$refs.echarts.chart.getHeight())
    // console.log(this.$refs.echarts.resize({ width: this.$refs.echarts.chart.getWidth() }))
  }
}
</script>

<style>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>
