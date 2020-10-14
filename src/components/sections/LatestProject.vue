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
            >
              <img
                src="../../../public/assets/img/parnter_1.jpeg"
                class="partner-banner-item"
              />

              <img
                src="../../../public/assets/img/partner_2.jpeg"
                class="partner-banner-item"
              />

              <img
                src="../../../public/assets/img/partner_3.jpeg"
                class="partner-banner-item"
              />

              <img
                src="../../../public/assets/img/partner_4.jpeg"
                class="partner-banner-item"
              />

              <img
                src="../../../public/assets/img/partner_5.jpeg"
                class="partner-banner-item"
              />
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
      partnerList: [
        {
          id: 1,
          title1: "저의 긍정에너지를",
          title2: "가득 채워드리고 싶어요.",
          sector: "서울/경기/인천",
          business_name: "그린철거",
        },
        {
          id: 2,
          title1: "비결이요?",
          title2: "정답은 친절입니다.",
          sector: "강원도",
          business_name: "재영건설",
        },
        {
          id: 3,
          title1: "늘어나는 스킬과 함께",
          title2: "제 자신도 레벨업 중이에요.",
          sector: "경상도",
          business_name: "명구철거",
        },
        {
          id: 4,
          title1: "제자리에 머무르지 않고",
          title2: "계속 성장해야죠.",
          sector: "전라도",
          business_name: "호중무역",
        },
        {
          id: 5,
          title1: "신뢰란 사소한 것에서",
          title2: "부터 만들어지는 것이죠.",
          sector: "충청도",
          business_name: "성장철거",
        },
      ],
    };
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
.partner-banner-row {
  width: 944px;
  margin: 0 auto;
}
.partner-banner-item {
  height: 557px;
  background-size: contain;
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
