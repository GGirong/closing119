<template>
    <div class="main-container">

        <PartnersHeader />

        <Breadcrumb :items="items" title="완료된 견적 확인"/>
        <div class="page-wrapper section-space--inner--120">
            <div class="project-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="project-item-wrapper">
                                <div class="row">
                                    <div class="col-lg-12 col-sm-12 col-12 section-space--bottom--30" v-for="est in estData" :key="est.id">
                                        <DoneGrid 
                                        :estData="est"
                                        @go-detail="goDetail"
                                        />
                                    </div>
                                    <div class="col-lg-4 col-sm-6 col-12 section-space--bottom--30" v-if="emptyEsting" style="margin: 0 auto; text-align: center">
                                        완료된 견적이 없습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
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
    import DoneGrid from '../components/DoneGrid'
    import PartnersHeader from '@/components/PartnersHeader';
    import Breadcrumb from '../components/Breadcrumb'
    import PartnersEstimatingWrapper from '../components/sections/PartnersEstimatingWrapper'
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
            PartnersEstimatingWrapper,
            DoneGrid
        },
        data() {
            return {
                items: [
                    {
                        text: '완료된 견적을 확인할 수 있습니다.'
                    },
                    {
                        text: ''
                    }
                ],
                estData: null,
                emptyEsting: true,
                modal: false,
            } 
        },
        methods: {
            goDetail(clientId) {
                this.$router.push({name: 'DoneDetail', params: { clientId: clientId}})
            },
        },
        async mounted() {
            await axios.get('https://new-api.closing119.com/api/complete/', {params: { partner: this.getPartner}}).then(res=>{
                this.emptyEsting = false
                this.estData = res.data
                console.log(this.estData)
            })
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

