<script>
import { mapActions } from 'vuex'
import Menu from './components/menu.vue'

export default {
  components: {
    Menu
  },
  data () {
    return {
      nome: ''
    }
  },
  methods: {
    sobrenome () {
      this.setSobrenome(this.nome)
    },
    ...mapActions({
      setSobrenome: 'produto/setSobrenome',
      setNomeCompleto: 'produto/setNomeCompleto'
    })
  }
}
</script>

<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>

</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
