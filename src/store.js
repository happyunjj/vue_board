import { createStore } from "vuex"
import axios from "axios"

export default createStore({
    state : {
        bookmark:[]
    },
    getters : {
        getLength(state){
            return state.bookmark.length;
        }
    },
    mutations : {
        bookmarkToggle(state,bno){
            if (!state.bookmark.includes(bno)) {
                state.bookmark.push(bno);
            } else {
                state.bookmark = state.bookmark.filter((e) => e !== bno);
            }
        }
    }
})