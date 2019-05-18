import axios from 'axios'
import store from './store'

let api = axios.create()

api.interceptors.request.use(config => {
  store.setState({ isMainLoading: true })
  return config
}, err => {
  return Promise.reject(err)
})

api.interceptors.response.use(res => {
  if (res.status === 200) {
    setTimeout(() => {
      store.setState({ isMainLoading: false })
    }, 200)
  }
  return res
}, err => {
  return Promise.reject(err)
})

export default api
