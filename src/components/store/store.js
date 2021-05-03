import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import User from './modules/user'

Vue.use(Vuex)
//axios.defaults.baseURL = 'http://localhost:3333/'

export default new Vuex.Store({

    actions: {

    },
    modules: {
        user: User
    }
})