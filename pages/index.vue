<template>
  <div>
    <h2>got on page</h2>
    <div class="list">
      {{ list }}
    </div>
    <div class="index">
      {{ index }}
    </div>
    <div class="animals">
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
<style>
  .index {
    border: 1px solid red;
  }
</style>