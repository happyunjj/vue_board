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
            <tr v-for="(row,bno) in list" :key="bno">
                <td>{{ row.bno }}</td>
                <td><a class="title" v-on:click="this.$router.push('/board/'+row.bno)">{{ row.title }}</a></td>
                <td>{{ row.regdate }}</td>
                <td><a class="heart" v-on:click="this.$emit('clicked',row)">{{ this.$store.state.bnos.includes(row.bno)?'💗':'🤍' }}</a></td>
            </tr>
            </tbody>
        </table>
        <slot name="pagingSlot"></slot>
    </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
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