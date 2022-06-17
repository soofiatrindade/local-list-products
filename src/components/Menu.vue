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
        <router-link to="/" class="navbar-brand"> &nbsp;&nbsp;First Practicing Vue.js 2018</router-link>
        <ul class="nav navbar-nav">
          <li><router-link to="/">Buying List</router-link></li>
          <li><router-link to="/cep">Search Address</router-link></li>
          <li><router-link to="/endereco">Search BR CEP</router-link></li>
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
