<template>
    <div class="inventory">

        <section class="filters">
            <h2>Filter by</h2>
            <select v-model="category">
                <option value="Male">Male Apparel</option>
                <option value="Female">Female Apparel</option>
                <option value="All">All Apparel</option>
            </select>
            <h2>Add New Item</h2>
            <form @submit.prevent="addItem">
                <label>Item Name</label>
                <input type="text" v-model="itemName" placeholder="eg: Can Soup" required>
                <label>Brand</label>
                <input type="text" v-model="itemBrand" placeholder="eg: Mabel" required>
                <label>Details</label>
                <input type="text" v-model="itemDetails" placeholder="eg: Created from fresh beans" required>
                <label>Item Price</label>
                <input type="text" v-model="itemPrice" placeholder="0">
                <label>Item Quantity</label>
                <input type="text" v-model="itemQuantity" placeholder="0">

                <button> Save</button>

            </form>
        </section>
        <section class="itemList">
            <h2>Inventory</h2>
            <div class="products">
                <ProductView v-for="item in Products" :key="item.Id" :productT="item" :inventory="true"/>               
                
            </div>
        </section>
    </div>
</template>

<script >

import { db } from '@/components/firebaseInit'
import { collection, getDocs, doc, setDoc } from '@firebase/firestore'
import ProductView from '@/components/ProductView.vue'

export default {
    components:{ProductView},
    data() {
        return {
            category: 'Male',
            itemName: '',
            itemBrand: '',
            itemDetails: '',
            itemPrice: '0',
            itemQuantity: '0',
            Products: [],
            productsCollectionKey: 'Products'
        }
    },

    methods: {
        getItems() {
this.Products=[]
            getDocs(collection(db, this.productsCollectionKey)).then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    this.Products.push(doc.data())
                })

            }).catch(e => console.log(e))
        },
        addItem() {
            let docRef = doc(collection(db, this.productsCollectionKey))
            setDoc(docRef , {
                Id: docRef.id,
                Name: this.itemName,
                Brand: this.itemBrand,
                Description: this.itemDetails,
                Price: parseFloat(this.itemPrice),
                Quantity: parseInt(this.itemQuantity),
                InStock: this.itemQuantity > 0
            }).then(() => {
                console.log(doc.Id + "Saved")
                this.getItems()
            }).catch(e => console.log(e))
        }

    },mounted() {
        this.getItems()
    },
}
</script>

<style>
.inventory {
    display: flex;
    padding: 10px;
    height: 86vh;
}

.filters {
    width: 25%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    border: 1px solid rgba(217, 217, 217, 0.67);
}

.itemList {
    width: 75%;
    overflow-y: scroll;
scroll-behavior: smooth;
scrollbar-width: 0;
}

form {
    max-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

}

form label {
    width: 100%;
    text-align: left;
    display: block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
    font-weight: 600;
    font-size: 1.2rem;
}

form input {
    width: 100%;
    height: 10%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px grey solid;
}
.products {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}
form button {
    margin-top: 20px;
    border-radius: 20px;
    width: 50%;
    height: 10%;
    background-color: rgb(0, 179, 255);
    border: none;
}
</style>