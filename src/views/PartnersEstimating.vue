<template>
    <div class="main-container">

        <PartnersHeader />

        <Breadcrumb :items="items" title="진행 중인 견적 확인"/>
        
        <PartnersEstimatingWrapper/>

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
    export default {
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
                        text: '진행 중인 견적을 확인할 수 있습니다.'
                    },
                    {
                        text: ''
                    }
                ],
                estData: null,
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

