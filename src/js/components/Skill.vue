<template>
  <div class="skill">
    <div class="skill__bar">
     <div class="skill__bar__inner" :style="{width: skill.value + '%'}">{{ skill.name }}</div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Skill',
  props: {
    skill: {
      type: Object
    }
  },
  data () {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/global/variables';
  .skill {
    margin: .5rem 0;

    &__bar {
      border: 1px solid darken($main, 8%);
    }

    &__bar__inner {
      background-color: $main;
      transition: width .5s ease-in-out;
      color: $white;
      padding: .125rem 1rem;
    }
  }
</style>