<template>
  <div>
    <Header />

    <Breadcrumb :items="items" title="견적서 확인하기" />
    <div v-if="!getClientLogin">
      <ClientLoginInputForm
        :estData="estData"
        @setEstData="setEstData"
        @setClientStatus="setClientStatus"
        @login="loginMounted"
      />
    </div>

    <div v-if="getClientLogin && getClientStatus == 'X'">
      <ClientXCheck :estData="estData" />
    </div>

    <div v-if="getClientLogin && getClientStatus == 'S'">
      <ClientCheckWrapper :estData="estData" @setstatus="setClientStatus" />
    </div>

    <div v-if="getClientLogin && getClientStatus == 'D'">
      <ClientDCheck :estData="estData" />
    </div>

    <div v-if="getClientLogin && getClientStatus == 'C'">
      <ClientCCheck :estData="estData" />
    </div>
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
import ClientCheckWrapper from "../components/sections/ClientCheckWrapper";
import ClientLoginInputForm from "../components/ClientLoginInputForm";
import ClientXCheck from "../components/ClientXCheck";
import ClientDCheck from "../components/ClientDCheck";
import ClientCCheck from "../components/ClientCCheck";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";
import FixFooter from "../components/FixFooter";
import ClientOffCanvas from "@/components/ClientOffCanvas";

import EventBus from "../main.js";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  components: {
    Header,
    Breadcrumb,
    BrandCarousel,
    Footer,
    FixFooter,
    ClientOffCanvas,
    ClientCheckWrapper,
    ClientLoginInputForm,
    ClientXCheck,
    ClientDCheck,
    ClientCCheck,
  },
  data() {
    return {
      items: {
        text1: "업체에서 제출한 견적서를 비교하여 업체 선정을 진행해주세요.",
        text2: " ",
        image: "/assets/img/backgrounds/slider2.jpg",
      },
      estData: {},
      isLogin: false,
      clientStatus: false,
    };
  },
  methods: {
    setEstData(data) {
      this.estData = data;
    },
    loginMounted() {
      this.$store.commit("setClientLogin");
    },
    setClientStatus(code) {
      this.$store.commit("setClientStatus", code);
    },
  },
  computed: mapGetters(["getClient", "getClientLogin", "getClientStatus"]),
  metaInfo: {
    title: "폐업119",
    htmlAttrs: {
      lang: "ko-KR",
      amp: true,
    },
  },
  async mounted() {
    if (this.id == "homepage") {
      if (
        this.getClientStatus == "X" ||
        this.getClientStatus == "S" ||
        this.getClientStatus == "D" ||
        this.getClientStatus == "C"
      ) {
        this.$store.commit("setClientLogout");
      }
    } else {
      await axios
        .get("https://new-api.closing119.com/api/clientcheck/", {
          params: { verify_code: this.id },
        })
        .then((res) => {
          if (res.data.msg == "STATUS_X") {
            this.estData = res.data.results;
            this.$store.commit("setClientStatus", "X");
            this.loginMounted();
          } else if (res.data.msg == "STATUS_S") {
            this.estData = res.data.results;
            this.$store.commit("setClientStatus", "S");
            this.loginMounted();
          } else if (res.data.msg == "STATUS_D") {
            this.estData = res.data.results;
            this.$store.commit("setClientStatus", "D");
            this.loginMounted();
          } else if (res.data.msg == "STATUS_C") {
            this.estData = res.data.results;
            this.$store.commit("setClientStatus", "C");
            this.loginMounted();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>
