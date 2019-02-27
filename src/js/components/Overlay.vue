<template>
  <div class="overlay">
    <img :src="image"></div>
  </div>
</template>

<script>
export default {

  name: 'Overlay',

  data () {
    return {

    }
  },
  props: {
    image: String,
    alt: {
      type: String,
      default: 'Image of project'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>