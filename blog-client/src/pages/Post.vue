<template>
	<div class="container">
    <section class="w-full px-4 pb-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
      <div class="flex flex-col space-y-12 divide-y divide-gray-200">
        <div>
          <h3 class="mb-2 text-xl font-bold leading-snug tracking-tight text-gray-800 md:text-3xl">
            <span class="text-gray-900 hover:text-purple-700">{{ post.title }}</span>
          </h3>
          <p class="pb-2 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
          <div class="mb-4 text-base font-normal text-gray-600 prose prose-sm sm:prose lg:prose-lg xl:prose-xl" v-html="post.body">
            
          </div>
          <router-link :to="{ name: 'home' }" class="btn btn-light btn-sm">Back</router-link>
        </div>
      </div>
    </section>
	</div>
</template>

<script>
import { onMounted } from 'vue'
import usePosts from '../api/usePosts'
export default {
  props: {
    slug: {
      type: String,
      required: true,
    }
  },
  setup(props){
    const { post, fetchPost } = usePosts()

    onMounted(fetchPost(props.slug))

    return {
      post
    }
  },

  
}
</script>

<style lang="css" scoped>
</style>