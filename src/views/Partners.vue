<template>
    <div class="main-container" style="width:100%; height:100%">

        <PartnersHeader 
        v-if="!getPartnerLogin"
        />

        <Breadcrumb :items="items" title="파트너스 로그인하기" v-if="!getPartnerLogin"/> 
        <div v-if="!getPartnerLogin">
            <PartnersLoginInputForm 
                @setLoginData="setLoginData"
            />
        </div>
        <div v-if="getPartnerLogin" style="width:100%; height:100%; display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    min-width: 1200px;">
            <PartnersWrapper
            @setClientData="setClientData"
            />
        </div>

        <MapModal
        :clientData="clientData"
        v-if="modal"
        @close="closeModal"
        @offmeeting="setOffMetting"
        />

        <Footer v-if="!getPartnerLogin"/>

        <OffCanvasMobileMenu 
        @godetail="goDetail"
        /> 

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
    import PartnersWrapper from '../components/sections/PartnersWrapper'
    import PartnersLoginInputForm from '../components/PartnersLoginInputForm'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    import MapModal from '../components/MapModal'
    import data from '../data/contact.json'
    import axios from 'axios'
    import { mapGetters } from 'vuex'

    export default {
        props:['id'],
        components: {
            PartnersHeader,
            Breadcrumb,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu,
            PartnersWrapper,
            PartnersLoginInputForm,
            MapModal
        },
        data() {
            return {
                data,
                items: [
                    {
                        text: '파트너스 신청 시 작성한 아이디와 비밀번호를 입력해주세요.'
                    },
                    {
                        text: ''
                    }
                ],
                clientData: {
                    address: null,
                    business_name: null,
                    client_name: null,
                    created_date: null,
                    detail_address: null,
                    id: null,
                    lat: null,
                    lng: null,
                    password: null,
                    phone_num: null,
                    py: null,
                    request: null,
                    sector: null,
                    sido: null,
                    sigungu: null,
                    verify_code: null,
                },
                userData: {},
                isLogin: false,
                modal: false,
                requestData: {
                    client: null,
                    partner: null
                }
            } 
        },
        methods: {
            setLoginData (data) {
                this.$store.commit('setPartner', data)
                this.$store.commit('setPartnerLogin')
                console.log(this.getPartner)
                console.log(this.getPartnerLogin)
            },
            setClientData (data) {
                this.clientData = data
                this.modal = true
            },
            closeModal() {
                console.log("모르는게 독") 
                this.modal = false
            },
            goDetail() {
                this.$router.push('/estimating')
            },
            async setOffMetting() {
                console.log("모르는게 약")
                console.log(this.clientData.id)
                console.log(this.getPartner)
                this.requestData.client = this.clientData.id,
                this.requestData.partner = this.getPartner

                await axios.post('https://new-api.closing119.com/api/estimate/', this.requestData).then(res=>{
                    if(res.data) {
                        console.log(res.data)
                        this.$router.push('/estimating')
                    }
                    else {
                        alert("이미 방문 요청을 진행한 고객입니다.")
                    }
                })
            }
        },
        mounted() {
            console.log(this.$store.state.partnerId)
        },
        computed: mapGetters([
            'getPartner',
            'getPartnerLogin',
        ]),
        metaInfo: {
            title: '폐업119 - 파트너스',
            htmlAttrs: {
                lang: 'kor',
                amp: true
            }
        }
    }
</script>

<style>
.confirmButton {
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 10px;
    padding: 5px 30px;
    background-color: #f0542d;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 700;
}
.closeButton {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #f0542d;
    padding: 5px 30px;
    color:  #f0542d;
    text-transform: uppercase;
    background-color: #fff;
    font-weight: 700;
}

</style>