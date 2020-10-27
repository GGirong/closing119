<template>
  <div class="service-grid-item service-grid-item--style2">
    <div class="service-grid-item__content">
      <div class="row">
        <div class="col-sm-12 col-lg-3">
          <div class="estimate-grid-title">
            <img
              :src="'https://new-api.closing119.com' + profile_image_url"
              height="150px"
              width="150px"
            />
          </div>
        </div>
        <div class="col-sm-12 col-lg-8 row">
          <div class="col-sm-12 col-lg-4">
            <div class="estimate-grid-title">업체명</div>
            <div class="estimate-grid-subtitle">
              {{ estData.partner.partner_name }}
            </div>
          </div>
          <div class="col-sm-12 col-lg-8">
            <div class="estimate-grid-title">견적 가격</div>
            <div class="estimate-grid-subtitle">
              {{ numberWithCommas(estData.total_price) }}원 (VAT 별도)
            </div>
          </div>
          <div class="col-sm-12 col-lg-4" v-if="done">
            <div class="estimate-grid-title">연락처</div>
            <div class="estimate-grid-subtitle">
              {{ formatPhoneNumber(estData.partner.phone_num) }}
            </div>
          </div>
          <div class="col-12">
            <div class="estimate-grid-title">세부사항</div>
            <div class="estimate-grid-text">
              {{ estData.detail }}
            </div>
          </div>
        </div>
      </div>

      <p class="subtitle"></p>
      <div class="see-more-link" @click="openModal" v-if="!done">업체 선정하기</div>
    </div>
    <EstimateModal
      @close="closeModal"
      :estData="estData"
      @select="selectEst"
      v-if="modal"
    />
  </div>
</template>

<script>
import EstimateModal from "../components/EstimateModal";

import axios from "axios";

export default {
  props: ["estData", "clientId", "done"],
  components: {
    EstimateModal,
  },
  data() {
    return {
      modal: false,
      selectEstData: {},
      profile_image_url: "",
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    async kakaoToPartnerEstSelect() {
      var kakaoData = {
        id: 3,
        pk: this.estData.id,
      };
      await axios
        .post("https://new-api.closing119.com/api/kakaoapi/", kakaoData)
        .then((res) => {
        })
        .catch((err) => {
        });
    },
    async selectEst() {
      this.selectEstData.client_id = this.clientId;
      this.selectEstData.estimate_id = this.estData.id;
      await axios
        .post(
          "https://new-api.closing119.com/api/clientselect/",
          this.selectEstData
        )
        .then((res) => {
          this.kakaoToPartnerEstSelect();
          this.$emit("setclientstatus", "D");
        })
        .catch((err) => {});
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    formatPhoneNumber(str) {
      //Filter only numbers from the input

      //Check if the input is of correct length
      let match = str.match(/^([\S]{3})([\S]{4})([\S]{4})$/);

      if (match) {
        return match[1] + "-" + match[2] + "-" + match[3];
      }

      return null;
    },
  },
  async mounted() {
    await axios
      .get("https://new-api.closing119.com/api/partnerimage/", {
        params: { partner: this.estData.partner.id },
      })
      .then((res) => {
        this.profile_image_url = res.data.results.profile_image;
      });
  },
};
</script>

<style>
.estimate-grid-title {
  font-size: 14px;
  color: rgb(94, 84, 84);
  margin-top: 15px;
}
.estimate-grid-subtitle {
  margin-top: 5px;
  font-size: 18px;
}
.estimate-grid-text {
  margin-top: 5px;
  font-size: 16px;
}

@media(max-width:1141px) {
  .estimate-grid-title {
    font-size: 12px;
  }
  .estimate-grid-subtitle {
    margin-top: 5px;
    font-size: 14px;
  }
  .estimate-grid-text {
    font-size: 12px;
  }
}
</style>
