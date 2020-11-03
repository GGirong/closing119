<template>
  <div class="page-wrapper section-space--inner--60">
    <div class="project-section">
      <div class="container">
        <div v-if="loading">
        <div class="main-modal-title">
          {{ estData.client.client_name}}님의 견적 요청서
          <div class="main-modal-ongoing-reg-code">(접수번호: {{ estData.client.reg_code }})</div>
        </div>
        <div class="title-line"></div>
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
          </div>
        
        <div class="est-detail-content-container">
          <div class="est-detail-content-title">
            <div style="margin-left:10px">
              연락처:
            </div>
            <div style="margin-left:10px">
              상세 주소:
            </div>
            <div style="margin-left:10px">
              평수:
            </div>
            <div style="margin-left:10px">
              요청사항
            </div>
            <div style="margin-left:10px; color: #000; margin-bottom: 15px;"> 
              {{ clientData.request}}
            </div>
          </div>
          <div class="est-detail-content">
            <div style="margin-left:45px">
              {{ clientData.phone_num }}
            </div>
            <div style="margin-left:45px">
              {{ clientData.address }}
            </div>
            <div style="margin-left:45px">
              {{ clientData.py }} 평
            </div>
          </div>
        </div>
        </div>
        <div class="title-line"></div>
        <div class="main-modal-partners-title-container">
          <div class="main-modal-partners-title-left"></div>
          <div class="main-modal-partners-title">견적서 작성하기</div>
          <div class="main-modal-partners-mobile-spacing"></div>
          <div class="main-modal-partners-subtitle">진행 중인 견적의 금액과 업체정보는 본인만 확인 가능합니다.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EstimatingGrid from "../EstimatingGrid";
import ICountUp from "vue-countup-v2";
import carousel from "vue-owl-carousel2";

import axios from "axios";

export default {
  props: ["estData"],
  components: {
    EstimatingGrid,
    carousel,
    ICountUp,
  },
  data() {
    return {
      modal: null,
      clientData: {},
      loading: false,
      clientId: 68,
    };
  },
  methods: {
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
    numberWithThree(x) {
        x += " "
        if(x.length == 8 ) {
            return Number(x.substr( 0 , 3 ))
        }
        else if( x.length == 9) {
            return Number(x.substr( 0 , 4 ))
        }
        else if( x.length == 10) {
            return Number(x.substr( 0 , 5 ))
        }
    },
    async getClientImg() {
      await axios.get('https://new-api.closing119.com/api/clientimage/', {params: {client: this.clientData.id}}).then(res=>{
        let images = [];
        for (let j in res.data.results.client_image) {
            images[j] = res.data.results.client_image[j];
        }
        this.clientData.images = images;
      })
      this.loading = true
    },
  },
  mounted() {
    this.clientData = this.estData.client
    this.getClientImg()
  },
};
</script>

<style>
.est-detail-content-container {
  display: flex;
  width: 500px;
  margin: 0 auto;
}
.est-detail-content-title {
  color: rgb(94, 84, 84);
}
.est-detail-client-title {
  color: #555
}
@media (max-width: 1141px) {
  .est-detail-content-container {
    width: 300px;
    font-size: 12px;
    margin: 0 auto;
  }
}
</style>
