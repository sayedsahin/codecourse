<template>
	<div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-6 max-w-md md:max-w-2xl"><!--horizantil margin is just for display-->
		<div class="flex items-start px-4 py-6">
			<img class="w-12 h-12 rounded-full object-cover mr-4 shadow" :src="post.user.avatar" alt="avatar">
			<div class="">
				<div class="flex items-center justify-between">
					<h2 class="text-lg font-semibold text-gray-900 -mt-1"> {{ post.user.name }} </h2>
					<small class="text-sm text-gray-700"><Time :timestamp="post.created_at" /></small>
				</div>
				<p class="mt-1 text-gray-700 text-md">{{ post.body }}</p>
				<div class="mt-4 flex items-center">
					<PostLikes :post="post" />
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