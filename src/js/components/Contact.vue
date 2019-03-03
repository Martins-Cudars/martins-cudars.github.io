<template>
  <section class="block block-contact">
    <div class="block__inner block-contact__inner">
      <form action="https://formspree.io/martins.cudars@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="Message from Qudarsky portfolio" />
        Name<input type="text" name="name">
        Email<input type="email" name="_replyto">
        <input type="submit" value="Send" class="btn btn-main">
      </form>
    </div>
  </section>
</template>

<script>
export default {

  name: 'Contact',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>