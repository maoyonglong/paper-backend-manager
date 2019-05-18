<template>
  <div class="paper-container">
    <el-form>
      <el-form-item label="试卷名称">
        <el-col :span="8">
          <el-input></el-input>
        </el-col>
      </el-form-item>
    </el-form>
    <h2>一、选择题</h2>
    <div v-for="(select,idx) in selects" :key="idx">
      <el-form label-width="80px">
        <el-form-item :label="'题目'+(idx+1)">
          <el-input type="textarea" v-model="select.content"></el-input>
        </el-form-item>
        <el-form-item label="选项">
          <el-col :span="6" v-for="(val, optIdx) in ['A', 'B', 'C', 'D']"  v-bind:key="val">
            <el-form-item :label="val">
              <el-input v-model="select.options[optIdx]"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="正确答案">
          <el-col :span="6">
            <el-input v-model="select.correct_answer"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
    <h2>二、基本编程题</h2>
    <el-form>
      <div v-for="(base, idx) in bases" :key="idx+41">
        <el-form-item :label="'题目'+(idx+40)">
          <el-input type="textarea" v-model="base.content"></el-input>
        </el-form-item>
        <el-form-item label="注意事项">
          <el-input type="textarea" v-model="base.attention"></el-input>
        </el-form-item>
        <el-form-item v-for="exam in base.example" :key="exam">
          <el-form :inline="true">
            <el-form-item label="输入">
              <el-input v-model="exam.input" placeholder="param1=1;param2=2"></el-input>
            </el-form-item>
            <el-form-item label="输出">
              <el-input v-model="exam.output"></el-input>
            </el-form-item>
            <el-button type="danger" @click="handleExampleDelete(base.example, examIdx)">删除</el-button>
          </el-form>
        </el-form-item>
        <div class="btn-wrap"><el-button type="primary" @click="handleExampleAdd(base.example)">添加示例</el-button></div>
        <el-form-item label="参考答案">
          <el-input type="textarea" v-model="base.correct_answer"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <h2>三、综合编程题</h2>
    <el-form>
      <el-form-item label="题目45">
        <el-input type="textarea" v-model="synthesis.content"></el-input>
      </el-form-item>
      <el-form-item label="注意事项">
        <el-input type="textarea" v-model="synthesis.attention"></el-input>
      </el-form-item>
      <el-form-item v-for="(exam, examIdx) in synthesis.example" :key="examIdx+46">
        <el-form :inline="true">
          <el-form-item label="输入">
            <el-input v-model="exam.input" placeholder="param1=1;param2=2"></el-input>
          </el-form-item>
          <el-form-item label="输出">
            <el-input v-model="exam.output"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="handleExampleDelete(synthesis.example, examIdx)">删除</el-button>
          </el-form-item>
        </el-form>
      </el-form-item>
      <div class="btn-wrap"><el-button type="primary" @click="handleExampleAdd(synthesis.example)">添加示例</el-button></div>
      <el-form-item label="参考答案">
        <el-input type="textarea" v-model="synthesis.correct_answer"></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-wrap"><el-button type="primary" @click="handleCommit()">提交</el-button></div>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  data () {
    return {
      selects: [],
      bases: [],
      synthesis: {}
    }
  },
  mounted () {
    for (let i = 0; i < 40; i++) {
      this.selects.push({
        content: '',
        options: ['', '', '', ''],
        correct_answer: ''
      })
    }
    for (let i = 0; i < 5; i++) {
      this.bases.push({
        content: '',
        attention: '',
        example: [],
        correct_answer: ''
      })
    }
    this.synthesis = {
      content: '',
      attention: '',
      example: [],
      correct_answer: ''
    }
  },
  methods: {
    handleExampleDelete (example, idx) {
      console.log(idx)
      example.splice(idx, 1)
    },
    handleExampleAdd (example) {
      example.push({
        input: '',
        output: ''
      })
    },
    handleCommit () {
      this.selects.forEach((select, idx) => {
        select.type = 'select'
        select.index = idx
      })
      this.bases.forEach((base, idx) => {
        base.type = 'base'
        base.index = idx + 40
      })
      this.synthesis.type = 'synthesis'
      this.synthesis.index = 45
      const paper = this.selects.concat(this.bases, [ this.synthesis ])
      axios.post('/paperCommit', { paper }).then(res => {
        this.$message('试卷提交成功')
      }).catch(() => {
        this.$message('试卷提交失败')
      })
    }
  }
}
</script>

<style>
.paper-container {
  padding: 30px;
}
.btn-wrap {
  text-align: right;
}
</style>
