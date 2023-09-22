import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/pages/Home.vue'
import BlogPage from '@/pages/Blog.vue'
import ProjectPage from '@/pages/ProjectComp.vue'
import NotFound from '@/pages/NotFound.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: HomePage
            // component: import('@/pages/Home.vue')
        },
        {
            path: '/blog',
            name: 'Blog',
            component: BlogPage,

        },
        {
            path: '/blog/:item',
            component: BlogPage,

        },
        {
            path: '/project',
            name: 'Project',
            component: ProjectPage
            // component: import('@/pages/ProjectComp.vue')
        },
        {
            path: '/project/:item',
            component: ProjectPage
            // component: import('@/pages/ProjectComp.vue')
        },
        {
            path: '/404*',
            name: 'NotFound',
            component: NotFound
            // component: import('@/pages/NotFound.vue')
        },
        {
            path: '*',
            redirect: '/404'
        },
    ],

})