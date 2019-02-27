<template>
  <footer class="block block-footer">
    <div class="block__inner">
      All Rights Reserved. 2019
    </div>
  </footer>
</template>

<script>
export default {

  name: 'SiteFooter',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/global/variables';
  .block-footer {
    background-color: darken($main, 12%);
    color: $white;
    text-align: center;
  }
</style>