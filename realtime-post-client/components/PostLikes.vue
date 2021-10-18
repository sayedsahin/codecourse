<template>
	<div>
		<div class="flex mr-2 text-gray-700 text-sm mr-3">
			<button @click="createLike(post.id)">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
				</svg>
			</button>
			<span>{{ likes[post.id] }}</span>
		</div>

	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  props: {
    post: {
      required: true,
      type: Object,
    }
  },

  computed: {
    ...mapGetters ({
    	likes: 'posts/likes'
    })
  },
  methods: {
    ...mapActions({
    	createLikeAction: 'posts/createLike'
    }),

    async createLike(postId){
    	await this.createLikeAction(postId)
    }
  }

  
}
</script>