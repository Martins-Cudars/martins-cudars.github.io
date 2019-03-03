<template>
  <div class="card card-project">
    <div class="card__inner">
      <div class="card__front" :style="{ backgroundColor: project.background }">
        <h2 class="card__title" v-html="project.name"></h2>
        <img class="card__logo" v-lazy="project.logo" :alt="project.name">
      </div>
      <div class="card__back">
        <h2 class="card__title" v-html="project.name"></h2>
        <div class="card__description" v-html="project.description"></div>
        <div class="card__tech">
          <div class="card__tech__item" v-for="(tech, index) in project.technologies" v-html="tech" :key="index"></div>
        </div>
        <div class="card__buttons">
          <a class="btn btn-small btn-main card__btn" :href="project.url" target="_blank">LIVE SITE</a>
          <button class="btn btn-small btn-main card__btn" v-on:click="setActiveImage(project.screenshot)">Screenshot</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: 'Project',
  data () {
    return {
    }
  },
  props: {
    project: {
      type: Object,

    }
  },
  methods: {
    setActiveImage(newImage){
        this.$parent.setActiveImage(newImage);
    }
  },

}
</script>

<style lang="scss" scoped>
@import '../../scss/global/variables';
@import '../../scss/global/mixins';
  .card {
    perspective: 1000px;
    background-color: transparent;

    &__inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform .7s ease-in-out;
      transform-style: preserve-3d;
      box-shadow: 0px 0px 1px 1px transparentize($black, .5);
    }

    &__front,
    &__back {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }

    &__front {
      // background-color: $black;
      // background-color: lighten($main, 1%);
    }

    &__back {
      background-color: $white;
      transform: rotateY(180deg);
      padding-bottom: 1rem;
      color: $main;
    }

    &__title {
      background-color: $blue;
      color: $white;
      margin: 0;
      padding: 1rem;
    }

    &__logo {
      display: block;
      max-width: 80%;
      height: auto;
      margin: auto;
    }

    &__description {
      text-align: left;
      padding: 0rem 1rem;
      margin-bottom: auto;
    }

    &__tech {
      display: flex;
      flex-wrap: wrap;
      padding: .25rem 1rem;
      margin-bottom: 1rem;
    }

    &__tech__item {
      border: 1px solid $main;
      padding: .25rem;
      margin-top: .5rem;

      @include fs(small);

      &:not(:last-child) {
        margin-right: .5rem;
      }
    }

    &__buttons {
      display: flex;
      justify-content: center;
      align-items: center;

      .btn {
        & + .btn {
          margin-left: 1rem;
        }
      }
    }

    &:hover {
      .card__inner {
        transform: rotateY(180deg);
      }
    }
  }
</style>