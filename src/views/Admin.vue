<template>
  <div style="width:100%; height:100%;">
    <Breadcrumb
      :items="items"
      title="폐업119 관리자 페이지"
    />
    <div v-if="!isLogin">
      <AdminLoginInputForm @setLoginData="setLoginData" />
    </div>
    <div
      v-if="isLogin"
    >
      <AdminWrapper/>
    </div>

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
import AdminWrapper from "../components/sections/AdminWrapper";
import AdminLoginInputForm from "../components/AdminLoginInputForm";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";
import FixFooter from "../components/FixFooter";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";

import MapModal from "../components/MapModal";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  components: {
    PartnersHeader,
    Breadcrumb,
    BrandCarousel,
    FixFooter,
    Footer,
    OffCanvasMobileMenu,
    AdminWrapper,
    AdminLoginInputForm,
    MapModal,
    WrapperHeader,
  },
  data() {
    return {
      items: {
        text1: "",
        text2: "",
        image: "assets/img/backgrounds/slider3.jpg",
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
    setLoginData() {
      this.isLogin = true
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
  },
  mounted() {
  },
  metaInfo: {
    title: "폐업119 - 관리자",
    htmlAttrs: {
      lang: "ko-KR",
      amp: true,
    },
  },
};
</script>

<style>
.confirmButton {
  max-width: 200px;
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
  max-width: 200px;
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
}
</style>


