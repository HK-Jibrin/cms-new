<template>
<div class="pro">
  <div class="product">
           <img :src="products.imageLink" height="150" width="250">
       <p>{{products.name}}  </p>
    <p> &#8358; {{products.price}} </p>
    <b-button href="#" style="margin-top:10px" @click="gotoProductDetails(products.id)"> Buy Now </b-button>  
   </div>
  </div>
</template>
<script>
export default {
 name: 'Product',
 props: ['products'],
    methods:{
        gotoProductDetails(productId) {
    this.$router.push({name:'products', params: {id:productId}})
    }
}
}
</script>

<style>
.product{
   padding: 0;
    margin: 0;
    margin-left:8px;
    border: 2px solid black;
    text-align: center;
    padding-top: 20px;
    background-color: whitesmoke;
    border-radius: 20px;
     margin: 10px 0px 0px 0px; 
}
.pro{
  width: 300px; 
  display: inline-block; 
}
</style>