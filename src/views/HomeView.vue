<template>
  <div class="home">    
    <div class="products">
      <ProductView v-for="product in Products" :key="product.Id" :productT="product"  :inventory="false"/>
    </div>
  </div>
</template>

<script >
import ProductView from '@/components/ProductView.vue'
import { db } from '@/components/firebaseInit'
import { collection, getDocs } from '@firebase/firestore'

export default {
  name: 'HomeView',
  components: {
    ProductView
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
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}


</style>