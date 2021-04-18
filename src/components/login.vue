<template>
    <div id="login">
         <div style="background:#eeeeee;">
        
            <Row type="flex" justify="center">
                <Col span="8" style="height:150px;"></Col>
            </Row>

            <Row type="flex" justify="center">
                <Col span="8" style="height:600px;">
                    <Layout>
                        <Content style="display:flex;justify-content:center;background:#eeeeee">
                            <Card class="Card">
                                <br>
                                <h1 style="text-align: center;font-size:32px;">Login Page</h1>
                                <h5 style="text-align: center;">名稱密碼可以任意輸入進入homepage</h5>
                                <br>
                                <div style="background-color:#dddddd;height:2px;"></div>
                                <br>
                                <Form class="Form" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                                    <FormItem label="輸入名稱" prop="name" >
                                        <Input v-model="formValidate.name" placeholder="Username"></Input>
                                    </FormItem>
                                    <FormItem label="密碼" prop="password">
                                        <Input type="password" v-model="formValidate.password" placeholder="Password"></Input>
                                    </FormItem>

                                    <FormItem>
                                        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                                        <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                                    </FormItem>
                                </Form>
                            </Card>
                        </Content>
                    </Layout>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Login',
        data () {
            
            return {
                formValidate: {
                    name: '',
                    password: '',
                    g: 'a',
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '名稱不能為空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密碼不能為空', trigger: 'blur' },
                    ],
                    g: [
                        { required: true, message: '', trigger: 'change' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.redirect();;
                    } else {
                        this.$Message.error('輸入錯誤請檢查！');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            redirect(){
                this.$router.push({name:'homepage'})
            }
        
        }
    }
</script>

<style  scoped>
.Card{ 
    border-radius:30px;
    width: 370px;
    box-shadow: 5px 5px 5px 5px #cccccc; 
}
.Form{
    padding: 5%;
}
</style>