<template>
  <div>
    <Header />

    <Breadcrumb :items="items" title="견적서 작성하기" />

    <ClientReqInputForm @register="registerDone" />

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
import ClientReqInputForm from "../components/ClientReqInputForm";
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
    ClientReqInputForm,
  },
  data() {
    return {
      data,
      items: {
        text1:
          "전국 272개의 검증된 폐업119 전문협력업체를 통해 최적의 공사비용을 제공!",
        text2: "보다 빠르고 정확한 철거원상복구를 시행할 수 있도록 지원합니다.",
        image: "assets/img/backgrounds/slider1.jpg",
      },
      clientData: [],
    };
  },
  methods: {
    registerDone(code, pk) {
      console.log("레지스터 메서드");
      this.kakaoToPartnerEstMake(pk);
      this.$router.push("/clientcheck/" + code);
    },
    async kakaoToPartnerEstMake(pk) {
      console.log("카카오톡 메서드");
      var kakaoData = {
        id: 1,
        pk: pk,
      };
      console.log(kakaoData);
      await axios
        .post("https://new-api.closing119.com/api/kakaoapi/", kakaoData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
