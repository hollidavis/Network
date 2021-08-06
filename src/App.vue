<template>
  <main class="row">
    <div class="col-md-3">
      <Login />
    </div>
    <div class="col-md-9">
      <div class="row">
        <div class="col-12 p-0">
          <Navbar />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
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
