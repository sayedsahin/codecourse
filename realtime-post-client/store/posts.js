export default {

	state() {
		return {
			posts: [],
			prependedPosts: []
		}
	},

	getters: {
		posts(state){
			return [...state.prependedPosts, ...state.posts]
		}
	},

	mutations: {
		SET_POSTS (state, posts){
			state.posts = posts
		},

		PREPEND_POST (state, post){
			state.prependedPosts = [ post, ...state.prependedPosts ]
		}
	},

	actions: {
		async getPosts({ commit }) {
			let posts = await this.$axios.get('api/posts')
			commit('SET_POSTS', posts.data.data)
		},

		async createPost({ commit }, post) {
			let prependedPost = await this.$axios.post('api/post', post)
			commit('PREPEND_POST', prependedPost.data.data)
		}
	}
}