import axios from 'axios'

export const state = () => ({
  cardToken: null
})

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
  },
  async payment ({ commit }, { data }) {
    let data_send = JSON.stringify({
      card_token: data.card_token
    })
    try {
      const { data } = await axios.post('/api/payment', data_send, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      return data
    } catch (error) {
      if (error.response && error.response.status === 404 || error.response && error.response.status === 400 || error.response && error.response.status === 500) {
        throw new Error('Error in user creation')
      }
      throw error
    }
  }
}