<template>
    <div id="content" style="flex:1; padding:20px;">
    
        <Breadcrumb style="margin:10px;">
            <BreadcrumbItem to="/home/MainPage">Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Scroll</BreadcrumbItem>
        </Breadcrumb>
        <h1 align="center" style="margin:20px;">當scroll拉到底時觸發下十個項目，必須使用滑鼠上面的滾輪</h1>
        <Scroll :on-reach-bottom="handleReachBottom" class="container" style="height:600px">
            <Card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 32px 0; width:1500px;">
                Content {{ item }}
            </Card>
        </Scroll>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            handleReachBottom () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.list1[this.list1.length - 1];
                        for (let i = 1; i < 11; i++) {
                            this.list1.push(last + i);
                        }
                        resolve();
                    }, 500);
                });
            }
        }
    }
</script>

<style>

</style>