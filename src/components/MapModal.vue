<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class="estimate-container">
            <div class="map-modal-title">
              견적요청서 자세히 보기
              <b-icon-x
                style="cursor: pointer;"
                @click="$emit('close')"
              ></b-icon-x>
            </div>
            <div
              style="height:1px; background-color:#d4d4d4; margin-top: 10px; margin-bottom: 20px"
            ></div>
            <div class="row" style="padding: 15px">
              <div class="map-modal-estimate-text-box col-6">
                <div class="map-modal-estimate-text-title">
                  상호명
                </div>
                <div class="map-modal-estimate-text-subtitle">
                  {{ clientData.business_name }}
                </div>
              </div>
              <div class="map-modal-estimate-text-box col-6">
                <div class="map-modal-estimate-text-title">
                  주소
                </div>
                <div class="map-modal-estimate-text-subtitle">
                  {{ clientData.address }}
                </div>
              </div>
              <div class="map-modal-estimate-text-box col-6">
                <div class="map-modal-estimate-text-title">
                  업종
                </div>
                <div class="map-modal-estimate-text-subtitle">
                  {{ clientData.sector }}
                </div>
              </div>
              <div class="map-modal-estimate-text-box col-6">
                <div class="map-modal-estimate-text-title">
                  평수
                </div>
                <div class="map-modal-estimate-text-subtitle">
                  {{ clientData.py }}
                </div>
              </div>

              <div class="col-12">
                <carousel
                  class="map-modal-image-container"
                  :items="1"
                  :margin="15"
                  :loop="false"
                  :dots="false"
                  :nav="false"
                  :autoplay="false"
                >
                  <div v-for="image in clientData.images" :key="image.id">
                    <img
                      :src="'https://new-api.closing119.com' + image.image"
                      alt="thumbnail"
                      class="map-modal-image"
                    />
                  </div>
                </carousel>
              </div>
            </div>
          </div>
        </div>
        <footer class="modal-footer">
          <button class="closeButton" @click="$emit('close')">닫기</button>
          <button class="confirmButton" @click="$emit('offmeeting')">
            방문 요청하기
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
import carousel from "vue-owl-carousel2";

export default {
  props: ["clientData"],
  components: { carousel },
  data() {
    return {
      addData: "",
    };
  },
  mounted() {
    if (this.clientData.sector == "음식점 (식당/카페/호프/패스트푸드 등)") {
      this.clientData.sector = "음식점";
    } else if (
      this.clientData.sector ==
      "도소매 (편의점/문구사무/애견/화장품/기타잡화 등)"
    ) {
      this.clientData.sector = "도소매";
    } else if (
      this.clientData.sector == "서비스업 (학원/미용/주유소/세탁/기타서비스업)"
    ) {
      this.clientData.sector = "서비스업";
    } else if (
      this.clientData.sector == "여가 오락(pc방/노래방/당구장/골프장/헬스/기타)"
    ) {
      this.clientData.sector = "여가 오락";
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
    overflow: hidden;
  }

  &-content {
    padding: 10px 20px;
  }

  &-footer {
    border-top : #ccc;
    padding: 10px;
    text-align: center;
    justify-content: space-around
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
  max-width: 1000px;
}
.map-modal-estimate-text {
  margin-left: 20px
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


.estimate-text-box {

}
</style>

<style>
.map-modal-image-container {
  max-width: 200px;
  margin: 0 auto;
}
.map-modal-title {
  font-size: 21px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.map-modal-estimate-text-title {
  color: rgb(94, 84, 84);
  font-size: 14px;
}
.map-modal-estimate-text-subtitle {
  font-size: 16px;
}
.map-modal-image {
  max-width: 200px;
  object-fit: cover;
  object-position: 50%;
}
@media (max-width: 1141px) {
  .map-modal-title {
    font-size: 16px;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
  }
  .map-modal-estimate-text-title {
    color: rgb(94, 84, 84);
    font-size: 10px;
  }
  .map-modal-estimate-text-subtitle {
    font-size: 12px;
  }
  .map-modal-image {
    max-width: 150px;
    object-fit: cover;
    object-position: 50%;
    margin-top: 15px;
  }
  .map-modal-image-container {
    max-width: 150px;
    margin: 0 auto;
  }
}
</style>
