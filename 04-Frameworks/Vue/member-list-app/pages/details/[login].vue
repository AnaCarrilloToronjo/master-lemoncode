<template>
  <div>
    <Details />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Details from "@/components/Details.vue"
export default defineComponent({
  name: 'Details',
  components: {
    Details
  },
})
</script>