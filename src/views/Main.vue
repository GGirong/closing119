<template>
    <div>

        <Header />

        <HeroOne :sliderData="data.heroOne" />

        <MainDesign />

        <FunFact />

        <LatestProject />

        <Footer />

        <ClientOffCanvas />

        <!-- back to top start -->
        <back-to-top class="scroll-top" bottom="60px">
            <i class="ion-android-arrow-up"></i>
        </back-to-top>
        <!-- back to top end -->
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Feature from '../components/Feature';
    import MainDesign from '../components/MainDesign';
    import HeroOne from '../components/sections/HeroOne';
    import MainMapPage from '../components/sections/MainMapPage';
    import FunFact from '../components/FunFact';
    import AboutSection from '../components/sections/AboutSection';
    import LatestProject from '../components/sections/LatestProject';
    import TeamJob from '../components/sections/TeamJob';
    import Testimonial from '../components/Testimonial';
    import BlogSection from '../components/sections/BlogSection';
    import BrandCarousel from '../components/BrandCarousel';
    import Footer from '../components/Footer';
    import ClientOffCanvas from '@/components/ClientOffCanvas'

    import data from '../data/slider.json'
    export default {
        data () {
            return {
                data
            }
        },
        components: {
            Header,
            HeroOne,
            Feature,
            MainMapPage,
            FunFact,
            AboutSection,
            LatestProject,
            TeamJob,
            Testimonial,
            BlogSection,
            BrandCarousel,
            Footer,
            ClientOffCanvas,
            MainDesign 
        },
        metaInfo: {
            title: 'Castro - Home One',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>
