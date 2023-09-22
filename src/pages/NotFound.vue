<template>
    <div>
        <div class="notfound center">
            
            <div class="notfound__content">
                <h1 class="notfound__title">404</h1>
                <div class="notfound__text">We are sorry, but the page you requested was not found</div>
                <button class="notfound__btn">
                    Back To Home
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
               
            <div class="notfound__background">
                <img :src="require(`@/assets/project-imeges/notfound.png`)" alt="404" class="notfound__img">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NotFound',

    data() {
        return {
            imgNotfound: 'notfound.png',
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.notfound{
    display: flex;
    padding-top: 45px;
    padding-bottom: 45px;
    gap: 81px;

    &__content{
        @extend %flex-center-x;
        flex-direction: column;
        align-items: start;
        min-width: 569px;
    }

    &__title{
        color: #CDA274;
        font-family: DM Serif Display;
        font-size: 250px;
        line-height: 125%; /* 312.5px */
        margin-bottom: 15px;
    }

    &__text{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 35px;
        line-height: 150%; /* 52.5px */
        letter-spacing: 0.35px;
        margin-bottom: 23px;
    }

    &__btn{
        @extend %flex-center-y;
        color: #FFF;
        font-family: Jost;
        font-size: 18px;
        font-weight: 600;
        line-height: 125%; /* 22.5px */
        letter-spacing: 0.36px;
        padding: 26px 54px;
        border-radius: 18px;
        background: $color-title;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    }

    &__btn>svg{
        margin-left: 9px;
    }

    &__background{
        width: 913px;
        height: 1042px;
        flex-shrink: 0;
        border-radius: 0px 0px 0px 353px;
        background: #EBEBEB;
    }

    &__img{
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }
}
</style>