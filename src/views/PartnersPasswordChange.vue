<template>
    <div class="main-container">

        <PartnersHeader />

        <Breadcrumb :items="items" title="비밀번호 변경"/>
        <div class="page-wrapper section-space--inner--60">
            <div class="container">
                <div class="contact-form">
                    <div class="row row-10">
                        <div v-if="!find" class="input-title col-md-4 col-12  section-space--bottom--20">
                            현재 비밀번호
                        </div>
                        <div v-if="!find" class="col-md-4 col-12  section-space--bottom--20">
                            <input class="form-control" name="con_name" type="password" placeholder="" v-model="passwordData.now_password">
                        </div>
                        <div v-if="!find" class="line"></div>
                        <div class="input-title col-md-4 col-12  section-space--bottom--20">
                            새로운 비밀번호
                        </div>
                        <div class="col-md-4 col-12  section-space--bottom--20">
                            <input class="form-control" name="con_name" type="password" placeholder="" v-model="passwordData.new_password">
                        </div>
                        <div class="line"></div>
                        <div class="input-title col-md-4 col-12  section-space--bottom--20">
                            새로운 비밀번호 확인
                        </div>
                        <div class="col-md-4 col-12  section-space--bottom--20">
                            <input class="form-control" name="con_name" type="password" placeholder="" v-model.lazy="passwordCheck">
                            <div v-if="passwordCheck && passwordData.new_password != passwordCheck" class="password-validation">비밀번호 확인이 일치하지 않습니다.</div>
                        </div>
                    </div>

                    <div style="margin:0 auto; text-align: center">
                        <button class="hero-slider__btn" style="width:350px; height:60px; font-size:21px; font-weight: 400"
                        @click="changePassword"
                        >비밀번호 변경하기</button>
                    </div>
                </div>
                
            </div>
        </div>
        
        
        

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

    import axios from 'axios'
    import { mapGetters } from 'vuex'

    export default {
        props: {
            username: {
                type: String,
                default : ''
            },
            find: {
                type: Boolean,
                default: false
            }
        },
        components: {
            PartnersHeader,
            Breadcrumb,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu,
            PartnersEstimatingWrapper,
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
                passwordData: {
                    now_password: null,
                    new_password: null,
                },
                passwordCheck: null
            } 
        },
        computed: mapGetters([
            'getPartner',
            'getPartnerLogin',
        ]),
        methods: {
            async changePassword() {
                if(this.find) {
                    var partnerData = {}
                    partnerData.username = this.username
                    partnerData.password = this.passwordData.new_password
                    axios.post('https://new-api.closing119.com/api/nologinpw/', partnerData).then(res=>{
                        alert("정상적으로 변경되었습니다. 바뀐 비밀번호로 다시 로그인 해주세요!")
                        this.$router.push('/partners')
                        this.$store.commit('setPartnerLogout')
                    })
                }
                else {
                    var loginData = {}
                    loginData.username = this.username
                    loginData.password = this.passwordData.now_password
                    axios.post('https://new-api.closing119.com/api/login/', loginData).then(res => {
                        var partnerData = {}
                        partnerData.password = this.passwordData.new_password

                        axios.patch('https://new-api.closing119.com/api/partner/' + this.getPartner + '/', partnerData).then(res=>{
                            alert("정상적으로 변경되었습니다. 바뀐 비밀번호로 다시 로그인 해주세요!")
                            this.$router.push('/partners')
                            this.$store.commit('setPartnerLogout')
                        })
                    })
                    .catch((err) => {
                        if(err.response.data.code=="WRONG_PASSWORD") {
                            alert("기존 비밀번호가 틀렸습니다. 다시 한 번 확인해주세요.")
                        }
                    })
                }
                
            }
        },
        metaInfo: {
            title: '폐업119 - 파트너스',
            htmlAttrs: {
                lang: 'kor',
                amp: true
            }
        }
    }
</script>

