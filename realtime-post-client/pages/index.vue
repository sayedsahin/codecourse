<template>
  <div class="p-6 mx-auto my-3 max-w-md md:max-w-2xl">
    <div>
      <PostForm v-if="$auth.loggedIn" />
      <p v-else><nuxt-link :to="{name: 'login'}" class="text-indigo-500">Login</nuxt-link> to post</p>
    </div>
    <div>
      <Post v-for="post in posts" :key="post.id" :post="post" />
      <div v-observe-visibility="visibilityChange"></div>
    </div>
    
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  export default {

    data () {
      return {
        page:1
      }
    },

    computed: {
      ...mapGetters ({
        posts: 'posts/posts',
      }) 
    },

    methods: {

      ...mapMutations({
        SET_LIKES: 'posts/SET_LIKES'
      }),

      ...mapActions ({
        getPosts: 'posts/getPosts',
        getMorePosts: 'posts/getMorePosts',
        getSinglePost: 'posts/getSinglePost',
      }),

      visibilityChange(isVisibale){
        if (!isVisibale) {
          return;
        }
        ++this.page;
        this.getMorePosts(this.page);
      }
    },

    mounted(){
      this.getPosts()

      this.$echo.channel('posts')
        .listen('PostCreated', (e) => {
            this.getSinglePost(e.post_id);
         })
        .listen('PostLiked', (e) => {
            this.SET_LIKES({ postId: e.post_id, likeCount: e.likes });
         })

      /*this.$echo.channel('posts')
        .listen('PostCreated', (e) => {
            this.getSinglePost(e.post_id);
         })
        .listen('PostLiked', (e) => {
            this.SET_LIKES({ postId: e.post_id, likeCount: e.likes });
         })*/
    }
  }
</script>
