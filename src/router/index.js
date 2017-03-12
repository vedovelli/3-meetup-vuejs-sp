
import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../modules/products/Main.vue'
import Categories from '../modules/categories/Main.vue'

Vue.use(VueRouter)

const routes = [
    {
        name: 'app.index',
        path: '/',
        component: Products,
    }, {
        name: 'products.index',
        path: '/produtos',
        component: Products,
    }, {
        name: 'categories.index',
        path: 'categorias',
        component: Categories,
    },
]

export default new VueRouter({
    routes,
    mode: 'history',
})
