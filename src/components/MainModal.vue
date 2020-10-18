<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class="main-modal-estimate-container">
            <div class="main-modal-title">
              마감된 견적요청서 자세히 보기
              <div class="main-modal-reg-code">(접수번호: 102052)</div>
              <b-icon-x
                style="cursor: pointer"
                @click="$emit('close')"
              ></b-icon-x>
            </div>
            <div
              style="
                height: 1px;
                background-color: #d4d4d4;
                margin-top: 10px;
                margin-bottom: 20px;
              "
            ></div>
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
              <div class="main-modal-head-title">{{ maskingTitle(clientData.business_name) }}</div>
              <div class="main-modal-head-subtitle">서울 서초구 | 음식점</div>
            </div>
            <div class="main-modal-info-container">
              <div class="main-modal-info-wrapper">
                <div class="main-modal-info-section">
                  <div class="main-modal-info-light">매장평수</div>
                  <div class="main-modal-info-bold">
                    <ICountUp :endVal="30"/>평
                  </div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="main-modal-info-section">
                  <div class="main-modal-info-light">파트너스</div>
                  <div class="main-modal-info-bold"><ICountUp :endVal="3"/>개 업체</div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="main-modal-info-section">
                  <div class="main-modal-info-light">최종견적</div>
                  <div class="main-modal-info-bold"><ICountUp :endVal="184"/>만원</div>
                </div>
                
              </div>

            </div>
            <div class="main-modal-partners-title-container">
              <div class="main-modal-partners-title-left"></div><div class="main-modal-partners-title">세부 견적 사항</div>
            </div>
            <div class="main-modal-partners-container row">
              <div
                class="main-modal-partner-container col-12"
                v-for="est in estData.Estimate"
                :key="est.id"
              >
                <MainEstimateGrid
                  :estData="est"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import DaumPostcode from "vuejs-daum-postcode";
import MainEstimateGrid from "../components/MainEstimateGrid";
import ICountUp from "vue-countup-v2";
import carousel from "vue-owl-carousel2";

export default {
  components: {
    DaumPostcode,
    MainEstimateGrid,
    carousel,
    ICountUp,
  },
  data() {
    return {
      roadAddress: null,
      addData: "",
      estData: {
        Estimate: [
          {
            id: 1,
            partner: {
              id: 2,
              partner_name: "동양철거",
              detail: "시설팀 가이드에 따라 야간공사로 진행되어야 하며, 출입구 금속공사시 알로이 재질로 별도 도색이 필요합니다."
            },
            total_price: 15000000,
          },
          {
            id: 2,
            partner: {
              id: 2,
              partner_name: "자진철거",
              detail: "시설팀 가이드에 따라 야간공사로 진행되어야 하며, 출입구 금속공사시 알로이 재질로 별도 도색이 필요합니다."
            },
            total_price: 12200000,
          },
          {
            id: 3,
            partner: {
              id: 2,
              partner_name: "수양철거",
              detail: "시설팀 가이드에 따라 야간공사로 진행되어야 하며, 출입구 금속공사시 알로이 재질로 별도 도색이 필요합니다."
            },
            total_price: 14300000,
          },
        ],
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
    };
  },
  methods: {
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
    }
  },
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
}
</style>

<style>
.main-modal-estimate-container {
  width: 863px;
}
.main-modal-title {
  font-size: 21px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.main-modal-reg-code {
  position: absolute;
  font-size: 12px;
  top: 10px;
  left: 280px;
}
.main-modal-image-container {
  max-width: 425px;
  margin: 0 auto;
}
.main-modal-image {
  max-width: 425px;
  max-height: 287px;
  object-fit: cover;
  object-position: 50%;
}
.main-modal-partners-container {
  overflow-y: scroll;
  max-height: 450px;
  margin: 0 auto;
}
.main-modal-partners-title-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}
.main-modal-partners-title-left {
  width: 3px;
  height: 22px;
  margin-top: 25px;
  margin-right: 5px;
  margin-left: 3px;
  background-color: #000;
}
.main-modal-partners-title {
  margin-top: 17px;
  font-size: 23px;
  font-family: NotoSansKR-Medium;
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
  height: 125px;
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
  padding: 30px;
}
.main-modal-info-light {
  margin-top: 15px;
}
.main-modal-info-bold {
  margin-top: 3px;
  color: #004eff;
  font-size: 32.93px;
}
.main-modal-info-section-divider{
  margin-top: 30px;
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
}
.main-estimate-text-subtitle {
  font-size: 16px;
}
.main-modal-partner-container {
  padding: 3px;
}
@media (max-width: 1141px) {
  .main-modal-head-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 5px;
  }
  .main-estimate-mobile {
    display: none;
  }
  .main-modal-partners-container {
    max-width: 300px;
  }
  .main-estimate-text-title {
    color: rgb(94, 84, 84);
    font-size: 10px;
  }
  .main-estimate-text-subtitle {
    font-size: 12px;
  }
  .main-modal-head-image-container {
    padding-top: 5px;
  }
  .main-modal-partners-title {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 16px;
  }
  .main-modal-title {
    font-size: 16px;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
  }
  .main-estimate-text-box {
    padding: 0px;
  }
}
</style>