export default {

	state() {
		return {
			user: [],
		}
	},

	getters: {

		user(state){
			return state.user;
		}
	},

	mutations: {
		GET_USER (state, user){
			state.user = user;
		}
	},

	actions: {

		async getUser({ commit }, id) {
			let user = await this.$axios.get(`api/profile/${id}`);
			commit('GET_USER', user.data.data);
		},
	}
}