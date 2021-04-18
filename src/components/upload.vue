<template>
    <div>   
        <Breadcrumb style="margin:30px;">
            <BreadcrumbItem to="/home/MainPage">Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>

            <BreadcrumbItem>upload</BreadcrumbItem>
        </Breadcrumb>
        <Upload
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            style="margin:20px"
            >
            <div style="padding: 20px ">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>Click here to upload file</p>
            </div>
            <Modal title="View Image" width="50" v-model="viewModal" footer-hide>
                <div>
                    <img :src="src" style="width: 100%"/>
                </div>
            </Modal>
        </Upload>
    </div>
</template>
<script>
    export default {

        data(){

        return{
            viewModal:false,
        }
        }
    }
</script>