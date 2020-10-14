<template>
  <div>
    <PartnersHeader class="partenr-header-pc" />
    <WrapperHeader :screen="'done'" class="partner-header-mobile" />

    <Breadcrumb :items="items" title="견적서 작성하기" />

    <PartnersEstDetailWrapper :estData="clientData" />

    <b-form-group
      class="est-detail-container"
      v-if="!estFinish"
      style="margin-bottom: 30px"
    >
      <b-form-group class="est-detail-table">
        <b-form-group>
          <b-row class="mb-1">
            <b-col class="col-3">
              <div class="est-detail-est-title">
                품목
              </div>
            </b-col>
            <b-col class="col-3">
              <div class="est-detail-est-title">
                가격
              </div>
            </b-col>
            <b-col class="col-3">
              <div class="est-detail-est-title">
                부가세
              </div>
            </b-col>
            <b-col class="col-3">
              <div class="est-detail-est-title">
                총액
              </div>
            </b-col>
          </b-row>
        </b-form-group>

        <template v-for="(value, index) in multiple_input_map_list">
          <b-row :key="index" class="mb-1">
            <b-col class="col-3">
              <div class="input-bugase">
                {{ value.content }}
              </div>
            </b-col>
            <b-col class="col-3">
              <div class="input-bugase">
                {{ numberWithCommas(value.supply_price) }}
              </div>
            </b-col>
            <b-col class="col-3">
              <div class="input-bugase">
                {{ numberWithCommas(value.supply_price * 0.1) }}
              </div>
            </b-col>
            <b-col class="col-3">
              <div class="input-bugase">
                {{ numberWithCommas((value.supply_price * 1.1).toFixed(0)) }}
              </div>
            </b-col>
          </b-row>
        </template>
      </b-form-group>
    </b-form-group>
    <div class="est-detail-container" v-if="estFinish">
      <b-form-group class="est-detail-table">
        <b-form-group>
          <b-row class="mb-1">
            <b-col class="col-2">
              <div class="est-detail-est-title">
                품목
              </div>
            </b-col>
            <b-col class="col-3">
              <div class="est-detail-est-title">
                가격
              </div>
            </b-col>
            <b-col class="col-3">
              <div class="est-detail-est-title">
                부가세
              </div>
            </b-col>
            <b-col class="col-3">
              <div class="est-detail-est-title">
                총액
              </div>
            </b-col>
          </b-row>
        </b-form-group>
        <template v-for="(value, index) in multiple_input_map_list">
          <b-row :key="index" class="mb-1">
            <b-col class="col-2">
              <div class="input-bugase">
                {{ value.content }}
              </div>
            </b-col>
            <b-col class="col-3">
              <div class="input-bugase">
                {{ numberWithCommas(value.supply_price) }}
              </div>
            </b-col>
            <b-col class="col-3">
              <div class="input-bugase">
                {{ numberWithCommas(value.supply_price * 0.1) }}
              </div>
            </b-col>
            <b-col class="col-3">
              <div class="input-bugase">
                {{ numberWithCommas((value.supply_price * 1.1).toFixed(0)) }}
              </div>
            </b-col>
            <b-col class="col-1">
              <b-button
                @click.stop.prevent="onDeleteMultipleMapInput(value.key)"
                variant="danger"
              >
                <b-icon-trash></b-icon-trash>
              </b-button>
            </b-col>
          </b-row>
        </template>
        <b-row>
          <b-col class="col-2">
            <b-form-input
              id="input-multiple-input-map-key"
              name="input-multiple-input-map-key"
              v-model="multiple_input_map_key"
            >
            </b-form-input>
          </b-col>
          <b-col class="col-3">
            <b-form-input
              name="input-multiple-input-map-value"
              v-model.lazy="multiple_input_map_value"
            >
            </b-form-input>
          </b-col>
          <b-col class="col-3">
            <div class="input-bugase">
              {{ numberWithCommas(multiple_input_map_value * 0.1) }}
            </div>
          </b-col>
          <b-col class="col-3">
            <div class="input-bugase">
              {{
                numberWithCommas((multiple_input_map_value * 1.1).toFixed(0))
              }}
            </div>
          </b-col>
        </b-row>
      </b-form-group>
    </div>

    <b-form-group class="container" v-if="estFinish">
      <b-row>
        <b-col class="col-12" style="text-align: center">
          <b-button
            @click.stop.prevent="onAddMultipleMapInput"
            variant="primary"
            style="width: 150px; margin-top: 20px"
          >
            <i class="icon icon-plus"></i> 추가
          </b-button>
        </b-col>
        <b-col class="col-12" style="margin-left: 25px; margin-top: 20px;">
          세부사항 (선택)
        </b-col>
        <b-form-input
          class="col-10"
          style="height: 80px; margin-left: 40px; margin-top: 20px"
          v-model="estData.detail"
        >
        </b-form-input>
      </b-row>
      <!-- <b-row>
            <b-col class="col-12">
            {{ multipleInputToMap }}
            </b-col>
        </b-row> -->
    </b-form-group>

    <div style="text-align: center; margin-bottom: 50px">
      <button
        class="confirmButton"
        style="margin: 0 auto;"
        v-if="estStatus && estFinish"
        @click="makeEst"
      >
        작성하기
      </button>
      <button
        class="closeButton"
        style="margin: 0 auto; cursor: default"
        v-if="!estStatus && estFinish"
      >
        선정 대기 중
      </button>
      <button
        class="confirmButton"
        style="margin: 0 auto;"
        v-if="!estFinish"
        @click="finishEst"
      >
        공사 완료하기
      </button>
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
import PartnersEstDetailWrapper from "../components/sections/PartnersEstDetailWrapper";
import BrandCarousel from "../components/BrandCarousel";
import Footer from "../components/Footer";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";

