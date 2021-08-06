<template>
  <div class="login">
    <div class="row my-5">
      <div class="w-100 d-flex justify-content-center align-items-center">
        <img class="profile-img round-border" :src="account.picture" :alt="account.name">
      </div>
      <div class="w-100 d-flex align-items-end justify-content-end spill">
        <span class="p-3 bg-light round-border fa fa-user-graduate fa-2x" aria-hidden="true" v-if="account.graduated == true"></span>
        <span class="p-3 bg-light round-border fa fa-user fa-2x" aria-hidden="true" v-else></span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-gray m-0">
          {{ account.class }} Tester
        </p>
        <h5>{{ account.name }}</h5>
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
</style>
