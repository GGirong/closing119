<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class="estimate-container">
            <div class="row">
              <div class="col-12 text-center" style="font-size: 21px;">
                견적서 자세히 보기
              </div>
              <div
                class="col-12"
                style="height:1px; background-color:#d4d4d4; margin-top: 10px; margin-bottom: 20px"
              ></div>
              <div class="estimate-modal-content-container row">
                <div class="estimate-modal-title col-4">
                  업체명
                </div>
                <div class="estimate-modal-text col-8">
                  {{ estData.partner.partner_name }}
                </div>
                <div class="estimate-modal-title col-4">
                  대표
                </div>
                <div class="estimate-modal-text  col-8">
                  {{ estData.partner.ceo }}
                </div>
                <div class="estimate-modal-title col-4">
                  견적 금액
                </div>
                <div class="estimate-modal-text  col-8">
                  {{ estData.total_price }}원 (VAT 별도)
                </div>
                <div class="estimate-modal-title col-4">
                  세부사항
                </div>
                <div class="estimate-modal-text-box col-12">
                  {{ estData.detail }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="modal-footer">
          <button class="est-close-button" @click="$emit('close')">닫기</button>
          <button class="est-confirm-button" @click="$emit('select')">
            업체 선정하기
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: ["estData"],
  data() {
    return {
      addData: "",
    };
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
    max-width: 1000px
  }

  &-content {
    padding: 10px 20px;
  }

  &-footer {
    borer-top: 1px solid #ccc;
    padding: 10px;
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
.estimate-modal-text  {
  margin-top: 15px
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

.estimate-modal-title {
  margin-top: 15px;
  color: #777
}
.estimate-modal-text-box {
  max-width: 900px !important
}
.estimate-modal-content-container {
  padding: 30px
}
.est-confirm-button {
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding: 5px 30px;
  background-color: #f0542d;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
}
.est-close-button {
  width: 250px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #f0542d;
  padding: 5px 50px;
  color: #f0542d;
  text-transform: uppercase;
  background-color: #fff;
  font-weight: 700;
}
@media (max-width: 1141px) {
  .estimate-modal-title {
    margin-top: 5px;
    font-size: 10px
  }
  .estimate-modal-text {
    margin-top: 5px;
    font-size: 10px;
  }
  .estimate-modal-text-box {
    font-size: 10px
  }
  .estimate-modal-content-container {
    padding: 10px
  }
  .est-confirm-button {
    width: 145px;
    font-size: 14px;
  }
  .est-close-button {
    width: 145px;
  }
}
</style>
