<template>
    <div>
        <table class="blist">
            <thead>
            <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>등록일시</th>
            <th>즐겨찾기</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row,bno) in boardposts" :key="bno">
                <td>{{ row.bno }}</td>
                <td><a class="title" v-on:click="goDetail(row.bno)">{{ row.title }}</a></td>
                <td>{{ row.regdate }}</td>
                <td><a class="heart" v-on:click="removeBookmark(bno,row.bno)">💗</a></td>
            </tr>
            </tbody>
        </table>
        <div class="btns">
        <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
            이전
        </button>
        <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
        <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
            다음
        </button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      pageNum: 0,
      boardposts : []
    }
  },
  created() {
    this.paginatedData();
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10
    }
  },
  methods: {
    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    },
    goDetail(bno){
      this.$router.push({
        path: './detail',
        query : {
          bno : bno
        }
      })
    },
    removeBookmark(rno,bno){
      this.$store.commit('bookmarkToggle',bno);
      this.boardposts.splice(rno,1);
    },
    paginatedData() {
      const start = this.pageNum * this.pageSize,
            end = start + this.pageSize;
      this.boardposts = this.list.slice(start, end);
    }
  },
  computed: {
    pageCount () {
      let listLeng = this.list.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;
      
      return page;
    }
  }
}
</script>

<style scoped>
  .blist {
    position : relative;
    width : 1000px;
    margin-right : auto;
    margin-left : auto;
    margin-top : 30px;
  }
  .btns {
    margin-top:30px;
    margin-bottom:30px;
  }
  .heart,.title{
    cursor:pointer;
  }
</style>