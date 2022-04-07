import Vue from 'vue'
import Router, {RouteConfig} from 'vue-router'
import Layout from '@/components/Layout.vue'

Vue.use(Router)
const routes: RouteConfig [] = [
    {
        path: '/',
        name: Layout.name || "Layout",
        component: Layout,
        children: []
    }
]
const router = new Router({
        mode: 'hash',
        routes
    },
)
export default router

