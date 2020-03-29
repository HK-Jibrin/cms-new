
<template>
<div>
   <Header/>
   <div v-for = "product in products" :key="product.productId" >
     <div v-if="productId == product.productId">
       <div class="card flex-row flex-wrap">
        <div class="card-header border-0">
        <img :src="product.imageLink" height="400" alt="">
        <div id="small">
          <img :src="product.imageLink1" height="70"> &nbsp;
         <img :src="product.imageLink2" height="70"> &nbsp;
        <img :src="product.imageLink3" height="70">
        </div>
        </div>
        <div id="space" class="card-block px-2">
            <h4 class="card-title">{{product.name}}</h4>
            <label for="rating-1"><i class="fas fa-3x fa-star"></i></label>
            <label for="rating-2"><i class="fas fa-3x fa-star"></i></label>
            <label for="rating-3"><i class="fas fa-3x fa-star"></i></label>
            <label for="rating-4"><i class="fas fa-3x fa-star"></i></label>
            <h4>{{ product.price}}</h4>
           <a class="boo" text-variant="black">ADD TO CART <i class="fas fa-shopping-cart"></i></a>
        </div>
        <div class="w-100"></div>
        <div class="card-footer">
          <h1>Product Details</h1>
           <p class="card-text">{{product.Description}}</p>
        </div>
    </div>
     </div>
   </div>
   <Footer/>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer'
 export default{
     name: 'product',
     components: {
          Header,
         Footer
      
      },

  data(){
   return{
     products: [],
   }
  },
      created() {
    this.products = this.$store.state.products.filter((products) => {
   return products.id === parseInt(this.$route.params.id);
    });
      }
      }
</script>
<style scoped>
.pro{
     display: inline-block;
    margin: 5px;
}
#second{
   display: inline;
  }
  .boo{
     background-color: #f68b1e;
    width: 200%;
    height: 42px;
    margin: 0 auto;
    display: block;

  }
  #small{
    margin-top: 20px;
  }
  #space{
    padding: 20px;
  }
</style>

