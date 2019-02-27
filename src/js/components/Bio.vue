<template>
  <section class="block block-bio">
    <div class="block__inner bio__inner">
      <div class="block-bio__content" v-html="content"></div>
    </div>
  </section>
</template>

<script>
export default {

  name: 'Bio',

  data () {
    return {
      content: '',
      loaded: false
    }
  },
  mounted () {
    this.$http
      .get('/rest/blocks/bio.json')
      .then(response => (
        this.content = response.data[0].bio,
        this.loaded = true
    ))
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/global/variables';
  .block-bio {
    &__content {
      max-width: 720px;
      width: 100%;
    }
  }
</style>