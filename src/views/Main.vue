<template>
  <div>
    <Header />

    <HeroOne :sliderData="data.heroOne" />

    <MainDesign />

    <FunFact />

    <LatestProject />

    <Footer />

    <ClientOffCanvas />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Feature from "../components/Feature";
import MainDesign from "../components/MainDesign";
import HeroOne from "../components/sections/HeroOne";
import MainMapPage from "../components/sections/MainMapPage";
import FunFact from "../components/FunFact";
import LatestProject from "../components/sections/LatestProject";
import Footer from "../components/Footer";
import ClientOffCanvas from "@/components/ClientOffCanvas";

import data from "../data/slider.json";
export default {
  data() {
    return {
      data,
    };
  },
  components: {
    Header,
    HeroOne,
    Feature,
    MainMapPage,
    FunFact,
    LatestProject,
    Footer,
    ClientOffCanvas,
    MainDesign,
  },
  metaInfo: {
    title: "폐업119",
    htmlAttrs: {
      lang: "ko-KR",
      amp: true,
    },
  },
};
</script>
