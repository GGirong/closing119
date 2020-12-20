<template>
  <div>
    <PartnersHeader class="partenr-header-pc" />
    <WrapperHeader :screen="'done'" class="partner-header-mobile" />

    <Breadcrumb :items="items" title="완료된 견적 확인" />
    <PartnersDoneWrapper />

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
import PartnersDoneWrapper from "../components/sections/PartnersDoneWrapper"
import PartnersHeader from "@/components/PartnersHeader";
import WrapperHeader from "../components/WrapperHeader";
import Breadcrumb from "../components/Breadcrumb";
import PartnersEstimatingWrapper from "../components/sections/PartnersEstimatingWrapper";
import BrandCarousel from "../components/BrandCarousel";
import FixFooter from "../components/FixFooter";
import Footer from "../components/Footer";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";

import axios from "axios";
import { mapGetters } from "vuex";

export default {
  components: {
    PartnersHeader,
    WrapperHeader,
    Breadcrumb,
    BrandCarousel,
    Footer,
    OffCanvasMobileMenu,
    PartnersEstimatingWrapper,
    PartnersDoneWrapper
  },
  data() {
    return {
      items: {
        text1: "전국의 견적요청서를 실시간으로 처리해보세요.",
        text2: "",
        image: "assets/img/backgrounds/slider3.jpg",
      },
      estData: {},
      emptyEsting: true,
      modal: false,
      status: "D",
      clientId: 0,
      loading: false,
    };
  },
  
  mounted() {
    if (!this.getPartnerLogin) {
      alert("로그인을 먼저 해주세요.");
      this.$router.push("/partners");
    }
  },
  computed: mapGetters(["getPartner", "getPartnerLogin"]),
  metaInfo: {
    title: "폐업119 - 파트너스",
    htmlAttrs: {
      lang: "ko-KR",
      amp: true,
    },
  },
};
</script>
