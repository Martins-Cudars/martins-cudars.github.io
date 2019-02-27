<template>
  <main>
    <hero></hero>
    <bio></bio>
    <skills></skills>
    <!-- <references></references> -->
    <projects></projects>
  </main>
</template>

<script>
import Hero from './Hero'
import Bio from './Bio'
import Skills from './Skills'
// import References from './References'
import Projects from './Projects'


export default {

  name: 'FrontPage',
  components: {
    Hero,
    Bio,
    Skills,
    // References,
    Projects,
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="css" scoped>
</style>