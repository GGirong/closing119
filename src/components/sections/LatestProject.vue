<template>
  <!--====================  project slider area ====================-->
  <div
    class="project-slider-area grey-bg section-space--inner--100"
    style="padding-bottom: 75px"
  >
    <div style="width: 100%; overflow: hidden;">
      <div class="low-container">
        <div class="partner-banner-head-container">
          <div class="partner-banner-head-tag">
            폐업119 철거파트너
          </div>
          <div class="partner-banner-head-title">
            책임공사제 시행! 깐깐한 기준을
            <div class="mobile-spacing"></div>
            통과한 검증된 파트너 군단 !
          </div>
          <div class="partner-banner-head-subtitle">
            폐업119만의 깐깐한 기준을 통과한 파트너업체들을 통해
            <div class="mobile-spacing"></div>
            보다 신속하고 깔끔한 시공을 도와드립니다.
          </div>
        </div>

        <div class="partner-banner-row row">
          <div class="col-lg-12">
            <carousel
              class="partner-banner-container"
              :items="1"
              :margin="15"
              :loop="true"
              :dots="false"
              :nav="false"
              :autoplay="true"
              :autoplayTimeout="3000"
              :autoplayHoverPause="true"
              v-if="loading"
            >
            <div class="partner-banner-image-container" v-for="item in bannerData" :key="item.id">
              <img
                :src="'https://new-api.closing119.com' + item.banner_image"
                class="partner-banner-image"
              />
              <div class="partner-banner-upper-text">{{ item.upper_text }}</div>
              <div class="partner-banner-bottom-text">{{ item.bottom_text }}</div>
            </div>
            </carousel>
            <carousel
              class="partner-banner-container mobile"
              :items="1"
              :margin="15"
              :loop="true"
              :dots="false"
              :nav="false"
              :autoplay="true"
              :autoplayTimeout="3000"
              :autoplayHoverPause="true"
              v-if="loading"
            >
            <div class="partner-banner-image-container" v-for="item in bannerData_m" :key="item.id">
              <img
                :src="'https://new-api.closing119.com' + item.banner_image"
                class="partner-banner-image"
              />
              <div class="partner-banner-upper-text">{{ item.upper_text }}</div>
              <div class="partner-banner-bottom-text">{{ item.bottom_text }}</div>
            </div>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of project slider area  ====================-->
</template>

<script>
import carousel from "vue-owl-carousel2";
import axios from "axios";

export default {
  components: { carousel },
  data() {
    return {
      swiperOption: {
        speed: 1500,
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".ht-swiper-button-next",
          prevEl: ".ht-swiper-button-prev",
        },
      },
      bannerData: [],
      bannerData_m: [],
      loading: false,
      window: {
        width: 0,
        height: 0,
      },
      mobile: false,
    };
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (this.window.width > 1141) {
        this.mobile = false
      } else {
        this.mobile = true
      }
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  async mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    await axios.get("https://new-api.closing119.com/api/banner/?banner_type=ptn&banner_env=pc").then(res=> {
      for(var i in res.data.results) {
        if(res.data.results[i].show_content) {
          this.bannerData.unshift(res.data.results[i])
        }
      }
    })
    await axios.get("https://new-api.closing119.com/api/banner/?banner_type=ptn&banner_env=m").then(res=> {
      for(var i in res.data.results) {
        if(res.data.results[i].show_content) {
          this.bannerData_m.unshift(res.data.results[i])
        }
        this.loading = true
      }
    })
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss">
.partner-banner-head-container {
  margin-left: -27px;
}
.partner-banner-head-tag {
  background-color: #1666fe;
  border-radius: 20px;
  color: #fff;
  padding-left: 16px;
  width: 160px;
}
.partner-banner-head-title {
  font-size: 30px;
  font-family: NotoSansKR-Bold;
  color: #000;
}
.partner-banner-head-subtitle {
  font-size: 16px;
  line-height: 20px;
  color: #555;
  margin-bottom: 82px;
}
.partner-banner-container {
  overflow: visible !important;
}
.partner-banner-container.mobile {
  display: none;
}
.partner-banner-row {
  width: 944px;
  margin: 0 auto;
}
.partner-banner-item {
  height: 557px;
  background-size: contain;
}
.partner-banner-item-container {
  position: relative;
}
.partner-banner-upper-text {
  position: absolute;
  top: 140px;
  left: 50px;
  font-size: 45px;
  color: #fff;
  font-family: NotoSansKR-Bold;
}
.partner-banner-bottom-text {
  position: absolute;
  top: 190px;
  left: 50px;
  font-size: 45px;
  color: #fff;
  font-family: NotoSansKR-Bold;
}
.owl-stage-outer {
  overflow: visible !important;
}
.owl-item {
  opacity: 0.4;
}
.owl-item.active {
  opacity: 1;
}
@media (max-width: 501px) {
  .partner-banner-container {
    display: none;
  }
  .partner-banner-container.mobile {
    display: block;
  }
}
@media (max-width: 1270px) {
  .partner-banner-head-container {
    margin-left: 0px;
  }
}
@media screen and (max-width: 1200px) {
  .partner-banner-head-container {
    text-align: center;
  }
  .partner-banner-head-tag {
    background-color: #1666fe;
    border-radius: 20px;
    color: #fff;
    padding-left: 0px;
    width: 160px;
    margin: 0 auto;
  }
  .partner-banner-head-title {
    margin-top: 15px;
    font-size: 24px;
    line-height: 32px;
  }
  .partner-banner-head-subtitle {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .partner-banner-row {
    width: 300px;
    margin: 0 auto;
  }
  .partner-banner-item {
    height: 167px;
    background-size: contain;
  }
  .partner-banner-upper-text {
    top: 42px;
    left: 21px;
    font-size: 12px;
  }
  .partner-banner-bottom-text {
    top: 58px;
    left: 21px;
    font-size: 12px;
  }
  .partner-banner-image {
    max-width: 270px;
  }
}
</style>
