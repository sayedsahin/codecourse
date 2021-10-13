import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../pages/Home.vue'
import Post from '../pages/Post.vue'
import Login from '../pages/Login.vue'
import AdminPosts from '../pages/admin/Posts.vue'
import AdminEdit from '../pages/admin/Edit.vue'
const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},

	{
		path: '/posts/:slug',
		name: 'post',
		component: Post,
		props: true
	},

	{
		path: '/login',
		name: 'login',
		component: Login,

		beforeEnter: (to, from, next) => {
			if (store.getters.authenticated) {
				return next({name: 'home'})
			}

			return next()
		},
	},

	{
		path: '/admin/posts',
		name: 'admin.posts',
		component: AdminPosts,

		beforeEnter: (to, from, next) => {
			if (!store.getters.authenticated) {
				return next({name: 'login'})
			}

			return next()
		},
	},

	{
		path: '/admin/posts/:uuid/edit',
		name: 'admin.posts.edit',
		component: AdminEdit,
		props: true,
		beforeEnter: (to, from, next) => {
			if (!store.getters.authenticated) {
				return next({name: 'login'})
			}

			return next()
		},
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})