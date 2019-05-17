import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [
    {
        path: '/',
        component: () => import('@/components/pages/Home.vue'),
        name: 'home',
        
    },
    {
        path: '/news',
        name: 'PageNews',
        component: () => import('@/components/pages/news/New.vue'),        
    },
    {
        path: '/news/news-detail',
        name: 'NewsDetail',
        component: () => import('@/components/pages/news/NewDetail.vue')
    },
    
];

export default new Router({
    mode: 'history',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
});