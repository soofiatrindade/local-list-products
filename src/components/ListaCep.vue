<script>
import { mapState } from 'vuex'
export default {
  name: 'ListaCep',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      lista: state => state.cep.lista,
      mostrar: state => state.cep.mostrar
    })
  }
}

</script>

<template>
    <div id="listaCep" class="row col-lg-7 col-sm-8 col-md-8 col-lg-offset-2 col-md-offset-2">
      <table class="table table-hover">
          <thead v-show="mostrar">
              <tr>
                <th><i class="fa fa-list-ul" aria-hidden="true"></i> CEP</th>
                <th class="alinhamento-table">Nº IBGE</th>
                <th class="alinhamento-table">Complement</th>
                <th></th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="item in lista" :key="item.cep">
                <td>
                  {{item.cep}}
                </td>
                <td>
                  {{item.ibge}}
                </td>
                <td>
                  {{item.complemento}}
                </td>
                <td>
                  <router-link :to="`/cep/${item.cep}`" class="btn btn-primary">
                    <span class="icon has-text-info">
                      <i class="fa fa-search"></i>
                    </span>
                  </router-link>
                </td>
              </tr>
          </tbody>
      </table>
    </div>
</template>

<style>
.alinhamento-table {
  text-align: center;
}
</style>
