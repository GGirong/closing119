<template>
    <div class="main-container">

        <PartnersHeader />

        <Breadcrumb :items="items" title="아이디/비밀번호 찾기"/>
        
        <div class="page-wrapper section-space--inner--60">
            <div class="container">
                <div class="contact-form">
                    <div class="row">
                        <div class="row col-6">
                            <div class="col-12">
                                <span style="font-size: 21px; font-weight: 700">아이디 찾기</span> <br>
                                가입 시 입력한 이메일을 입력해주세요.
                            </div>
                            <div class="input-title col-md-4 col-12">
                                이메일
                            </div>
                            <div class="col-10  section-space--bottom--20">
                                <input class="form-control" name="con_name" type="text" placeholder="" v-model="idData.email">
                            </div>
                            <div v-if="findingId" class="line"></div>
                            <div v-if="findingId" class="input-title col-12  section-space--bottom--20">
                                해당 이메일로 가입한 아이디
                            </div>
                            <div v-if="findingId" class="col-10  section-space--bottom--20">
                                <input class="form-control" name="con_name" type="text" readonly placeholder="" v-model="id">
                            </div>
                            <div style="margin:0 auto; text-align: center">
                            <button class="hero-slider__btn" style="width:350px; height:60px; font-size:21px; font-weight: 400"
                                @click="idFind"
                                >아이디 찾기</button>
                            </div>
                        </div>
                        <div class="row col-6">
                            <div class="col-12">
                                <span style="font-size: 21px; font-weight: 700">비밀번호 찾기</span> <br>
                                비밀번호를 찾고자하는 아이디와 이메일을 입력해주세요.
                            </div>
                            <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                아이디
                            </div>
                            <div class="col-10  section-space--bottom--20">
                                <input class="form-control" name="con_name" type="text" placeholder="" v-model="pwData.username">
                            </div>
                            <div class="line"></div>
                            <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                이메일
                            </div>
                            <div class="col-10  section-space--bottom--20">
                                <input class="form-control" name="con_name" type="text" placeholder="" v-model="pwData.email">
                            </div>
                            <div class="input-title col-md-2 col-12"></div>
                            <div v-if="findingPw" class="line"></div>
                            <div v-if="findingPw" class="input-title col-md-4 col-12  section-space--bottom--20">
                                인증번호
                            </div>
                            <div v-if="findingPw" class="col-12  section-space--bottom--20">
                                <input class="form-control" name="con_name" type="text" placeholder="" v-model="authNum">
                            </div>
                            <div style="margin:0 auto; text-align: center">
                            <button v-if="!findingPw" class="hero-slider__btn" style="width:350px; height:60px; font-size:21px; font-weight: 400"
                                @click="pwFind"
                                >비밀번호 찾기</button>
                                <button v-if="findingPw" class="hero-slider__btn" style="width:350px; height:60px; font-size:21px; font-weight: 400"
                                @click="changePw"
                                >인증번호 확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Loading :active.sync="isLoading"
        :is-full-page="fullPage"
        />

        <Footer />

        <OffCanvasMobileMenu />

        <!-- back to top start -->
        <back-to-top class="scroll-top" bottom="60px">
            <i class="ion-android-arrow-up"></i>
        </back-to-top>
        <!-- back to top end -->
    </div>
</template>

<script>
    import PartnersHeader from '@/components/PartnersHeader';
    import Breadcrumb from '../components/Breadcrumb'
    import PartnersEstimatingWrapper from '../components/sections/PartnersEstimatingWrapper'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    import axios from 'axios'
    export default {
        components: {
            PartnersHeader,
            Breadcrumb,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu,
            PartnersEstimatingWrapper,
            Loading,
        },
        data() {
            return {
                items: [
                    {
                        text: ''
                    },
                    {
                        text: ''
                    }
                ],
                idData: {
                    email: null,
                },
                pwData: {
                    username: null,
                    email: null,
                },
                findingId: false,
                id: '',
                findingPw: false,
                pw: '',
                authNum: '',
                isLoading: false,
                fullPage: true,
            } 
        },
        methods: {
            async idFind() {
                await axios.post('https://new-api.closing119.com/api/recoveryid/', this.idData).then(res=>{
                    this.findingId = true
                    this.id = res.data.results
                }).catch(err=>{
                    alert('등록된 이메일 주소가 아닙니다. 다시 한 번 확인해주세요.')
                })
            },
            async pwFind() {
                this.isLoading = true
                await axios.post('https://new-api.closing119.com/api/recoverypw/', this.pwData).then(res=>{
                    this.isLoading = false
                    alert("입력하신 이메일로 인증번호가 발송되었습니다. 메일을 확인해주세요.")
                    this.findingPw = true
                }).catch(err=>{
                    if(err.response.data.code=="WRONG_USERNAME") {
                        this.isLoading = false
                        alert('등록된 아이디가 아닙니다. 다시 한 번 확인해주세요.')
                    }
                    else if(err.response.data.code=="WRONG_EMAIL") {
                        this.isLoading = false
                        alert('아이디와 이메일이 일치하지 않습니다. 다시 한 번 확인해주세요.')
                    }
                })
            },
            async changePw() {
                var checkData = {}
                checkData.username = this.pwData.username
                checkData.auth_num = this.authNum
                await axios.post('https://new-api.closing119.com/api/recoverycheck/', checkData).then(res=>{
                    alert("정상 인증되었습니다. 비밀번호 변경페이지로 안내합니다.")
                    this.$router.push({name: 'PwChange', params:{ username: this.pwData.username, find: true}})
                }).catch(err=>{
                    alert('인증번호가 일치하지 않습니다.')
                })
            }
        },
        metaInfo: {
            title: 'Castro - Contact Us',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

