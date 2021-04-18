<template>
    <div id="content" style="flex:1; padding:20px;">

                
                 <Breadcrumb style="margin:10px;">
                    <BreadcrumbItem to="/home/MainPage">Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>

                    <BreadcrumbItem>Table</BreadcrumbItem>
                </Breadcrumb>

                 <Table :columns="historyColumns" :data="historyData"></Table>

                
      <Page :total="dataCount" :page-size="pageSize"  class="paging" @on-change="changepage"></Page>
    </div>
    
</template>

<script>
    let testData = {
        "histories": [
            {
                "username": "test888",
                "shenpistatus": "審查通過",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-24 18:11"
            },
            {
                "username": "test888",
                "shenpistatus": "審查通過",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-24 18:11"
            },
            {
                "username": "test888",
                "shenpistatus": "審查通過",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-24 10:04"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "  lorem dolro foira metri  id ooo id fd",
                "time": "2017-07-24 10:03"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "  lorem dolro foira metri  id ooo id fd",
                "time": "2017-07-24 10:02"
            },
            {
                "username": "test888",
                "shenpistatus": "審查通過",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-24 10:02"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-24 10:01"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-24 09:56"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "  lorem dolro foira metri  id ooo id fd && ",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "  lorem dolro foira metri  id ooo id fd && ",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "  lorem dolro foira metri  id ooo id fd && ",
                "time": "2017-07-21 14:23"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "  lorem dolro foira metri  id ooo id fd && ",
                "time": "2017-07-21 14:21"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-21 14:21"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-21 14:20"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "  lorem dolro foira metri  id ooo id fd && ",
                "time": "2017-07-21 14:20"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-21 14:14"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-21 14:13"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-21 14:11"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-21 14:10"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "  lorem dolro foira metri  id ooo id fd && ",
                "time": "2017-07-20 18:09"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "  lorem dolro foira metri  id ooo id fd && ",
                "time": "2017-07-20 18:08"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "  lorem dolro foira metri  id ooo id fd && ",
                "time": "2017-07-20 18:08"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-20 18:07"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-20 18:05"
            },
            {
                "username": "test888",
                "shenpistatus": "審查通過",
                "shenpicomments": "wedfqw",
                "time": "2017-07-20 15:50"
            },
            {
                "username": "test888",
                "shenpistatus": "審查通過",
                "shenpicomments": "wedfqw",
                "time": "2017-07-20 15:20"
            },
            {
                "username": "test888",
                "shenpistatus": "審查失敗",
                "shenpicomments": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, recusandae!",
                "time": "2017-07-19 18:27"
            }
        ]
    }
    export default {
        data () {
            return {
                ajaxHistoryData:[],
                
                dataCount:0,
    
                pageSize:7,
                historyColumns: [
                    {
                        title: '測試者',
                        key: 'username'
                    },
                    {
                        title: '狀態',
                        key: 'shenpistatus'
                    },
                    {
                        title: '建議',
                        key: 'shenpicomments'
                    },
                    {
                        title: '操作日期',
                        key: 'time'
                    }
 
                ],
                historyData: []
            }
        },
        methods:{
            
            handleListApproveHistory(){
 
                this.ajaxHistoryData = testData.histories
                this.dataCount = testData.histories.length;
                if(testData.histories.length < this.pageSize){
                    this.historyData = this.ajaxHistoryData;
                }else{
                    this.historyData = this.ajaxHistoryData.slice(0,this.pageSize);
                }
        
            },
            changepage(index){
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.historyData = this.ajaxHistoryData.slice(_start,_end);
            }
        },
        created(){
             this.handleListApproveHistory();
        }
    }
</script>
<style>
</style>