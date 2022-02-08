<template>
  <h1>Info</h1>
    <hr/>
  <div class="grid" v-if="member">
    <img class="member-img" v-bind:src="member.avatar_url" />
    <div class="details">
      <div>Organization: {{organization}}</div>
      <div>Login: {{ member.login }}</div>
      <div>Id: {{ member.id }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Member } from "@/types";
import { membersList } from "@/services/member";
import store from "../store/index";

export default defineComponent({
  computed: {
    login(): string {
      return String(this.$route.params.login);
    },
  },
  data: () => ({
    member: {} as Member,
    organization: store.state.organization,
  }),
  created() {
    membersList.getMember(this.login).then((member) => {
      if (member) {
        this.member = member;
      }
    });
  },
});
</script>

<style lang="scss" scoped>
.grid{
  display: flex;
  margin-left: 20px;
  .details{
    margin: 15px;;

  }
}
.member-img {
  width: 300px;
  height: 300px;
}
</style>
