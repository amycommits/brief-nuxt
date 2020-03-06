import axios from 'axios'
export default {
  async index() {
    const result = await axios.get('/api')
    return result.data
  }
}