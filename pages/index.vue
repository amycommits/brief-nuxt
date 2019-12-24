<template>
  <div>
    <h1>Events</h1>
    <div v-for="(event, i) in events" :key="i">
      {{ event }}
    </div>
  </div>
</template>
<script>

export default {
  name: "Index",
  components () {
    EventService
  },
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get("http://localhost:3000/events")
      return {
        events: data
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
      title: "example app"
    }
  }
}
</script>
