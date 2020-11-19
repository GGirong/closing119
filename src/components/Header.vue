<template>
  <!--====================  header area ====================-->
  <fixed-header>
    <div class="header-area">
      <div class="header-area__desktop header-area__desktop--default">
        <!--=======  header top bar  =======-->
        <!--=======  End of header top bar  =======-->

        <!--=======  header info area  =======-->
        <div class="header-info-area">
          <div class="header-container">
            <div
              class="row align-items-center"
              style="margin-left: 0px; margin-right: 0px;"
            >
              <div class="col-lg-12" style="padding-right: 0px !important">
                <div class="header-info-wrapper align-items-center">
                  <!-- logo -->
                  <div class="logo">
                    <router-link to="/">
                      <img
                        src="../../public/assets/img/logo/closing_logo.png"
                        alt="Brand Logo"
                      />
                    </router-link>
                  </div>
                  <!-- header btn -->
                  <div class="header-info-btn-container">
                    <router-link to="/client">
                      <div class="header-info-btn">
                        우리 매장 견적 확인하기
                        <img
                          src="../../public/assets/img/pencile.png"
                          class="header-info-btn-img"
                        />
                      </div>
                    </router-link>
                  </div>

                  <!-- header contact info -->
                  <div class="header-contact-info">
                    <div class="header-info-single-item">
                      <div class="header-info-single-item__content">
                        <p class="header-info-single-item__subtitle">
                          <router-link to="/client">견적 요청하기</router-link>
                        </p>
                      </div>
                      <div class="header-info-single-item__content">
                        <p class="header-info-single-item__subtitle">
                          <router-link to="/clientcheck/homepage"
                            >내 견적 확인하기</router-link
                          >
                        </p>
                      </div>
                      <div class="header-info-single-item__content">
                        <p class="header-info-single-item__subtitle">
                          <router-link to="/partners"
                            >파트너스 로그인</router-link
                          >
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- mobile menu -->
                  <div
                    class="mobile-navigation-icon"
                    id="mobile-menu-trigger"
                    @click="mobiletoggleClass('addClass', 'active')"
                  >
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--=======  End of header info area =======-->
      </div>
    </div>
    <!--====================  End of header area  ====================-->
  </fixed-header>
</template>

<script>
import FixedHeader from "vue-fixed-header";
export default {
  components: {
    FixedHeader,
  },
  methods: {
    // offcanvas mobilemenu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
};
</script>

<style lang="scss">
.vue-fixed-header--isFixed {
  left: 0;
  top: 0;
  width: calc(100vw - 20px);
  z-index: 999;
  position: fixed;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
  animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running
    fadeInDown;
}
</style>
