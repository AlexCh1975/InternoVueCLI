<template>
    <div>
        <div class="top-article">
            <div class="top-article__content center">
                <h1 class="top-article__heading">Articles & News</h1>

                <BreadcrumbsComp :breadcrumbs="breadcrumbs" slot=""/>

            </div>
        </div>
        <main class="article-content center ">
            <article class="post">
                <h2 class="post__heading">Latest Post</h2>
                <section class="post__block">
                    <img :src="postImg" alt="post pic" class="post__img">
                    <div class="post__content">
                        <h4 class="post__content_title">
                            Low Cost Latest Invented Interior Designing Ideas
                        </h4>
                        <p class="post__content_text">
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. 
                        </p>
                        <p class="post__content_text">
                            Lorem Ipsum is not simply random text. It has roots in a piece of classic
                        </p>
                        <div class="post__content_footer">
                            <p class="post__content_date">26 December,2022 </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                <circle cx="26" cy="26.5" r="26" fill="#F4F0EC"/>
                                <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </section>
            </article>
            <article class="news-blog">
                <div class="news-blog__heading">
                    Articles & News
                </div>
                <!-- <div class="news__content"> -->
                <div  class="carts-news">
<!-- Card -->

                    <NewsCardComponent :product="product"
                        v-for="product in productParty" 
                        :key="product.id"
                    />

<!--  -->
                </div>
                <div class="pagination__conteiner">
                    <PaginationItem  />
                </div>
            </article>
        </main>
    </div>
  </template>
  
  <script>

import postImg from '@/assets/post_img.png';

import BreadcrumbsComp from '@/components/BreadcrumbsComp.vue';
import NewsCardComponent from '@/components/NewsCardComponent.vue';
import PaginationItem from '@/components/PaginationItem.vue';

import {mapActions, mapGetters, mapState} from 'vuex';

  export default {
    name: 'BlogComp',
    components: {
        NewsCardComponent,
        BreadcrumbsComp,
        PaginationItem
    },
    props: {
     
    },

    data() {
        return {  
            
            breadcrumbs: ['Home', 'Blog'],   
            postImg,    
        }
    },

    mounted() {
        this.CHANGR_PRODUCT_LIST('01');
    },

    computed: {
        ...mapState(['productParty', 'products']),
        ...mapGetters(['GET_PRODUCT_PARTY']),
    },
    methods: {
        ...mapActions(['feachProducts', 'CHANGR_PRODUCT_LIST']),

    },
    created(){
 
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss">


    /******* Blog ********/

/******* top-article *******/

.top-article{
    background-image: url('~@/assets/news-background.png');
    height: 365px;
    width: 100%;
    @extend %flex-center-x;
    align-items: flex-end;

    &__content{
        // max-width: 503px;
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

    &__breadcrumbs{
        display: flex;
    }

    &__li{
        color: $color-text;
        font-family: Jost;
        font-size: 22px;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px
    }

    &__li:not(:last-child)::after{
        padding: 3px;
        color: $color-text;
        content: "\002F";
        padding-left: 8px;
        padding-right: 8px;
    }

}


/****** Main ******/
/**** Article-Content *******/

.article-content{
    padding-top: 200px;
    padding-bottom: 200px;
}

.breadcrumbs{
    &__li{
        font-size: 22px;
        letter-spacing: 0.22px;
    }
}

/**** Post ****/

.post{
    // margin-bottom: 150px;

    &__img{
        border-radius: 42px;
    }

    &__heading{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 50px;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
        margin-bottom: 33px;
    }

    &__block{
        display: flex;
        padding: 22px;
        gap: 65px;
        border-radius: 62px;
        border: 1px solid #E7E7E7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    }

    &__content{
        padding-top: 50px;

        &_title{
            width: 463px;
            color: $color-title;
            font-family: DM Serif Display;
            font-size: 25px;
            line-height: 125%; /* 31.25px */
            letter-spacing: 0.5px;
            margin-bottom: 22px;
        }

        &_text{
            width: 469px;
            color: $color-text;
            font-family: Jost;
            font-size: 22px;
            line-height: 150%; /* 33px */
            letter-spacing: 0.22px;
            margin-bottom: 41px;
        }

        &_footer{
            @extend %flex-center-y;
            justify-content: space-between;
        }

        &_date{
            color: $color-text;
            font-family: Jost;
            font-size: 16px;
            line-height: 150%; /* 24px */
            letter-spacing: 0.16px;
            text-transform: capitalize;
        }
    }
}

.news-blog{
    margin-top: 150px;
    margin-bottom: 30px;
}

.news__conteiner{
    @extend %flex-center-x;
}


.news-blog{
    // @extend %flex-center-y;
    display: flex;
    flex-direction: column;

    &__heading{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 50px;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
        margin-bottom: 12px;
    }


}

.carts-news{
    @extend %flex-center-x;
    display: flex;
    flex-wrap: wrap;
    column-gap: 26px;
    row-gap: 30px;
}


.pagination{
    &__conteiner{
        @extend %flex-center-x;
        padding-top: 51px; 
    }
 
}

  </style>