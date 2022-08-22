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
        name : Home,
        component : Home
    },
    {
        path:'/board/list',
        name : List,
        component : List
    },
    {
        path:'/board/bookmark',
        name : Bookmark,
        component : Bookmark
    },
    {
        path:'/board/write',
        name : Write,
        component : Write
    },
    {
        path:'/board/detail',
        name : Detail,
        component : Detail
    },
    {
        path:'/board/modify',
        name : Modify,
        component : Modify
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router