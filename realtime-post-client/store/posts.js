export default {

	state() {
		return {
			posts: []
		}
	},

	getters: {
		posts(state){
			return state.posts
		}
	},

	mutations: {
		SET_POSTS (state, posts){
			state.posts = posts
		}
	},

	actions: {
		async getPosts({ commit }) {
			let posts = await this.$axios.get('api/posts')
			commit('SET_POSTS', posts.data.data)
		},

		async createPost({ commit }, post) {
			await this.$axios.post('api/post', post)
		}
	}
}