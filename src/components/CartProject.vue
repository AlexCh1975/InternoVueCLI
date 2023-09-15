<template>
    <!-- <div> -->
        <div class="cart-project">
            <img class="cart-project__img" :src="cart.imgUrl" :alt="cart.title" />
            <div class="cart-project__content">
                <div class="cart-project__info">
                    <h4 class="cart-project__title">{{ cart.title }}</h4>
                    <BreadcrumbsComp
                        :breadcrumbs="breadcrumbsCart" slot=""
                    />
                </div>
                <button class="cart-project__btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"      viewBox="0   0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import BreadcrumbsComp from '@/components/BreadcrumbsComp.vue';

export default {
    name: 'CartProject',
    props: ['cart'],
    components: {
        BreadcrumbsComp
    },
  
    data() {
        return {
            breadcrumbsCart: ['Decor', 'Artchitecture'],
        };
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.cart-project{
    width: 585px;
    height: auto;

    &__img{
        margin-bottom: 24px;
    }

    &__content{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__info{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    &__title{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 25px;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
    }
}

</style>