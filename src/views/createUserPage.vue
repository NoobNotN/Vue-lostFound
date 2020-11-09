<template>
    <div >
        <el-header style="height: 20vh"></el-header>
        <el-main>
            userName<el-input prefix-icon="el-icon-user" v-model="userName"/><br>
            password<el-input prefix-icon="el-icon-paperclip" v-model="password"/><br>
            nameUser<el-input prefix-icon="el-icon-user" v-model="nameUser"/><br>
            userTel <el-input prefix-icon="el-icon-user" v-model="userTel" style="margin-left: 3vw" /><br>
        </el-main>
        <el-button type="primary" @click="createUser" style="margin: 1vh;width: 300px">create</el-button><br>
        <div id="nav">
            <router-link to="/loginPage">login</router-link>
        </div>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: "createUserPage",
        data: function () {
            return {
                userName: 'userName',
                password: 'password',
                nameUser: 'nameUser',
                userTel: 'userTel',
            }
        },
        methods: {
            alertMessage(message,type){
                this.$message({
                    message: message,
                    type: type
                });
            },
            createUser () {
                axios.post('/createUser.php', {
                    userName: this.userName,
                    passWord: this.password,
                    nameUser: this.nameUser,
                    userTel : this.userTel,
                })
                    .then((response)=> {
                        let data = response.data;
                        if (data === 0){
                            this.alertMessage('用户名已存在，请直接登陆');
                            this.$router.push('/loginPage');
                        }else if(data === 1){
                            this.alertMessage('注册成功！请登陆','success');
                            this.$router.push('/loginPage');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        }
    }
</script>

<style scoped>
    .el-input {
        width: 300px;
        margin: 10px;
    }
    .lostDiv{
        padding:10px;
        width: 450px;
    }

</style>
