<script>
export default {
  name: 'Menu',
  data () {
    return {

    }
  }
}
</script>

<template>
  <div id="menu">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <img src="../img/Logo Salesoft2.png"/>
        </div>
        <router-link to="/" class="navbar-brand"> &nbsp;&nbsp;Treinamento Vue.js</router-link>
        <ul class="nav navbar-nav">
          <li><router-link to="/">Lista de Compras</router-link></li>
          <li><router-link to="/cep">Busca Endereço</router-link></li>
          <li><router-link to="/endereco">Busca CEP</router-link></li>
        </ul>
      </div>
    </nav>
    </div>
</template>

<style>
nav {
  margin-top: -30px
}
ul li:hover {
  background-color: #ccf
}
</style>
