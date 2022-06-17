import Vue from 'vue'
import Vuex from 'vuex'
import produto from './produto'
import cep from './cep'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  modules: {
    produto,
    cep
  }
})

export default vuex
