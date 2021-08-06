<template>
  <div class="about row">
    <Profile :profile="profile" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      profile: computed(() => AppState.profiles)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
