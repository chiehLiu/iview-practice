<template>
    <div>
        <Menu :theme="theme2" style="max-width:180px;height:100%;">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper" />
                    components
                </template>
                <MenuItem name="1-1" to="/home/Table">table</MenuItem>
                <MenuItem name="1-2" to="/home/Slider">Slider</MenuItem>
                <MenuItem name="1-3" to="/home/split">Split</MenuItem>
                <MenuItem name="1-4" to="/home/scroll">Scroll</MenuItem>

            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people" />
                    Update
                </template>
                <MenuItem name="2-1" to="/home/upload">Upload Img</MenuItem>
                <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            
        </Menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                theme2: 'dark'
            }
        }
    }
</script>
<style>

</style>