# e-commerce-vue
This project is an e-commerce website built using Vue.js and Firebase.

## Components

```
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
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
