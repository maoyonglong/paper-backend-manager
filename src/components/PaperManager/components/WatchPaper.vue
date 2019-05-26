<template>
  <div class="watch-paper-container">
    <h1 class="title">{{ paperData.name }}</h1>
    <div class="watch-paper-question-wrap" v-for="(questions, quesType) in paperData.questions" :key="quesType">
      <h2 class="title">{{ typeLabels[quesType] }}</h2>
      <div v-for="ques in questions" :key="ques" class="ques-wrap">
        <div v-if="quesType === 'selects'">
          <div><span>题目：</span><div v-html="ques.content"></div></div>
          <p>
            <span>选项：</span>
            <a v-for="(option, idx) in ques.options" :key="option" class="option">
              <span class="option-label">{{ optionLabels[idx] }}</span>
              {{ option }}
            </a>
          </p>
          <p><span>答案：</span>{{ ques.correct_answer }}</p>
        </div>
        <div v-else>
          <div><span>题目：</span><div v-html="ques.content"></div></div>
          <div><span>答案：</span><div v-html="ques.correct_answer"></div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'WatchPaper',
  props: {
    paperId: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      paperData: [],
      optionLabels: ['A', 'B', 'C', 'D'],
      typeLabels: {
        selects: '选择题',
        bases: '基本编程题',
        synthesis: '综合编程题'
      }
    }
  },
  mounted () {
    this.loadPaperData()
  },
  methods: {
    convert (data) {
      const questions = data.questions
      const selects = questions.filter(item => item.type === 'select')
      const bases = questions.filter(item => item.type === 'base')
      const synthesis = questions.filter(item => item.type === 'synthesis')
      return {
        name: data.name,
        questions: { selects, bases, synthesis }
      }
    },
    loadPaperData () {
      axios.get('/api/paperDetail', {
        params: {
          paperId: this.paperId
        }
      }).then(({ data }) => {
        this.paperData = this.convert(data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
  .watch-paper-container {
    text-align: left;
  }
  .title {
    text-align: center;
  }
  .ques-wrap {
    padding: 10px 20px;
  }
  .option {
    margin-right: 10px;
  }
</style>
