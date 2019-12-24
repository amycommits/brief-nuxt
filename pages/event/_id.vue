<template>
  <div>
    <h1>Event {{ event.id }}</h1>
    <pre>{{ event }}</pre>
  </div>
</template>
<script>
export default {
  name: "ShowEvent",
  async asyncData({ $axios, error, params }) {
    try {
      const { data } = await $axios.get(
        `http://localhost:3000/events/${params.id}`
      )
      return {
        event: data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch events events at this time"
      })
    }
  },
  head() {
    return {
      title: `show event ${this.id}`
    }
  }
}
</script>
