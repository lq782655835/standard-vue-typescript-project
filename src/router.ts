import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig } from 'vue-router'
import Index from './pages/index.vue' // 首页不做异步组件

Vue.use(Router)
const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./pages/about.vue')
    }
]

const router: Router = new Router({
    routes
})
export default router
