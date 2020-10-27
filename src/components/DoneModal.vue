<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class="estimate-container">
            <div style="width: 200px; font-size: 21px; margin: 0 auto">
              견적요청서 자세히 보기
            </div>
            <div
              style="height:1px; background-color:#d4d4d4; margin-top: 10px; margin-bottom: 20px"
            ></div>
            <div class="col-12">
              <div class="row row-5 image-popup">
                <div
                  class="col-xl-3 col-lg-4 col-sm-6 col-12 section-space--top--10"
                  v-for="image in clientData.images"
                  :key="image.id"
                >
                  <router-link
                    to="/project-details"
                    class="gallery-item single-gallery-thumb"
                  >
                    <img
                      :src="'https://new-api.closing119.com' + image.image"
                      alt="thumbnail"
                    />
                    <span class="plus"></span>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="estimate-text">이름 : {{ clientData.client_name }}</div>
            <div class="estimate-text">
              상호명 : {{ clientData.business_name }}
            </div>
            <div class="estimate-text">주소 : {{ clientData.address }}</div>
            <div class="estimate-text">업종 : {{ clientData.sector }}</div>
            <div class="estimate-text">평수 : {{ clientData.py }}</div>
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
export default {
  props: ["clientData"],
  data() {
    return {
      addData: "",
    };
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
}
.estimate-text {
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
</style>
