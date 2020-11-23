<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class="main-modal-estimate-container">
            <div class="main-modal-title">
                이용사례
              <div class="admin-main-modal-ongoing-reg-code">(접수번호: <input type="text" class="form-control-file-reg-code" placeholder="접수번호 7자리" v-model="usecase.reg_code"/>)</div>
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
            <div class="row" style="margin: 0 auto">   
                <div
                    class="admin-input-title col-2"
                    style="text-align: left;"
                    >
                    이미지
                    </div>
                    <div class="col-6  section-space--bottom--20">
                    <input
                        type="file"
                        multiple
                        class="form-control-file"
                        style="padding-top:10px"
                        id="banner_image"
                        ref="main_modal_image"
                        v-on:change="handleFileUpload()"
                    />
                </div>
            </div>
            <div class="row" style="margin: 0 auto">   
                  <div
                    class="admin-input-title col-1"
                    style="text-align: left; padding-top: 0"
                    >
                    표시
                    </div>
                    <div class="col-1  section-space--bottom--20">
                    <input
                        type="checkbox"
                        v-model="usecase.show_content"
                    />
                  </div>
            </div>
            <div class="main-modal-head-container">
              <div class="admin-main-modal-sale-price"><input type="text" placeholder="절감 금액" class="form-control-file-title" v-model="usecase.sale_price"/></div>
              <div class="admin-main-modal-head-title"><input type="text" placeholder="업체명" class="form-control-file-title" v-model="usecase.business_name"/></div>
              <div class="admin-main-modal-head-subtitle row"><input type="text" class="form-control-file-address col-5" placeholder="주소" v-model="usecase.address"/> | <input type="text" placeholder="구분" class="form-control-file-sector col-3" v-model="usecase.sector"/></div>
            </div>
            <div class="main-modal-info-container">
              <div class="main-modal-info-wrapper">
                <div class="admin-modal-info-section">
                  <div class="admin-main-modal-info-light">매장평수</div>
                  <div class="admin-main-modal-info-bold">
                    <input type="text" class="form-control-file-number" v-model="usecase.py"/>평
                  </div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="admin-modal-info-section">
                  <div class="admin-main-modal-info-light">파트너스</div>
                  <div class="admin-main-modal-info-bold"><input type="text" class="form-control-file-number" v-model="usecase.partners_num"/>개</div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="admin-modal-info-section">
                  <div class="admin-main-modal-info-light">평균견적</div>
                  <div class="admin-main-modal-info-bold"><input type="text" class="form-control-file-number" v-model="usecase.avg_est"/>만원</div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="admin-modal-info-section">
                  <div class="admin-main-modal-info-light">최저견적</div>
                  <div class="admin-main-modal-info-bold"><input type="text" class="form-control-file-number" v-model="usecase.min_est"/>만원</div>
                </div>
                <div class="main-modal-info-section-divider"></div>
                <div class="admin-modal-info-section">
                  <div class="admin-main-modal-info-light">정부지원금</div>
                  <div class="admin-main-modal-info-bold"><input type="text" class="form-control-file-number" v-model="usecase.fund"/>만원</div>
                </div>
              </div>
            </div>
          </div>
          <quill-editor
            :content="content"
            :options="editorOption"
            @change="onEditorChange($event)"
          />
          <button @click="makeUsecase()">작성하기</button>
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
  props:['id'],
  components: {
    MainEstimateGrid,
    carousel,
    ICountUp,
  },
  data() {
    return {
      usecase: {},
      loading: true,
      content: "",
      content: '',
      editorOption: {

      },
    };
  },
  methods: {
      showImagePrompt(command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    },
    makeUsecase() {
        this.usecase.content = this.content
        this.$emit('confirm', this.usecase)
    },
    handleFileUpload() {
        this.usecase.images = this.$refs.main_modal_image.files
    },
    onEditorChange({quill, html, text}) {
      this.content = html
    }
  },
  mounted() {
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
.ql-container {
  height: 400px;
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
  text-align: center;
  max-width: 863px;
  max-height: 100%;
}
.admin-main-modal-ongoing-reg-code {
  position: absolute;
  font-size: 12px;
  top: 12px;
  left: 200px;
  display: flex;
}
.admin-main-modal-head-title {
  font-size: 26.89px;
  font-family: NotoSansKr-Medium;
}
.admin-main-modal-sale-price {
  font-size: 14px;
}
.admin-main-modal-head-subtitle {
  padding-left: 205px;
  font-size: 12.55px;
  margin: 0 auto;
}
.main-modal-info-wrapper {
  height: 100%;
  background-color: #f2f7ff;
  font-size: 20.47px;
  display: flex;
  flex-direction: row;
}
.admin-modal-info-section {
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.admin-main-modal-info-light {
  margin-top: 10px;
}
.admin-main-modal-info-bold {
  margin-top: 13px;
  color: #004eff;
  font-size: 21px;
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
  .main-estimate-text-box {
    padding: 0px;
  }
}
</style>