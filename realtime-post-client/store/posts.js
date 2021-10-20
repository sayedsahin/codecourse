export default {

	state() {
		return {
			posts: [],
			prependedPosts: [],
			likes: {}
		}
	},

	getters: {

		posts(state){
			return [...state.prependedPosts, ...state.posts];
		},

		likes(state){
			return state.likes;
		}
	},

	mutations: {
		SET_POSTS (state, posts){
			state.posts = posts;
		},

		PREPEND_POST (state, post){
			state.prependedPosts = [ post, ...state.prependedPosts ];
		},

		APPEND_POSTS (state, posts){
			state.posts = [...state.posts, ...posts];
		},

		APPEND_LIKES (state, likes) {
			state.likes = Object.assign({}, state.likes, likes);
		},

		SET_LIKES (state, { postId, likeCount}) {
			state.likes[postId] = likeCount;
		}
	},

	actions: {
		async getPosts({ commit }) {
			let posts = await this.$axios.get('api/posts');
			commit('SET_POSTS', posts.data.data);
			commit('APPEND_LIKES', posts.data.likes);
		},

		
		async getMorePosts({ commit, state }, page) {
			let posts = await this.$axios.get(`api/posts?page=${page}&skip=${state.prependedPosts.length}`);
			commit('APPEND_POSTS', posts.data.data);
			commit('APPEND_LIKES', posts.data.likes);
		},

		async createPost({ commit }, post) {
			let prependedPost = await this.$axios.post('api/post', post);
			commit('PREPEND_POST', prependedPost.data.data);
			commit('APPEND_LIKES', prependedPost.data.likes);
		},

		async createLike({ commit }, postId) {
			let like = await this.$axios.post(`api/posts/${postId}/like`);

			commit('SET_LIKES', { postId, likeCount: like.data.likes });
		},

		async getSinglePost({ commit }, postId) {
			let post = await this.$axios.get(`api/post/${postId}`);

			commit('PREPEND_POST', post.data.data);
			commit('APPEND_LIKES', post.data.likes);
		},
	}
}