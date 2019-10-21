import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Menu from './views/Menu.vue';
import Signin from './views/Signin.vue';
import Join from './views/Join.vue';
import About from './views/About.vue';
import store from './store';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                authRequired: true
            }
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: Signin
        },
        {
            path: '/join',
            name: 'join',
            component: Join
        }
    ]
});

//check if route is guarded and user is signed in
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.user) {
            next({
                path: '/sign-in'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
