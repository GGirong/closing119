<template>
    <div class="main-container">

        <PartnersHeader />

        <Breadcrumb :items="items" title="견적 상세 보기"/>
        
        <PartnersEstDetailWrapper 
        :estData="clientData"
        /> 
        <div class="container">
            <div class="row row-10 section-space--bottom--40">
                <div class="input-title col-3" style="text-align: center">
                    공사내용
                </div>
                <div class="input-title col-3" style="text-align: center">
                    공급가
                </div>
                <div class="input-title col-3" style="text-align: center">
                    부가세
                </div>
                <div class="input-title col-3" style="text-align: center">
                    총금액
                </div>
                <div class="input-title col-3" style="text-align: center; margin-top:10px">
                    <input class="form-control" name="up2" type="text" placeholder="" v-model="estData.prices_data.content">
                </div>
                <div class="input-title col-3" style="text-align: center; margin-top:10px">
                    <input class="form-control" name="up2" type="text" placeholder="" v-model="estData.prices_data.supply_price">
                </div>
                <div class="input-title col-3" style="text-align: center; margin-top:10px">
                    <input class="form-control" name="up2" type="text" readonly placeholder="">
                </div>
                <div class="input-title col-3" style="text-align: center; margin-top:10px">
                    <input class="form-control" name="up2" type="text" readonly placeholder="">
                </div>

            </div>
        </div>
        
        <div style="text-align: center; margin-bottom: 50px">
            <button class="confirmButton" style="margin: 0 auto;" v-if="estStatus" @click="makeEst">작성하기</button>
            <button class="closeButton"  style="margin: 0 auto; cursor: default" v-if="!estStatus" >선정 대기 중</button>
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
    import PartnersEstDetailWrapper from '../components/sections/PartnersEstDetailWrapper'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    import axios from 'axios'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            PartnersHeader,
            Breadcrumb,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu,
            PartnersEstDetailWrapper,
        },
        data() {
            return {
                items: [
                    {
                        text: '견적 요청서를 확인하고 오프라인 미팅 후 견적서를 작성해주세요.'
                    },
                    {
                        text: ''
                    }
                ],
                clientData: {},
                estData: {
                    detail: "잘부탁드립니다.",
                    prices_data: [
                        {
                            content: "폐업119",
                            supply_price: 1200
                        }
                    ]
                },
                estStatus: true
            } 
        },
        methods: {
            setEst() {

            },
            async makeEst() {
                await axios.patch('http://tmdgud1112.pythonanywhere.com/api/estimate/' + this.getPartner+ '/', this.estData).then(res=>{
                    this.estStatus = false
                })
            },

        },
        async mounted() {
            console.log("디테일 마운티드")
            await axios.get('http://tmdgud1112.pythonanywhere.com/api/estimate/' + this.getPartner, ).then(res=>{
                if(res.data.status == "B") {
                    this.clientData = res.data

                }
                else if(res.data.status == "S") {
                    this.clientData = res.data
                    this.estStatus = false
                }
                
            })
        },
        computed: mapGetters([
            'getPartner',
            'getPartnerLogin',
        ]),
        metaInfo: {
            title: 'Castro - Contact Us',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

