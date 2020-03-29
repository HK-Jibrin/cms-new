import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex);

export default new Vuex.Store({
     state: {

       products: [
                  {
                    id: 1,
                    imageLink : require("@/assets/Gwogon.jpg"),
                    name: 'G-wagon',
                    Description: 'The new G-Class G 500 offers  fuel consumption around 12 liters per 100km.The interior is luxurious with all the modern twenty-first century appointments one could ask for, with long time insurance',
                    price: '200 million',
                    imageLink1:    require("@/assets/Gwogon.jpg"),
                    imageLink2:  require("@/assets/Gwogon.jpg"),
                    imageLink3:  require("@/assets/Gwogon.jpg"),
                    
                    },
                     {
                     id: 2,
                     imageLink: require("@/assets/made1.jpg") ,
                     Description: 'Seat Number – 5 to 7; Wheel Base – 3025; Engine Model – JM491Q – ME; Fuel – Gasoline; Max Power (km/rpm) – 76/4200 ῀ 4600; Max Torque (NU/rpm); Tank (70 liters) ',
                    name: 'made in nigeria',
                    price: '3.7 million.',
                    imageLink1: require("@/assets/made1.jpg"),
                    imageLink2: require("@/assets/made1.jpg"),
                    imageLink3:  require("@/assets/made1.jpg"),
                     },
                    {
                    id: 3,
                    imageLink: require("@/assets/made2.jpg") ,
                    Description: 'This car it has air condition without comsuming fuel',
                    name: 'Sport car made in Nigeria',
                    price: '3.6 million',
                    imageLink1: require("@/assets/made2.jpg"),
                    imageLink2: require("@/assets/made2.jpg"),
                    imageLink3:require("@/assets/made2.jpg"),
                     },
                    {
                    id: 4,
                    imageLink: require("@/assets/Suv.jpg") ,
                    Description: 'It has fuel economizer with speed limit of 7000k/h',
                    name: 'SUV',
                    price: '20 million',
                    imageLink1: require("@/assets/Suv.jpg"),
                    imageLink2:  require("@/assets/Suv.jpg"),
                    imageLink3: require("@/assets/Suv.jpg"),
                    },
                    {
                   id: 6,
                   imageLink: require("@/assets/made4_640.jpg"),
                    Description: 'It has secondhand value even at old',
                    name: 'Toyota Mirai',
                    price: '120 million',
                    imageLink1: require("@/assets/made4_640.jpg"),
                    imageLink2: require("@/assets/made4_640.jpg"),
                    imageLink3:    require("@/assets/made4_640.jpg"),
                    },
                    {
                    id: 7,
                    imageLink: require("@/assets/range.jpg"),
                    Description: 'with strong shock absorber and feel no pot holes',
                    name: 'Range Rover',
                    price: '150 million',
                    imageLink1:   require("@/assets/range.jpg"),
                    imageLink2:   require("@/assets/range.jpg"),
                    imageLink3: require("@/assets/range.jpg"),
                    },
                    {
                   id: 8,
                    imageLink: require("@/assets/powerbike.jpg"),
                    Description: 'It has no limits unlike cars',
                    name: 'Power Bike',
                    price: '15 million',
                    imageLink1:  require("@/assets/powerbike.jpg"),
                    imageLink2:  require("@/assets/powerbike.jpg"),
                    imageLink3: require("@/assets/powerbike.jpg"),
                    },
                    {
                  id: 9,
                    imageLink: require("@/assets/flying.jpg"),
                    Description: 'It has zooming device of 10km away',
                    name: 'Flying Spur',
                    price: '350 million',
                    imageLink1: require("@/assets/flying.jpg"),
                    imageLink2:  require("@/assets/flying.jpg"),
                    imageLink3: require("@/assets/flying.jpg"),  
                    },
                     {
                    id: 10,
                    imageLink: require("@/assets/benz.jpg"),
                    Description: 'High speed with comfortable wheels',
                    name: 'Mercedees benz c300',
                    price: '75.7 million',
                    imageLink1: require("@/assets/benz.jpg"),
                    imageLink2: require("@/assets/benz.jpg"),
                    imageLink3: require("@/assets/benz.jpg"),
                    },
                    {
                     id: 11,
                    imageLink: require("@/assets/suzukibrezza.jpg"),
                    Description: 'Powerfull engine with less consuming fuel',
                    name: 'Suzuki Brezza',
                    price: '25.9 million',
                    imageLink1:  require("@/assets/suzukibrezza.jpg"),
                    imageLink2:    require("@/assets/suzukibrezza.jpg"),
                    imageLink3:    require("@/assets/suzukibrezza.jpg"),
                    }, 

        ]
        },
        mutations: {
     },
     actions: {
     },
     modules: {
     }
})

