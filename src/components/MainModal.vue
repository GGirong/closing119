<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class="estimate-container">
            <div class="main-modal-title">
              마감된 견적요청서 자세히 보기
              <b-icon-x
                style="cursor: pointer;"
                @click="$emit('close')"
              ></b-icon-x>
            </div>
            <div
              style="height:1px; background-color:#d4d4d4; margin-top: 10px; margin-bottom: 20px"
            ></div>
            <div class="main-modal-head-container row">
              <div class="main-modal-head-image-container col-5">
                <img
                  src="../../public/assets/img/ex_3.jpg"
                  class="main-modal-head-image"
                />
              </div>
              <div class="col-7 row">
                <div class="main-estimate-text-box col-lg-6 col-md-12">
                  <div class="main-estimate-text-title">
                    상호명
                  </div>
                  <div class="main-estimate-text-subtitle">
                    아뜰리에 코스메틱 양재점
                  </div>
                </div>
                <div class="main-estimate-text-box col-lg-6 col-md-12">
                  <div class="main-estimate-text-title">
                    주소
                  </div>
                  <div class="main-estimate-text-subtitle">
                    서울특별시 양재동
                  </div>
                </div>
                <div
                  class="main-estimate-text-box main-estimate-mobile col-lg-6 col-md-12"
                >
                  <div class="main-estimate-text-title">
                    업종
                  </div>
                  <div class="main-estimate-text-subtitle">
                    상가/매장
                  </div>
                </div>
                <div
                  class="main-estimate-text-box main-estimate-mobile col-lg-6 col-md-12"
                >
                  <div class="main-estimate-text-title">
                    평수
                  </div>
                  <div class="main-estimate-text-subtitle">
                    30 평
                  </div>
                </div>
              </div>
            </div>
            <div class="main-modal-partners-container row">
              <div class="main-modal-partners-title col-12">참여 파트너스</div>
              <div
                class="main-modal-partner-container col-6"
                v-for="est in estData.Estimate"
                :key="est.id"
              >
                <MainEstimateGrid
                  :estData="est"
                  @setclientstatus="setClientData"
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

export default {
  props: ["clientData"],
  components: {
    DaumPostcode,
    MainEstimateGrid,
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
            },
            total_price: 15000000,
          },
          {
            id: 2,
            partner: {
              id: 2,
              partner_name: "자진철거",
            },
            total_price: 12200000,
          },
          {
            id: 3,
            partner: {
              id: 2,
              partner_name: "수양철거",
            },
            total_price: 14300000,
          },
        ],
      },
    };
  },
  methods: {},
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
    overflow: hidden;
    max-width: 1200px;
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
.address {
    text-align: left;
    width: 65%;
    height: 35px;
    background: #fff;
    overflow: hidden;
    padding-top: 5px;
    padding-left: 10px
    margin-top: 15px;
}
.estimate-container {
    width: auto;
}
.main-modal-title {
    font-size: 21px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between
}
.main-modal-partners-container {
    max-width: 1000px;
    margin: 0 auto
}
.main-modal-partners-title {
    margin-top: 15px;
    font-size: 21px;
    font-family: NotoSansKR-bold;
    color: #1665fe;
}
.main-modal-head-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 15px
}
.main-modal-head-image-container {
    padding-right: 15px;
}
.main-modal-head-image {
    border-radius : 10px;
    width: 100%;
    object-fit: cover;
}
.main-estimate-text-title {
  color: rgb(94, 84, 84)
  font-size: 14px
}
.main-modal-partner-container {
    margin-top: 20px;
}
.main-estimate-text-subtitle {
  font-size: 16px
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
@media (max-width: 1141px) {
  .main-modal-head-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 5px;
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
  .main-estimate-text-box {
    padding: 0px;
  }
  .main-estimate-mobile {
    display: none;
  }
  .main-modal-head-image-container {
    padding-top: 5px;
  }
  .main-modal-partners-title {
    margin-top: 10px;
    margin-bottom: 5px
    font-size: 16px;
  }
  .main-modal-title {
    font-size: 16px;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
  }
  .modal {
    &-content {
        padding: 5px 5px;
        padding-bottom: 15px;
    }
  }
  .main-modal-partner-container {
      padding: 3px;
      margin-top: 0px;
  }
}
</style>
