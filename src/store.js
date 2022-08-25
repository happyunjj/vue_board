import { createStore } from "vuex"
import axios from "axios"

export default createStore({
    state : {
        bookmark:[],
        bnos: [],
        category : ''
    },
    getters : {
        getBookmarks(state){
            return state.bookmark;
        }
    },
    mutations : {
        bookmarkToggle(state,row){
            if (!state.bnos.includes(row.bno)) {
                state.bookmark.push(row);
                state.bnos.push(row.bno);
            } else {
                state.bookmark = state.bookmark.filter((e) => e !== row);
                state.bnos = state.bnos.filter((e) => e !== row.bno);
            }
        },
        setCategory(state,category){
            state.category = category;
        }
    }
})