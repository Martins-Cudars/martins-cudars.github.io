<template>
  <div class="skill">
    {{ skill.name }} {{ skill.value}}
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
  }
}
</script>

<style lang="css" scoped>
</style>