import axios from 'axios'
export default {
  async index() {
    const result = await axios.get('/api')
    return result.data
  },
  async animals() {
    console.log('inside the api/internalservice')
    const result = await axios.get('/api/animals')
    return result.data
  }
}