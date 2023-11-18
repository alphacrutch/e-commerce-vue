<template>
  <div class="searchBar">
    <input type="text" v-model="searchInput" placeholder="Search Products by Name or Brand"/>
    <button @click="searchItem"> Search </button>
  </div>
  <p>{{ searchInput }}</p>
</template>

<script >
export default {
  name: "SearchBar",
  data() {
    return {
      searchInput: '',
      items: []
    };
  },
  methods:
  {
    seacrhItem(item) {

    },
    addItem(item){

    }
  }
};
</script>

<style>
.searchBar {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: #8a8a8a;
  width: 100%;
  height: 3vh;
}

input {
  background-color: #eeeeee;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgb(63, 63, 63);
  color: #8a8a8a;
  margin-right: 10px;
  height: 80%;
  width: 50%;
  text-align: center;
  font-style: italic;
  font-size: 18px;
}

button {
  width: 10%;
  border-style: none;
  border-radius: 5%;
  height: 80%;
  background-color: aquamarine;
}
</style>