<template>
  <div class="row">
    <div class="card w-100 bg-light">
      <img class="card-img-top banner" :src="activeProfile.coverImg" alt="cover image">
      <div class="card-body d-flex">
        <div>
          <img class="round-border md-profile" :src="activeProfile.picture" alt="">
        </div>
        <div class="ml-3 w-100">
          <p class="lead m-0" v-if="activeProfile.class">
            {{ activeProfile.class }}
          </p>
          <h4 class="card-title">
            {{ activeProfile.name }}
            <span class="ml-2 fa fa-user-graduate" aria-hidden="true" v-if="activeProfile.graduated == true"></span>
            <span class="ml-2 fa fa-user" aria-hidden="true" v-else></span>
          </h4>
          <!-- social links -->
          <div class="d-flex">
            <p v-if="activeProfile.github" class="lead cursor" :href="activeProfile.github">
              <span class="mr-4 fab fa-lg fa-github"></span>
            </p>
            <p v-if="activeProfile.linkedin" class="lead cursor" :href="activeProfile.linkedin">
              <span class="mr-4 fab fa-lg fa-linkedin"></span>
            </p>
            <p v-if="activeProfile.resume" class="lead cursor" :href="activeProfile.resume">
              <span class="mr-4 fa fa-lg fa-file-alt"></span>
            </p>
          </div>
          <p class="card-text" v-if="!activeProfile.bio">
            <em>No bio yet...</em>
          </p>
          <p class="card-text" v-else>
            <em>{{ activeProfile.bio }}</em>
          </p>
          <div class="w-100 d-flex justify-content-end">
            <button type="button" class="btn btn-primary" v-if="activeProfile.id === account.id" data-toggle="modal" data-target="#editProfileModal">
              <span class="fa fa-edit"></span> Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade"
       id="editProfileModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Edit Profile
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="form-group">
              <label for=""></label>
              <input type="text"
                     name=""
                     v-model="state.newAccount.imgUrl"
                     class="
                     form-control"
                     placeholder=""
                     aria-describedby="helpId"
              >
              <small id="helpId" class="text-muted">Help text</small>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      newAccount: {}
    })
    return {
      state,
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
}
</script>

<style lang="scss" scoped>
.banner{
  height: 20vh;
  object-fit: cover;
  object-position: center;
}
</style>
