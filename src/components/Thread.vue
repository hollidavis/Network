<template>
  <div class="thread row">
    <Post v-for="p in posts.posts" :key="p.id" :post="p" />
  </div>
</template>

<script>
export default {
  name: 'Thread',
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
