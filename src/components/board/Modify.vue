<template>
    <div id="writeDiv">
        <h2>게시글 수정</h2>
        <form id="writeForm" @submit.prevent="update">
            <hr>
            <input type="text" name="title" class="title" v-model="title">
            <hr>
            <textarea name="content" class="content" v-model="content"></textarea>
            <p class="date">등록일 : {{ regdate }} / 최근수정일 : {{ moddate }}</p>
            <div class="btns">
                <button>수정</button><button v-on:click="goBack">취소</button>
            </div>
        </form>
    </div>
</template>

<script> 
    export default {
        data: function(){
            return {
                bno : this.$route.params.bno,
                title:'',
                content:'',
                regdate:'',
                moddate:''
            }
        },
        mounted(){
            this.read();
        },
        methods : {
            goBack(){
                this.$router.push('/board/'+this.bno);
            },
            update() {
                const board = {
                    bno:this.bno,
                    title:this.title,
                    content:this.content
                };
                if(!this.title) {
                    alert("제목을 입력해주세요.");
                    return false;
                }
                if(!this.content) {
                    alert("내용을 입력해주세요.");
                    return false;
                }
                this.$axios.put(this.$serverUrl+"/board/"+this.bno,board).then((res)=>{
                    this.goBack();
                }).catch(error => {
                    let errorStatus = error.response.status;
                    alert(errorStatus+' : 오류가 발생했습니다 !!');
                });
            },
            read(){
                this.$axios.get(this.$serverUrl+"/board/"+this.bno).then((res)=>{
                    this.title = res.data.title;
                    this.content = res.data.content;
                    this.regdate = res.data.regdate;
                    this.moddate = ( res.data.moddate == null? '없음' : res.data.moddate );
                }).catch(error => {
                    let errorStatus = error.response.status;
                    alert(errorStatus+' : 오류가 발생했습니다 !!');
                });
            }
        }
    }
</script>

<style scoped>
    #writeDiv { width:1000px; margin:30px auto 0 auto;}
    .title,.content { display:block; width:98%; margin:auto;}
    hr { width:100% }
    .content { resize:none; height: 400px; }
    .btns { margin-top : 8px; clear:right;}
    .btns button:last-child { margin-left:4px;}
    .date { float: right; margin-right : 8px;}
</style>