<template>
    <el-container>
        <el-header style="text-align: center;padding-top: 0.5vh;font-size: 3.5vh">
            <el-button type="text"
                       style="margin-top: -0.5vh;margin-left: 3vw;float: left;font-size: 3vh"
                       class="el-button" @click="goBack">注销</el-button>
            <span id="screenHidden" style="margin-left: -10vh">{{topMessage}} || ID: {{userID}} </span>
            <el-button @click="goUser" style="float: right;margin-right: 1vw" icon="el-icon-user" circle></el-button>

        </el-header>
        <el-main id="main">
            <router-view></router-view>
        </el-main>

        <el-footer> </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "mainPage",
        data:function () {
            return{
                topMessage : 'mainPage',
                userID: this.$store.state.userID,
                List:true,
            }
        },
        mounted() {
            this.$router.push('/lostList');
        },
        methods:{
            goUser(){
                if(this.List){
                    this.$router.push('/userPage');
                    this.List = !this.List;
                }else{
                    this.$router.push('/lostList');
                    this.List = !this.List;
                }
            },
            goBack() {
                this.$store.commit('delToken');
                this.$router.push('/loginPage');
            },

            consoleID(){
                console.log(this.userID);
            }
        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 720px) {
        #screenHidden{
            display: none;
        }
    }
    #header p{
        margin: 0;
    }
    #main{
        border: black 0 solid;
        border-top-width: 3px;
        overflow: visible;
    }
</style>
