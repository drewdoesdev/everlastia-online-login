import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login';
import Registration from '@/views/Registration'
import CharacterSelect from '@/views/CharacterSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    }, 
    {
      path: '/character-select',
      name: 'characterSelect',
      component: CharacterSelect
    }
  ]
})