<template>
  <div class="searchBar">
    <div class="searchInput">
      <input type="text" v-model="searchInput" placeholder="Search Products by Name or Brand" />
    </div>
    <div class="searchImg">
      <img src="../assets/search.png" :alt="searchPng" @click="searchItem" />
    </div>
  </div>
</template>

<script >
export default {
  name: "SearchBar",
  data() {
    return {
      searchInput: '',
      items: [],
      searchPng: "../assets/search.png"
    };
  },
  methods:
  {
    seacrhItem(item) {

    },
    addItem(item) {

    }
  }
};
</script>

<style>
.searchBar {
  display: flex;
  padding:20px;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 100%;
}

.searchInput{
  width:90%;
  height:70%;
}
.searchImg{
  width: 10%;
  height:70%;
}
.searchInput input {
  background-color: #eeeeee;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgb(63, 63, 63);
  color: #464646;
  height: 100%;
  width: 100%;
  text-align: center;
  font-style: italic;
  font-size: 18px;
}

.searchImg img {
  width: 100%;
  border-style: none;
  border-radius: 5%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>