import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Object_vvedeni_v_eksplyataciu_JM',
    name: 'Object_vvedeni_v_eksplyataciu_JM',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Object_vvedeni_v_eksplyataciu_JM.vue')
  },
  {
    path: '/Sdelka_s_kap_stroeniem_PS',
    name: 'Sdelka_s_kap_stroeniem_PS',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sdelka_s_kap_stroeniem_PS.vue')
  },
  {
    path: '/Sdelka_s_izolirovannim_pomejeniem_PS',
    name: 'Sdelka_s_izolirovannim_pomejeniem_PS',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sdelka_s_izolirovannim_pomejeniem_PS.vue')
  },
  {
    path: '/Object_vvedeni_v_eksplyataciu_PS',
    name: 'Object_vvedeni_v_eksplyataciu_PS',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Object_vvedeni_v_eksplyataciu_PS.vue')
  }, 
  {
    path: '/Object_vvedeni_v_eksplyataciu_OD',
    name: 'Object_vvedeni_v_eksplyataciu_OD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Object_vvedeni_v_eksplyataciu_OD.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/pages',
    name: 'Pages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Pages.vue')
  },
  {
    path: '/Sdelka_s_izolirovannim_pomejeniem_OD',
    name: 'Sdelka_s_izolirovannim_pomejeniem_OD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Sdelka_s_izolirovannim_pomejeniem_OD.vue')
  },
  {
    path: '/Sdelka_s_kap_stroeniem_OD',
    name: 'Sdelka_s_kap_stroeniem_OD',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Sdelka_s_kap_stroeniem_OD.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

