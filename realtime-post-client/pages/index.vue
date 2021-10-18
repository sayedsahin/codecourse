<template>
  <div class="p-6 mx-auto my-3 max-w-md md:max-w-2xl">
    <div>
      <PostForm/>
    </div>
    <div>
      <Post v-for="post in posts" :key="post.id" :post="post" />
      <div v-observe-visibility="visibilityChange"></div>
    </div>
    
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
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
      ...mapActions ({
        getPosts: 'posts/getPosts',
        getMorePosts: 'posts/getMorePosts',
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
      this.getPosts();

      this.$echo.channel('post')
        .listen('PostCreated', (e) => {
            console.log(e);
         })
    }
  }
</script>
