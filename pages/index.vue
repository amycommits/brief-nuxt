<template>
  <div>
    <h2>got on page</h2>
    <div>
      {{ displayList }}
    </div>
    <div>
      {{ displayIndex }}
    </div>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  computed: {
    ...mapGetters(['list', 'index']),
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
  }
}
</script>