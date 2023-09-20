import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // interval: 0,
        // currentSlideIndex: 0,
        // paginations: 0,
        sliderItems: [],
    },

    mutations: {
        ADD_SLIDERITEMS(state, sliderItems){
            state.sliderItems = sliderItems;
        },
        // IS_SLIDE(state, index){
        //     state.currentSlideIndex = index -1;
        //     clearInterval(state.interval); 
        // },
        // NEXT_SLIDE(state){
        //     if(state.currentSlideIndex >= state.sliderItems.length -1){
        //         state.currentSlideIndex = 0;
        //     }else{
        //         state.currentSlideIndex++;
        //     }
        // },
        // CLEAR_INTERVAL(state){
        //     clearInterval(state.interval);
        // },

        // SHOW_SLIDE_MUTATION({dispach, state}, slideIsActive){
        //     if (slideIsActive){
        //         clearInterval(state.interval);
        //     }else{
        //         state.dispach('CAROUSEL')
        //     }
        // },
        
        // CAROUSEL({commit}, state){
        //     // let vm = this;
        //     state.interval = setInterval(() => {
        //         commit('NEXT_SLIDE');
        //     }, 2000)
        
        // }
       
    },

    getters: {
    //    GET_INTERVAL: (state) => state.interval,
        GET_SLIDER_ITEMS: (state) => state.sliderItems,
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
        
        // CAROUSEL({commit, state}){
        //     let vm = state;
        //     // state.interval = setInterval(() => {
        //     //     vm.NEXT_SLIDE();
        //     // }, 2000)
        //     vm.interval = setInterval(() => {
        //         commit('NEXT_SLIDE');
        //     }, 2000)
          
        // }, 

        // SHOW_SLIDE({commit}, slide){
        //     slide.isActive = !slide.isActive;
        //     commit('SHOW_SLIDE_MUTATION', slide.isActive)
        // }
    }

})