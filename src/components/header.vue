<template>
    <div>
        <header style="display:flex;justify-content:space-between; padding: 0 20px;background:#515a6e;align-items:center;">
        <Button  style="font-size:22px;" to="/home/MainPage">LOGO</Button>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-people" />
                <Button @click="value4 = true" style="background-color:#515a6e;color:#fff;">About me</Button>
        <Drawer :closable="false" width="640" v-model="value4">
            <p :style="pStyle">簡介</p>
            <p :style="pStyle">Personal</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        Full Name: 劉杰
                    </Col>
                    <Col span="12">
                        email: test@test.com
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        City: 台北
                    </Col>
                    <Col span="12">
                        Country: 台灣
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        Birthday: May 14, 1992
                    </Col>
                    <Col span="12">
                        Website: <a href="https://chiehliu.github.io/" target="_blank">https://chiehliu.github.io/</a>
                        </Col>
                </Row>
                Message: Hello, Developer
            </div>
            <Divider />
            <p :style="pStyle">Company</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        Position: Programmer
                    </Col>
                    <Col span="12">
                        Responsibilities:Coding
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        Department: 
                    </Col>
                </Row>
                Skills: JS, CSS, HTML, Vue.js, jQuery
            </div>
            <Divider />
            <p :style="pStyle">Contacts</p>
            <div class="demo-drawer-profile">
                <Row>
                    <Col span="12">
                        Email: test@test.com
                    </Col>
                    <Col span="12">
                        Phone Number: +86 18888888888
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                        GitHub: <a href="https://github.com/chiehLiu" target="_blank">https://github.com/chiehLiu</a>
                    </Col>
                </Row>
            </div>
        </Drawer>
        </MenuItem>
        <MenuItem name="2" to="/home/contentmanage">
            <Icon type="ios-paper"  />
            內容管理
        </MenuItem>

        <MenuItem name="3" to="/home/managepeople">
            <Icon type="ios-people" />
            人員管理
        </MenuItem>

        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-stats" />
                admin
            </template>
                
                <MenuItem name="4-1"><Button type="text"v-on:click="logout()"> 退出</Button></MenuItem>
        </Submenu>
    </Menu>
    </header>
    </div>
</template>
<script>

export default {
    data(){
        return{
            theme1: 'dark',
            value4: false,
                pStyle: {
                    fontSize: '16px',
                    color: 'rgba(0,0,0,0.85)',
                    lineHeight: '24px',
                    display: 'block',
                    marginBottom: '16px'
                }
        }   
    },methods: {
        
        logout(){
            let yes = confirm('確定要退出嗎？')
            if(yes){
                this.redirect();
            }else{
                alert('你按了取消按鈕');
            }
        
    },
    redirect(){
          this.$router.push({name:'login'})
        }}
    
}
</script>
<style>

</style>