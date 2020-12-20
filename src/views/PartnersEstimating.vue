<template>
  <div>
    <PartnersHeader class="partenr-header-pc" />
    <WrapperHeader :screen="'estimating'" class="partner-header-mobile" />

    <PartnersEstimatingWrapper />

    <OffCanvasMobileMenu />

    <Footer />
    <!-- back to top start -->
    <back-to-top class="scroll-top" bottom="60px">
      <i class="ion-android-arrow-up"></i>
    </back-to-top>
    <!-- back to top end -->
  </div>
</template>

<script>
import PartnersHeader from "@/components/PartnersHeader";
import WrapperHeader from "../components/WrapperHeader";

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
    BrandCarousel,
    FixFooter,
    Footer,
    OffCanvasMobileMenu,
    PartnersEstimatingWrapper,
  },
  data() {
    return {
      items: {
        text1: "전국의 견적요청서를 실시간으로 처리해보세요.",
        text2: "",
        image: "assets/img/backgrounds/slider3.jpg",
      },
      estData: null,
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
