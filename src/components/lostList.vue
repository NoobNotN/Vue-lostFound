<template>
    <el-row>
        <div class="blockDiv" v-for="Info in lostInfo" :key="Info.lostID">
            <el-card class="lostDiv box-card" shadow="hover">
                <div slot="header" class="clearfix">
                    <span>{{Info[1]}}</span>
                    <el-popover
                        placement="bottom"
                        :title="'联系方式:'+Info[6]"
                        width="480px"
                        trigger="click"
                        :content="Info[5]"
                        >
                        <el-button slot="reference" style="float: right;padding: 1vw 0" type="text">more</el-button>
                    </el-popover>
                </div>
                <div class="pic"></div>
                <div class="text" >
                    <div class="text item tabeText">丢失地点：{{Info[2]}}</div>
                    <div class="text item tabeText">丢失时间：{{Info[3]}}</div>
                    <div class="text item tabeText">丢失者：  {{Info[4]}}</div>
                </div>
            </el-card>
        </div>
    </el-row>
</template>

<script>
    const axios = require('axios');
    export default {
        name: "Losters",
        data () {
            return {
                lostInfo:'asd',
            }
        },
        mounted(){
          this.getList();
        },
        methods:{
            getList: function (){
                axios.get('/getList.php')
                    .then((response) => {
                        this.lostInfo =response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        },
    }
</script>

<style scoped>
    .tabeText{
        margin: 5px;
    }
    .blockDiv{
        display: inline-block;
        width: 480px;
        margin: auto;
    }
    .lostDiv{
        padding:10px;
        width: 450px;
    }
    .pic{
        float: left;
        width: 150px;
        height: 150px;
        border-radius: 1vh;
        border:black 3px solid;
    }
    .text{
        margin-top: 10px;
        float: right;
        width: 220px;
    }
    @media screen and (max-width:  500px) {
        .lostDiv{
            width: 280px;
            paddind: 0 ;
        }
        .pic{
            width: 200px;
            height: 200px;
            margin: 0 20px;
        }
        .text{
            width: 220px;
        }
    }
</style>
