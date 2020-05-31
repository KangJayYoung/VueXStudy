<template>
  <div class="post-list-page">
    <h1>post list</h1>
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostList from "@/components/PostList";
//import api from "@/api";
import { mapState, mapActions } from "vuex";

export default {
  name: "PostListPage",
  components: { PostList },
  created() {
    this.fetchPostList();
    // api.get("/posts").then(res => (this.posts = res.data));
  },
  methods: {
    ...mapActions(["fetchPostList"])
  },
  computed: {
    ...mapState(["posts"])
  }
};
</script>
