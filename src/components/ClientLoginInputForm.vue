<template>
    <div class="page-wrapper section-space--inner--60">
        <!--Contact section start-->
        <div class="conact-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-12">
                        <div class="contact-form">
                            <div style="height: 25px;"></div>
                            <h4>로그인 정보</h4>
                            <div style="height: 20px;"></div>
                                <div class="row row-10">
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        연락처 (숫자만 입력)
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input class="form-control" name="up" type="text" placeholder="" v-model="loginData.phone_num" @keyup.enter="login">
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        비밀번호
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input class="form-control" name="con_name" type="password" placeholder="" v-model="loginData.password" @keyup.enter="login">
                                    </div>
                                    
                                    <div class="line"></div>
                                </div>
                                
                            <p class="form-message"></p>
                            <div style="margin:0 auto; text-align: center">
                                <button class="hero-slider__btn" 
                                style="width:350px; height:60px; font-size:21px; font-weight: 400"
                                @click="login"
                                >견적서 확인하기</button>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!--Contact section end-->
    </div>
</template>

<script>

    import axios from "axios";
    export default {
        data () {
            return {
                loginData: {
                    phone_num: "",
                    password: ""
                },
                estData: {}
            }
        },
        methods: {
            validEmail: function(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            async login() {
                await axios.post('https://new-api.closing119.com/api/clientlogin/', this.loginData).then(res => {
                    if(res.data.msg == "STATUS_X") {
                        this.$emit('setEstData', res.data.results)
                        this.$emit('setClientStatus', 'X')
                        this.$emit('login')
                    }
                    else if(res.data.msg == "STATUS_S") {
                        this.$emit('setEstData', res.data.results)
                        this.$emit('setClientStatus', 'S')
                        this.$emit('login')
                    }
                    else if(res.data.msg == "STATUS_D") {
                        this.$emit('setEstData', res.data.results)
                        this.$emit('setClientStatus', 'D')
                        this.$emit('login')
                    }
                    else if(res.data.msg == "STATUS_C") {
                        this.$emit('setEstData', res.data.results)
                        this.$emit('setClientStatus', 'C')
                        this.$emit('login')
                    }
                    
                })
                .catch((err) => {
                    if(err.response.data.code=="WRONG_USERNAME") {
                        alert("연락처가 틀렸습니다. 다시 한 번 확인해주세요.")
                    }
                    else if(err.response.data.code=="WRONG_PASSWORD") {
                        alert("비밀번호가 틀렸습니다. 다시 한 번 확인해주세요.")
                    }
                })
            },
    }
}
</script>