<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Lista from './Lista.vue'

export default {
  name: 'Formulario',
  components: {
    Lista
  },
  data () {
    return {
      classMsg: '',
      msg: '',
      formulario: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (to.params.id) {
        try {
          vm.carregar(to.params.id)
            .then(result => { vm.formulario = result })
        } catch (e) {
          console.log(`ID ${to.params.id} does not exist in the list!`)
          vm.$router.push('/')
        }
      } else {
        vm.formulario = vm.getItem
      }
      return vm
    })
  },
  computed: {
    ...mapState({
      nome: state => state.produto.nome,
      sobrenome: state => state.produto.sobrenome
    }),
    ...mapGetters({
      nomecompleto: 'produto/nomecompleto',
      getItem: 'produto/getItem'
    })
  },
  methods: {
    add () {
      this.classMsg = false
      this.msg = ''
      if (this.formulario.descricao !== '' && this.formulario.preco !== '' && (!isNaN(this.formulario.preco))) {
        this.adicionar(this.formulario)
        this.limpar()
        this.$router.push('/')
      } else if (isNaN(this.formulario.preco)) {
        this.classMsg = true
        this.msg = 'Fit a price with numbers only, do not use comman.'
      } else {
        this.classMsg = true
        this.msg = 'Fit all data correctly!'
      }
    },
    limpar () {
      this.formulario.descricao = ''
      this.formulario.preco = ''
      this.formulario.id = ''
    },
    ...mapActions({
      adicionar: 'produto/adicionar',
      carregar: 'produto/carregar'
    })
  }
}
</script>

<template>
    <div id="formulario">
        <img class="imagem-responsiva" src="../img/Logo Salesoft.png">
        <h1 class="alinhar">Make your List! {{nomecompleto}} </h1>
        <div class="row">
        </div>
        <div class="row conteudo">
            <input type="hidden" id="id" v-model="formulario.id" />
            <div class="col-lg-5 col-sm-5 col-md-5 col-lg-offset-1 col-md-offset-1">
                <input type="text" class="form-control" id="descricao" v-model="formulario.descricao" placeholder="Insert a description" />
            </div>
            <div class="col-lg-2 col-sm-2 col-md-2">
                <input type="text" class="form-control" id="preco" v-model="formulario.preco" placeholder="Price Ex: 9.90" />
            </div>
            <div class="col-lg-1 col-sm-1">
                <input type="button" class="btn btn-primary" @click="add" value="+ Adicionar">
            </div>
            <div class="col-lg-2 col-sm-3 tamanho-msg col-sm-offset-1">
              <label id="msg" :class="{ 'alert alert-info': classMsg }">{{msg}}</label>
            </div>
        </div>
        <br/>
        <br/>
        <lista />
    </div>
</template>

<style scoped>
.tamanho-img {
  width: 360px;
  height: 100px;
}
.alinhar {
  display: inline-block;
  margin-left: 3%;
}
.conteudo {
  margin: 30px 30px 20px 20px;
}
.imagem-responsiva {
  width: 28em;
  height: 8em;
}
.tamanho-msg{
  height: 15px;
}
</style>
