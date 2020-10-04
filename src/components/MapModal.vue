<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
            <div class="estimate-container">
              <div style="width: 200px; font-size: 21px; margin: 0 auto">
                견적요청서 자세히 보기
              </div>
              <div style="height:1px; background-color:#d4d4d4; margin-top: 10px; margin-bottom: 20px"></div>
                <div class="row">
                  <div class="estimate-text-box col-lg-6 col-md-12">
                    <div class="estimate-text-title">
                      상호명
                    </div>
                    <div class="estimate-text-subtitle">
                      {{ clientData.business_name}}
                    </div>
                  </div>
                  <div class="estimate-text-box col-lg-6 col-md-12">
                    <div class="estimate-text-title">
                      주소
                    </div>
                    <div class="estimate-text-subtitle">
                      {{ clientData.address}}
                    </div>
                  </div>
                  <div class="estimate-text-box col-lg-6 col-md-12">
                    <div class="estimate-text-title">
                      업종
                    </div>
                    <div class="estimate-text-subtitle">
                      {{ clientData.sector}}
                    </div>
                  </div>
                  <div class="estimate-text-box col-lg-6 col-md-12">
                    <div class="estimate-text-title">
                      평수
                    </div>
                    <div class="estimate-text-subtitle">
                      {{ clientData.py}}
                    </div>
                  </div>
                
                <div class="col-12">
                  <div class="row row-5 image-popup">
                      <div class="col-xl-3 col-lg-4 col-sm-6 col-3 section-space--top--20" v-for="image in clientData.images" :key="image.id">
                          <img :src="'https://new-api.closing119.com' + image.image"  
                          alt="thumbnail"
                          class="map-modal-image"
                          >
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <footer class="modal-footer">
            <button class="closeButton" @click="$emit('close')">닫기</button>
            <button class="confirmButton" @click="$emit('offmeeting')">방문 요청하기</button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
    export default {
        props:['clientData'],
        data() {
            return {
                addData: ""
            }
        },
        mounted() {
          console.log(this.clientData.images)
        }
    }
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
    width: 50vw;
    height: 45vh;
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

.map-modal-image {
    height: 100px;
    width: 100px;
    object-fit: cover;
    object-position: 50%;
}
.estimate-text-box {

}
.estimate-text-title {
  color: rgb(94, 84, 84)
  font-size: 14px
}
.estimate-text-subtitle {
  font-size: 16px
}
</style>