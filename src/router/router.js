import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{ path: '/', component: require('views/index') },
		{ path: '/index', redirect: '/' },
		{ path: '/classify/:id', component: require('views/classify') },
		{ path: '/go*', component: require('views/go') }
	]
})
