<template>
    <div id="detailDiv">
        <h2>게시글 조회</h2>
        <hr>
        <h4 class="title">{{ title }}</h4>
        <p class="date">등록일: {{ regdate }}</p>
        <hr style="clear:both;">
        <p class="content">{{ content }}</p>
        <div class="btns" >
            <button v-on:click="goModify">수정</button><button v-on:click="deletePost">삭제</button><button v-on:click="goList">목록</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                bno : this.$route.query.bno,
                title : '',
                content : '',
                regdate : ''
            }
        },
        mounted() {
            this.read()
        },
        methods : {
            goList(){
                this.$router.push({
                    path: './list'
                });
            },
            read(){
                this.$axios.get(this.$serverUrl+"/board/"+this.bno).then((res)=>{
                    this.title = res.data.title;
                    this.content = res.data.content;
                    this.regdate = res.data.regdate;
                })
            },
            deletePost(){
                const bno= {
                    bno:Number(this.bno)
                };
                if (confirm('해당 게시글을 삭제하시겠습니까?')){
                    this.$axios.post(this.$serverUrl+"/board/delete",bno).then((res)=>{
                        this.goList();
                    });
                } else {
                    return;
                }
            },
            goModify(){
                this.$router.push({
                    path: './modify',
                    query:{
                        bno:this.bno
                    }
                });
            }
        }
    }
</script>

<style scoped>
    #detailDiv { width:1000px; margin:30px auto 0 auto;}
    .content {
        display:block;
        width:100%;
        height : 400px;
        text-align:left;
        padding : 0 6px;
    }
    h4,.date{
        display:inline-block;
        margin : 4px 4px 12px 4px ;
    }
    h4 { float : left; }
    .date { float : right;}
    .btns button:nth-child(n+1) { margin-left:4px; }
</style>