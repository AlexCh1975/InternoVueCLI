<template>
    <div>
        <div class="top-project">
            <div class="top-project__content center">
                <h1 class="top-project__heading">Our Project</h1>
                <BreadcrumbsComp :breadcrumbs="breadcrumbsTop" slot=""/>
            </div>
        </div>
        <main class="category center">
            <div class="category__buttons">
                <button 
                    class="category__btn"
                    v-for="(btn, index) in buttons"
                    :key="index"
                    @click="selectProject(btn, index)"
                    >{{ btn }}
                </button>
            </div>
            <div class="carts-projects">
                <div class="catrs-projects__left">
                    <CartProject
                    v-for="cart in isCartsLeft"
                    :key="cart.id"
                    :cart="cart"
                />
                </div>
                <div class="catrs-projects__right">
                    <CartProject
                    v-for="cart in isCartsRight"
                    :key="cart.id"
                    :cart="cart"
                />
                </div>
            </div>
            <div class="pagination__conteiner">
                <PaginationItem  />
            </div>
        </main>
    </div>
</template>

<script>

import BreadcrumbsComp from '@/components/BreadcrumbsComp.vue';
import CartProject from '@/components/CartProject.vue';
import PaginationItem from '@/components/PaginationItem.vue'
import {mapActions, mapState} from 'vuex';

export default {
    name: 'ProjectComp',
    components: {
        BreadcrumbsComp,
        CartProject,
        PaginationItem
    },
    data() {
        return {
            breadcrumbsTop: ['Home', 'Project'],
            buttons: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
            key: 'Artchitecture',

        };
    },
    computed: {
        ...mapState(['cartsObj']),

        isCarts(){
            return this.cartsObj[this.key];
        },

        isCartsLeft(){
            return this.isCarts.slice(0, 4);
        },

        isCartsRight(){
            return this.isCarts.slice(4, 8);
        }
    },
    methods: {
        ...mapActions(['fetchCartsObj']),

        selectProject(btn, index){
            btn = btn.split(' ').join('_');
            const temp = this.key;
            this.key = btn;
            this.buttons[index] = temp;
        }
    },
    created(){
        this.fetchCartsObj(this.cartsObj);
    }
};
</script>

<style lang="scss" scoped>

    /******* Project ********/

/******* top-project *******/
.top-project{
    background-image: url('~@/assets/top-project.png');
    height: 365px;
    width: 100%;
    @extend %flex-center-x;
    align-items: flex-end;
    margin-bottom: 200px;

    &__content{
        padding: 41px 78px;
        border-radius: 37px 37px 0px 0px;
        background: #FFF;
        @extend %flex-center-y;
        flex-direction: column;
    }

    &__heading{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 50px;
        line-height: 125%; /* 62.5px */
    }
}

.category{
    display: flex;
    flex-direction: column;
    @extend %flex-center-y;
    padding-bottom: 200px;

    &__buttons{
        display: flex;
        min-width: 858px;
        @extend %flex-center;
        border: 1px solid #CDA274;
        border-radius: 18px;
        margin-bottom: 61px;
    }

    &__btn{
        padding: 26px 66px;
        border-radius: 18px;
        background-color: #FFF;
        color: $color-title;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-weight: 600;
        line-height: 125%; /* 22.5px */
        letter-spacing: 0.36px;
        transition: all 0.5s;

        &:hover{
            background-color: #CDA274; 
            color: #FFF;
        }
    }
}

/**** Main ***** */

/*** Carts-projects */

.carts-projects{    
    gap: 30px;
    display: flex;
    flex-wrap: wrap;

    &__left{
        display: flex;
        flex-direction: column;
    }

    &__right{
        display: flex;
        flex-direction: column;
    }
}

.cart-project{
    &:nth-child(2){
        height: 616px;
    }
}

.breadcrumbs{
    &__li{
        font-size: 22px;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
    }
}

.pagination{
    &__conteiner{
        @extend %flex-center-x;
        padding-top: 61px; 
    }
}    
</style>