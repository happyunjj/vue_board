import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/components/Home';
import List from '@/components/board/List';
import Bookmark from '@/components/board/Bookmark';
import Write from '@/components/board/Write';
import Detail from '@/components/board/Detail';
import Modify from '@/components/board/Modify';

const routes = [
    {
        path:'/',
        component : Home
    },
    {
        path:'/board/list',
        component : List
    },
    {
        path:'/board/bookmark',
        component : Bookmark
    },
    {
        path:'/board/write',
        component : Write
    },
    {
        path:'/board/:bno',
        component : Detail
    },
    {
        path:'/board/modify/:bno',
        component : Modify
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router