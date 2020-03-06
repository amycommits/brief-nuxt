import AnimalService from '@/server/services/animal.service'
import InternalApi from '@/api/InternalService'
export const state = () => ({
  list: {},
  animals: [],
  index: ''
})

export const getters = {
  list: (state) => state.list,
  animals: (state) => state.animals,
  index: (state) => state.index
}
export const actions = {
  getList({ commit }) {
    const message = AnimalService.list()
    commit('SET_LIST', message.data)
  },
  getAnimals({ commit }) {
    // const result = AnimalService.listAll()
    commit('SET_ANIMALS', [])
  },
  getIndex({ commit }) {
    InternalApi.index().then(result => {
      commit('SET_INDEX', result.message)
    })
   
  }
}

export const mutations = {
  SET_LIST(state, list) {
    state.list = list
  },
  SET_ANIMALS(state, animals) {
    state.animals = animals
  },
  SET_INDEX(state, index) {
    state.index = index
  }
}
