<template>
  <div class="post col-12 bg-light rounded shadow my-3">
    <div class="row">
      <div class="col-1 mt-3">
        <img class="round-border sm-profile" :src="post.creator.picture" :alt="post.creator.name">
      </div>
      <div class="col-11 pl-4 d-flex justify-content-center flex-column">
        <p class="m-0">
          <b>{{ post.creator.name }}</b>
        </p>
        <div class="d-flex align-items-center">
          <p class="m-0">
            {{ post.createdAt }}
          </p>
          <span class="ml-2 fa fa-user-graduate" aria-hidden="true" v-if="post.creator.graduated == true"></span>
          <span class="ml-2 fa fa-user" aria-hidden="true" v-else></span>
        </div>
      </div>
    </div>
    <div class="row m-2">
      <div class="col-12">
        <p>{{ post.body }}</p>
      </div>
    </div>
    <div class="row justify-content-end mb-3">
      <div class="col-1 d-flex flex-row justify-content-around align-items-center">
        <i class="fa fa-heart"></i>
        <p class="m-0">
          0
          <!-- TODO Add function to count likes & display results here -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
