<template lang="">
    <div class="product">
        <img :src="productT.Image" alt="" srcset="item.Image">
        <h3>Name:{{ productT.Name }}</h3>
        <p> Brand:{{ productT.Brand }}</p>
        <p>Price: ${{ productT.Price }}</p>
        <p>Stock: {{ productT.Quantity }}</p>
        <p>Description: {{ productT.Description }}</p>
        <p>Instock:{{ productT.InStock }}</p>
        <button v-if="!inventory">Add To Cart </button>
    </div>
</template>
<script >
export default {
    props:['productT','inventory'],
    data(){

    }
}
</script>
<style >
    .product {
  padding: 10px 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: 25%;
  max-height: 600px;
  border-radius: 5%;
  background-color: rgb(225, 225, 225);
}

.product button {
  width: 50%;
  height: 15%;
}
</style>