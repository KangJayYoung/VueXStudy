<template>
  <div class="post-list-page">
    <div>
      <table>
        <colgroup>
          <col style="width:10%;" />
          <col style="width:60%;" />
          <col style="width:10%;" />
          <col style="width:20%;" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">num</th>
            <th scope="col">title</th>
            <th scope="col">author</th>
            <th scope="col">day</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <!--exaple-->
            <td scope="col">{{ post.id }}</td>
            <td scope="col">
              <router-link
                :to="{
                  name: 'PostViewPage',
                  params: { postId: post.id.toString() }
                }"
              >
                {{ post.title }}
              </router-link>
              [{{ post.comments.length }}]
            </td>
            <td scope="col">{{ post.user.name }}</td>
            <td scope="col">{{ post.createdAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    posts: {
      type: Array
    }
  }
};
</script>
<style scoped></style>
