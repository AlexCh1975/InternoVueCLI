<template>
    <div>
        <div class="center">
            <section class="top">
                <img :src="topPhoto" alt="pic" class="top__img">
                <div class="top__content">
                    <h1 class="top__heading">
                        Let Your Home <br>
                        Be Unique
                    </h1>
                    <p class="top__text">
                        There are many variations of the passages of
                        lorem Ipsum fromavailable, majority.
                    </p>
                    <button class="top__btn">Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </section>
        </div>
        <main class="product-content">
            <div class="product center">
                <h2 class="product__headind">
                    Follow Our Projects
                </h2>
                <div class="product__text">
                    It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.
                </div>
                <div class="product__box">
                    <div class="card">
                        <img :src="product1" alt="card imeges" class="card__img">
                        <div class="card__content-box">
                            <div class="card__content">
                                <h4 class="card__heading">Modern Kitchan</h4>
                                <div class="card__breadcrumbs">
                                    <p class="card__li">Decor</p>
                                    <p class="card__li">Arhitecture</p>
                                </div>
                            </div>
                            <button class="card__arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button> 
                        </div>       
                    </div>
                    <div class="card">
                        <img :src="product2" alt="card imeges" class="card__img">
                        <div class="card__content-box">
                            <div class="card__content">
                                <h4 class="card__heading">Modern Kitchan</h4>
                                <div class="card__breadcrumbs">
                                    <p class="card__li">Decor</p>
                                    <p class="card__li">Arhitecture</p>
                                </div>
                            </div>
                            <button class="card__arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                            </button> 
                        </div>       
                    </div>
                    <div class="card">
                        <img :src="product3" alt="card imeges" class="card__img">
                        <div class="card__content-box">
                            <div class="card__content">
                                <h4 class="card__heading">Modern Kitchan</h4>
                                <div class="card__breadcrumbs">
                                    <p class="card__li">Decor</p>
                                    <p class="card__li">Arhitecture</p>
                                </div>
                            </div>
                            <button class="card__arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                            </button> 
                        </div>       
                    </div>
                    <div class="card">
                        <img :src="product4" alt="card imeges" class="card__img">
                        <div class="card__content-box">
                            <div class="card__content">
                                <h4 class="card__heading">Modern Kitchan</h4>
                                <ul class="card__breadcrumbs">
                                    <li class="card__li">Decor</li>
                                    <li class="card__li">Arhitecture</li>
                                </ul>
                            </div>
                            <button class="card__arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                               
                            </button> 
                        </div>       
                    </div>
                </div>
            </div>
            <div class="counter center">
                <div class="counter__content">
                    <div class="counter__item">
                        <h1 class="counter__number">12</h1>
                        <div class="counter__title">Years Of Experiance</div>
                    </div>
                    <div class="counter__item">
                        <h1 class="counter__number">85</h1>
                        <div class="counter__title">Success Project</div>
                    </div>
                    <div class="counter__item">
                        <h1 class="counter__number">15</h1>
                        <div class="counter__title">Active Project</div>
                    </div>
                    <div class="counter__item">
                        <h1 class="counter__number">95</h1>
                        <div class="counter__title">Happy CUstomers</div>
                    </div>
                </div>
            </div>
            <div class="news">
                <div class="news__heading">
                    Articles & News
                </div>
                <div class="news__text">
                    It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
                </div>
<!-- Cart content -->
                <div class="news__carts">
                    <NewsCardComponent :product="product"
                        v-for="product in products" 
                        :key="product.id"
                    /> 
                </div>
<!--  -->       
            </div>
        </main>
    </div>
  </template>
  
  <script>
