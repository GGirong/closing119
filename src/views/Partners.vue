<template>
  <div style="width:100%; height:100%;">
    <PartnersHeader v-if="!getPartnerLogin" class="partenr-header-pc" />
    <WrapperHeader
      v-if="!getPartnerLogin"
      :screen="'login'"
      class="partner-header-mobile"
    />
    <Breadcrumb
      :items="items"
      title="파트너스 로그인하기"
      v-if="!getPartnerLogin"
    />
    <div v-if="!getPartnerLogin">
      <PartnersLoginInputForm @setLoginData="setLoginData" />
    </div>
    <div
      v-if="getPartnerLogin"
      style="width:100%; height:100%; display: flex;
    flex-direction: column;
    flex: 1 1 0%;"
    >
      <PartnersWrapper @setClientData="setClientData" />
    </div>

    <MapModal
      :clientData="clientData"
      v-if="modal"
      @close="closeModal"
      @offmeeting="setOffMetting"
    />

    <Footer v-if="!getPartnerLogin" />

    <OffCanvasMobileMenu @godetail="goDetail" />

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
import PartnersWrapper from "../components/sections/PartnersWrapper";
import PartnersLoginInputForm from "../components/PartnersLoginInputForm";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";
import FixFooter from "../components/FixFooter";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";

import MapModal from "../components/MapModal";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  components: {
    PartnersHeader,
    Breadcrumb,
    BrandCarousel,
    FixFooter,
    Footer,
    OffCanvasMobileMenu,
    PartnersWrapper,
    PartnersLoginInputForm,
    MapModal,
    WrapperHeader,
  },
  data() {
    return {
      items: {
        text1: "전국의 견적요청서를 실시간으로 처리해보세요.",
        text2: "",
        image: "assets/img/backgrounds/slider3.jpg",
      },
      clientData: {
        address: null,
        business_name: null,
        client_name: null,
        created_date: null,
        detail_address: null,
        id: null,
        lat: null,
        lng: null,
        password: null,
        phone_num: null,
        py: null,
        request: null,
        sector: null,
        sido: null,
        sigungu: null,
        verify_code: null,
      },
      userData: {},
      isLogin: false,
      modal: false,
      requestData: {
        client: null,
        partner: null,
      },
    };
  },
  methods: {
    setLoginData(data) {
      this.$store.commit("setPartner", data);
      this.$store.commit("setPartnerLogin");
    },
    setClientData(data) {
      this.clientData = data;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    goDetail() {
      this.$router.push("/estimating");
    },
    async setOffMetting() {
      (this.requestData.client = this.clientData.id),
        (this.requestData.partner = this.getPartner);

      await axios
        .post("https://new-api.closing119.com/api/estimate/", this.requestData)
        .then((res) => {
          if (res.data) {
            this.$router.push("/estimating");
          } else {
            alert("이미 방문 요청을 진행한 고객입니다.");
          }
        });
    },
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

<style>
.confirmButton {
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding: 5px 30px;
  background-color: #f0542d;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
}
.closeButton {
  width: 250px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #f0542d;
  padding: 5px 50px;
  color: #f0542d;
  text-transform: uppercase;
  background-color: #fff;
  font-weight: 700;
}
.partner-header-mobile {
  display: none;
}
@media (max-width: 1141px) {
  .partenr-header-pc {
    display: none;
  }
  .partner-header-mobile {
    display: block;
  }
  .confirmButton {
    width: 145px;
    font-size: 14px;
  }
  .closeButton {
    width: 145px;
  }
}
</style>
