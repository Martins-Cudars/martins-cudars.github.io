<template>
  <section class="block block-hero" :style="style">
    <transition name="slide-left">
    <div class="block__inner block-hero__inner" v-if="loaded">
      <img :src="hero.logo" :alt="hero.title" class="block-hero__logo">
      <h1 v-html="hero.title" class="block-hero__title"></h1>
      <p v-html="hero.subtitle" class="block-hero__subtitle"></p>  
    </div>
    </transition>
  </section>
</template>

<script>
// import axios from 'axios';

export default {

  name: 'Hero',

  data () {
    return {
      hero: '',
      style: {
        backgroundImage: '',
        backgroundColor: ''
      },
      loaded: false
    }
  },
  methods: {
    getStyle: function() {
      this.style.backgroundColor = this.hero.backgroundColor
      // this.style.backgroundImage = 'url("' + this.hero.image + '")'
    }
  },
  mounted () {
    this.$http
      .get('/rest/blocks/hero.json')
      .then(response => (
        this.hero = response.data,
        this.getStyle(),
        this.loaded = true
      ))
  },
}
</script>

<style lang="scss" scoped>
  @import '../../scss/global/variables';
  @import '../../scss/global/mixins';
  
  .block-hero {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 100vh;
    // z-index: 100;
    color: #fff;
    overflow: hidden;

    &__inner {
      display: flex;
      flex: 1;
      flex-direction: column;
      height: 100%;
      z-index: 150;
      text-align: center;
      position: relative;
      // background: green;



    }

    &:before,
    &:after {
      display: block;
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
    }
    &:before {
      background-image: url('../../../img/blocks/hero/hero-bg-720.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      filter: blur(0.1rem);
      
      @include media(md) {
         background-image: url('../../../img/blocks/hero/hero-bg-1920.jpg');
      }
    }
    &:after {
      background-color: transparentize(#000, 0.55);
      // z-index: -1;
    }

    &__logo {
        max-width: 280px;
        margin: 0 auto;
    }

    &__title {
      @include fs(massive);
      text-transform: uppercase;
      margin-bottom: 0;
    }

    &__subtitle {
      @include fs(large);
      text-transform: uppercase;
      margin: 0;
      letter-spacing: .1em;
    }
  }

  .slide-left-enter-active, .slide-left-leave-active {
    transition: transform 1.5s ease-in-out;
  }

  .slide-left-enter, .slide-left-leave-to {
    transform: translateX(100%);
  }
</style>