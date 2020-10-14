<template>
  <div>
    <Header />

    <Breadcrumb :items="items" title="파트너스 신청하기" />

    <PartnersRegisterInputForm />

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
import Header from "@/components/Header";
import Breadcrumb from "../components/Breadcrumb";
import PartnersRegisterInputForm from "../components/PartnersRegisterInputForm";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";
import ClientOffCanvas from "@/components/ClientOffCanvas";

import data from "../data/contact.json";
import axios from "axios";
export default {
  components: {
    Header,
    Breadcrumb,
    BrandCarousel,
    Footer,
    ClientOffCanvas,
    PartnersRegisterInputForm,
  },
  data() {
    return {
      data,
      items: {
        text1: "전국의 견적요청서를 실시간으로 처리해보세요.",
        text2: "",
        image: "assets/img/backgrounds/slider3.jpg",
      },
      clientData: [],
    };
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
