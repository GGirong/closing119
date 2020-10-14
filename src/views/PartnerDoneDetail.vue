<template>
  <div class="main-container">
    <PartnersHeader class="partenr-header-pc" />
    <WrapperHeader :screen="'done'" class="partner-header-mobile" />

    <Breadcrumb :items="items" title="완료된 견적 상세보기" />

    <div class="page-wrapper section-space--inner--60">
      <div class="project-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="project-item-wrapper section-space--bottom--40">
                <div style="border: 1px solid #d4d4d4; padding: 25px">
                  <div
                    style="font-size:24px; font-weight:500; margin-bottom:15px"
                  >
                    {{ clientData.client_name }}님의 견적 요청서
                  </div>
                  <div style="margin-left:15px">
                    연락처:
                    <span style="margin-left:45px">{{
                      clientData.phone_num
                    }}</span>
                  </div>
                  <div style="margin-left:15px">
                    상호:
                    <span style="margin-left:45px">{{
                      clientData.business_name
                    }}</span>
                  </div>
                  <div style="margin-left:15px">
                    주소:
                    <span style="margin-left:45px">{{
                      clientData.address
                    }}</span>
                  </div>
                  <div style="margin-left:15px">
                    평수:
                    <span style="margin-left:45px">{{ clientData.py }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="project-item-wrapper">
        <div class="row">
          <div
            class="col-lg-12 col-sm-12 col-12 section-space--bottom--30"
            v-for="est in estData"
            :key="est.id"
          >
            <DoneDetailGrid :estData="est" />
          </div>
        </div>
      </div>
    </div>

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
import PartnersHeader from "@/components/PartnersHeader";
import WrapperHeader from "../components/WrapperHeader";

import Breadcrumb from "../components/Breadcrumb";
import DoneDetailGrid from "../components/DoneDetailGrid";
import PartnersEstDetailWrapper from "../components/sections/PartnersEstDetailWrapper";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";

import axios from "axios";

export default {
  props: ["clientId"],
  components: {
    PartnersHeader,
    WrapperHeader,
    Breadcrumb,
    BrandCarousel,
    Footer,
    OffCanvasMobileMenu,
    PartnersEstDetailWrapper,
    DoneDetailGrid,
  },
  data() {
    return {
      items: {
        text1: "전국의 견적요청서를 실시간으로 처리해보세요.",
        text2: "",
        image: "assets/img/backgrounds/slider3.jpg",
      },
      clientData: null,
      estData: [],
      estStatus: true,
      estFinish: true,
    };
  },
  async mounted() {
    await axios
      .get("https://new-api.closing119.com/api/clientestcomplete/", {
        params: { client: this.clientId },
      })
      .then((res) => {
        console.log(res);
        this.clientData = res.data[0].client;
        this.estData = res.data;
      });
  },
  metaInfo: {
    title: "폐업119 - 파트너스",
    htmlAttrs: {
      lang: "ko-KR",
      amp: true,
    },
  },
};
</script>
