<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Lista',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      lista: state => state.produto.lista
    }),
    ...mapGetters({
      soma: 'produto/soma'
    })
  },
  methods: {
    ...mapActions({
      excluir: 'produto/excluir'
    })
  }
}

</script>

<template>
    <div id="lista" class="row col-lg-7 col-sm-8 col-md-8 col-lg-offset-2 col-md-offset-2">
      <table class="table table-hover">
          <thead>
              <tr>
                <th><i class="fa fa-list-ul" aria-hidden="true"></i></th>
                <th>Minha Lista - Componente</th>
                <th>Preço</th>
                <th>Soma: R$ {{soma}}</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="produto in lista" :key="produto.id">
                <td>
                  <input type="checkbox" v-model="produto.feita">
                </td>
                <td class="alinhamento-table" :class="{risca: produto.feita}">{{produto.descricao}}</td>
                <td class="alinhamento-table" :class="{risca: produto.feita}">{{produto.preco}} </td>
                <td>
                  <button class="btn btn-primary" @click="excluir(produto)">
                    <span class="icon has-text-info">
                      <i class="fa fa-trash-o"></i>
                    </span>
                  </button>
                  <router-link :to="`/edit/${produto.id}`" class="btn btn-primary">
                    <span class="icon has-text-info">
                      <i class="fa fa-pencil"></i>
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
  text-align: left;
}
.risca {
  text-decoration: line-through;
}
</style>
