<template>
    <div class="cart">
        <!-- <div v-for="product in products" :key="product.id" class="card-news"> -->
            <div class="cart__img_box">
                <img :src="require(`@/assets/new-img/news_3.png`)" alt="news pic" class="cart__img">
                <div class="cart-news__img_annotation">{{product.annotation}}</div>
            </div>
            <div class="cart__content">
                <div class="cart__title">
                    {{product.heading}}
                </div>
                <div class="cart__block">
                    <div class="cart__date">{{product.date}}</div>
                    <div class="cart__arrew">
                        <svg class="cart__arrew_svg" xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg class="cart__arrew_svg-hover" xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <circle cx="26" cy="26.267" r="26" fill="#fff"/>
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'NewsCardComponent',
    props: {
        product: {
            type: Object,
            dafault: () => {}
        },
    },
    
    computed: {

    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">

.cart{
    width: 382px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    cursor: pointer;
    transition: all .7s;

    &__arrew_svg-hover{
        display: none;
    }

    &__img{
        border-top-left-radius: 31px;
        border-top-right-radius: 31px;

        &_box{
            position: relative;
        }

        &_annotation{
            position: absolute;
            left: 20px;
            bottom: 20px;
            color: $color-text;
            font-family: Jost;
            font-size: 16px;
            line-height: 150%; /* 24px */
            letter-spacing: 0.16px;
            text-transform: capitalize;
            border-radius: 8px 8px 8px 0px;
            background: #FFF;
            padding: 4px 5px 8px 11px;
            width: 124px;
            height: 41px;
            flex-shrink: 0;
        }

    }

    &:hover .cart__arrew_svg-hover{
        display: block;
    }

    &:hover .cart__arrew_svg{
        display: none;
    }

    &:hover{
        background: #F4F0EC;
    } 



    &__title{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 25px;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
        margin-top: 21px;
        margin-bottom: 30px;
    }

    &__block{
        @extend %flex-center-y;
        justify-content: space-between;
    }

    &__date{
        color: $color-text;
        font-family: Jost;
        font-size: 16px;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }

}
  </style>