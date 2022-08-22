<template>
    <div>
        <table class="blist">
            <colgroup>
              <col style="width:10%">
              <col style="width:45%">
              <col style="width:30%">
              <col style="width:15%">
            </colgroup>
            <thead>
            <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>등록일시</th>
            <th>즐겨찾기</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row,bno) in paginatedData" :key="bno">
                <td>{{ row.bno }}</td>
                <td><a class="title" v-on:click="goDetail(row.bno)">{{ row.title }}</a></td>
                <td>{{ row.regdate }}</td>
                <td><a class="heart" v-on:click="this.$emit('clicked',row.bno)">{{ $store.state.bookmark.includes(row.bno)?'💗':'🤍' }}</a></td>
            </tr>
            </tbody>
        </table>
        <div class="btns">
        <button :disabled="pageNum === 0" @click="prevPage" class="pageBtn">
            이전
        </button>
        <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
        <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="pageBtn">
            다음
        </button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      pageNum: 0
    }
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
    }
  },
  computed: {
    pageCount () {
      let totalPage = this.list.length,
          listSize = this.pageSize,
          page = Math.floor(totalPage / listSize);
      if (totalPage % listSize > 0) page += 1;
      
      return page;
    },
    paginatedData () {
      const start = this.pageNum * this.pageSize,
            end = start + this.pageSize;
      return this.list.slice(start, end);
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
    border-collapse : collapse;
    border-top : 1px solid;
  }
  .blist td,th{
    border-bottom: 1px solid;
    padding : 8px
  }
  .btns {
    margin-top:30px;
    margin-bottom:30px;
  }
  .heart,.title{
    cursor:pointer;
  }
  .pageBtn:first-child {
    margin-right : 4px;
  }
  .pageBtn:last-child {
    margin-left : 4px;
  }
</style>