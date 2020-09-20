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
                                        아이디
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input class="form-control" name="up" type="text" placeholder="" v-model="loginData.username">
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        비밀번호
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input class="form-control" name="con_name" type="password" placeholder="" v-model="loginData.password">
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
                    username: "",
                    password: ""
                },
                estData: {}
            }
        },
        methods: {
            async login() {
                await axios.post('http://tmdgud1112.pythonanywhere.com/api/login/', this.loginData).then(res => {
                    console.log(res)
                    this.$emit('setLoginData', res.data.id)
                })
                .catch((err) => {
                    if(err.response.data.code=="WRONG_USERNAME") {
                        alert("아이디가 틀렸습니다. 다시 한 번 확인해주세요.")
                    }
                    else if(err.response.data.code=="ADMISSION_FAILED") {
                        alert("파트너스 신청중입니다. 관리자에게 문의하세요.")
                    }
                    else if(err.response.data.code=="WRONG_PASSWORD") {
                        alert("비밀번호가 틀렸습니다. 다시 한 번 확인해주세요.")
                    }
                })
            },
    }
}
</script>