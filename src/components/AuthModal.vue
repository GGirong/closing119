<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <div class="auth-modal-content">
            카카오톡으로 본인확인을 위한 인증번호가 발송되었습니다.<br>
            확인 후 인증번호를 입력하시면 인증 절차가 완료되어<br>
            가입을 진행하실 수 있습니다.
          </div> 
          <input
          class="auth-code-input"
          placeholder="인증번호 입력"
          v-model="inputCode"
          />
        </div>
        <footer class="auth-modal-footer">
          <button style="border-radius: 10px;" @click="selfAuth()">인증</button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
import DaumPostcode from "vuejs-daum-postcode";

export default {
  props:['authCode'],
  components: {
    DaumPostcode,
  },
  data() {
    return {
      roadAddress: null,
      addData: "",
      inputCode: "",
    };
  },
  methods: {
    selfAuth() {
      if(this.inputCode == this.authCode) {
        this.$emit('confirm')
      }
      else {
        alert("인증번호가 틀렸습니다. 다시 한 번 확인해주세요.")
      }
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
.auth-modal-footer {
  text-align: center;
  padding-bottom: 15px
}
.auth-modal-content {
  text-align: center;
  font-size: 18px;
  padding: 30px;
}
.auth-code-input {
  width: 250px;
  margin: 0 auto;
}
@media (max-width:1141px) {
  .auth-modal-content {
    text-align: center;
    font-size: 10px;
    padding: 5px;
  }
  .auth-code-input {
    width: 150px;
    margin: 0 auto;
  }
}
</style>
