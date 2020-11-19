<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class="main-modal-estimate-container">
            <div class="usecase-main-modal-title">
                이용사례
              <div class="usecase-main-modal-ongoing-reg-code">(접수번호: {{usecase.main_modal.reg_code}})</div>
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
              <div v-for="image in usecase.images" :key="image.id">
                <img
                  :src="'https://new-api.closing119.com' + image.modal_image"
                  alt="thumbnail"
                  class="main-modal-image"
                />
              </div>
            </carousel>
            </div>
            </div>
            <div class="main-modal-head-container">
              <div class="main-modal-head-title">{{usecase.main_modal.business_name}}</div>
              <div class="main-modal-head-subtitle">{{usecase.main_modal.address}} | {{usecase.main_modal.sector}}</div>
            </div>
            <div class="main-modal-info-container">
              <div class="main-modal-info-wrapper">
                <div class="usecase-modal-info-section">
                  <div class="usecase-main-modal-info-light">매장평수</div>
                  <div class="usecase-main-modal-info-bold">
                    <span class="usecase-bold">{{usecase.main_modal.py}}</span>평
                  </div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="usecase-modal-info-section">
                  <div class="usecase-main-modal-info-light">파트너스</div>
                  <div class="usecase-main-modal-info-bold"><span class="usecase-bold"><ICountUp :endVal="usecase.main_modal.partners_num"/></span>개</div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="usecase-modal-info-section">
                  <div class="usecase-main-modal-info-light">평균견적</div>
                  <div class="usecase-main-modal-info-bold"><span class="usecase-bold"><ICountUp :endVal="usecase.main_modal.avg_est"/></span>만원</div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="usecase-modal-info-section">
                  <div class="usecase-main-modal-info-light">최저견적</div>
                  <div class="usecase-main-modal-info-bold"><span class="usecase-bold"><ICountUp :endVal="usecase.main_modal.min_est"/></span>만원</div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="usecase-modal-info-section">
                  <div class="usecase-main-modal-info-light">정부지원금</div>
                  <div class="usecase-main-modal-info-bold"><span class="usecase-bold"><ICountUp :endVal="usecase.main_modal.fund"/></span>만원</div>
                </div>
              </div>
            </div>
            <div class="output ql-snow" v-if="loading">
                <div class="ql-editor" v-html="content"></div>
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
  props:['usecaseId'],
  components: {
    MainEstimateGrid,
    carousel,
    ICountUp,
  },
  data() {
    return {
      loading: false,
      content: "",
      usecase: {},
      editorOption: {

      },
    };
  },
  methods: {
  },
  async mounted() {
    await axios.get("https://new-api.closing119.com/api/main-modal/" + this.usecaseId + "/").then(res=> {
      this.usecase = res.data.results
      this.content = this.usecase.main_modal.content
      this.loading =true
    })
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
  @media screen and (max-width:1141px) {
    &-content {
      padding: 5px 10px;
      padding-bottom: 0px;
    }
  }
}
</style>

<style>
.output {
  max-height: 400px;
  overflow-y: scroll;
}
.form-control-file-reg-code {
    height: 25px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: -3px;
}
.form-control-file-title {
    height: 35px;
    margin-bottom: 10px;
}
.form-control-file-address {
    margin-right: 5px;
}
.form-control-file-sector{
    margin-left: 5px;
}
.form-control-file-number {
    width: 100px;
    height: 40px;
}
.main-modal-estimate-container {
  width: 863px;
}
.usecase-main-modal-title {
  font-size: 21px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.usecase-main-modal-ongoing-reg-code {
  position: absolute;
  font-size: 12px;
  top: 12px;
  left: 100px;
  display: flex;
}
.main-modal-partners-title-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}
.main-modal-info-wrapper {
  height: 100%;
  background-color: #f2f7ff;
  font-size: 20.47px;
  display: flex;
  flex-direction: row;
}
.usecase-main-modal-info-container {
  width: 100%;
  height: 125px;
  border: 1px solid #f2f7ff;
  margin-top: 5px;
  border-radius: 5px;
  padding: 3px;
}
.usecase-modal-info-section {
  width: 25%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
}
.usecase-main-modal-info-light {
  margin-top: 10px;
  font-size: 16.4px;
}
.usecase-main-modal-info-bold {
  margin-top: 3px;
  font-family: NotoSansKR-Medium;
  color: #004eff;
  font-size: 23.22px;
}
.usecase-bold {
    font-size: 30px;
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
@media (max-width: 1141px) {
  .main-estimate-mobile {
    display: none;
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
  .usecase-main-modal-title {
    font-size: 16px;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
  }
  .main-estimate-text-box {
    padding: 0px;
  }
  .usecase-modal-info-section {
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0px;
  }
  .usecase-main-modal-info-light {
    margin-top: 12px;
    font-size: 6px;
  }
  .usecase-main-modal-info-bold {
    margin-top: 3px;
    font-family: NotoSansKR-Medium;
    color: #004eff;
    font-size: 10px;
  }
  .usecase-bold {
      font-size: 12px;
  }
  .editor {
    max-height: 160px;
    overflow-y: scroll;
    margin: 0 auto;
  }
}
</style>