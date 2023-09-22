<template>
    <div>
        <div class="top-project-details"></div>
        <div class="project-details center">
            <div class="project-details__content">
                <h1 class="project-details__heading">
                    Minimal Look Bedrooms
                </h1>
                <p class="project-details__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                </p>
                <p class="project-details__text">   
                    In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
                </p>
            </div>
            <div class="project-details__wripper" >
                <div class="project-details__slider"
                    :style="{'margin-left': '-' + (100*currentSlideIndex) + '%'}"
                    >
                    <SliderItem 
                        v-for="(sliderItem, index) in GET_SLIDER_ITEMS"
                        :key="index"
                        :sliderItem="sliderItem" 
                        @showSlide="showSlide"
                    />
                </div>
                <ul class="pagination" >
                    <li class="pagination__li" 
                        v-for="(index) in paginations"
                        :key="index"
                        @click="isSlide(index)"
                        :class="{active: currentSlideIndex === index -1}"
                        
                    >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SliderItem from '@/components/SliderItem.vue';
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';


export default {
    name: 'ProjectDetails',
    components: {
        SliderItem,
    },
    
    data() {
        return {
            interval: 0,
            currentSlideIndex: 0,
            paginations: 0,
  
        };
    },

    mounted() {

    },

    computed: {
        ...mapState(['sliderItems']),
        ...mapGetters(['GET_SLIDER_ITEMS']),    
    },

    methods: {
        ...mapMutations(['ADD_SLIDERITEMS']),
        ...mapActions(['feachSliders']),

        isSlide(index){
            this.currentSlideIndex = index -1;
        
            clearInterval(this.interval);
        },

        nexSlide(){
            if(this.currentSlideIndex >= this.sliderItems.length -1){
                this.currentSlideIndex = 0;
            }else{
                this.currentSlideIndex++;
            }
        },

        showSlide(slide){
            slide.isActive = !slide.isActive;
            if (slide.isActive){
                clearInterval(this.interval);
            }else{
                this.carousel();
            }
        },

        carousel(){
            // let vm = this;
            this.interval = setInterval(() => {
                this.nexSlide();
            }, 2000)
        }


    },
    created(){
        this.feachSliders(this.sliderItems)
        this.paginations = this.sliderItems.length;
        this.carousel();
    }
};
</script>

<style lang="scss" scoped>
.top-project-details{
    background-image: url('~@/assets/project-imeges/project-details-top.png');
    width: 100%;
    height: 356px;
}
.project-details{
    @extend %flex-center-y;
    flex-direction: column;
    padding-top: 200px;
    padding-bottom: 160px;

    &__content{
        @extend %flex-center-y;
        flex-direction: column;
        max-width: 658px;
        gap: 11px;
    }

    &__heading{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 50px;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
    }

    &__text{
        color: $color-text;
        font-family: Jost;
        font-size: 22px;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
        margin-bottom: 89px;
    }

    &__wripper{
        max-width: $widthSite;
        overflow: hidden;
    }

    &__slider{
        display: flex;
        transition: all ease .5s;
    }

}

.pagination{
    @extend %flex-center-x;
    gap: 15px;
    margin-top: 20px;

    &__li{
        width: 20px;
        height: 20px;
        border: 2px solid $color-text;
        border-radius: 100%;
        cursor: pointer;
        &:hover{
            background-color: $color-text;
        }
    }

}
.active{
    background-color: $color-title;
}
.deactive{
    background-color: #FFF;
}
</style>