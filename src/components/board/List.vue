<template>
  <div class="board-list">
    <h2>게시물 조회</h2>
    <Pagination :list="list" @clicked="clickedRow">
    <template v-slot:pagingSlot>
      <div>
        <ul class = "pager">
          <li :class="`previous ${ prev ? '' : 'disabled' }`">
            <a v-on:click="getList(start_page-1)">&lt; 이전</a>
          </li>
          <li v-for="p in end_page-start_page+1" :key="p">
            <a :class="`${ start_page-1+p == pageNum? 'now' :''}`" v-on:click="getList(start_page-1+p)"> {{start_page-1+p}} </a>
          </li>
          <li :class="`next ${ next ? '' : 'disabled' }`">
            <a v-on:click="getList(end_page+1)">다음 &gt;</a>
          </li>
        </ul>
      </div>
    </template>
    </Pagination>
    <button v-on:click="goWrite" class="writeBtn">등록</button>
  </div>
</template>

<script>
import Pagination from '@/components/board/Pagination.vue'

export default {
  data() {
    return {
      list : [],
      page_list : [],
      start_page : 1,
      end_page : 1,
      prev : false,
      next : false,
      pageNum : 1
    }
  },
  components : {
    Pagination
  },
  mounted() {
    this.getList();
    this.setCategory();
  },
  methods : {
    getList(p) {
      const param = {pageNum:p};
      this.$axios.get(this.$serverUrl+"/board/list",{params:param}).then((res)=>{
        this.list = res.data.list;
        this.start_page = res.data.page.start_page;
        this.end_page = res.data.page.end_page;
        this.prev = res.data.page.prev; 
        this.next = res.data.page.next;
        this.pageNum = p;
      })
      .catch(error => {
        let errorStatus = error.response.status;
        alert(errorStatus+' : 오류가 발생했습니다 !!');
      });
    },
    goWrite() {
      this.$router.push({
        path: '/board/write'
      })
    },
    clickedRow(row){
      this.$store.commit('bookmarkToggle',row);
    },
    getPageList(){
      let pageArr = [];
      console.log(this.end_page);
      for (let i = this.start_page; i <= this.end_page; i++) {
        pageArr.push(i);
      }
      this.page_list = pageArr;
    },
    setCategory(){
      this.$store.commit('setCategory','list');
    }
  }
}

</script>

<style scoped>
  .board-list {
    position : relative;
    width : 1000px;
    margin-right : auto;
    margin-left : auto;
    margin-top : 30px;
  }
  .writeBtn {
    margin:10px 0;
    float:right;
  }
  .disabled {
    visibility: hidden;
  }
  .pager li {
    list-style : none;
    display: inline-block;
    cursor:pointer;
  }
  .pager li :nth-child(n+1) {
    margin-right : 10px;
  }
  .now {
    font-weight: bold;
  }
</style>