<template>
  <section class="block block-skills">
    <div class="block__inner block-skills__inner">
      <div class="skill-group" v-for="skillGroup in skills">
        <h2 v-html="skillGroup.name"></h2> 
        <skill v-for="(skill, index) in skillGroup.skills" :skill="skill" :key="skill.index"></skill>
      </div>
    </div>
  </section>
</template>

<script>
import Skill from './Skill'

export default {

  name: 'Skills',
  components: {
    Skill
  },
  data () {
    return {
      skills: '',
      loaded: false
    }
  },
  mounted () {
    this.$http
      .get('/rest/blocks/skills.json')
      .then(response => (
        this.skills = response.data,
        this.loaded = true
    ))
  },
}
</script>

<style lang="scss" scoped>
.block-skills {
  &__inner {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax( 300px, 1fr));
  }
}

</style>