<template>
  <div class="about">
     <Header/> 
    <b-container class="bv-example-row" fluid>
    <b-row>
     <b-col cols="9" class="main" >
  <main class="mt-5 pt-4" v-for = "product in products" :key="product.productId"  >
    <div class="container dark-grey-text mt-5" v-if="productId == product.productId">
      <div class="row wow fadeIn">
        <div class="col-md-6 mb-4">
       <img :src="product.imageLink" height="400" alt=""></div>
        <div class="col-md-6 mb-4">
          <div class="p-4">

            <div class="mb-3">
              <a href="">
                <h1>{{product.name}}</h1><br><br>
              </a>
              <a>
            <label for="rating-1"><i class="fas fa-3x fa-star"></i></label>
            <label for="rating-2"><i class="fas fa-3x fa-star"></i></label>
            <label for="rating-3"><i class="fas fa-3x fa-star"></i></label>
            <label for="rating-4"><i class="fas fa-3x fa-star"></i></label>
              </a><br><br>
            </div>
             <p class="lead">
              <span class="mr-1">
                <h1>&#8358; {{ product.price}}</h1>
                </span>
              </p>
            <form class="d-flex justify-content-left">
              <button id="boo" type="submit">Add to cart
                <i class="fas fa-shopping-cart ml-1"></i>
              </button>
            </form>
             </div>
         </div>
      </div>
       <hr>
      <div class="row wow fadeIn">
        <div class="col-lg-2col-md-12 mb-2">
     <img :src="product.imageLink1" height="90">
        </div>
        <div class="col-lg-2 col-md-6 mb-2">
         <img :src="product.imageLink2" height="90">
        </div>
        <div class="col-lg-0 col-md-0 mb-2">
         <img :src="product.imageLink3 " height="90">
        </div>
       </div>
       <div class="row d-flex justify-content-center wow fadeIn">
       <div class="col-md-0 text-left">
       <h4 class="my-4 h4">Product Details</h4>
       <p>{{product.Description}}</p>
        </div>
       </div>
    </div>
  </main>
  </b-col>
   <b-col cols="3"><Infor/></b-col>
  </b-row>
  </b-container>
  <div><Footer/></div>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Infor from '../components/Infor.vue'
 export default{
     name: 'product',
     components: {
          Header,
         Footer,
         Infor
      
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
  #boo{
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

