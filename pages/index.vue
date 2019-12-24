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
  asyncData({ $axios, error }) {
    return $axios
      .get("http://localhost:3000/events")
      .then(response => {
        return {
          events: response.data
        }
      })
      .catch(e => {
        error({
          statusCode: 503,
          message: `unable to fetch events from api ${e}`
        })
      })
  },
  head() {
    return {
      title: "example app"
    }
  }
}
</script>
