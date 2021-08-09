<template>
  <div class="post col-12 bg-light rounded shadow my-3 pt-3">
    <div class="row justify-content-end">
      <div class="col-1" await v-if="post.creator.id == account.id">
        <button type="button" class="btn btn-sm btn-outline-danger" @click="deletePost">
          <span class="fa fa-times"></span>
        </button>
      </div>
    </div>
    <!-- Creator Info -->
    <div class="row">
      <!-- Profile Picture -->
      <div class="ml-3 cursor" @click.stop="getProfileById">
        <img class="round-border sm-profile" :src="post.creator.picture" :alt="post.creator.name">
      </div>
      <!-- Name, Created At, Graduated -->
      <div class="col-9 d-flex justify-content-center flex-column">
        <p class="m-0">
          <b>{{ post.creator.name }}</b>
        </p>
        <div class="d-flex align-items-center">
          <p class="m-0">
            {{ post.createdAt }}
          </p>
          <span class="ml-2 fa fa-user-graduate" aria-hidden="true" v-if="post.creator.graduated == true"></span>
          <span class="ml-2 fa fa-user" aria-hidden="true" v-else></span>
        </div>
      </div>
    </div>
    <!-- Body/Img -->
    <div class="row m-2">
      <div class="col-12">
        <p>{{ post.body }}</p>
        <div v-if="post.imgUrl">
          <img :src="post.imgUrl" class="post-img">
        </div>
      </div>
    </div>
    <!-- Likes -->
    <div class="row justify-content-end mb-3">
      <div class="col-1 d-flex flex-row justify-content-around align-items-center">
        <i class="fa fa-heart"></i>
        <p class="m-0">
          0
          <!-- TODO Add function to count likes & display results here -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Notifier'
import { profilesService } from '../services/ProfilesService'
import { router } from '../router'
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async deletePost() {
        try {
          if (await Pop.confirm()) {
            await postsService.destroyPost(props.post.id)
            Pop.toast('Deleted!', 'success')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async getProfileById() {
        try {
          await profilesService.getProfileById(props.post.creatorId)
          router.push({ path: `/profile/${props.post.creatorId}` })
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post-img{
  width: 100%;
  max-height: 60vh;
  object-fit: cover;
  object-position: center;
}
</style>
