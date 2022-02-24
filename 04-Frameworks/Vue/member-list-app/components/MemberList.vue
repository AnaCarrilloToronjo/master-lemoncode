<template>
  <div>
    <h1>Members List</h1>
    <hr/>
    <div class="search">
      <label>Organization </label>
      <input type="text" v-model="organization"/>
      <button class="button" type="button" @click="changeOrganization">
        Search
      </button>
    </div>
    <div class="member-container">
      <div class="member-table">
        <table >
          <tr>
            <th>Avatar</th>
            <th>Login</th>
            <th>Id</th>
            <th>Info</th>
          </tr>
          <tbody v-for="member in list" v-bind:key="member.id">
            <tr> 
              <td>
                <img class="member-img" v-bind:src="member.avatar_url" />
              </td>
              <td>{{ member.login }}</td>
              <td>{{ member.id }}</td>
              <td>
                <NuxtLink :to="`/details/${member.login}`">
                  <span class="material-icons">visibility</span>
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          <button @click="FirstPage">&laquo;</button>
          <button @click="DecrementPage">&lsaquo;</button>
          <button @click="IncrementPage">&rsaquo;</button>
          <button @click="LastPage">&raquo;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent, Ref, ref, watch, reactive} from "vue";
import { membersList } from "@/services/member";
import { Member } from "@/types";
import store from "../store/index";

let lastPage:number;

export default defineComponent({
  methods: {
    async changeOrganization() {

      store.commit('setOrganization', this.organization)
      const member_link = await membersList.get();
      this.list = member_link.members;

      const link = member_link.link;

      if(link)
      {
        const processingHeader = (link) => {
          return link.split(',')[1].toString().split(';')[0].toString().split("?")[1].toString().replace(">"," ");
        }
        const urlParams = new URLSearchParams(processingHeader(link));
        const page = urlParams.get('page');
        lastPage = parseInt(page);
      }
    },
  },

  async setup() {
    const organization = store.state.organization;

    const list: Ref<Member[]> = ref([]); 
    list.value = (await membersList.get(store.state.page)).members;

    function IncrementPage() {
      if(store.state.page !== lastPage)
      store.commit('incrementPage');
    }
    function DecrementPage() {
      store.commit('decrementPage');
    }
    function FirstPage() {
       store.commit('resetPage');
    }
    function LastPage() {
      store.commit('lastPage', lastPage);
    }

    // LIFECYCLE HOOKS
    watch(() =>store.state.page, async () => {
      if(lastPage){list.value =  (await membersList.get(store.state.page)).members;}});

    return {
      organization,
      list,
      IncrementPage,
      DecrementPage,
      FirstPage,
      LastPage
    };
  },
});
</script>

<style lang="scss" scoped>

.search{
  padding:10px;
  margin-left: 20px;
  input{
    padding:5px;
    margin-right: 1px;
  }
  button{
    padding: 5px;
    width: 80px;
  }
}
.member-container{
display:flex;
margin-left: 20px
}
.member-table{
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-top: 20px;

 th{
   border-bottom: 1px solid black;
   width: 120px;
   height: 30px;
   background-color: lightgray;
 }
 tr{
   text-align: center;
 }
}
.member-img {
  width: 120px;
  height: 120px;
}
.material-icons{
  color:black;
}
.pagination{
  display: flex;

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: white;
    border:none;
    cursor: pointer;
    &:hover{
        background-color: lightgrey;
    }
  }
}
</style>
