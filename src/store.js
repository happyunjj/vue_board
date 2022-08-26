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
            console.log(state.bookmark.length);
            return state.bookmark;
        }
    },
    mutations : {
        bookmarkToggle(state,row){
            if (!state.bnos.includes(row.bno)) {
                state.bookmark.push(row);
                state.bnos.push(row.bno);
            } else {
                state.bookmark.splice(state.bnos.indexOf(row.bno),1);
                state.bnos.splice(state.bnos.indexOf(row.bno),1);
            }
        },
        setCategory(state,category){
            state.category = category;
        }
    }
})