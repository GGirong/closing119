<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
            <div class="estimate-container">
              <div style="width: 200px; font-size: 21px; margin: 0 auto">
                견적서 자세히 보기
              </div>
              <div style="height:1px; background-color:#d4d4d4; margin-top: 10px; margin-bottom: 20px"></div>
                <div class="estimate-text">
                    이름 : 꽈뚜릅
                </div>
                <div class="estimate-text">
                    상호명 : 금영건설
                </div>
                <div class="estimate-text">
                    견적 금액 : 879 만원
                </div>
            </div>
        </div>
        <footer class="modal-footer">
            <button class="closeButton" @click="$emit('close')">닫기</button>
            <button class="confirmButton" @click="$emit('select')">업체 선정하기</button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
    export default {
        props:['estData'],
        data() {
            return {
                addData: ""
            }
        },
        mounted() {
            console.log("모달 열림")
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

.confirmButton {
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 10px;
    padding: 5px 30px;
    background-color: #f0542d;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 700;
}
.closeButton {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #f0542d;
    padding: 5px 30px;
    color:  #f0542d;
    text-transform: uppercase;
    background-color: #fff;
    font-weight: 700;
}
</style>