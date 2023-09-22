import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sliderItems: [],
        products: [],
        currentCarts: 1,
        stapItemsCarts: 6,
        paginationsLenght: 0,
        paginations: ['01', '02', '03', '>'],
        productParty: [],
        productpartyHome: [],
        cartsObj: {},
        currentProject: 1,
        progectObjKey: 'Artchitecture',
        projectBtn: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
        projectParty: [],
    },

    mutations: {
        SET_CARTS_OBJ(state, obj){
            state.cartsObj = obj;
        },

        SET_PRODUCTS_PARTY_HOME(state){
            state.productpartyHome = state.products.slice(0, 2);
        },

        ADD_SLIDERITEMS(state, sliderItems){
            state.sliderItems = sliderItems;
        },

        SET_PRODUCTS(state, products){
            state.products = products;
        },

        STAP_PAGINATION(state){          
            const startIndex = (state.currentCarts -1) * state.stapItemsCarts;
            const endIndex = startIndex + state.stapItemsCarts;
            state.products.slice(startIndex, endIndex)
         
        },

        SET_PRODUCTS_PARTY(state, elements){
            state.productParty = elements;
            console.log(state.productParty)
        },

        SET_PROJECT_PARTY(state, elements){
            state.projectParty = elements;
        },

        SET_PAGINATIONSLENGTH(state){
            state.paginationsLenght = state.products.length / state.stapItemsCarts;
        },

        CHANGE_PAGINATION(state, elements){
            for(let i = 0; i < elements; i++){
                state.paginations[i] = elements[i]
            }
            // if (!state.pagination){
            //     for(let i = 0; i < elements; i++){
            //         state.pagination.push(elements[i]);
            //     }
            //     state.pagination.push('>')
            // }else{
            //     for(let i = 0; i < elements; i++){
            //         state.pagination[i] = elements[i]
            //     }
            // }
            
        },
       
    },

    getters: {
        GET_SLIDER_ITEMS: (state) => state.sliderItems,
        GET_PAGINATIONS: (state) => state.paginations,
        GET_PRODUCT_PARTY: (state) => state.productParty,
    },

    actions: {
        feachSliders({commit}) {
            const sliderItems = [
                {id: 1, name: 'slider 1', urlImg: 'slide1.png', isActive: false},
                {id: 2, name: 'slider 2', urlImg: 'project-img2.png', isActive: false},
                {id: 3, name: 'slider 3', urlImg: 'project-img6.png', isActive: false},
            ];
            commit('ADD_SLIDERITEMS', sliderItems);
        },

        feachProducts({commit}){
            const products = [
                {
                    id: 1,
                    imgUrl: 'news_1.png',
                    heading: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    annotation: 'Kitchan Design',
    
                },
                {
                    id: 2,
                    imgUrl: 'news_2.png',
                    heading: 'Low Cost Latest Invented Interior DesigningIdeas.',
                    date: '22 December,2022',
                    annotation: 'Living Design'
                },
                {
                    id: 3,
                    imgUrl: 'news_3.png',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    annotation: 'Interior Design'
                },
                {
                    id: 4,
                    imgUrl: 'news_4.png',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    annotation: 'Kitchan Design'
                },
                {
                    id: 5,
                    imgUrl: 'news_5.png',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    annotation: 'Living Design'
                },
                {
                    id: 6,
                    imgUrl: 'news_6.png',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    annotation: 'Interior Design'
                },
                {
                    id: 7,
                    imgUrl: 'news_1.png',
                    heading: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    annotation: 'Kitchan Design'
                },
                {
                    id: 8,
                    imgUrl: 'news_2.png',
                    heading: 'Low Cost Latest Invented Interior DesigningIdeas.',
                    date: '22 December,2022',
                    annotation: 'Living Design'
                },
                {
                    id: 9,
                    imgUrl: 'news_3.png',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    annotation: 'Interior Design'
                },
                {
                    id: 10,
                    imgUrl: 'news_4.png',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    annotation: 'Kitchan Design'
                },
                {
                    id: 11,
                    imgUrl: 'news_5.png',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    annotation: 'Living Design'
                },
                {
                    id: 12,
                    imgUrl: 'news_6.png',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    annotation: 'Interior Design'
                },
                {
                    id: 13,
                    imgUrl: 'news_1.png',
                    heading: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    annotation: 'Kitchan Design'
                },
                {
                    id: 14,
                    imgUrl: 'news_2.png',
                    heading: 'Low Cost Latest Invented Interior DesigningIdeas.',
                    date: '22 December,2022',
                    annotation: 'Living Design'
                },
                {
                    id: 15,
                    imgUrl: 'news_3.png',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    annotation: 'Interior Design'
                },
                {
                    id: 16,
                    imgUrl: 'news_4.png',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    annotation: 'Kitchan Design'
                },
                {
                    id: 17,
                    imgUrl: 'news_5.png',
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    annotation: 'Living Design'
                },
              
            ];
            commit('SET_PRODUCTS', products);
        },

        fetchCartsObj({commit}){
            const cartsObj = {
                Artchitecture: [
                    {imgUrl: 'project-img1.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img3.png', title: 'Classic Minimal Bedroom'},
                    {imgUrl: 'project-img5.png', title: 'Minimal Bedroom table'},
                    {imgUrl: 'project-img7.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img2.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img4.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img6.png', title: 'System Table'},
                    {imgUrl: 'project-img8.png', title: 'Minimal Bedroom'},
                ],
                Bed_Room: [
                    {imgUrl: 'project-img1.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img1.png', title: 'Classic Minimal Bedroom'},
                    {imgUrl: 'project-img1.png', title: 'Minimal Bedroom table'},
                    {imgUrl: 'project-img1.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img1.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img1.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img1.png', title: 'System Table'},
                    {imgUrl: 'project-img1.png', title: 'Minimal Bedroom'},
                ],
                Bathroom: [
                    {imgUrl: 'project-img1.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img7.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img6.png', title: 'System Table'},
                    {imgUrl: 'project-img4.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img3.png', title: 'Classic Minimal Bedroom'},
                    {imgUrl: 'project-img5.png', title: 'Minimal Bedroom table'},
                    {imgUrl: 'project-img2.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img8.png', title: 'Minimal Bedroom'},
                ],
                Kitchan: [
                    {imgUrl: 'project-img2.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img2.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img2.png', title: 'System Table'},
                    {imgUrl: 'project-img2.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img2.png', title: 'Classic Minimal Bedroom'},
                    {imgUrl: 'project-img2.png', title: 'Minimal Bedroom table'},
                    {imgUrl: 'project-img2.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img2.png', title: 'Minimal Bedroom'},
                ],
                Living_Area: [
                    {imgUrl: 'project-img2.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img2.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img2.png', title: 'System Table'},
                    {imgUrl: 'project-img2.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img4.png', title: 'Classic Minimal Bedroom'},
                    {imgUrl: 'project-img4.png', title: 'Minimal Bedroom table'},
                    {imgUrl: 'project-img4.png', title: 'Minimal Bedroom'},
                    {imgUrl: 'project-img4.png', title: 'Minimal Bedroom'},
                ],
            };
            commit('SET_CARTS_OBJ', cartsObj)
        },

        CHANGR_PRODUCT_LIST({commit, state}, item){
            state.currentCarts = Number(item.slice(0));
            const startIndex = (state.currentCarts -1) * state.stapItemsCarts;
            const endIndex = startIndex + state.stapItemsCarts;
            commit('SET_PRODUCTS_PARTY', state.products.slice(startIndex, endIndex));
        },

        CHANGR_PROJECT_LISt({commit, state}, item, key){
            state.currentProject = Number(item.slice(0));
            const startIndex = (state.currentCarts -1) * state.stapItemsCarts;
            const endIndex = startIndex + state.stapItemsCarts;
            commit('SET_PROJECT_PARTY', state.cartsObj[key].slice(startIndex, endIndex));
        },

        // SCROL_PAGINATIONS({commit, state}){
        //     const temp = state.pagination[2]
        //     state.paginationsLenght
        // }
 
    }

})