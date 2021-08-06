<template>
  <div class="login">
    <!-- Profile Image & graduated status -->
    <router-link :to="{ name: 'Account' }">
      <div class="row my-5">
        <div class="w-100 d-flex justify-content-center align-items-center">
          <img class="profile-img round-border" :src="account.picture" :alt="account.name">
        </div>
        <div class="w-100 d-flex align-items-end justify-content-end spill">
          <span class="p-3 bg-light round-border fa fa-user-graduate fa-2x" aria-hidden="true" v-if="account.graduated == true"></span>
          <span class="p-3 bg-light round-border fa fa-user fa-2x" aria-hidden="true" v-else></span>
        </div>
      </div>
    </router-link>
    <!-- Profile Info -->
    <div class="row">
      <!-- Name & Class -->
      <div class="col mx-3">
        <p class="text-gray m-0">
          {{ account.class }}
        </p>
        <h4>{{ account.name }}</h4>
      </div>
      <!-- Links -->
      <div class="col mt-3 d-flex flex-column mx-3 text-dark">
        <p v-if="account.github" class="lead cursor" :href="account.github">
          <span class="mr-2 fab fa-lg fa-github"></span><b> GitHub</b>
        </p>
        <p v-if="account.linkedin" class="lead cursor" :href="account.linkedin">
          <span class="mr-2 fab fa-lg fa-linkedin"></span><b> LinkedIn</b>
        </p>
        <p v-if="account.resume" class="lead cursor" :href="account.resume">
          <span class="mr-3 fa fa-lg fa-file-alt"></span><b>Resume</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'Login',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-img{
  width: 70%
}
.round-border{
  border-radius: 50%;
  border: 1px solid black;
}
.spill{
margin-right: 3em;
margin-top: -5em
}
.cursor{
  cursor: pointer;
}
</style>
