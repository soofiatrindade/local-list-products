<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'FormularioCep',
  data () {
    return {
      cep: '15055500'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (to.params.cep) {
        try {
          vm.cep = to.params.cep
          vm.buscar()
        } catch (e) {
          console.log('erro: ' + e)
        }
      } else {
        vm.$router.push('/cep')
      }
      return vm
    })
  },
  computed: {
    ...mapState({
      msg: state => state.cep.msg,
      info: state => state.cep.info
    })
  },
  methods: {
    buscar () {
      this.buscarEndereco(this.cep)
    },
    ...mapActions({
      buscarEndereco: 'cep/buscarEndereco'
    })
  }
}
</script>

<template>
    <div id="formularioCep">
        <div class="row">
            <h1>Insira o CEP</h1>
            <br/>
        </div>
        <br/>
        <div class="row">
            <div class="col-lg-5 col-sm-5 col-md-5 col-lg-offset-1 col-md-offset-1">
                <input type="text" class="form-control" id="cep" v-model="cep" placeholder="Insira o CEP" />
            </div>
            <div class="col-lg-1 col-sm-1">
                <input type="button" class="btn btn-primary" @click="buscar" value="Buscar">
            </div>
            <br/>
            <br/>
            <div class="col-lg-3 col-sm-3 col-sm-offset-1">
                <label id="msg">{{msg}}</label>
            </div>
            <br/><br/>
        </div>
        <div class="row">
            <div class="col-lg-7">
                <label for="rua" class="col-sm-1 control-label">Rua:</label>
                <div class="col-sm-11">
                    <input type="text" id="rua" :value="info.logradouro" class="form-control" /><br />
                </div>
            </div>
            <div class="col-lg-4">
                <label for="complemento" class="col-sm-4 control-label">Complemento:</label>
                <div class="col-sm-8">
                    <input type="text" id="complemento" :value="info.complemento" class="form-control" /><br />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-7">
                <label for="bairro" class="col-sm-1 control-label">Bairro:</label>
                <div class="col-sm-10">
                    <input type="text" id="bairro" :value="info.bairro" class="form-control" /><br />
                </div>
            </div>
            <div class="col-lg-7">
                <label for="cidade" class="col-sm-1 control-label">Cidade:</label>
                <div class="col-sm-8">
                    <input type="text" id="cidade" :value="info.localidade" class="form-control" /><br />
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <label for="uf" class="col-sm-1 control-label">UF:</label>
            <div class="col-sm-3">
                <input type="text" id="uf" :value="info.uf" class="form-control" /><br />
            </div>
          </div>
        </div>
        <br/>
    </div>
</template>

<style scoped>

</style>
