import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "NotFound" */ '../views/404.vue')
    },
    {
        path: '/',
        name: 'Main',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Main.vue')
    },
    {
        path: '/client',
        name: 'ClientReq',
        component: () => import(/* webpackChunkName: "contact" */ '../views/ClientReq.vue')
    },
    {
        path: '/partnersregister',
        name: 'PartnersRegister',
        component: () => import(/* webpackChunkName: "contact" */ '../views/PartnersRegister.vue')
    },
    {
        path: '/clientchecklogin',
        name: 'ClientCheckLogin',
        component: () => import(/* webpackChunkName: "contact" */ '../views/ClientCheckLogin.vue')
    },
    {
        path: '/clientcheck/:id',
        name: 'ClientCheck',
        props: true,
        component: () => import(/* webpackChunkName: "contact" */ '../views/ClientCheck.vue')
    },
    {
        path: '/partners',
        name: 'Partners',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Partners.vue')
    },
    {
        path: '/estimating',
        name: 'Estimating',
        props: true,
        component: () => import(/* webpackChunkName: "contact" */ '../views/PartnersEstimating.vue')
    },
    {
        path: '/estimating-detail',
        name: 'EstimatingDetail',
        props: true,
        component: () => import(/* webpackChunkName: "contact" */ '../views/PartnersEstDetail.vue')
    },
    {
        path: '/done',
        name: 'Done',
        props: true,
        component: () => import(/* webpackChunkName: "contact" */ '../views/PartnersDone.vue')
    },
    {
        path: '/done-detail',
        name: 'DoneDetail',
        props: true,
        component: () => import(/* webpackChunkName: "contact" */ '../views/PartnerDoneDetail.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        props: true,
        component: () => import(/* webpackChunkName: "contact" */ '../views/PartnersProfile.vue')
    },
    {
        path: '/pwchange',
        name: 'PwChange',
        props: true,
        component: () => import(/* webpackChunkName: "contact" */ '../views/PartnersPasswordChange.vue')
    },
    {
        path: '/authfind',
        name: 'authfind',
        props: true,
        component: () => import(/* webpackChunkName: "contact" */ '../views/PartnersAuthFind.vue')
    },
    

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

export default router
