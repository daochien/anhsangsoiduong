import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [
    {
        path: '/',
        component: () => import('@/components/pages/Home.vue'),
        redirect: '/home',
        name: 'app',
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/components/pages/Home.vue')
            },
            {
                path: 'news',
                name: 'News',
                component: () => import('@/components/pages/New.vue')
            }
        ]
    },
    
];

export default new Router({
    mode: 'history',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
});