import topPhoto from '@/assets/top-photo.png';
import product1 from '@/assets/product-img/product_1.png';
import product2 from '@/assets/product-img/product_2.png';
import product3 from '@/assets/product-img/product_3.png';
import product4 from '@/assets/product-img/product_4.png';
import news1 from '@/assets/new-img/news_1.png';
import news2 from '@/assets/new-img/news_2.png';
import news3 from '@/assets/new-img/news_3.png';
import NewsCardComponent from '../components/NewsCardComponent.vue';
import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'FooterComponent',
    props: {
     
    },
    components:{
        NewsCardComponent
    },
    data(){
        return{
            topPhoto,
            product1,
            product2,
            product3,
            product4,
            products: [
                {
                    imgUrl: news1,
                    heading: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    annotation: 'Kitchan Design'
                },
                {
                    imgUrl: news2,
                    heading: 'Low Cost Latest Invented Interior DesigningIdeas.',
                    date: '22 December,2022',
                    annotation: 'Living Design'
                },
                {
                    imgUrl: news3,
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    annotation: 'Interior Design'
                },
            ]
        }
        
    },

    

    computed: {
        ...mapState(['productParty']),
        getProductsParty(){
            return this.productParty.slice(0, 2)
        }
    },
    methods: {
        ...mapMutations(['SET_PRODUCTS_PARTY_HOME']),
    },
    
    created(){
        this.SET_PRODUCTS_PARTY_HOME();
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">

$widthSite: 1200px;
$color-title: #292F36;
$color-text: #4D5053;

.center {
padding-left: calc(50% - 600px);
padding-right: calc(50% - 600px);
}

%flex-center{
    display: flex;
    align-items: center;
    justify-content: center;
}

%flex-center-x{
    display: flex;
    justify-content: center;
}

%flex-center-y{
    display: flex;
    align-items: center;
}



      /****************** Top ************/

.top{
    min-height: 758px;
    height: 100%;
    position: relative;

    &__img{
        border-radius: 50px;
    }

    &__content{
        position: absolute;
        z-index: 1;
        top: 208px;
        left: 52px;
        width: 433px;
    }

    &__heading{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 65px;
        line-height: 125%;
        margin-bottom: 18px;
    }

    &__text{
        color: $color-text;
        font-family: Jost;
        font-size: 22px;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
        margin-bottom: 21px;
    }

    &__btn{
        padding: 26px 48px;
        background-color: #292F36;
        border-radius: 18px;
        color: #FFF;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-weight: 600;
        line-height: 125%; /* 22.5px */
        letter-spacing: 0.36px;
        position: relative;
    }

    &__btn>svg{
        margin-left: 10px;
        margin-bottom: -2px;
    }
   
}

/**** Main ******/
/***Product****/

.product-content{
    padding-top: 96px;
    padding-bottom: 96px;
}

.product{
    @extend %flex-center-y;
    flex-direction: column;

    &__headind{
        color: $color-title;
        margin-bottom: 8px;
        font-family: DM Serif Display;
        font-size: 50px;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
    }

    &__text{
        width: 735px;
        color: $color-text;
        margin-bottom: 93px;
        text-align: center;
        font-family: Jost;
        font-size: 22px;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
    }

    &__box{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 100px;
        column-gap: 56px;
    }
}


/*** Card ***/

.card{
    width: 550px;

    &:nth-child(1) .card__img{
        border-top-right-radius: 60px;
    }
    &:nth-child(2) .card__img{
        border-top-left-radius: 60px;
    }
    &:nth-child(3) .card__img{
        border-bottom-right-radius: 60px;
    }
    &:nth-child(4) .card__img{
        border-bottom-left-radius: 60px;
    }
    
    &__content-box{
        padding-top: 43px;
        @extend %flex-center-y;
        justify-content: space-between;
    }

   &__heading{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 25px;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
        margin-bottom: 4px;
   }

    &__breadcrumbs{
        display: flex;
        cursor: pointer;
    }

    &__li{
        color: $color-text;
        font-family: Jost;
        font-size: 22px;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
    }
    

    &__li:not(:last-child)::after{
        padding: 3px;
        color: $color-text;
        content: "\002F";
        padding-left: 8px;
        padding-right: 8px;
    }

}

/**** Counter *****/

.counter{
    padding-top: 151px;
    padding-bottom: 151px;
    background: #F4F0EC;
    margin-top: 100px;
    margin-bottom: 96px;

    &__content{
        display: flex;
        gap: 144px;
    }

    &__item{
        width: 192px;
        @extend %flex-center;
        flex-direction: column;
        row-gap: 16px;

        &:not(:last-child)::after{
            content: "";
            border-right: 1px solid #CDA274;
            display: inline-block;
            position: absolute;
            margin-top: 30px;
            height: 130px;
            margin-left: 351px;
        }

    }

    &__number{
        color: #CDA274;
        font-family: DM Serif Display;
        font-size: 85px;
        line-height: 125%; /* 106.25px */
        letter-spacing: 1.7px;
    }

    &__title{
        color: $color-text;
        font-family: Jost;
        font-size: 22px;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
    }
}


/***** News *****/

.news{
    @extend %flex-center-y;
    flex-direction: column;

    &__heading{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 50px;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
        margin-bottom: 12px;
    }

    &__text{
        width: 811px;
        color: $color-text;
        text-align: center;
        font-family: Jost;
        font-size: 22px;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
        margin-bottom: 52px;
    }

    &__content{
        display: flex;
        flex-wrap: wrap;
        column-gap: 27px;
        row-gap: 30px;
    }

}

.news__carts{
        @extend %flex-center-x;
        display: flex;
        flex-wrap: wrap;
        gap: 26px;
    }
</style>