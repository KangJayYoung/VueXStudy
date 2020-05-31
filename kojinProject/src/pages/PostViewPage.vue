<template>
  <div class="post-view-page">
    <div class="post-view">
      <div>
        <h1>title</h1>
        <span>No</span>
        <Strong>kang</Strong>
      </div>
      <p>content</p>
    </div>
    <router-link :to="{ name: 'PostListPage' }">List</router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PostViewPage",
  methods: {
    ...mapActions(["fetchPost"])
  },
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  created() {
    this.fetchPost("/${this.postId}").catch(err => {
      alert(err.response.data.msg);
      this.$router.back();
    });
  }
};
</script>
