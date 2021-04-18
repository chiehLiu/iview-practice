<style>
    #home{
        color:#2c3e50;
    }
    body{
        // overflow: hidden;
    }
</style>
<template>
    
    <div id="home">
            <app-header></app-header>
            <div style="display:flex; height: 100vh">
                <app-sidebar></app-sidebar>
                    
                    <router-view></router-view>
                
            </div>
    </div>

</template>
<script>
    import sidebar from'./sidebar.vue';
    import axios from'axios';
    import Table from'./table.vue';
    import header from'./header.vue';
        
        export default {
            name:"home",
        components: {
            'app-content':Table,
            'app-header':header,
            'app-sidebar':sidebar
        },
        data(){
            return {
                data1:[]
            }
        },
        created(){
            axios.get('https://jsonplaceholder.typicode.com/comments').then((res) =>{
                console.log(res.data);
                this.data1 = res.data;
            })
        }
    }
</script>