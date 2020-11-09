<template>
    <div >
        lostName<el-input prefix-icon="el-icon-user" v-model="lostName"/><br>
        lostPlace<el-input prefix-icon="el-icon-paperclip" v-model="lostPlace"/><br>
        lostTime<el-date-picker value-format="yyyy-MM-dd" prefix-icon="el-icon-user" v-model="lostTime"/><br>
        moreText<el-input prefix-icon="el-icon-user" v-model="moreText"  /><br>
        <slot></slot>
            <el-button type="primary" @click="newLost">确 定</el-button>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: "newLost",
        data () {
            return {
                lostName: 'lostName',
                lostPlace: 'password',
                lostTime: null,
                moreText: '5252525',
            }
        },
        methods:{
            newLost(){
                const ID = this.$store.state.userID;
                axios.post('/newLost.php',{
                    losterID: ID,
                    lostName: this.lostName,
                    lostPlace: this.lostPlace,
                    lostTime: this.lostTime,
                    moreText: this.moreText,
                })
                    .then((response)=>{
                        let res = response.data;
                        this.$router.push('/loginPage');
                        console.log(res);
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
            },
        },
        mounted() {
        },

        }
</script>

<style scoped>
    .el-input{
        width: 300px;
        margin: 10px;
    }
    .el-date-picker{
        width: 300px;
        margin: 10px;
    }
</style>
