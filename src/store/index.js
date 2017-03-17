import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

import Categories from '../modules/categories/store'
import Products from '../modules/products/store'

Vue.use(Vuex)

export default new Vuex.Store({
    state, mutations,
    modules: {
        Categories, Products
    }
})