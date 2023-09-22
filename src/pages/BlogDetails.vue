<template>
    <div>
        <div class="top-blog-details__img"></div>
        <section class="blog-details center">
            <section class="blog-box">
                <ArticlesComp />
                <article class="blog-article" v-for="article in newArticles" :key="article.id">
                    <h1 class="blog-article__heading">
                        {{ article.title }}
                    </h1>
                    <img class="blog-article__img" 
                        :src="article.img" alt="blog-article__img"
                     />
                    <div class="blog-article__content">
                        
                        <div class="blog-article__date">{{ article.date }}</div>
<!--  breadcrumbs-->
                        <BreadcrumbsComp :breadcrumbs="breadcrumbs" />
                    
<!--  -->
                    </div>
                    <div class="blog-article__text">
                        <p class="blog-article__p1">
                            {{ article.text1 }}
                        </p>
                        <p class="blog-article__p">
                            {{ article.text2 }}
                        </p>
                    </div>
                </article>
                <div class="block-quote">
                    <div class="quote">
                        <p class="quote__ipigraph">“</p>
                        <p class="quote__text">
                            The details are not the details. They make the design.
                        </p>
                    </div>
                </div>
                <article class="sub-content">
                    <h2 class="sub-content__heading">Design sprints are great</h2>
                    <p class="sub-content__text">
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                    </p>
                    <ol class="sub-content__list">
                        <li class="sub-content__li">
                            Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                        </li>
                        <li class="sub-content__li">
                            Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                        </li>
                        <li class="sub-content__li">
                            Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                        </li>
                    </ol>
                    <img 
                        :src="subContent" 
                        alt="sub content pic" 
                        class="sub-content__img"
                    />
                    <p class="sub-content__text">
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                    </p>
                </article>
            </section>
            <aside class="tags">
                <h3 class="tags__heading">Tags</h3>
                <div class="tags__buttons">
                    <div 
                        v-for="(tag, index) in tags" 
                        :key="index" 
                        @click="filterTags(tags[index])" 
                        class="tags__btn"
                        >{{ tag }}
                    </div>
                </div>
            </aside>
        </section>
    </div>
</template>
  
<script>
import BreadcrumbsComp from '@/components/BreadcrumbsComp.vue';

import blogArticleImg from '@/assets/blog-article_img.png';
import subContent from '@/assets/sub-content.png';
import news2 from '@/assets/new-img/news_2.png';

  export default {
    name: 'BlogDetails',
    components: {
        BreadcrumbsComp
    },
    props: {
     
    },
    data(){
        return {
            tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bedroom'],
            blogArticleImg,
            subContent,
            breadcrumbs: ['Interior', 'Home', 'Decore'],
            articles: [
                {
                    id: 1,
                    tag: 'Kitchen',
                    title: `Let’s Get Solution for Building
                        Construction Work`,
                    img: blogArticleImg,
                    date: '26 December,2022',
                    text1: `
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.`,
                    text2:
                        `
                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                        `

                },
                {
                    id: 2,
                    tag: 'Bedroom',
                    title: `Low Cost Latest Invented 
                    Interior DesigningIdeas.`,
                    img: news2,
                    date: '22 December,2022',
                    text1: `
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.`,
                    text2:
                        `
                            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                        `

                }
            ],
            newArticles: []
        }
    },
    methods: {
        filterTags(tag){
            this.newArticles = this.articles.filter(el => el.tag.toLowerCase() === tag.toLowerCase());
        }
    }
  }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.top-blog-details__img{
    width: 100%;
    height: 351px;
    background-image: url('~@/assets/blog-details_top.png');
    background-size: no-repeat;
    background-position: center;
    background-size: cover;
}

/****** Blog Details ******/

.blog-details{
    display: flex;
    gap: 52px;
}

.blog-details{
    padding-top: 200px;
    padding-bottom: 96px;
}

.blog-box{
    width: 800px;
}

.blog-article{

    &__heading{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 50px;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
        margin-bottom: 11px;
    }

    &__img{
        width: 100%;
        height: 100%;
        margin-bottom: 46px;
        border-radius: 50px;
    }

    &__content{
        @extend %flex-center-y;
        justify-content: space-between;
        margin-bottom: 48px;
        padding-right: 50px;
    }

    &__date{
        color: $color-text;
        font-family: Jost;
        font-size: 16px;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }

    &__text{
        color: $color-text;
        font-family: Jost;
        font-size: 22px;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
        margin-bottom: 35px;
    }

    &__p1{
        margin-bottom: 48px;
    }
}

.breadcrumbs{
    &__li{
        font-size: 16px;
        letter-spacing: 0.16px;
        text-transform: capitalize;
    }
}

.tags{
    width: 338px;
    &__heading{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 25px;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
        margin-bottom: 24px;
    }

    &__buttons{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    &__btn{
        color: $color-title;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        line-height: 125%; /* 22.5px */
        letter-spacing: 0.36px;
        padding: 9px 30px;
        border-radius: 10px;
        background: #F4F0EC;
        transition: all .7s;
        cursor: pointer;
    }

    &__btn:hover{
        background: $color-title;
        color: #FFF;
    }

}

/****** Quote ******/

.block-quote{
    width: 100%;
    height: 267px;
    @extend %flex-center;
    border-radius: 50px;
    background: #F4F0EC;
    margin-bottom: 27px;
}

.quote{
    display: flex;
    flex-direction: column;
    width: 385px;
    height: 161px;
    transform: translateY(-135px);
    

    &__ipigraph{
        color: #CDA274;
        text-align: center;
        font-family: DM Serif Display;
        font-size: 200px;
        font-style: italic;
        line-height: 125%; /* 250px */
        letter-spacing: 4px;
        transform: rotate(180deg);
    }

    &__text{
        color: #CDA274;
        text-align: center;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: italic;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
        transform: translateY(-44px);
    }
}

.sub-content{
    &__heading{
        color: $color-title;
        font-family: DM Serif Display;
        font-size: 50px;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
        margin-bottom: 20px;
    }

    &__text{
        color: $color-text;
        font-family: Jost;
        font-size: 22px;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
    }

    &__list{
        padding-left: 20px;    
        margin-top: 24px;
    }

    &__li{
        color: $color-text;
        font-family: Jost;
        font-size: 22px;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
        margin-bottom: 32px;
    }

    &__img{
        margin-top: 12px;
        margin-bottom: 35px;
    }
}
</style>