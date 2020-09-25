<template>
    <div class="main-container">

        <PartnersHeader />

        <Breadcrumb :items="items" title="견적서 작성하기"/>
        
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
                    <input class="form-control" name="up2" type="text" placeholder="" v-model="estData.prices_data[0].content">
                </div>
                <div class="input-title col-3" style="text-align: center; margin-top:10px">
                    <input class="form-control" name="up2" type="text" placeholder="" v-model="estData.prices_data[0].supply_price">
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
            <button class="confirmButton" style="margin: 0 auto;" v-if="estStatus && estFinish" @click="makeEst">작성하기</button>
            <button class="closeButton"  style="margin: 0 auto; cursor: default" v-if="!estStatus && estFinish" >선정 대기 중</button>
            <button class="confirmButton"  style="margin: 0 auto; cursor: default" v-if="!estFinish" @click="finishEst">공사 완료하기</button>
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

    export default {
        props:['estId'],
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
                    detail: "",
                    prices_data: [
                        {
                            content: null,
                            supply_price: null
                        }
                    ]
                },
                estStatus: true,
                estFinish: true
            } 
        },
        methods: {
            async finishEst() {
                var estData= {
                    estimate_id: this.estId
                }
                await axios.post('http://tmdgud1112.pythonanywhere.com/api/estcomplete/', estData ).then(res=>{
                    alert("공사 완료 처리 되었습니다.")
                    this.$router.push('/done')
                })
            },
            async makeEst() {
                console.log(this.estData)
                await axios.patch('http://tmdgud1112.pythonanywhere.com/api/estimate/' + this.estId+ '/', this.estData).then(res=>{
                    this.estStatus = false
                })
            },

        },
        async mounted() {
            console.log("디테일 마운티드")
            await axios.get('http://tmdgud1112.pythonanywhere.com/api/estimate/' + this.estId, ).then(res=>{
                if(res.data.status == "B") {
                    this.clientData = res.data

                }
                else if(res.data.status == "S") {
                    this.clientData = res.data
                    this.estStatus = false
                }
                else if(res.data.status == "D") {
                    this.clientData = res.data
                    this.estFinish = false
                }
            })
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

