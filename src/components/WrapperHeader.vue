<template>
  <!--====================  header area ====================-->
  <div class="header-area">
    <div class="header-area__desktop header-area__desktop--default">
      <!--=======  header top bar  =======-->
      <!--=======  End of header top bar  =======-->

      <!--=======  header info area  =======-->
      <div class="header-info-area" style="padding: 5px">
        <div class="align-items-left">
          <div class="col-lg-12">
            <div style="position: relative">
              <!-- logo -->
              <router-link to="/">
                <img
                  src="assets/img/logo/closing_logo.png"
                  class="img-fluid"
                  alt="Brand Logo"
                  width="35px"
                />
              </router-link>
              <span
                style="position: absolute; top: 7px; left: 45px; font-family: NotoSansKR-Bold"
                >파트너스 페이지</span
              >
            </div>
          </div>
        </div>
      </div>
      <!--=======  End of header info area =======-->

      <!--=======  header navigation area  =======-->
      <div class="wrapper-header-navigation-area default-bg" v-if="login">
        <!-- header navigation -->
        <div class="wrapper-header-container">
          <div class="wrapper-header-navigation">
            <span class="wrapper-nav-content" v-if="partners"
              ><router-link to="/partners">견적 요청서 확인</router-link></span
            >
            <span class="wrapper-nav-content" v-if="estimating"
              ><router-link to="/estimating"
                >진행중인 견적 확인</router-link
              ></span
            >
            <span class="wrapper-nav-content" v-if="done"
              ><router-link to="/done">완료된 견적 확인</router-link></span
            >
            <span class="wrapper-nav-content" v-if="profile"
              ><router-link to="/profile">프로필 수정</router-link></span
            >
          </div>
        </div>
      </div>

      <!--=======  End of header navigation area =======-->
    </div>
  </div>
  <!--====================  End of header area  ====================-->
</template>

<script>
import FixedHeader from "vue-fixed-header";
export default {
  props: ["screen"],
  components: {
    FixedHeader,
  },
  data() {
    return {
      login: true,
      partners: true,
      estimating: true,
      done: true,
      profile: true,
    };
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
  mounted() {
    if (this.screen == "login") {
      this.login = false;
    }
    if (this.screen == "partners") {
      this.partners = false;
    }
    if (this.screen == "estimating") {
      this.estimating = false;
    }
    if (this.screen == "done") {
      this.done = false;
    }
    if (this.screen == "profile") {
      this.profile = false;
    }
  },
};
</script>

<style>
.vue-fixed-header--isFixed {
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 999;
  position: fixed;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
  animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running
    fadeInDown;
}
.wrapper-header-navigation-area {
}
.wrapper-header-container {
}

.wrapper-header-navigation {
  display: table-cell;
  vertical-align: middle;
  max-width: 450px;
  height: 50px;
  margin-left: 30px;
}
.wrapper-nav-content {
  margin-left: 25px;
  color: #fff;
}
</style>
