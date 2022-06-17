<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      formularioEdit: {},
      classMsg: '',
      msg: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (to.params.id) {
        try {
          vm.carregar(to.params.id)
            .then(result => { vm.formularioEdit = result })
        } catch (e) {
          console.log(`ID ${to.params.id} não existe na lista!`)
          vm.$router.push('/')
        }
      } else {
        vm.formularioEdit = vm.getItem
      }
      return vm
    })
  },
  created: function criar () {
    this.formularioEdit = this.getItem
  },
  computed: {
    ...mapGetters({
      getItem: 'produto/getItem'
    })
  },
  methods: {
    add () {
      this.classMsg = false
      this.msg = ''
      if (this.formularioEdit.descricao !== '' && this.formularioEdit.preco !== '' && (!isNaN(this.formularioEdit.preco))) {
        this.adicionar(this.formularioEdit)
        this.limpar()
        this.$router.push('/')
      } else if (isNaN(this.formularioEdit.preco)) {
        this.classMsg = true
        this.msg = 'Fit a price with numbers only, do not use comman.'
      } else {
        this.classMsg = true
        this.msg = 'Fit all data correctly!'
      }
    },
    limpar () {
      this.formularioEdit.descricao = ''
      this.formularioEdit.preco = ''
      this.formularioEdit.id = ''
    },
    ...mapActions({
      adicionar: 'produto/adicionar',
      carregar: 'produto/carregar'
    })
  }
}
</script>

<template>
  <div id="formularioEdit">
    <div class="row conteudo">
        <input type="hidden" id="id" v-model="formularioEdit.id" />
        <div class="col-lg-5 col-sm-5 col-md-5 col-lg-offset-1 col-md-offset-1">
            <input type="text" class="form-control" id="descricaoEdit" v-model="formularioEdit.descricao" placeholder="Insert a Description" />
        </div>
        <div class="col-lg-2 col-sm-2 col-md-2">
            <input type="text" class="form-control" id="precoEdit" v-model="formularioEdit.preco" placeholder="Price Ex: 9,90" />
        </div>
        <div class="col-lg-1 col-sm-1">
            <input type="button" class="btn btn-primary" @click="add" value="+ Edit!!">
        </div>
        <div class="col-lg-2 col-sm-3 tamanho-msg col-sm-offset-1">
          <label id="msg" :class="{ 'alert alert-info': classMsg }">{{msg}}</label>
        </div>
    </div>
    <br/>
  </div>
</template>

<style>
</style>
