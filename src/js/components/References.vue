<template>
  <section class="block references-block">
    <div class="block__inner references-block__inner">
      <div class="references-slider">
      <transition-group name="slide" tag="div">
        <div v-for="(reference, index) in references" v-show="index == visibleReference" :key="index" class="reference">
          <div class="reference__name">{{ reference.name }}</div>
          <div class="reference__content">{{ reference.content }}</div>
        </div>
      </transition-group>
      </div>
      <button v-on:click="nextReference">Next</button>
    </div>
  </section>
</template>

<script>
export default {

  name: 'References',

  data () {
    return {
      references: '',
      loaded: false,
      visibleReference: 0,
    }
  },
  mounted () {
    this.$http
      .get('/rest/blocks/references.json')
      .then(response => (
        this.references = response.data,
        this.loaded = true
    ))
  },
  methods: {
    nextReference: function() {
      if( this.visibleReference < this.referenceCount - 1 ) {
        this.visibleReference++;
      } else {
        this.visibleReference = 0;
      }
    }
  },
  computed: {
    referenceCount: function() {
      return this.references.length;
    }
  }
}
</script>

<style lang="scss" scoped>
  
  .references-block {

    &__inner {

    }

    .references-slider {
      overflow: hidden;
      position: relative;
      height: 10rem;
    }

    .reference {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }


  .slide-enter-active, .slide-leave-active {
    transition: transform 1s ease-in-out, opacity .5s ease-in-out;

  }

  .slide-enter, .slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }

</style>