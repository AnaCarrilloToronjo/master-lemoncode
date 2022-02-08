<template>
  <div>
    <MemberList/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MemberList from "../components/MemberList.vue"
export default defineComponent({
  name: 'MemberList',
  components: {
    MemberList
  },
})
</script>