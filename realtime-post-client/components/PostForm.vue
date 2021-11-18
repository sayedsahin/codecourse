<template>
	<form @submit.prevent="createPost">
    <div>
      <label for="body"></label>
      <textarea v-model="form.body" class="w-full py-6 px-4 border border-gry-300" name="body" id="body" placeholder="Say Somthing"></textarea>
      <div v-if="errors.body" class="text-red-600 font-semibold ml-2">*{{errors.body[0]}}</div>
    </div>
    <div>
      <button class="form-button">Post it</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {

	data () {
		return {
			form: {
				body: ''
			},
			errors:{},
		}
	},

	methods: {
		...mapActions({
			createPostAction: 'posts/createPost'
		}),
		
	  async createPost () {
	    try{
	    	await this.createPostAction(this.form)
	    	this.form.body = '';
	    	this.errors = {};
	    }catch (e) {
	    	if (e.response.status == 422) {
	    		this.errors = e.response.data.errors
	    	}
	    }
	  }
	}
}
</script>

<style lang="css" scoped>
	.form-button{
		@apply px-4 py-2 mt-2 bg-purple-600 rounded text-white text-sm;
	}
</style>