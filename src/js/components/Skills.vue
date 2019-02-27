<template>
  <section class="block block-skills">
    <div class="block__inner block-skills__inner">
      <h1>Skillset</h1>
      <p>This is very subjective, but it shows my strong and weak sides.</p>
      <div class="block-skills__content">
        <div class="skill-group" v-for="skillGroup in skills">
          <h2 v-html="skillGroup.name"></h2> 
          <skill v-for="(skill, index) in skillGroup.skills" :skill="skill" :key="skill.index"></skill>
        </div>
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
@import '../../scss/global/variables';
.block-skills {
  background-color: darken($main, 4%);
  color: $white;

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax( 300px, 1fr));
    grid-gap: 1rem;
  }
}

</style>