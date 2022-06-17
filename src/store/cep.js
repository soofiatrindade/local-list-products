import axios from 'axios'

const state = {
  lista: [],
  formulario: {uf: 'RS', cidade: 'Uruguaiana', rua: 'Santana'},
  msg: '',
  msgCep: '',
  mostrar: false,
  info: {}
}

const getters = {
  getFormulario () {
    return state.formulario
  }
}
const mutations = {
  BUSCARCEP (state, payload) {
    state.msgCep = ''
    if (payload.length > 0) {
      state.lista = payload
      state.mostrar = true
    } else {
      state.lista = []
      state.msgCep = 'Nenhum resultado foi encontrado'
      state.mostrar = false
    }
  },
  BUSCARENDERECO (state, payload) {
    state.msg = ''
    if (payload.logradouro) {
      state.info = payload
    } else {
      state.msg = 'Endereço não encontrado...'
    }
  }
}

const actions = {
  buscarCep (context, payload) {
    state.msgCep = 'Carregando...'
    if (payload.uf !== '' && payload.cidade !== '' && payload.rua !== '') {
      axios.get('https://viacep.com.br/ws/' + payload.uf + '/' + payload.cidade + '/' + payload.rua + '/json/')
        .then(function (response) {
          context.commit('BUSCARCEP', response.data)
        })
        .catch(function (e) {
          state.msgCep = 'Tente novamente...'
        })
    } else {
      console.log('asd')
      state.msgCep = 'Preencha todos os dados!'
    }
  },
  buscarEndereco (context, payload) {
    state.msg = 'Carregando...'
    if (payload !== '') {
      axios.get('https://viacep.com.br/ws/' + payload + '/json/')
        .then(function (response) {
          context.commit('BUSCARENDERECO', response.data)
        })
        .catch(function (e) {
          state.msg = 'Endereço não encontrado...'
        })
    } else {
      state.msg = 'Preencha o CEP!'
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
