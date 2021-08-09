<template>
  <div class="row">
    <div class="col-12 bg-light rounded shadow">
    </div>
    <div class="col-12 bg-light rounded shadow">
      <CreatePost v-if="activeProfile.id === account.id" />
    </div>
    <div class="col-12">
      <Thread :posts="posts" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
export default {
  name: 'Profile',
  setup() {
    const router = useRoute()
    onMounted(async() => {
      try {
        await postsService.getAllPosts({ creatorId: router.params.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    onUpdated(async() => {
      try {
        await postsService.getAllPosts({ creatorId: router.params.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