import axios from "axios";

export default {
  props: ["estId"],
  components: {
    PartnersHeader,
    WrapperHeader,
    Breadcrumb,
    BrandCarousel,
    Footer,
    OffCanvasMobileMenu,
    PartnersEstDetailWrapper,
  },
  data() {
    return {
      items: [
        {
          text:
            "견적 요청서를 확인하고 오프라인 미팅 후 견적서를 작성해주세요.",
        },
        {
          text: "",
        },
      ],
      clientData: {},
      estData: {
        detail: "",
        prices_data: [],
      },
      estStatus: true,
      estFinish: true,
      multiple_input_map_list: [], // 배열처리된 입력양식의 값
      multiple_input_map_key: "", // 값 추가를 위한 입력양식의 키
      multiple_input_map_value: "",

      details: {}, // 입력양식의 현재 데이터
      origin: {}, // 입력양식의 기본 데이터(리셋 버튼클릭시 초기화될 값)
      defaults: {
        // 기본값
        multiple_input_map_form: "",
      },
    };
  },
  methods: {
    async finishEst() {
      var estData = {
        estimate_id: this.estId,
      };
      await axios
        .post("https://new-api.closing119.com/api/estcomplete/", estData)
        .then((res) => {
          alert("공사 완료 처리 되었습니다.");
          this.$router.push("/done");
        });
    },
    async makeEst() {
      this.estData.prices_data = this.multiple_input_map_list;
      await axios
        .patch(
          "https://new-api.closing119.com/api/estimate/" + this.estId + "/",
          this.estData
        )
        .then((res) => {
          this.sendToClientEstMake();
          alert("견적서가 제출됐습니다.");
          this.$router.push("/estimating");
        });
    },
    async sendToClientEstMake() {
      var kakaoData = {
        id: 2,
        pk: this.estId,
      };
      console.log(kakaoData);
      await axios
        .post("https://new-api.closing119.com/api/kakaoapi/", kakaoData, {
          headers: { "Content-Type": "application/json; charset=utf-8" },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onAddMultipleMapInput() {
      const key = this.multiple_input_map_key;
      const value = this.multiple_input_map_value;
      if (key !== "" && value !== "") {
        this.multiple_input_map_list.push({
          content: key,
          supply_price: value,
        });
        this.multiple_input_map_key = "";
        this.multiple_input_map_value = "";
      }
    },
    onDeleteMultipleMapInput(key) {
      let index = -1;
      this.multiple_input_map_list.some((info, idx) => {
        if (info.key === key) {
          index = idx;
          return true;
        }
      });
      if (index >= 0) {
        this.multiple_input_map_list.splice(index, 1);
      }
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  async mounted() {
    console.log("디테일 마운티드");
    await axios
      .get("https://new-api.closing119.com/api/estimate/" + this.estId)
      .then((res) => {
        if (res.data.status == "B") {
          this.clientData = res.data;
        } else if (res.data.status == "S") {
          this.clientData = res.data;
          this.estStatus = false;
        } else if (res.data.status == "D") {
          this.clientData = res.data;
          this.estFinish = false;
        }
      });
    if (this.clientData.status == "D") {
      axios
        .get("https://new-api.closing119.com/api/estpriceset/", {
          params: { estimate: this.clientData.id },
        })
        .then((res) => {
          this.multiple_input_map_list = res.data;
        });
    }
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

<style>
.input-bugase {
  background-color: #e9ecef;
  opacity: 1;
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
.est-detail-est-title {
  text-align: center;
}
.est-detail-container {
  width: 1200px;
  margin: 0 auto;
}
.est-detail-table {
  width: 1200px;
}
@media (max-width: 1141px) {
  .est-detail-container {
    width: 300px;
    overflow-x: scroll;
    margin: 0 auto;
  }
  .est-detail-table {
    width: 700px;
  }
}
</style>
