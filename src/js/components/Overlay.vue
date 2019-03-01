<template>
  <transition name="fade">
  <div class="overlay" v-if="active">
    <img :src="image" class="overlay__image">
    <button class="btn btn-ghost overlay__button" v-on:click="closeOverlay">
      <svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
      </svg>
    </button>
  </div>
  </transition>
</template>

<script>
export default {

  name: 'Overlay',

  data () {
    return {
      active: false,
    }
  },
  props: {
    image: String,
    alt: {
      type: String,
      default: 'Image of project'
    }
  },
  methods: {
    closeOverlay: function() {
      console.log('close overlay');
      this.active = false;
      document.getElementsByTagName('body')[0].classList.remove('no-scroll');
    },
    openOverlay: function() {
      console.log('open overlay');
      this.active = true;
      document.getElementsByTagName('body')[0].classList.add('no-scroll');
    },
  },
  mounted: function() {
    window.addEventListener('keydown', (event) => {
      if(event.key === 'Esc' || event.key === 'Escape') {
        this.closeOverlay();
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/global/variables';

  .fade-enter-active, .fade-leave-active {
    transition: opacity .75s ease-in-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-color: transparentize($black, .25);
    z-index: 1000;

    &__image {
      margin: 0 auto;
    }

    &__button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 2rem;
    }
  }

  body.no-scroll {
    .overlay {
       overflow-y: scroll;
    }
  }

</style>