<template>
  <div class="about">
     <Header/> 
  <!--Main layout-->
    <b-container class="bv-example-row" fluid>
    <b-row>
     <b-col cols="9" class="main" >
  <main class="mt-5 pt-4" v-for = "product in products" :key="product.productId"  >
    <div class="container dark-grey-text mt-5" v-if="productId == product.productId">>

      <!--Grid row-->
      <div class="row wow fadeIn">

        <!--Grid column-->
        <div class="col-md-6 mb-4">

          <img :src="product.imageLink" height="400" alt=""> </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-6 mb-4">

          <!--Content-->
          <div class="p-4">

            <div class="mb-3">
              <a href="">
                <span class="badge purple mr-1">{{product.name}}</span>
              </a>
              <a href="">
            <label for="rating-1"><i class="fas fa-3x fa-star"></i></label>
            <label for="rating-2"><i class="fas fa-3x fa-star"></i></label>
            <label for="rating-3"><i class="fas fa-3x fa-star"></i></label>
            <label for="rating-4"><i class="fas fa-3x fa-star"></i></label>
              </a>
              <a href="">
                <span class="badge red mr-1">Bestseller</span>
              </a>
            </div>

            <p class="lead">
              <span class="mr-1">
                <h4>{{ product.price}}</h4>
                </span>
              </p>

            <form class="d-flex justify-content-left">
              <!-- Default input -->
              <input type="number" value="1" aria-label="Search" class="form-control" style="width: 100px">
              <button class="btn btn-primary btn-md my-0 p" type="submit">Add to cart
                <i class="fas fa-shopping-cart ml-1"></i>
              </button>

            </form>

          </div>
          <!--Content-->

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

      <hr>

      <!--Grid row-->
      <div class="row d-flex justify-content-center wow fadeIn">

        <!--Grid column-->
        <div class="col-md-6 text-center">

          <h4 class="my-4 h4">Product Details</h4>

          <p>{{product.Description}}</p>

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

      <!--Grid row-->
      <div class="row wow fadeIn">

        <!--Grid column-->
        <div class="col-lg-4 col-md-12 mb-4">
     <img :src="product.imageLink1" height="70">
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4">
<img :src="product.imageLink2" height="70">
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4">

         <img :src="product.imageLink3 " height="70">
        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

    </div>
  </main>
  </b-col>
  <!--Main layout-->
   <b-col cols="3"><Delivery /></b-col>
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

