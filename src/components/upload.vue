<style>
    .demo-upload-list{
        display: inline-block;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
<template>
    <div>
        <Row>
            <Col span="6">
                <Card >
                    <div class="demo-upload-list" v-for="item in file">
                        <img  :src="item.src" />
                        <div class="demo-upload-list-cover">
                            <Icon type="ios-eye-outline" @click="handleView(item)"></Icon>
                            <Icon type="ios-trash-outline" @click="handleRemove(item)"></Icon>
                        </div>
                    </div>
                </Card>
            </Col>

            <Col span="12" style="margin-top: 100px;">
                <Upload
                     multiple
                    :before-upload="handleUpload"
                    :action = action
                    :format="['jpg','jpeg','png']"
                    :on-format-error="uploadFormatError"
                >
                    <Button icon="ios-cloud-upload-outline">上传附件</Button>
                </Upload>
                <Button type="success" style="width: 100px;" @click="upload()">提交</Button>
            </Col>
        </Row>


        <Modal title="View Image" width="50" v-model="viewModal" footer-hide>
            <div>
                <img :src="src" style="width: 100%"/>
            </div>
        </Modal>

    </div>
</template>

<script>

    export default {

        data() {
            return {
                // 预览图片的src
                src:'',
                // 预览图片Modal
                viewModal:false,
                // 随便写个地址
                action: 'notice/run',
                // 上传文件
                file: [],
            }
        },

        created() {

        },

        mounted() {

        },

        methods: {

            /**
             *  方法作用:  去除上传文件
             *  时间: 2018年12月12日 18:51:38
             *  创建人:  Cr
             **/
            handleRemove (file) {
                this.file.splice(this.file.indexOf(file), 1);
            },

            /**
             *  方法作用:  上传类型错误提示
             *  时间: 2018年12月12日 18:51:38
             *  创建人:  Cr
             **/
            uploadFormatError(){
                this.$Message.error('上传类型只能是jpg,jpeg,png');
            },

            /**
             *  方法作用:  预览图片
             *  时间: 2018年12月12日 18:51:38
             *  创建人:  Cr
             **/
            handleView (item) {
                this.src = item.src;
                this.viewModal = true;
            },

            /**
             *  方法作用:  获取上传文件,并去掉重复的文件
             *  时间: 2018年11月26日 18:38:13
             *  创建人:  Cr
             **/
            handleUpload (file) {
                file.src = this.convertSrc(file);
                this.file.push(file);
                // false代表不上传到action的地址，true的话会报错，因为action地址是瞎写的，action地址不写会报错。
                return false;
            },

            /**
             *  方法作用:  上传
             *  时间: 2018年11月26日 18:38:13
             *  创建人:  Cr
             **/
            upload(){
                let that = this;

                if(that.file.length == 0){
                    that.$Message.error('上传文件不能为空');
                    return;
                }

                let formData = new FormData();

                for(let i = 0; i < that.file.length; i++) {
                    formData.append('file', that.file[i]);
                }

                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data;boundary = ' + new Date().getTime()
                    }
                };

               /* that.$ajax.post('/upload',formData, config).then(response => {

                });*/

            },

            /**
             *  方法作用:  转换成SRC显示在页面上
             *  时间: 2018年11月26日 18:38:13
             *  创建人:  Cr
             **/
            convertSrc(file){
                return window.URL.createObjectURL(file);
            },

        },
    }
</script>