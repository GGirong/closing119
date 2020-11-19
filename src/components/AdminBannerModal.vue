<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
            <div>
                <div class="admin-modal-title">{{ index }}번째 배너 수정하기
                    <b-icon-x
                style="cursor: pointer; position:absolute; right: 0px;"
                @click="$emit('close')"
              ></b-icon-x></div>
              <div style="margin-bottom: 60px;" v-if="banner.banner_env == 'pc'">(914 x 542) 사이즈</div>
              <div style="margin-bottom: 60px;" v-if="banner.banner_env == 'm'">(270 x 160) 사이즈</div>
                <div class="admin-banner-row-container row">
                    <div
                    class="admin-input-title col-2"
                    >
                    위 문구
                    </div>
                    <div class="col-4  section-space--bottom--20">
                    <input
                        class="form-control"
                        name="con_name"
                        type="text"
                        placeholder=""
                        v-model="banner.upper_text"
                    />
                    </div>
                    <div
                    class="admin-input-title col-2"
                    >
                    아래 문구
                    </div>
                    <div class="col-4 section-space--bottom--20">
                    <input
                        class="form-control"
                        name="con_name"
                        type="text"
                        placeholder=""
                        v-model="banner.bottom_text"
                    />
                    </div>
                    <div
                    class="admin-input-title col-2"
                    style="text-align: left;"
                    >
                    이미지
                    </div>
                    
                    
                    <div class="col-10  section-space--bottom--20">
                    <input
                        type="file"
                        class="form-control-file"
                        style="padding-top:10px"
                        id="banner_image"
                        ref="banner_image"
                        v-on:change="handleFileUpload()"
                    />
                    </div>
                    <div
                    class="admin-input-title col-2"
                    style="text-align: left; padding-top: 0"
                    >
                    표시
                    </div>
                    <div class="col-6  section-space--bottom--20">
                    <input
                        type="checkbox"
                        v-model="banner.show_content"
                        style="padding-top:10px"
                    />
                    </div>
                    <div class="col-12" style="text-align: center">
                        <img 
                        :src="'https://new-api.closing119.com' + banner.banner_image"
                        width="400px"
                        />
                    </div>
                </div>
            </div>
        </div>
        <footer class="modal-footer">
          <button class="admin-confirm-button" @click="$emit('confirm', banner, index)">적용</button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
import DaumPostcode from "vuejs-daum-postcode";
import axios from "axios";

export default {
    props:['banner', 'index'],
  components: {
    DaumPostcode,
  },
  data() {
    return {
      roadAddress: null,
      addData: "",
    };
  },
  methods: {
      handleFileUpload() {
        this.banner.banner_image = this.$refs.banner_image.files[0];
    },
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
    overflow: hidden;
  }

  &-content {
      width: 800px;
    padding: 20px 40px;
    padding-bottom: 60px;
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
.admin-banner-row-container {
    text-align: left;
}
.admin-modal-title {
    font-size: 21px;
    position: relative;
}

.admin-confirm-button {
    margin: 0 auto;
    width: 120px;
    background-color: #f0542d;
    color: #fff;
    border: 0px;
    border-radius: 15px;
    padding: 10px;
}
</style>
