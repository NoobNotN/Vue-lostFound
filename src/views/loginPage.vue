<template>
    <div v-if="showOut">
        <el-container style="line-height: 5vh;">
            <el-header  style="height: 20vh;">
            </el-header>
            <el-main>
                userName<el-input prefix-icon="el-icon-user" v-model="userName" /><br>
                passWord<el-input prefix-icon="el-icon-paperclip" v-model="passWord" show-password=""/><br>
                <el-button type="primary" @click="qiuckClick"  style="margin: 1vh;width: 300px">login</el-button><br>
            </el-main>
            <el-footer>
                <div id="nav">
                    <router-link to="/createUser">createUser</router-link>
                </div>
            </el-footer>
        </el-container>
    </div>

</template>

<script>
    var _ = require('lodash');
    const axios = require('axios');
    export default {
        name: "loginPage",
        data () {
            return {
                userName: 'nwz2',
                passWord: 'niuwenze',
                showOut:false,
            }
        },
        created(){
            this.qiuckClick=_.throttle(this.goLogin,2000);
        },
        mounted(){
            let _this= this;
            setTimeout(function () {
                _this.showOut = true;
            },0)
        },
        methods: {
            alertMessage(message,type){
                this.$message({
                    message: message,
                    type: type
                });
            },
            goLogin: function () {
                axios.post('/login.php', {
                    userName: this.userName,
                    passWord: this.passWord,
                })
                    .then((response)=> {
                        let data = response.data;
                        console.log(data);
                        if (data === 0) {
                            this.alertMessage('账号或密码错误！','error');
                        } else {
                            // this.backer='id:'+data.id;
                            this.$store.commit('setToken', data.token);
                            this.$store.commit('setUserID', data.id);
                            if (this.$store.state.token) {
                                this.alertMessage('登陆成功！','success');
                                this.$router.push('/foundPage');
                            } else {
                                console.log('Token error');
                            }
                            // Vue.set(this,0,{backer:'id'+data.id});
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>
    .el-input {
        width: 300px;
        margin: 10px;
    }
</style>
