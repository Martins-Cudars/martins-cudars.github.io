<template>
  <section class="block block-projects">
    <div class="block__inner block-projects__inner">
      <h1>Projects</h1>
      <p>Showcase of my work. If you are visiting the github page in early march, I have not added all content yet.</p>
      <div class="block-projects__content">
        <project v-for="(project, index) in projects" :project="project" :key="index">

        </project>
      </div>
    </div>
  </section>
</template>

<script>
import Project from './Project'
// import Overlay from './Overlay' // will add later

export default {

  name: 'Projects',
  components: {
    Project
  },
  data () {
    return {
      projects: '',
      loaded: false
    }
  },
  mounted () {
    this.$http
      .get('/rest/blocks/projects.json')
      .then(response => (
        this.projects = response.data,
        this.loaded = true
    ))
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/global/variables';
  .block-projects {
    background-color: darken($blue, 8%);
    color: $white;

    &__content {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax( 260px, 1fr));
      grid-auto-rows: 400px;
      grid-gap: 1rem;
      // padding: 1rem 0;
    }
  }
</style>