<template>
     <div>
        <div class="container" >
            <b-card-group >
                <b-card header="DELIVERY & RETURN">
                    <b-list-group class="main">
                        <b-list-group-item  class="devinfo">
                         <div class="left"> <i class="fas fa-shipping-fast"></i> </div>
                         <div class="right"> <h7>Charalites Motors</h7>
                          <p class="goo">Express delivery in main cities. <span><a href="#"> Read Details </a> </span></p></div>
                        </b-list-group-item>
                         <b-list-group-item href="#" class="devinfo">
                         <div class="left"> <i class="far fa-paper-plane"></i> </div>
                         <div class="goo"> <h8>Delivery Info</h8>
                          <p class="para">Normally delivered weekend days because of Nigerian customs and immigration . Please check exact dates in the Checkout page.<span><a href="#">Read more</a></span></p></div>
                        </b-list-group-item>
                        <b-list-group-item href="#" class="devinfo">
                         <div class="left"> <i class="fas fa-history"></i> </div>
                         <div class="goo"> <h7>Return Policy</h7>
                          <p class="para">Free return within 3  month for Charalites Motors items and 7 days for other eligible items.<span><a href="#">Read more</a></span></p></div>
                        </b-list-group-item>
                        <b-list-group-item href="#" class="devinfo">
                         <div class="left"><img src="insurance.png" height="20px" ></div>
                         <div class="goo"> <h7>Insuarerance</h7>
                          <p class="para"> We Partner with strong insurerance company's and Nigerian Lottery commision</p></div>
                        </b-list-group-item>
                    </b-list-group>
                </b-card>     
            </b-card-group>
            <div class="nfor">   
             <b-card-group>
                <b-card header="SELLER INFORMATION">
                    <b-list-group id="and">
                        <b-list-group-item id="info" href="#">
                          <div class="scl"> <h7>Charalites Motors </h7>
                          <p class="scl">90% Positive Seller Score
                           <br> 70% Followers<br>
                           <a href="#">Follow us Now</a>
                           </p>
                           </div>
                        </b-list-group-item>
                    </b-list-group>
                </b-card>     
            </b-card-group> 
            </div>  
        </div>
    </div>
</template>
<style scoped>
.goo{
  width: 50%;
}
    .btn :hover{
        background-color: rgba(7, 136, 153, 0.932);
        color: whitesmoke;
    }
    .devinfo{
      display: flex;
      width: 20em;
      height: 8rem;
   
    }
    #and{
      height: 7em;
    }
    .right{
      margin-left: 20px;
      text-align: left;

    }
     .main{
        height: 10%;
    } 
    .left{
      font-size: 20px;
      width: 40px;
    }
    .para{
      font-size: 12px;
    }
    .scl{
      font-size: 12px;
      display: inline;
    }
    .nfor{
      margin-top: 0.1em;
      text-align: left;
     
    }
     #info{
       display: flex;
      width: 20em;
      height: 5rem;
    }
</style>