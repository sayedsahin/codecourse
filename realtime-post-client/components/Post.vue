<template>
	<div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-6 max-w-md md:max-w-2xl"><!--horizantil margin is just for display-->
		<div class="flex items-start px-4 py-6">
			<img class="w-12 h-12 rounded-full object-cover mr-4 shadow" :src="post.user.avatar" alt="avatar">
			<div class="">
				<div class="flex items-center justify-between">
					<h2 class="text-lg font-semibold text-gray-900 -mt-1">{{ post.id }} {{ post.user.name }} </h2>
					<small class="text-sm text-gray-700">{{ post.created_at }}</small>
				</div>
				<p class="mt-1 text-gray-700 text-md">{{ post.body }}</p>
				<div class="mt-4 flex items-center">
					<div class="flex mr-2 text-gray-700 text-sm mr-3">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
						</svg>
						<span>12</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	props: {
	  post: {
	    type: Object,
	    required: true
	  }
	},

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>