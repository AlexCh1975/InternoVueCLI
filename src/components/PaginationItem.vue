<template>
    <div>
        <ul class="pagination">
            <li class="pagination__item"
                v-for="(item, index) in paginations"
                :key="index"
            ><router-link class="pagination__link" :to="`/blog/${item}`"
            >
                {{ item}}
            </router-link>

            <!-- <a href="">{{ item }}</a> -->
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
    name: 'PaginationItem',
    props: {

    },
    data() {
        return {

        };
    },

    watch: {
        $route(){
            const {item} = this.$route.params;
            // const page = this.$route.path.split('/').slice(1, 2).join();
            if (item.length < 2) {
                console.log('Меняем пагинацию')
                // this.SCROL_POGINATION();
            }else{
                this.CHANGR_PRODUCT_LIST(item)
            }

            // if (page === 'blog'){
            //     if (item.length < 2) {
            //         console.log('Меняем пагинацию')
            //         // this.SCROL_POGINATION();
            //     }else{
            //         // this.CHANGR_PRODUCT_LIST(item)
            //     }
            // }else if(page === 'project'){
            //     if (item.length < 2) {
            //         console.log('Меняем пагинацию')
            //         // this.SCROL_POGINATION();
            //     }else{
            //         this.CHANGR_PROJECT_LISt(item)
            //     }
            // }else{
            //     console.log('error')
            // }
            
        }
    },

    computed: {
        ...mapState(['paginations']),
       ...mapGetters(['GET_PAGINATIONS']),

    },

    mounted() {
        
    },

    methods: {
        ...mapActions(['SCROL_PAGINATIONS', 'CHANGR_PRODUCT_LIST']),
        showPagination(item){
            this.$emit('showPagination', item);
        },
    },
};
</script>

<style lang="scss" scoped>
.pagination{
    display: flex;
    gap: 20px;

    &__item{
        width: 52px;
        height: 52px;
        border: 1px solid #CDA274;
        border-radius: 100%;
        @extend %flex-center;
    }

    &__link{
        color: #292F36;
        font-family: Jost;
        font-size: 16px;
        font-weight: 500;
        line-height: 150%; /* 24px */
        text-transform: capitalize;
    }
}

.pagination-active{
    background-color: #F4F0EC;
    border: none;
}
</style>