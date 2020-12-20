<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class="main-modal-estimate-container">
             <div class="main-modal-title" v-if="estimateDone">
              마감된 견적요청서 자세히 보기
              <div class="main-modal-reg-code">(접수번호: {{ clientData.reg_code }})</div>
              <b-icon-x
                style="cursor: pointer"
                @click="$emit('close')"
              ></b-icon-x>
            </div>
            <div class="main-modal-title" v-if="!estimateDone">
              진행중인 견적요청서 자세히 보기
              <div class="main-modal-ongoing-reg-code">(접수번호: {{ clientData.reg_code }})</div>
              <b-icon-x
                style="cursor: pointer"
                @click="$emit('close')"
              ></b-icon-x>
            </div>
            <div class="title-line"
            ></div>
            <div v-if="loading">
              <div class="col-12" style="overflow: hidden">
              <carousel
              class="main-modal-image-container"
              :items="1"
              :margin="3"
              :loop="true"
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
              <div class="main-modal-head-title">{{ maskingTitle(clientData.business_name) }}</div>
              <div class="main-modal-head-subtitle">{{ clientData.district}} | {{ sectorShort(clientData.sector) }}</div>
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
                  <div class="main-modal-info-bold"><ICountUp :endVal="estData.length"/>개 업체</div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="main-modal-info-section">
                  <div class="main-modal-info-light">최종견적</div>
                  <div class="main-modal-info-bold" v-if="estimateDone"><ICountUp :endVal="numberWithThree(total_price)"/>만원</div>
                  <div class="main-modal-info-bold" v-if="!estimateDone">입찰중</div>
                </div>
                
              </div>

            </div>
            </div>
            
            <div class="main-modal-partners-title-container">
              <div class="main-modal-partners-title-left"></div>
              <div class="main-modal-partners-title">세부 견적 사항</div>
              <div class="main-modal-partners-mobile-spacing"></div>
              <div class="main-modal-partners-subtitle" v-if="!estimateDone">진행 중인 견적의 금액과 업체정보는 본인만 확인 가능합니다.</div>
            </div>
            <div class="main-modal-partners-container row" v-if="estimate">
              <div
                class="main-modal-partner-container col-12"
                v-for="est in estData"
                :key="est.id"
              >
                <MainEstimateGrid
                  :estData="est"
                  :status="estimateDone"
                />
              </div>
            </div>
            <div class="main-modal-no-partners-container" v-if="!estimate">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import MainEstimateGrid from "../components/MainEstimateGrid";
import ICountUp from "vue-countup-v2";
import carousel from "vue-owl-carousel2";

import axios from "axios";

export default {
  props:['clientId', 'status'],
  components: {
    MainEstimateGrid,
    carousel,
    ICountUp,
  },
  data() {
    return {
      roadAddress: null,
      title: "진행중인",
      estimate: false,
      estimateDone: false,
      total_price: 0,
      addData: "",
      estData: {
      },
      clientData: {
        business_name: "아뜰리에 자전거",
        images: [
          {
            id: 1,
            image: "/media/client/default.jpg",
          },
          {
            id: 2,
            image: "/media/client/default.jpg",
          }
        ]
      },
      loading: false
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
      if(x.length == 6 ) {
        return Number(x.substr( 0 , 1 ))
      }
      else if(x.length == 7 ) {
        return Number(x.substr( 0 , 2 ))
      }
      else if(x.length == 8 ) {
        return Number(x.substr( 0 , 3 ))
      }
      else if( x.length == 9) {
        return Number(x.substr( 0 , 4 ))
      }
      else if( x.length == 10) {
        return Number(x.substr( 0 , 5 ))
      }
      
    },
    maskingTitle(str) {
      var maskStr = ""

      for(var i in str) {
        if(i == 0 || i == 1) {
          maskStr += "*"
        }
        else {
          maskStr += str[i]
        }
      }

      return maskStr
    },
    async getClientN(id) {
      await axios
      .get("https://new-api.closing119.com/api/client/" + this.clientId)
      .then((res) => {
        this.clientData = res.data
      });
      await axios.get('https://new-api.closing119.com/api/clientimage/', {params: {client: this.clientId}}).then(res=>{
        var images = [];
          for (var j in res.data.results.client_image) {
            images[j] = res.data.results.client_image[j];
          }
          this.clientData.images = images;
       })
       this.loading = true
    },
    async getClient(id) {
      await axios
      .get("https://new-api.closing119.com/api/clientestcomplete/", {
        params: { client: this.clientId },
      })
      .then((res) => {
        this.clientData = res.data[0].client
        this.estData = res.data
        this.estimate = true
      });
      await axios.get('https://new-api.closing119.com/api/clientimage/', {params: {client: this.clientId}}).then(res=>{
        var images = [];
          for (var j in res.data.results.client_image) {
            images[j] = res.data.results.client_image[j];
          }
          this.clientData.images = images;
       })
       console.log(this.estData)
      for(var i in this.estData) {
        if(this.estData[i].status == 'D' || this.estData[i].status == 'C') {
          this.estimateDone = true
          this.title = "마감된"
          this.total_price = this.estData[i].total_price
        }
      }
      console.log(this.total_price)
      this.loading = true
    },
  },
  mounted() {
    if(this.status == "N" || this.status == "B") {
      this.getClientN(this.clientId)
    }
    else {
      this.getClient(this.clientId)
    }
  }
};
</script>
<style lang="stylus" scoped>
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    background: #fff;
    border-radius: 4px;
    max-height: 90%;
    overflow: auto;
  }

  &-content {
    padding: 10px 20px;
    padding-bottom: 30px;

  }

  &-footer {
    background: #ccc;
    padding: 10px;
    text-align: right;
  }

  
}

