<template>
  <header>    
    <h1>E-Commerce TT</h1>
    <SearchBar />
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'inventory'}">Inventory</router-link> |
    <router-link :to="{name:'about'}">About</router-link>
  </nav>
  </header>
  <router-view/>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
export default{
components:{SearchBar}

}

</script>
<style>
body{
  margin:0; 
  padding:2px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
header{
  background-color: #00bbff;
  display:flex;
  align-items: center;
  justify-content: space-between;
  height:7vh;
  width:100%;
}

nav {
  padding: 30px;
  width:max-content;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
