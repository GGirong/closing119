<template>
  <div class="main-container">
    <Header />

    <Breadcrumb :items="items" title="견적서 확인하기" />

    <ClientLoginInputForm />

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
import Header from "@/components/Header";
import Breadcrumb from "../components/Breadcrumb";
import ClientLoginInputForm from "../components/ClientLoginInputForm";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";

import data from "../data/contact.json";
import axios from "axios";
export default {
  components: {
    Header,
    Breadcrumb,
    BrandCarousel,
    Footer,
    OffCanvasMobileMenu,
    ClientLoginInputForm,
  },
  data() {
    return {
      data,
      items: [
        {
          text: "견적 요청서에 작성하신 기본 정보를 적어주세요.",
        },
        {
          text: "",
        },
      ],
      clientData: [],
    };
  },
  async mounted() {
    // const res = await axios.get(
    //     `https://new-api.closing119.com/api/user`
    // );
    // this.clientData = res;
    // console.log(this.clientData.data[0].email)
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
