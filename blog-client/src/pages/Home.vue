<template>
  
	<div>
    <section class="w-full px-4 pb-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
      <div class="flex flex-col space-y-12 divide-y divide-gray-200">
        <div v-for="post in posts" :key="post.uuid">
          <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
          <h4 class="mb-2 text-xl font-bold leading-snug tracking-tight text-gray-800 md:text-3xl">
            <router-link :to="{ name: 'post', params: { slug: post.slug } }" class="text-gray-900 hover:text-purple-700">{{ post.title }}</router-link>
          </h4>
          <p class="mb-4 text-base font-normal text-gray-600">
            {{ post.teaser }}
          </p>
          <router-link :to="{ name: 'post', params: { slug: post.slug } }" class="btn btn-light btn-sm">Continue Reading</router-link>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
        <a href="#" class="w-full rounded-full btn btn-light btn-xl md:w-auto">Previous Page</a>
        <a href="#" class="w-full rounded-full btn btn-light btn-xl md:w-auto">Next Page</a>
      </div>
    </section>
	</div>
</template>

<script>
import { onMounted } from 'vue'
import usePosts from '../api/usePosts'

export default {
  setup(){
    const { posts, fetchPosts } = usePosts()

    onMounted(fetchPosts)

    return {
      posts
    }
  },

  
}
</script>

<style lang="css" scoped>
</style>