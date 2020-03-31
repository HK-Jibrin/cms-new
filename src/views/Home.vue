
<template>
<div class="home">
    <Header/>
<b-container class="bv-example-row" fluid>
  <b-row>
    <b-col cols = "3" class="caty"><category v-for="cat in categories" :key="cat.id" :category="cat"/></b-col>
    <b-col cols ="9 "><div id="cal"><Carousel /></div></b-col>
    </b-row>
</b-container>
      <div class="upd "><Product v-for="item in products" :key="item.id" :products="item" /></div>
      <div>
        <Footer/>
      </div>
</div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Category from '@/components/Category.vue'
import Product from '@/components/Product.vue'
import Carousel from '../components/Carousel.vue'
import Footer from '@/components/Footer.vue'
import {mapState} from "vuex"
export default {
  name: 'Home',
   computed:{
       ...mapState([
           'products'
       ])
   },
  components: {
   Header,
   Category,
   Product,
   Carousel,
   Footer
   },
  data(){
      return{

        categories: [
          {
            id : 1,
        name: 'G-wagon',
        
          
        },
        {
            id : 2,
        name: "Made in Nigeria Cars  ",
        
        },
        {
            id : 3,
        name: 'Sports Cars made in Nigeria',
        
          
        },
    {
            id : 4,
        name: 'Power Bike',
        
          
        },
        {
            id : 5,
        name: "SUV",
        
           },
            {
            id : 6,
        name: "Range Rover",
            }
        ],

    }
  }

  }
</script>

<style>

.upd{
 margin-left: 90px;
 }
.container{
 margin-top: 10px;
 margin-left: 5px;
}
#caty{
 margin-left:50px;
}
.row{
  margin-left: 5px;
}
</style>
