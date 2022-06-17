<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import ListaCep from './ListaCep.vue'

export default {
  name: 'FormularioEndereco',
  data () {
    return {
      formulario: {}
    }
  },
  components: {
    ListaCep
  },
  created: function criar () {
    this.formulario = this.getFormulario
  },
  computed: {
    ...mapGetters({
      getFormulario: 'cep/getFormulario'
    }),
    ...mapState({
      msg: state => state.cep.msgCep
    })
  },
  methods: {
    buscar () {
      this.buscarCep(this.formulario)
    },
    ...mapActions({
      buscarCep: 'cep/buscarCep'
    })
  }
}
</script>

<template>
    <div id="formularioEndereco">
        <div class="row">
            <h1>Insert your Brazilian Address and I will give your CEP</h1>
            <br/>
        </div>
        <br/>
        <div class="row">
          <div class="col-lg-12">
            <div class="col-sm-2">
              <label for="uf" class="col-sm-1 control-label">State:</label>
              <input type="text" id="uf" v-model="formulario.uf" class="form-control" /><br />
            </div>
            <div class="col-sm-4">
              <label for="rua" class="col-sm-1 control-label">City:</label>
              <input type="text" id="cidade" v-model="formulario.cidade" class="form-control" /><br />
            </div>
            <div class="col-sm-5">
              <label for="rua" class="col-sm-1 control-label">Street:</label>
              <input type="text" id="rua" v-model="formulario.rua" class="form-control" /><br />
            </div>
           <div class="col-sm-1">
              <br/>
              <input type="button" class="btn btn-primary" @click="buscar" value="Search">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-11">
            <label id="msg">{{msg}}</label>
          </div>
        </div>
        <br/>
        <lista-cep />
    </div>
</template>

<style scoped>

</style>
