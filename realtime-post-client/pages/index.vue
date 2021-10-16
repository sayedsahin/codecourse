<template>
  <div class="p-6 mx-auto my-3 max-w-md md:max-w-2xl">
    <div>
      <PostForm/>
    </div>
    
    <div>
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
    
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {

    computed: {
      ...mapGetters ({
        posts: 'posts/posts'
      }) 
    },

    methods: {
      ...mapActions ({
        getPosts: 'posts/getPosts'
      })
    },

    mounted(){
      this.getPosts()
    }
  }
</script>
