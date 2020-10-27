<template>
  <div class="page-wrapper section-space--inner--60">
    <div class="project-section">
      <div class="container">
        <div v-if="loading">
          <div class="col-12" style="overflow: hidden">
          <carousel
          class="main-modal-image-container"
          :items="1"
          :margin="3"
          :loop="false"
          :dots="false"
          :nav="false"
          :autoplay="false"
          >
          <div v-for="image in clientData.images" :key="image.id">
              <img
              :src="'https://new-api.closing119.com' + image.image"
              alt="thumbnail"
              class="main-modal-image"
              />
          </div>
          </carousel>
          </div>
          <div class="main-modal-head-container">
          <div class="main-modal-head-title">{{ clientData.business_name }}</div>
          <div class="main-modal-head-subtitle">{{ clientData.district}} | {{ sectorShort(clientData.sector) }}</div>
          <div class="main-modal-head-subtitle">등록번호: {{ clientData.reg_code}}</div>
          </div>
          <div class="main-modal-info-container">
              <div class="main-modal-info-wrapper">
                  <div class="main-modal-info-section">
                  <div class="main-modal-info-light">매장평수</div>
                  <div class="main-modal-info-bold">
                      <ICountUp :endVal="clientData.py"/>평
                  </div>
                  </div>
                  <div class="main-modal-info-section-divider"></div>
                  <div class="main-modal-info-section">
                  <div class="main-modal-info-light">파트너스</div>
                  <div class="main-modal-info-bold"><ICountUp :endVal="estData.Estimate.length"/>개 업체</div>
                  </div>
                  <div class="main-modal-info-section-divider"></div>
                  <div class="main-modal-info-section">
                  <div class="main-modal-info-light">견적상태</div>
                  <div class="main-modal-info-bold">공사완료</div>
                  </div>
              </div>
          </div>
      </div>

        <div class="row" style="margin-top: 30px;">
          <div class="col-lg-12">
              <div class="project-item-wrapper">
                  <div class="row"> 
                      <div class="col-12 section-space--bottom--30" >
                          <EstimateGrid  
                          :estData="estData.Estimate[0]"
                          :clientId = "estData.client.id"
                          :done="true"
                          @setclientstatus ="setClientData"
                          />
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import EstimateGrid from '../components/EstimateGrid'
  import axios from "axios";
  import ICountUp from "vue-countup-v2";
  import carousel from "vue-owl-carousel2";
export default {
  props: ["estData"],
  components: {
    EstimateGrid,
    carousel,
    ICountUp
  },
  data() {
    return {
      loading: false,
      clientId: 0,
      clientData: {}
    };
  },
  methods: {
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
    sectorShort(sector) {
      if (sector == "음식점 (식당/카페/호프/패스트푸드 등)") {
          return "음식점";
      } else if (
          sector ==
          "도소매 (편의점/문구사무/애견/화장품/기타잡화 등)"
      ) {
          return "도소매";
      } else if (
          sector == "서비스업 (학원/미용/주유소/세탁/기타서비스업)"
      ) {
          return "서비스업";
      } else if (
          sector == "여가 오락(pc방/노래방/당구장/골프장/헬스/기타)"
      ) {
          return "여가 오락";
      }
    },
  },
  async mounted() {
    this.clientId = this.estData.client.id
    await axios
    .get("https://new-api.closing119.com/api/clientestcomplete/", {
        params: { client: this.clientId },
    })
    .then((res) => {
        this.clientData = res.data[0].client
    });
    await axios.get('https://new-api.closing119.com/api/clientimage/', {params: {client: this.clientData.id}}).then(res=>{
        var images = [];
        for (var j in res.data.results.client_image) {
            images[j] = res.data.results.client_image[j];
        }
        this.clientData.images = images;
    })
    this.loading = true
  }
};
</script>

<style>
.est-title {
  color: #777;
}
</style>
