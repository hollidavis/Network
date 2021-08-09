<template>
  <div class="about row">
    <div class="col-12 bg-light rounded shadow">
      <Profile :profile="profile" />
    </div>
    <div class="col-12 bg-light rounded shadow">
      <CreatePost :posts="posts" />
    </div>
    <div class="col-12">
      <Thread :posts="posts" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Notifier'
export default {
  name: 'Account',
  setup() {
    const state = reactive({
      activeProfile: computed(() => AppState.activeProfile)
    })
    onMounted(async() => {
      try {
        await postsService.getAllPosts({ creatorId: state.activeProfile.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      profile: computed(() => AppState.profiles),
      posts: computed(() => AppState.posts)

    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
