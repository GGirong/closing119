<template>
    <div class="main-container">

        <PartnersHeader />

        <Breadcrumb :items="items" title="프로필 수정하기"/>
        
        <PartnersProfileForm />

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
    import PartnersProfileForm  from '../components/sections/PartnersProfileForm'
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
            PartnersProfileForm,
        },
        data() {
            return {
                items: [
                    {
                        text: '파트너스 정보를 수정할 수 있습니다.'
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

