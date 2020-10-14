<template>
  <div class="service-grid-item ">
    <div class="service-grid-item__content service-grid-item--style3">
      <div class="main-estimate-grid-text-container">
        <div class="main-estimate-grid-text">
          <div class="main-estimate-grid-title">업체명</div>
          <div class="main-estimate-grid-subtitle">
            {{ maskingName(estData.partner.partner_name) }}
          </div>
        </div>
        <div class="main-estimate-grid-text">
          <div class="main-estimate-grid-title">견적 가격</div>
          <div class="main-estimate-grid-subtitle">
            {{ numberWithCommas((estData.total_price * 1.1).toFixed(0)) }}원
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EstimateModal from "../components/EstimateModal";

import axios from "axios";

export default {
  props: ["estData"],
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
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    maskingName(name) {
      return name.replace(/(?<=.{1})./gi, "*");
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
.main-estimate-grid-text-container {
  padding-left: 20px;
  padding-bottom: 15px;
}
.main-estimate-grid-text {
  margin-top: 15px;
}
.main-estimate-grid-title {
  font-size: 14px;
  color: rgb(94, 84, 84);
}
.main-estimate-grid-subtitle {
  margin-left: 10px;
  margin-top: 10px;
  font-size: 18px;
}

@media (max-width: 1141px) {
  .main-estimate-grid-text-container {
    padding-left: 5px;
    padding-bottom: 10px;
  }
  .main-estimate-grid-text {
    margin-top: 10px;
  }
  .main-estimate-grid-title {
    font-size: 10px;
    color: rgb(94, 84, 84);
  }
  .main-estimate-grid-subtitle {
    margin-left: 5px;
    margin-top: 5px;
    font-size: 14px;
  }
}
</style>
