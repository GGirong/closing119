<template>
  <!--====================  fun fact area ====================-->
  <div class="believe-section">
    <div class="low-container">
      <div>
        <div class="believe-head-container">
          <div class="believe-head-tag">
            폐업지원컨설팅 무료지원
          </div>
          <div class="believe-head-title">
            머리아픈 폐업,
            <div class="mobile-spacing"></div>
            누군가에게 전부 맡기고 싶으시다면?
          </div>
          <div class="believe-head-subtitle">
            3,000건 이상의 컨설팅 현장 경험 노하우를 가지고 있는
            <div class="mobile-spacing"></div>
            폐업119의 폐업지원컨설턴트를 통해
            <div class="mobile-spacing"></div>
            무료로 폐업컨설팅을 받을 수 있어요!<br />
            <div class="mobile-tap"></div>
            고민 끝에 결정하신 폐업,
            <div class="mobile-spacing"></div>
            신뢰할 수 있는 폐업119에게 맡겨주세요!
          </div>
        </div>
        <div
          class="row text-center"
          style="margin-left: 0px; margin-right: 0px;"
        >
          <div class="col-6 col-lg-2">
            <div class="believe-left-title">
              국내최초 폐업재기<br />
              박람회 개최
            </div>
            <img
              src="../../public/assets/img/blv-1.png"
              class="believe-image-1"
            />
          </div>
          <div class="col-6 col-lg-3">
            <div class="believe-left-title">
              소상공인시장공단<br />
              지정 교육 기관
            </div>
            <div class="believe-subtitle" style="margin-top:5px">
              (*폐업컨설팅 분야, 2019~2020)
            </div>
            <img
              src="../../public/assets/img/blv-2.png"
              class="believe-image-2"
            />
          </div>
          <div class="col-4 col-lg-2">
            <div class="believe-right-title">
              상담완료건수
            </div>
            <div class="believe-subtitle">누적접수건수(*2015~)</div>
            <div class="believe-title">
              <span class="believe-title-bold" v-if="countOn"
                ><ICountUp :endVal="this.main_num.complete_num"/></span
              >개
            </div>
          </div>
          <div class="col-4 col-lg-3">
            <div class="believe-right-title">
              서비스 수행건수
            </div>
            <div class="believe-subtitle">누적접수건수(*2015~)</div>
            <div class="believe-title">
              <span class="believe-title-bold" v-if="countOn"
                ><ICountUp :endVal="this.main_num.perform_num"/></span
              >개
            </div>
          </div>
          <div class="col-4 col-lg-2">
            <div class="believe-right-title">
              협력 업체 수
            </div>
            <div class="believe-subtitle">전국 가맹 업체 수</div>
            <div class="believe-title">
              <span class="believe-title-bold" v-if="countOn"
                ><ICountUp :endVal="this.main_num.partner_num"/></span
              >개
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of fun fact area  ====================-->
</template>

<script>
import ICountUp from "vue-countup-v2";
import axios from "axios";

export default {
  components: {
    ICountUp,
  },
  data() {
    return {
      delay: 300,
      countOn: false,
      main_num: "", 
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  methods: {
    handleScroll() {
      const scrollY = document.documentElement.scrollTop;
      if (this.window.width > 1141) {
        if (scrollY > 2600) {
          this.countOn = true;
        } else {
          this.countOn = false;
        }
      } else {
        if (scrollY > 2600) {
          this.countOn = true;
        } else {
          this.countOn = false;
        }
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
  async mounted() {
    await axios.get("https://new-api.closing119.com/api/main-num/1").then(res=> {
      this.main_num = res.data
    })
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  created: function() {
    // 핸들러 등록하기
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy: function() {
    // 핸들러 제거하기(컴포넌트 또는 SPA의 경우 절대 잊지 말아 주세요!)
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
.believe-section {
  background-color: #f6fcfb;
  padding-bottom: 100px;
  padding-top: 96px;
}
.believe-head-container {
  margin-left: -27px;
}
.believe-head-tag {
  background-color: #1666fe;
  border-radius: 20px;
  color: #fff;
  padding-left: 15px;
  width: 185px;
}
.believe-image-1 {
  margin-top: 63px;
}
.believe-image-2 {
  margin-top: 30px;
}
.believe-head-title {
  font-size: 30px;
  font-family: NotoSansKR-Bold;
  color: #000;
}
.believe-head-subtitle {
  font-size: 16px;
  line-height: 20px;
  color: #555;
  margin-top: 5px;
  margin-bottom: 82px;
}
.believe-head-spacing {
  display: none;
}
.believe-left-title {
  position: relative;
  font-size: 21.68px;
  line-height: 24px;
  font-family: NotoSansKR-Bold;
  color: #383838;
}
.believe-subtitle {
  font-size: 12.93px;
  color: #383838;
  margin-top: 10px;
}
.believe-right-title {
  font-size: 26.94px;
  font-family: NotoSansKR-Bold;
}
.believe-title {
  margin-top: 90px;
  font-size: 32px;
}
.believe-title-bold {
  font-size: 50px;
  font-family: NotoSansKR-Bold;
  color: #1666fe;
}
.mobile-tap {
  display: none;
}
@media screen and (max-width: 767px) {
  .believe-section {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .believe-head-container {
    margin-left: 0px;
    text-align: center;
  }
  .believe-head-tag {
    padding-left: 0;
    margin: 0 auto;
  }
  .believe-head-title {
    margin-top: 15px;
    font-size: 19px;
    line-height: 26px;
    font-family: NotoSansKR-Bold;
    color: #000;
  }
  .believe-head-subtitle {
    font-size: 12.5px;
    line-height: 18px;
    color: #555;
    margin-top: 10px;
    margin-bottom: 52px;
  }
  .mobile-tap {
    display: block;
    height: 5px;
  }
  .believe-left-title {
    font-size: 18px;
  }
  .believe-subtitle {
    font-size: 10px;
  }
  .believe-right-title {
    font-size: 14px;
    margin-top: 30px;
  }
  .believe-title {
    margin-top: 30px;
    font-size: 16px;
  }
  .believe-title-bold {
    font-size: 28px;
  }
  .believe-image-1 {
    margin-top: 63px;
    width: 95px;
  }
  .believe-image-2 {
    margin-top: 40px;
    width: 95px;
  }
}
</style>
