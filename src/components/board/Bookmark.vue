<template>
  <div class="board-list">
    <h2>즐겨찾기 리스트{{$store.getters.getBookmarks.length}} </h2>
	  <p v-if="this.$store.state.bookmark.length == 0">즐겨찾기한 게시물이 없습니다.</p>
    <Pagination v-else :list="paginatedData" @clicked="clickedRow">
      <template v-slot:pagingSlot>
        <div class="btns">
          <button :disabled="pageNum === 0" @click="prevPage" class="pageBtn">
              이전
          </button>
          <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
          <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="pageBtn">
              다음
          </button>
        </div>
      </template>
    </Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/board/Pagination.vue'

export default {
  data() {
    return {
      list : this.$store.getters.getBookmarks.sort(function(a,b){
        return b.bno - a.bno;
      }),
      pageNum: 0,
      pageSize: 10
    }
  },
  components : {
    Pagination
  },
  created() {
    this.setCategory();
  },
  methods : {
    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    },
    clickedRow(row){
      this.$store.commit('bookmarkToggle',row);
      this.list = this.list.filter((e)=>e.bno!=row.bno);
    },
    setCategory(){
      this.$store.commit('setCategory','bookmark');
    }
  },
  computed: {
    pageCount () {
      let totalCount = this.list.length;
      let listSize = this.pageSize;
      let page = Math.ceil(totalCount / listSize);
      return page;
    },
    paginatedData () {
      const start = this.pageNum * this.pageSize;
      const end = start + this.pageSize;
      return this.list.slice(start, end);
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
  p { margin-top : 40px; }


</style>