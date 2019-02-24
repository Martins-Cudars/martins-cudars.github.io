<template>
  <main>
    <hero></hero>
    <bio></bio>
    <skills></skills>
  </main>
</template>

<script>
import Hero from './Hero'
import Bio from './Bio'
import Skills from './Skills'


export default {

  name: 'FrontPage',
  components: {
    Hero,
    Bio,
    Skills
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="css" scoped>
</style>