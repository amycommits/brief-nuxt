<template>
  <div>
    <h2>got on page</h2>
    <div>
      {{ list }}
    </div>
    <div>
      {{ index }}
    </div>
    <div>
      {{ animals }}
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  computed: {
    ...mapGetters(['list', 'index', 'animals']),
    displayList() {
      return this.list
    },
    displayIndex() {
      return this.index
    }
  },
  mounted() {
    this.$store.dispatch('getList')
    this.$store.dispatch('getIndex')
    this.$store.dispatch('getAnimals')
  }
}
</script>