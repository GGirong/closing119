<template>
  <!--====================  footer area ====================-->
  <div class="footer-area dark-bg">
    <div class="footer-container">
      <div class="row">
        <div
          class="footer-head-container col-12 col-lg-8"
          style="padding: 30px"
        >
          <div style="font-size: 16px; font-weight: 300; color: #fff">
            <span
              @click="agree(0)"
              style="text-decoration:underline; cursor:pointer"
              >이용약관</span
            >
            |
            <span
              @click="agree(1)"
              style="text-decoration:underline; cursor:pointer"
            >
              개인정보취급방침</span
            >
            |
            <router-link to="/partners">파트너스·제휴 신청</router-link>
          </div>

          <div
            style="margin-top: 35px;color: #fff; font-size: 14px; opacity: 0.5;"
          >
            상호명:주)동행365&nbsp;&nbsp;&nbsp;&nbsp;사업자등록번호:855-87-00885&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="footer-spacing"></div>
            통신판매업 신고:제2019-서울서초-0203호<br />
            주소:서울특별시 서초구 양재천로 93 정원빌딩 5F <br />
            대표자: 고경수&nbsp;&nbsp;&nbsp;&nbsp;정보보호책임자: 이근표
          </div>
          <div
            style="font-size: 14px; font-weight: 300;color: #fff; opacity: 0.3; margin-top:10px"
          >
            COPYRIGHT (C) 2019 CLOSING119. ALLRIGHT RESERVED
          </div>
        </div>
        <div class="footer-tail-container col-12 col-lg-4">
          <img
            src="../../public/assets/img/share_facebook.png"
            style="margin-right: 10px"
          />
          <a href="https://blog.naver.com/closing_119" target="_blank"
            ><img src="../../public/assets/img/share_blog.png"
          /></a>
          <div style="opacity: 0.7; color:#fff; font-size: 35px;">
            1800.7886
          </div>
          <div style="color: #fff; font-size: 14px; opacity: 0.5;">
            고객센터: 월~금 09:00~18:00 / 공휴일, 일요일 휴무 <br />
            팩스: 02-3461-7886 이메일: jae037@with365.co.kr
          </div>
        </div>
      </div>
    </div>
    <!--====================  End of footer area  ====================-->
    <div class="footer-container-mobile">
      <div class="row" style="margin-left: 0; margin-right: 0">
        <div class="footer-head-container col-12 col-lg-8" style="padding: 0px">
          <div
            style="font-size: 16px; font-weight: 300; color: #fff; margin-top: 25px"
          >
            <span
              @click="agree(0)"
              style="text-decoration:underline; cursor:pointer"
              >이용약관</span
            >
            |
            <span
              @click="agree(1)"
              style="text-decoration:underline; cursor:pointer"
            >
              개인정보취급방침</span
            >
            |
            <router-link to="/partners">파트너스·제휴 신청</router-link>
          </div>

          <img
            src="../../public/assets/img/share_facebook.png"
            style="margin-right: 10px; margin-top: 35px"
          />
          <a href="https://blog.naver.com/closing_119" target="_blank"
            ><img
              src="../../public/assets/img/share_blog.png"
              style="margin-top: 35px"
          /></a>
          <div style="opacity: 0.7; color:#fff; font-size: 35px;">
            1800.7886
          </div>
          <div style="color: #fff; font-size: 14px; opacity: 0.5;">
            고객센터: 월~금 09:00~18:00 / 공휴일, 일요일 휴무 <br />
            팩스: 02-3461-7886 이메일: jae037@with365.co.kr
          </div>
        </div>
        <div class="footer-tail-container col-12 col-lg-4">
          <div style=";color: #fff; font-size: 14px; opacity: 0.5;">
            상호명:주)동행365&nbsp;&nbsp;&nbsp;&nbsp;사업자등록번호:855-87-00885&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="footer-spacing"></div>
            통신판매업 신고:제2019-서울서초-0203호<br />
            주소:서울특별시 서초구 양재천로 93 정원빌딩 5F <br />
            대표자: 고경수&nbsp;&nbsp;&nbsp;&nbsp;정보보호책임자: 이근표
          </div>
          <div
            style="font-size: 14px; font-weight: 300;color: #fff; opacity: 0.3; margin-top:10px"
          >
            COPYRIGHT (C) 2019 CLOSING119. ALLRIGHT RESERVED
          </div>
        </div>
      </div>
    </div>
    <UserModal @close="closeModal" v-if="userModal" />
    <PrivacyModal @close="closeModal" v-if="privacyModal" />
  </div>
  <!--====================  End of footer area  ====================-->
</template>

<script>
import ContactWidget from "@/components/ContactWidget.vue";
import UserModal from "../components/UserModal";
import PrivacyModal from "../components/PrivacyModal";

export default {
  components: {
    ContactWidget,
    UserModal,
    PrivacyModal,
  },
  data() {
    return {
      userModal: false,
      privacyModal: false,
    };
  },
  methods: {
    agree(num) {
      if (num == 0) {
        this.userModal = true;
      } else {
        this.privacyModal = true;
      }
    },
    closeModal() {
      this.userModal = false;
      this.privacyModal = false;
    },
  },
};
</script>

<style lang="scss">
.footer-container {
  width: 1200px;
  margin: 0 auto;
}
.footer-container-mobile {
  display: none;
}
.footer-spacing {
  display: none;
}
.footer-tail-container {
  text-align: right;
  margin-top: 50px;
}
@media screen and (max-width: 767px) {
  .footer-container {
    display: none;
  }
  .footer-container-mobile {
    display: block;
    max-width: 375px;
    margin: 0 auto;
  }
  .footer-head-container {
    text-align: center;
  }
  .footer-spacing {
    display: block;
  }
  .footer-tail-container {
    text-align: center;
    margin-top: 0px;
    padding-bottom: 30px;
  }
}
</style>
