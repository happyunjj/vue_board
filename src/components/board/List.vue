<template>
  <div class="board-list">
    <h2>게시물 조회</h2>
    <Pagination :list="list" @clicked="clickedRow"/>
    <button v-on:click="goWrite" class="writeBtn">등록</button>
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
      this.$axios.get(this.$serverUrl+"/board/list").then((res)=>{
        this.list = res.data;
      })
    },
    goWrite() {
      this.$router.push({
        path: './write'
      })
    },
    clickedRow(bno){
      this.$store.commit('bookmarkToggle',bno);
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
</style>