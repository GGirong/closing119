<template>
  <div>
    <PartnersHeader class="partenr-header-pc" />
    <WrapperHeader :screen="'done'" class="partner-header-mobile" />

    <Breadcrumb :items="items" title="완료된 견적 확인" />
    <div class="page-wrapper section-space--inner--120">
      <div class="project-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="project-item-wrapper">
                <div class="row" v-if="loading">
                  <div
                    class="col-lg-12 col-sm-12 col-12 section-space--bottom--30"
                    v-for="est in estData.reverse()"
                    :key="est.id"
                  >
                    <DoneGrid :estData="est" @go-detail="goDetail(est)" />
                  </div>
                  <div
                    class="col-lg-4 col-sm-6 col-12 section-space--bottom--30"
                    v-if="emptyEsting"
                    style="margin: 0 auto; text-align: center"
                  >
                    완료된 견적이 없습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MainModal
            :clientId="clientId"
            :status="status"
            v-if="modal"
            @close="closeModal"
          />
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
import DoneGrid from "../components/DoneGrid";
import PartnersHeader from "@/components/PartnersHeader";
import WrapperHeader from "../components/WrapperHeader";
import MainModal from "../components/MainModal";
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
    DoneGrid,
    MainModal,
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
  methods: {
    goDetail(est) {
      this.clientId= est.client.id
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    async getData() {
      await axios
      .get("https://new-api.closing119.com/api/complete/", {
        params: { partner: this.getPartner },
      })
      .then(res => {
        this.estData = res.data;
        if (this.estData.length > 0) {
          this.emptyEsting = false;
        }
        this.loading = true
      });
    }
  },
  async mounted() {
    if (!this.getPartnerLogin) {
      alert("로그인을 먼저 해주세요.");
      this.$router.push("/partners");
    }
    else {
      this.getData()
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
