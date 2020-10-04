<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="견적서 작성하기" />

        <ClientReqInputForm 
        @register="registerDone"
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

    import Header from '@/components/Header'; 
    import Breadcrumb from '../components/Breadcrumb'
    import ClientReqInputForm from '../components/ClientReqInputForm'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    import data from '../data/contact.json'
    import axios from 'axios'
    export default {
        components: {
            Header,
            Breadcrumb,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu,
            ClientReqInputForm
        },
        data() {
            return {
                data,
                items: [
                    {
                        text: '전국 272개의 검증된 폐업119 전문협력업체를 통해 최적의 공사비용을 제공!'
                    },
                    {
                        text: '보다 빠르고 정확한 철거원상복구를 시행할 수 있도록 지원합니다.'
                    }
                ],
                clientData: []
            }
        },
        methods: {
            registerDone (code) {
                this.$router.push('/clientcheck/' + code)
            }
        },
        metaInfo: {
            title: '폐업119',
            htmlAttrs: {
                lang: 'kor',
                amp: true
            }
        }
    }
</script>

