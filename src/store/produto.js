const state = {
  nome: 'Sofia',
  sobrenome: '',
  lista: [],
  item: {id: '', descricao: '', preco: '', feita: false},
  contId: 0
}

const getters = {
  nomecompleto (state) {
    return state.nome + ' ' + state.sobrenome
  },
  soma (state) {
    return state.lista.reduce((total, item) => total + parseFloat(item.preco), 0.00)
  },
  getItem (state) {
    return state.item
  }
}

const mutations = {
  CHANGENOME (state, payload) {
    state.sobrenome = payload
  },
  NOVOITEM (state, payload) {
    state.contId += 1
    payload = JSON.parse(JSON.stringify(payload))
    payload.id = state.contId
    state.lista.push(payload)
  },
  EDITITEM (state, payload) {
    let idx = state.lista.findIndex((item) => item.id === payload.id)
    // tem q passar a cada coluna, rever isso
    state.lista[idx].id = payload.id
    state.lista[idx].descricao = payload.descricao
    state.lista[idx].preco = payload.preco
  },
  EXCLUIR (state, payload) {
    let idx = state.lista.findIndex((item) => item.id === payload.id)
    state.lista.splice(idx, 1)
  }
}

const actions = {
  setSobrenome (context, payload) {
    context.commit('CHANGENOME', payload)
  },
  setNomeCompleto (context) {
    context.commit('CHANGENOME', 'Trindade')
  },
  adicionar (context, payload) {
    if (payload.id === '') {
      context.commit('NOVOITEM', payload)
    } else {
      context.commit('EDITITEM', payload)
    }
  },
  excluir (context, payload) {
    context.commit('EXCLUIR', payload)
  },
  carregar (context, payload) {
    let idx = context.state.lista.findIndex((item) => item.id === parseInt(payload))
    if (idx === false || idx === -1) throw new Error('Id não existe')
    return JSON.parse(JSON.stringify(context.state.lista[idx]))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