// 오버레이 트랜지션
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  // 오버레이에 포함되어 있는 모달 윈도의 트랜지션
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// 딜레이가 적용된 모달 윈도가 제거된 후에 오버레이가 사라짐
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.modal {
  &-content {
    padding: 25px 30px;
    padding-bottom: 15px;
  }
  @media screen and (max-width:1141px) {
    &-content {
      padding: 5px 10px;
    }
  }
}
</style>
<style scoped>
.owl-nav {
  position: absolute;
}

</style>
<style>
.main-modal-estimate-container {
  max-width: 863px;
}
.main-modal-title {
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.main-modal-reg-code {
  position: absolute;
  font-size: 12px;
  top: 12px;
  left: 290px;
}
.main-modal-ongoing-reg-code {
  position: absolute;
  font-size: 12px;
  top: 12px;
  left: 310px;
}
.title-line {
  height: 1px;
  background-color: #d4d4d4;
  margin-top: 10px;
  margin-bottom: 20px;
}
.main-modal-image-container {
  max-width: 50%;
  margin: 0 auto;
}
.main-modal-image {
  max-width: 425px;
  max-height: 287px;
  object-fit: cover;
  object-position: 50%;
}
.main-modal-no-partners-container {
  height: 150px;
  margin: 0 auto;
  text-align: center;
  padding-top: 35px;
}
.main-modal-partners-container {
  overflow-y: scroll;
  max-height: 250px;
  margin: 0 auto;
  text-align: left;
}
.main-modal-partners-title-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
}
.main-modal-partners-title-left {
  width: 3px;
  height: 1.2vw;
  margin-right: 5px;
  margin-left: 3px;
  background-color: #000;
}
.main-modal-partners-title {
  font-size: 1.15vw;
  font-family: NotoSansKR-Medium;
}
.main-modal-partners-subtitle {
  margin-left: 10px;
  font-size: 14px;
  color: #6e6e6e;
}
.main-modal-head-container {
  max-width: 425px;
  margin: 0 auto;
  padding: 15px;
  text-align: center;
}
.main-modal-head-title {
  font-size: 26.89px;
  font-family: NotoSansKr-Medium;
}
.main-modal-head-subtitle {
  font-size: 12.55px;
}
.main-modal-info-container {
  width: 100%;
  height: 118px;
  border: 1px solid #f2f7ff;
  margin-top: 5px;
  border-radius: 5px;
  padding: 3px;
}
.main-modal-info-wrapper {
  height: 100%;
  background-color: #f2f7ff;
  font-size: 20.47px;
  display: flex;
  flex-direction: row;
}
.main-modal-info-section {
  width: 33%;
  display: flex;
  justify-content: space-between;
  padding: 1.1vw;
}
.main-modal-info-light {
  display: flex;
  align-items: center;
}
.main-modal-info-bold {
  display: flex;
  align-items: center;
  color: #004eff;
  font-size: 32.93px;
  font-family: NotoSansKR-Medium;
}
.main-modal-info-section-divider{
  margin-top: 25px;
  height: 67px;
  width: 1px;
  background: #e0e1e2;
}
.main-estimate-text-title {
  color: rgb(94, 84, 84);
  font-size: 14px;
  
}
.main-modal-partner-container {
  margin-bottom: 13px;
  padding: 0;
}
.main-estimate-text-subtitle {
  font-size: 16px;
}
@media (max-width: 1141px) {
  .main-modal-estimate-container{
    max-width: 300px;
    margin: 0 auto;
    padding: 5px;
  }
  .main-modal-title {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .main-modal-reg-code {
    position: absolute;
    font-size: 10px;
    top: 23px;
    left: -0px;
  }
  .main-modal-ongoing-reg-code {
    position: absolute;
    font-size: 10px;
    top: 21px;
    left: 0px;
  }
  .title-line {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .main-modal-image-container {
    max-width: 225px;
    margin: 0 auto;
  }
  .main-modal-image {
    max-width: 425px;
    max-height: 152px;
    object-fit: cover;
    object-position: 50%;
  }
  .main-modal-head-title {
    font-size: 14px;
    font-family: NotoSansKr-Medium;
  }
  .main-modal-partners-subtitle {
    font-size: 10px;
    margin-left: 10px;
    margin-top: 0px;
  }
  .main-modal-head-subtitle {
    font-size: 10px;
  }
  .main-modal-info-container {
    width: 100%;
    height: 75px;
  }
  .main-modal-info-section {
    width: 33%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5px;
  }
  .main-modal-info-light {
    display: block;
    margin-top: 10px;
    font-size: 12px;
  }
  .main-modal-info-bold {
    display: block;
    margin-top:0px;
    margin-bottom: 10px;
    color: #004eff;
    font-size: 16px;
    font-family: NotoSansKR-Medium;
  }
  .main-modal-info-section-divider{
    margin-top: 15px;
    height: 40px;
    width: 1px;
    background: #e0e1e2;
  }
  .main-modal-no-partners-container {
    height: 40px;
    margin: 0 auto;
    text-align: center;
    padding-top: 5px;
    font-size: 12px;
  }
  .main-modal-partners-title-left {
    width: 3px;
    height: 16px;
    margin-top: 14.5px;
    margin-right: 5px;
    margin-left: 3px;
    background-color: #000;
  }
  .main-modal-partners-title {
    margin-top: 10px;
    font-size: 14px;
    font-family: NotoSansKR-Medium;
  }
  .main-modal-partners-mobile-spacing{
    margin-left: 250px;
  }
  .main-modal-partners-container {
    overflow-y: scroll;
    max-height: 160px;
    margin: 0 auto;
  }
  .main-modal-partners-container .row {
    margin: 0;
  }
}
</style>