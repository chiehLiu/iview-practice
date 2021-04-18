<style>

</style>
<template>

<router-view></router-view>

</template>
<script>
    
    import home from'./components/home.vue';
    

        export default {
            name:"app",
        components: {
            'app-home':home,
        },
        data(){
            return {
                
            }
        }
    }
</script>