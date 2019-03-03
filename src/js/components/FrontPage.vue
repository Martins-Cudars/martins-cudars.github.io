<template>
  <main>
    <hero></hero>
    <bio></bio>
    <skills></skills>
    <!-- <references></references> -->
    <projects></projects>
    <!-- <contact></contact> -->
  </main>
</template>

<script>
import Hero from './Hero'
import Bio from './Bio'
import Skills from './Skills'
// import References from './References'
import Projects from './Projects'
// import Contact from './Contact' 
/* Not sure if I like formspree 
 because it distrupts the UX and I dont want to pay 10 EUR / Month to have Ajax */  

export default {

  name: 'FrontPage',
  components: {
    Hero,
    Bio,
    Skills,
    // References,
    Projects,
    // Contact,
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="css" scoped>
</style>