<template>
  <div class="hero-alider-area">
    <div class="hero-slider__container-area">
      <div class="swiper-container hero-slider__container">
        <div class="swiper-wrapper hero-slider__wrapper">
          <swiper :options="swiperOption" v-if="loading">
            <!--=======  single slider item  =======-->
            <div
              class="swiper-slide hero-slider__single-item"
              :style="{ backgroundImage: imgURL[0].url }"
            >
              <div class="hero-slider__content-wrapper">
                <div class="main-container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div
                        class="hero-slider__content hero-slider__content--center"
                      >
                        <h2 class="hero-slider__title head-title">
                          우리 매장의 철거·원상복구 비용은?<br />
                          한번의 등록으로
                          <div class="hero-slider__space"></div>
                          여러 철거업체의 견적을 받아보세요!
                        </h2>
                        <div class="hero-slider__text">
                          온라인 등록을 통해 실시간으로
                          <div class="hero-slider__space"></div>
                          우리 매장의 평균 철거 비용을 확인 하고
                          <div class="hero-slider__space"></div>
                          시공할 업체를 선정할 수 있어요!
                        </div>
                        <router-link to="/client" class="hero-slider__mainbtn"
                          >견적 요청하기(무료)</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!--=======  single slider item  =======-->
            <div
              class="swiper-slide hero-slider__single-item"
              :style="{ backgroundImage: imgURL[1].url }"
            >
              <div class="hero-slider__content-wrapper">
                <div class="main-container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div
                        class="hero-slider__content hero-slider__content--center"
                      >
                        <h2 class="hero-slider__title head-title">
                          폐업 단계의 경제적인 손실을 최소화할 수 있도록<br />
                          각종 정부지원정책을 활용해보세요!
                          <div class="hero-slider__space"></div>
                        </h2>
                        <div class="hero-slider__text" style="font-size: 16px">
                          폐업 및 재창업/재취업 시 적용 가능한 정부, 지자체의
                          각종 지원 제도를 연계하여
                          <div class="hero-slider__space"></div>
                          보다 빠른 재기를 준비하도록 지원합니다.
                          <div class="hero-slider__spacesm"></div>
                          <div class="hero-slider__space"></div>
                        </div>
                        <router-link to="/client" class="hero-slider__mainbtn"
                          >견적 요청하기(무료)</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--=======  single slider item  =======-->
            <div
              class="swiper-slide hero-slider__single-item"
              :style="{ backgroundImage: imgURL[2].url }"
            >
              <div class="hero-slider__content-wrapper">
                <div class="main-container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div
                        class="hero-slider__content hero-slider__content--center"
                      >
                        <h2 class="hero-slider__title head-title">
                          복잡한 폐업절차, <div class="hero-slider__space"></div>누군가에게 전부 맡기고 싶으시다면?<br />
                          폐업119 원스탑 매장정리 서비스를 이용하세요!
                        </h2>
                        <div
                          class="hero-slider__text"
                          style="font-size: 16px; line-height: 22px; margin-bottom: 45px"
                        >
                          철거/원상복구,중고집기설비매각,각종 정부지원정책 등
                          <div class="hero-slider__space"></div>
                          폐업의 전 과정을 일괄 처리할 수 있도록 <br />폐업119
                          원스탑 매장정리 서비스를 지원합니다.
                        </div>
                        <router-link to="/client" class="hero-slider__mainbtn"
                          >견적 요청하기(무료)</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--=======  End of single slider item  =======-->
            <div
              class="ht-swiper-button-prev ht-swiper-button-prev-13 ht-swiper-button-nav d-none d-xl-block"
            >
              <i class="ion-ios-arrow-left"></i>
            </div>
            <div
              class="ht-swiper-button-next ht-swiper-button-next-13 ht-swiper-button-nav d-none d-xl-block"
            >
              <i class="ion-ios-arrow-forward"></i>
            </div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  props: ["sliderData"],
  data() {
    return {
      swiperOption: {
        speed: 1500,
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 5000
        },
        spaceBetween: 30,
        navigation: {
          nextEl: ".ht-swiper-button-next",
          prevEl: ".ht-swiper-button-prev",
        },
      },
      imgURL: "",
      imgURL_m: "",
      loading: false
    };
  },
  async mounted() {
    await axios.get("https://new-api.closing119.com/api/banner/?banner_type=main&banner_env=pc").then(res=> {
      this.imgURL = res.data.results
    })
    await axios.get("https://new-api.closing119.com/api/banner/?banner_type=main&banner_env=m").then(res=> {
      this.imgURL_m = res.data.results
    })
    if(window.innerWidth > 500) {
      for(let i in this.imgURL) {
        this.imgURL[i].url = `url(https://new-api.closing119.com` + this.imgURL[i].banner_image + `)`
      }
    }
    else {
      console.log("true")
      for(let i in this.imgURL_m) {
        this.imgURL[i].url = `url(https://new-api.closing119.com` + this.imgURL_m[i].banner_image + `)`
      }
    }
    this.loading = true
  }
};
</script>
