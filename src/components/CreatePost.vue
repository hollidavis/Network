<template>
  <div class="create-post row">
    <div class="col-12">
      <form @submit.prevent="createPost">
        <div class="form-group">
          <input type="text" name="body" class="form-control" placeholder="Share what's on your mind..." v-model="state.newPost.body">
          <button type="submit" class="btn btn-primary">
            <span class="fa fa-paper-plane"></span> Post
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'CreatePost',
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      newPost: {}
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
