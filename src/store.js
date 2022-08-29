import { createStore } from "vuex"
import router from '@/router'
import axios from 'axios'

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
                state.bookmark.unshift(row);
                state.bnos.unshift(row.bno);
                axios.get("//localhost:8081/board/bookmark/"+row.bno)
                .catch(error => {
                    let errorStatus = error.response.status;
                    alert(errorStatus+' : 오류가 발생했습니다 !!');
                });
            } else {
                for (let i = 0; i < state.bnos.length; i++) {
                    if (row.bno == state.bnos[i]){
                        state.bookmark.splice(i,1);
                        state.bnos.splice(i,1);
                    }
                }
                axios.delete("//localhost:8081/board/bookmark/"+row.bno)
                .catch(error => {
                    let errorStatus = error.response.status;
                    alert(errorStatus+' : 오류가 발생했습니다 !!');
                });
            }
        },
        setCategory(state,category){
            state.category = category;
        },
        setBookmark(state,row) {
            state.bookmark.push(row);
            state.bnos.push(row.bno);
        }
    }
})