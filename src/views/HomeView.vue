<template>
  <div class="home">
    <SearchBar />
    <div class="products">
      <ProductView v-for="product in Products" :productT="product" :inventory="false"/>
    </div>
  </div>
</template>

<script >

import SearchBar from '../components/SearchBar.vue'
import ProductView from '@/components/ProductView.vue'
import { db } from '@/components/firebaseInit'
import { collection, getDocs } from '@firebase/firestore'

export default {
  name: 'HomeView',
  components: {
    SearchBar,ProductView
  },
  mounted() {
    this.getFeatured()
  },
  data() {
    return {
      Products: [],
      productsCollectionKey: 'Products'
    }
  },
  methods: {
    getFeatured() {
      getDocs(collection(db, this.productsCollectionKey)).then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.Products.push(doc.data())
        })

      }).catch(e => console.log(e))
    }
  },
}
</script>

<style>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 20px;
  grid-template-rows: repeat(auto-fill, minmax(600, 1fr));

}


</style>