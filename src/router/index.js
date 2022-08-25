import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/components/Home';


const routes = [
    {
        path:'/',
        component : Home
    },
    {
        path:'/board/list',
        component : () => import(/* webpackChunkName: "list" */ '@/components/board/List')
    },
    {
        path:'/board/bookmark',
        component : () => import(/* webpackChunkName: "bookmark" */ '@/components/board/Bookmark')
    },
    {
        path:'/board/write',
        component : () => import(/* webpackChunkName: "write" */ '@/components/board/Write')
    },
    {
        path:'/board/:bno',
        component : () => import(/* webpackChunkName: "detail" */ '@/components/board/Detail')
    },
    {
        path:'/board/modify/:bno',
        component : () => import(/* webpackChunkName: "modify" */ '@/components/board/Modify')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router