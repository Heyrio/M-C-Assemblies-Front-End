import Vue from 'vue'
import Router from 'vue-router'
import signIn from '@/views/signIn'


Vue.use(Router)

const router = new Router({
    mode: 'history',

    routes: [{
        path: '/',
        name: 'SignIn',
        component: signIn,
    }],

})
export default router;