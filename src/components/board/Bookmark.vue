<template>
  <div class="board-list">
    <h2>즐겨찾기 리스트</h2>
	  <p v-if="this.$store.getters.getLength == 0">즐겨찾기한 게시물이 없습니다.</p>
    <Pagination v-else :list="list" @clicked="clickedRow"/>
  </div>
</template>

<script>
import Pagination from './Pagination.vue'

export default {
  data() {
    return {
      list : []
    }
  },
  components : {
    Pagination
  },
  created() {
    this.getList()
  },
  methods : {
    getList() {
      if(this.$store.getters.getLength != 0){
        this.$axios.get("//localhost:8081/board/bookmark",{params:{bookmark:this.$store.state.bookmark.join(",")}}).then((res)=>{
          this.list = res.data;
        });
      } 
      else this.list=[];
    },
    clickedRow(bno){
      this.$store.commit('bookmarkToggle',bno);
      this.list = this.list.filter((e)=>e.bno!=bno);
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

</style>