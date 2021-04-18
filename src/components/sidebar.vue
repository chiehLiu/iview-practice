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
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                統計分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和啟動</MenuItem>
                <MenuItem name="3-2">活動分析</MenuItem>
                <MenuItem name="3-3">時段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用戶留存</MenuItem>
                <MenuItem name="3-5">流失用戶</MenuItem>
            </MenuGroup>
                
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