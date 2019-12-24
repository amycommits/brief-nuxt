<template>
  <div>
    <h1>Event {{ id }}</h1>
  </div>
</template>
<script>
export default {
  name: "ShowEvent",
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  head() {
    return {
      title: `show event ${this.id}`
    }
  }
}
</script>
