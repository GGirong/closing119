<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="견적서 확인하기" />
         <div v-if="!getClientLogin">
            <ClientLoginInputForm 
                :estData="estData"
                @setEstData="setEstData"
                @setClientStatus="setClientStatus" 
                @login="loginMounted"
            />
        </div>

        <div v-if="getClientLogin&& clientStatus == 'X'">
            <ClientXCheck
            :estData="estData"
            />
        </div>

        <div v-if="getClientLogin && clientStatus == 'S' ">
            <ClientCheckWrapper 
                :estData="estData" 
                @setstatus="setClientStatus"
                />
        </div>

        <div v-if="getClientLogin && clientStatus == 'D'">
            <ClientDCheck
            :estData="estData" 
            />
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
    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import ClientCheckWrapper from '../components/sections/ClientCheckWrapper'
    import ClientLoginInputForm from '../components/ClientLoginInputForm'
    import ClientXCheck from '../components/ClientXCheck'
    import ClientDCheck from '../components/ClientDCheck'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    import EventBus from '../main.js'
    import axios from 'axios'
    import { mapGetters } from 'vuex'

    export default {
        props: ['id'],
        components: {
            Header,
            Breadcrumb,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu,
            ClientCheckWrapper,
            ClientLoginInputForm,
            ClientXCheck,
            ClientDCheck
        },
        data() {
            return {
                items: [
                    {
                        text: '업체에서 제출한 견적서를 비교하여 업체 선정을 진행해주세요.'
                    },
                    {
                        text: ''
                    }
                ],
                estData: {},
                isLogin: false,
                clientStatus: false
            } 
        },
        methods: {
            setEstData (data) {
                this.estData = data
            },
            loginMounted () {
                this.$store.commit('setClientLogin')
            },
            setClientStatus(code) {
                this.clientStatus = code
                console.log(this.clientStatus)
            }
        },
        computed: mapGetters([
            'getClient',
            'getClientLogin',
            'setClientLogin',
            'setClient'
        ]),
        metaInfo: {
            title: 'Castro - Contact Us',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        },
        async mounted () {
            if(this.id == 'homepage') {
                console.log("파라미터 전송 성공")
            }
            else {
                await axios.get('http://tmdgud1112.pythonanywhere.com/api/clientcheck/', {params: {verify_code: this.id}}).then(res=>{
                    console.log(res)
                    if(res.data.msg == "STATUS_X") {
                        this.estData = res.data.results
                        this.clientStatus = 'X'
                        this.loginMounted()
                    }
                    else if(res.data.msg == "STATUS_S") {
                        this.estData = res.data.results
                        this.clientStatus = 'S'
                        this.loginMounted()
                    }
                    else if(res.data.msg == "STATUS_D") {
                        this.estData = res.data.results
                        this.clientStatus = 'D'
                        this.loginMounted()
                    }
                    else if(res.data.msg == "STATUS_C") {
                        this.estData = res.data.results
                        this.clientStatus = 'C'
                        this.loginMounted()
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

