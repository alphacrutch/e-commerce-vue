<template lang="">
    <div class="product">
        <div class="itemImg">
            <img :src="productT.Image" :alt="productT.Image" >
        </div>
        <div class="mainInfo">
            <h3>Name:{{ productT.Name }}</h3>
        <p> Brand:{{ productT.Brand }}</p>        
        <p>Description: {{ productT.Description }}</p>
        </div>
     <div class="priceInfo">
        <p>Price: ${{ productT.Price }}</p>
        <p>Stock: {{ productT.Quantity }}</p>
        <p>Instock:{{ productT.InStock? 'yes':'no' }}</p>
     </div>       
        <button v-if="!inventory">Add To Cart </button>
    </div>
</template>
<script >
export default {
    props: ['productT', 'inventory'],
   
}
</script>
<style >
.product {
   margin-top: 20px;
    padding: 10px 5px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    max-height: 200px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.534);
    cursor: pointer;
    color:rgb(76, 76, 76);
}

.itemImg {
    width:15%;    
}
.itemImg Img{
    width:100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
}
.product:hover {
    transform: scale(1.1, 1.1);
    background-color: rgba(190, 190, 190, 0.665);
}

.product .mainInfo{
    width:40%;
}
.product .priceInfo{
    width:20%;
}
.product div {
    display: flex;
    flex-flow: column nowrap;
}

.product button {
    width: 10%;
    height: 15%;
}</style>