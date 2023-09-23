import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/pages/Home.vue'
import BlogPage from '@/pages/Blog.vue'
import ProjectPage from '@/pages/ProjectComp.vue'
import NotFound from '@/pages/NotFound.vue'
import ProjectDetails from '@/pages/ProjectDetails.vue';
import BlogDetails from '@/pages/BlogDetails.vue';

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
            path: '/blogdetails',
            component: BlogDetails,
            name: 'BlogDetails'

        },
        {
            path: '/project',
            name: 'Project',
            component: ProjectPage
            // component: import('@/pages/ProjectComp.vue')
        },
        {
            path: '/project/:item',
            component: ProjectPage,
        },
        {
            path: '/projectdetails',
            component: ProjectDetails,
            name: 'ProjectDetails'
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