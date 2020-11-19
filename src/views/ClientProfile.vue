<template>
  <div>
    <Header />

    <Breadcrumb :items="items" title="견적서 수정하기" />

    <ClientProfileForm @register="registerDone" :clientId="clientId"/>

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
import ClientProfileForm from "../components/ClientProfileForm";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";
import ClientOffCanvas from "@/components/ClientOffCanvas";

import data from "../data/contact.json";
import axios from "axios";
export default {
    props: ["clientId"],
  components: {
    Header,
    Breadcrumb,
    BrandCarousel,
    Footer,
    ClientOffCanvas,
    ClientProfileForm,
  },
  data() {
    return {
      data,
      items: {
        text1:
          "안내에 따라 견적서를 수정하세요",
        text2: "",
        image: "assets/img/backgrounds/slider1.jpg",
      },
      clientData: [],
    };
  },
  methods: {
    registerDone(code, pk) {
      this.kakaoToPartnerEstMake(pk);
      this.$router.push("/clientcheck/" + code);
    },
    async kakaoToPartnerEstMake(pk) {
      var kakaoData = {
        id: 1,
        pk: pk,
      };
      await axios
        .post("https://new-api.closing119.com/api/kakaoapi/", kakaoData)
        .then((res) => {
        })
        .catch((err) => {
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
