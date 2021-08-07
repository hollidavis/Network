<template>
  <div class="ad card my-3" v-for="a in ads" :key="a.title">
    <img :src="a.tall" :alt="a.title" :href="a.linkURL">
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import { adsService } from '../services/AdsService'
import { AppState } from '../AppState'
export default {
  name: 'Ad',
  setup() {
    onMounted(async() => {
      try {
        await adsService.getAllAds()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      ads: computed(() => AppState.ads)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
