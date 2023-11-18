<template>
  <header>
    <img src="./assets/shop.png" alt="Logo" >
    <h1>E-Commerce TT</h1>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'inventory'}">Inventory</router-link> |
    <router-link :to="{name:'about'}">About</router-link>
  </nav>
  </header>
  <router-view/>
</template>

<style>
body{
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header{
  background-color: #8a8a8a;
  display:flex;
  align-items: center;
  justify-content: space-between;
  height:7vh;
}

header img {
  height:100%;
  width: 100px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
