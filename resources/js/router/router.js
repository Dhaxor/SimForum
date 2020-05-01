import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import Signup from '../components/login/signup'
import Forum from '../components/forum/Forum'
import CreateCategory from '../components/category/CreateCategory'
import Logout from '../components/login/Logout'
import Read from '../components/forum/read'
import Create from '../components/forum/create'
const routes = [
    { 
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/category',
        component: CreateCategory
    },
    {
        path: '/forum',
        component: Forum,
        name:'Forum'
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/question/:slug',
        component: Read,
        name:'read'
    },
    {
        path: '/ask',
        component: Create,
    },


  ]

const router = new VueRouter({
    routes,// short for `routes: routes`
    hashbang:false,
    mode: 'history'
  })

export default router
