<template>
    <div id="content" style="flex:1; padding:20px;">
        
        <div class="demo-split">
            <Breadcrumb style="margin:10px;">
                        <BreadcrumbItem to="/home/MainPage">Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Slider</BreadcrumbItem>
                    </Breadcrumb>
            <Split v-model="split3" class="split1">

                <div slot="left" class="demo-split-pane no-padding">
                    <Split v-model="split4" mode="vertical" class="split2">
                        <div slot="top" class="demo-split-pane ">
                            Top Pane
                        </div>
                        <div slot="bottom" class="demo-split-pane ">
                            Bottom Pane
                        </div>
                    </Split>
                </div>

                <div slot="right" class="demo-split-pane ">
                    Right Pane
                </div>

            </Split>
        </div>
    </div>
</template>

<script>
export default {
        data () {
            return {
                split3: 0.3,
                split4: 0.3
            }
        },
    }
</script>
<style scoped>
    .demo-split{
        height: 800px;
        width:2000px;
        // border: 1px solid #dcdee2;
    }
    
    .demo-split-pane{
        padding: 10px;
    }
    .demo-split-pane.no-padding{
        height: 800px;
        width:2000px;
        padding: 0;
    }

    .split1{
        // background-color: black;
    }
    .split2{
        background-color: grey;
    }
</style>