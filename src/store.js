import Vue from 'vue'

let store = Vue.prototype.store

store = typeof store !== 'undefined' ? store : {
  debug: true,
  state: {
    isMainLoading: true,
    username: 'root',
    isLogin: true,
    userType: 'super'
  },
  setState (key, value) {
    const beforeValue = this.state[key]
    if (beforeValue !== undefined) {
      this.state[key] = value
      if (this.debug) {
        console.log(`state ${key} has been changed from ${beforeValue} to ${value}`)
      }
    } else if (key.toString() === '[object Object]') {
      const obj = key
      for (let k in obj) {
        let v = obj[k]
        this.setState(k, v)
        // if (this.state[key]) {
        //   this.state[key] = val
        // }
      }
    }
  }
}

export default store
