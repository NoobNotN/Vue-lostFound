<template>
    <div>
        <el-button type="text" @click="dialogVisible = true">提交新失物</el-button>
        <el-dialog width="350px" title="提交新失物" :visible.sync="dialogVisible">
            <new-lost>
                <el-button @click="dialogVisible = false">取 消</el-button>
            </new-lost>
        </el-dialog>

        <el-table :data="Ifo" style="width: 80%;margin-left: 10%">
            <el-table-column prop="0" label="你的失物"></el-table-column>
            <el-table-column prop="1" label="失物编号"></el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="delLost(scope.$index,scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    const axios = require('axios');
    import newLost from "./newLost";
    export default {
        components: {newLost},
        name: "userPage",
        data () {
            return {
                Ifo:null,
                dialogVisible: false,

            }
        },
        methods:{
            getList(){
                const userID = this.$store.state.userID;
                axios.post('/UserList.php',{
                    userID:userID,
                })
                    .then((response)=>{
                        this.$nextTick(function () {
                            this.Ifo = response.data;
                        });
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
            },
            delLost(index,row){
                const _this = this;
                axios.post('/delList.php',{
                    lostID : row[1],
                })
                    .then(function (res){
                        console.log(res.data);
                        _this.$router.push('/loginPage');
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                },

        },
        mounted() {
            this.getList();
        }

    }
</script>

<style scoped>

    .el-input{
        width: 300px;
        margin: 10px;
    }
    .lostDiv{
        width: 450px;
    }
    @media screen and (max-width:  500px) {
        .lostDiv{
            width: 280px;
            paddind: 0 ;
        }
        .el-input{
            width: 180px;

        }
    }
</style>
