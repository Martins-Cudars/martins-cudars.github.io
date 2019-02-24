<template>
  <section class="block block-bio">
    <div class="block__inner bio__inner" v-html="content">
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

<style lang="css" scoped>
</style>