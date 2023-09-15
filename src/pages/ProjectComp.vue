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
                <CartProject
                    v-for="cart in isCarts"
                    :key="cart.id"
                    :cart="cart"
                />
            </div>
        </main>
    </div>
</template>

<script>
import projecrImg1 from '@/assets/project-imeges/project-img1.png';
import projecrImg2 from '@/assets/project-imeges/project-img2.png';
import projecrImg3 from '@/assets/project-imeges/project-img3.png';
import projecrImg4 from '@/assets/project-imeges/project-img4.png';
import projecrImg5 from '@/assets/project-imeges/project-img5.png';
import projecrImg6 from '@/assets/project-imeges/project-img6.png';
import projecrImg7 from '@/assets/project-imeges/project-img7.png';
import projecrImg8 from '@/assets/project-imeges/project-img8.png';

import BreadcrumbsComp from '@/components/BreadcrumbsComp.vue';
import CartProject from '@/components/CartProject.vue';

export default {
    name: 'ProjectComp',
    components: {
        BreadcrumbsComp,
        CartProject
    },
    data() {
        return {
            breadcrumbsTop: ['Home', 'Project'],
            buttons: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
            key: 'Artchitecture',
            obj: {
                Artchitecture: [
                    {imgUrl: projecrImg1, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg3, title: 'Classic Minimal Bedroom'},
                    {imgUrl: projecrImg5, title: 'Minimal Bedroom table'},
                    {imgUrl: projecrImg7, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg2, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg4, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg6, title: 'System Table'},
                    {imgUrl: projecrImg8, title: 'Minimal Bedroom'},
                ],
                Bed_Room: [
                    {imgUrl: projecrImg1, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg1, title: 'Classic Minimal Bedroom'},
                    {imgUrl: projecrImg1, title: 'Minimal Bedroom table'},
                    {imgUrl: projecrImg1, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg1, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg1, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg1, title: 'System Table'},
                    {imgUrl: projecrImg1, title: 'Minimal Bedroom'},
                ],
                Bathroom: [
                    {imgUrl: projecrImg1, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg7, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg6, title: 'System Table'},
                    {imgUrl: projecrImg4, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg3, title: 'Classic Minimal Bedroom'},
                    {imgUrl: projecrImg5, title: 'Minimal Bedroom table'},
                    {imgUrl: projecrImg2, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg8, title: 'Minimal Bedroom'},
                ],
                Kitchan: [
                    {imgUrl: projecrImg2, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg2, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg2, title: 'System Table'},
                    {imgUrl: projecrImg2, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg2, title: 'Classic Minimal Bedroom'},
                    {imgUrl: projecrImg2, title: 'Minimal Bedroom table'},
                    {imgUrl: projecrImg2, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg2, title: 'Minimal Bedroom'},
                ],
                Living_Area: [
                    {imgUrl: projecrImg2, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg2, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg2, title: 'System Table'},
                    {imgUrl: projecrImg2, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg4, title: 'Classic Minimal Bedroom'},
                    {imgUrl: projecrImg4, title: 'Minimal Bedroom table'},
                    {imgUrl: projecrImg4, title: 'Minimal Bedroom'},
                    {imgUrl: projecrImg4, title: 'Minimal Bedroom'},
                ],
            },
        };
    },
    computed: {
        isCarts(){
            return this.obj[this.key];
        }
    },
    methods: {
        selectProject(btn, index){
            btn = btn.split(' ').join('_');
            const temp = this.key;
            this.key = btn;
            this.buttons[index] = temp;
        }
    },
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
    margin-bottom: 61px;

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
    // max-height: 3920px;
    // min-height: 2554px;
    max-height: 3350px;
    margin-bottom: 61px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
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

</style>