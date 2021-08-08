<template>
  <div class="home row pl-15">
    <div class="col-12 bg-light rounded shadow">
      <CreatePost :posts="posts" />
    </div>
    <div class="col-12">
      <Thread :posts="posts" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getAllPosts()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

    CreatePost
<style scoped lang="scss">
.pl-15{
  padding-left: 15px;
}
</style>
