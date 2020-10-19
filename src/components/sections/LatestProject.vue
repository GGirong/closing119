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
              :autoplayTimeout="5000"
              :autoplayHoverPause="true"
              v-if="loading"
            >
            <div class="partner-banner-image-container" v-for="item in bannerData" :key="item.id">
              <img
                :src="item.banner_image"
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
      loading: false,
    };
  },
  async mounted() {
    await axios.get("https://new-api.closing119.com/api/banner/").then(res=> {
      for(var i in res.data) {
        if(res.data[i].upper_text != "none") {
          console.log(res.data[i])
          this.bannerData.unshift(res.data[i])
        }
      }
      this.loading = true
    })
    
  }
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
@media screen and (max-width: 767px) {
  .partner-banner-head-container {
    margin-left: 0px;
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
}
</style>
