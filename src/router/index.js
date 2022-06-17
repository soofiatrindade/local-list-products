import Vue from 'vue'
import Router from 'vue-router'
import Formulario from '@/components/Formulario'
import FormularioEdit from '@/components/FormularioEdit'
import FormularioCep from '@/components/FormularioCep'
import FormularioEndereco from '@/components/FormularioEndereco'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'New',
      component: Formulario
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: FormularioEdit
    },
    {
      path: '/cep',
      name: 'Cep',
      component: FormularioCep
    },
    {
      path: '/endereco',
      name: 'Endereco',
      component: FormularioEndereco
    },
    {
      path: '/cep/:cep',
      name: 'VerEndereco',
      component: FormularioCep
    },
    { path: '**', redirect: '/' }
  ]
})
