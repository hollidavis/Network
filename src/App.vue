<template>
  <main class="row">
    <div class="col-md-3 shadow">
      <Login />
    </div>
    <div class="col-md-9">
      <div class="row">
        <div class="col-12 shadow p-0">
          <Navbar />
        </div>
      </div>
      <div class="row">
        <div class="col-md-9">
          <!-- Current page goes here -->
          <router-view />
        </div>
        <div class="col-md-3 d-flex flex-column justify-content-center">
          <Ad />
          <!-- ads will go here -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import { adsService } from './services/AdsService'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
