<template>
    <div class="admin-container">
        <div class="usecase-container">
            <div class="container-title">이용사례</div>
            <div class="head-swiper-section" v-if="loading">
            <div class="head-swiper-container">
                <div class="head-swiper-wrapper">
                <div class="swiper" v-swiper:swiper="swiperOption">
                    <div class="swiper-wrapper">
                    <div
                        class="swiper-slide"
                        v-for="item in usecase"
                        :key="item.main_modal.id"
                    >
                        <div
                        class="top-slide-headcircle"
                        :style="{
                            backgroundColor: item.color,
                            textShadow: item.subcolor,
                        }"
                        >
                        <div class="headcircle-title">
                            <span class="headcircle-bold-title">
                                -{{ item.main_modal.fund }}</span
                            >만원 <br />절감
                        </div>
                        </div>
                        <img
                        :src="'https://new-api.closing119.com' + item.image.modal_image"
                        class="top-slide-image"
                        />
                        <div class="top-slide-content-container row">
                        <div class="col-8">
                            <div class="top-slide-sector">
                            {{ item.main_modal.sector }}
                            </div>
                            <div class="top-slide-title">
                            {{ item.main_modal.business_name}}
                            </div>
                            <div class="top-slide-address">
                            <span class="top-slide-margin-right"
                                >{{ item.main_modal.address }}</span
                            >
                            |
                            <span class="top-slide-margin-left">{{ item.main_modal.py }}평</span>
                            </div>
                        </div>
                        <div class="col-4" style="position: relative">
                            <img
                            src="../../../public/assets/img/check_btn.png"
                            class="top-slide-check-1"
                            />
                            <img
                            src="../../../public/assets/img/check_btn.png"
                            class="top-slide-check-2"
                            />
                            <img
                            src="../../../public/assets/img/check_btn.png"
                            class="top-slide-check-3"
                            />
                            <div class="row text-left">
                            <div class="top-slide-check-text-1 col-12">
                                정부지원금 적용
                            </div>
                            <div class="top-slide-check-text-2 col-12">
                                {{ item.main_modal.partners_num }}개업체 비교견적
                            </div>
                            <div class="top-slide-check-text-3 col-12">
                                책임공사제 시행
                            </div>
                            </div>
                        </div>
                        </div>
                        <button class="admin-main-modal-edit-button" @click="openMainModal(item.main_modal.id)">수정하기</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            </div>
            <button class="admin-main-modal-button" @click="makeModalOpen()">새로 작성하기</button>
        </div>
        <div class="numbers-container">
            <div class="container-title">메인페이지 숫자</div>
            <div class="row">
                <div class="numbers-input-container col-4">
                    <div class="numbers-input-title">
                        상담완료건수
                    </div>
                    <div>
                        <input
                        class="form-control"
                        type="text"
                        placeholder=""
                        v-model="main_num.complete_num"
                    />
                    </div>
                </div>
                <div class="numbers-input-container col-4">
                    <div class="numbers-input-title">
                        서비스 수행건수
                    </div>
                    <div>
                        <input
                        class="form-control"
                        type="text"
                        placeholder=""
                        v-model="main_num.perform_num"
                    />
                    </div>
                </div>
                <div class="numbers-input-container col-4">
                    <div class="numbers-input-title">
                        협력 업체 수
                    </div>
                    <div>
                        <input
                        class="form-control"
                        type="text"
                        placeholder=""
                        v-model="main_num.partner_num"
                    />
                    </div>
                </div>
                <div class="col-12">
                    <button class="main-num-button" @click="patchMainNum()">적용</button>
                </div>
            </div>
        </div>
        <div class="banner-container">
            <div class="container-title">메인페이지 파트너스 배너 관리</div>
            <div v-for="banner in bannerData" :key="banner.id" class="admin-banner-link"
            @click="openModal(banner)">
                {{ (banner.id) - 2 }}번째 배너 수정하기
            </div>
            
        </div>
        <AdminBannerModal 
            :banner="banner"
            v-if="modal"
            @close="closeModal"
            @confirm="patchBanner"
            />
            <AdminMainModal
            v-if="makeModal"
            @close="closeModal"
            @confirm="makeMainModal"
            />
            <AdminMainModalRe
            :usecaseId="usecaseId"
            v-if="mainModal"
            @close="closeModal"
            @confirm="patchMainModal"
            />
    </div>
</template>
<script>
import AdminBannerModal from "../AdminBannerModal"
import AdminMainModal from "../AdminMainModal"
import AdminMainModalRe from "../AdminMainModalRe"
import axios from "axios";


export default {
    components: {
        AdminBannerModal,
        AdminMainModal,
        AdminMainModalRe,
      },
  data() {
    return {
        banner: "",
        modal: false,
        mainModal: false,
        makeModal: false,
        loading: false,
        bannerData: [],
        main_num: {},
        bannerUploadData: [],
        usecase: {},
        usecaseId: 0,
        swiperOption: {
            slidesPerView: 3,
            spaceBetween: 37,
            initialSlide: 2,
            loop: true,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        },
        slideList: [
        {
          id: 1,
          color: "#58bdb5",
          subcolor:
            "#009a8d 1px 1px, #009a8d 2px 2px, #009a8d 3px 3px,#009a8d 3px 3px,#009a8d 4px 4px,#009a8d 5px 5px,#009a8d 6px 6px,#009a8d 7px 7px,#009a8d 8px 8px, #009a8d 9px 9px,#009a8d 10px 10px,#009a8d 11px 11px,#009a8d 12px 12px,#009a8d 13px 13px,#009a8d 14px 14px,#009a8d 15px 15px,#009a8d 16px 16px,#009a8d 17px 17px,#009a8d 18px 18px,#009a8d 19px 19px,#009a8d 20px 20px, #009a8d 21px 21px, #009a8d 22px 22px, #009a8d 23px 23px,#009a8d 24px 24px,#009a8d 25px 25px,#009a8d 26px 26px,#009a8d 27px 27px,#009a8d 28px 28px, #009a8d 29px 29px, #009a8d 30px 30px, #009a8d 31px 31px, #009a8d 32px 32px, #009a8d 33px 33px, #009a8d 34px 34px,#009a8d 35px 35px,#009a8d 36px 36px, #009a8d 37px 37px, #009a8d 38px 38px, #009a8d 39px 39px, #009a8d 40px 40px, #009a8d 41px 41px, #009a8d 42px 42px",
        },
        {
          id: 2,
          color: "#1574fe",
          subcolor:
            "#1052bf 1px 1px, #1052bf 2px 2px, #1052bf 3px 3px,#1052bf 3px 3px,#1052bf 4px 4px,#1052bf 5px 5px,#1052bf 6px 6px,#1052bf 7px 7px,#1052bf 8px 8px, #1052bf 9px 9px,#1052bf 10px 10px,#1052bf 11px 11px,#1052bf 12px 12px,#1052bf 13px 13px,#1052bf 14px 14px,#1052bf 15px 15px,#1052bf 16px 16px,#1052bf 17px 17px,#1052bf 18px 18px,#1052bf 19px 19px,#1052bf 20px 20px, #1052bf 21px 21px, #1052bf 22px 22px, #1052bf 23px 23px,#1052bf 24px 24px,#1052bf 25px 25px,#1052bf 26px 26px,#1052bf 27px 27px,#1052bf 28px 28px, #1052bf 29px 29px, #1052bf 30px 30px, #1052bf 31px 31px, #1052bf 32px 32px, #1052bf 33px 33px, #1052bf 34px 34px,#1052bf 35px 35px,#1052bf 36px 36px, #1052bf 37px 37px, #1052bf 38px 38px, #1052bf 39px 39px, #1052bf 40px 40px, #1052bf 41px 41px, #1052bf 42px 42px",
        },
        {
          id: 3,
          color: "#f9db6d",
          subcolor:
            "#edb368 1px 1px, #edb368 2px 2px, #edb368 3px 3px,#edb368 3px 3px,#edb368 4px 4px,#edb368 5px 5px,#edb368 6px 6px,#edb368 7px 7px,#edb368 8px 8px, #edb368 9px 9px,#edb368 10px 10px,#edb368 11px 11px,#edb368 12px 12px,#edb368 13px 13px,#edb368 14px 14px,#edb368 15px 15px,#edb368 16px 16px,#edb368 17px 17px,#edb368 18px 18px,#edb368 19px 19px,#edb368 20px 20px, #edb368 21px 21px, #edb368 22px 22px, #edb368 23px 23px,#edb368 24px 24px,#edb368 25px 25px,#edb368 26px 26px,#edb368 27px 27px,#edb368 28px 28px, #edb368 29px 29px, #edb368 30px 30px, #edb368 31px 31px, #edb368 32px 32px, #edb368 33px 33px, #edb368 34px 34px,#edb368 35px 35px,#edb368 36px 36px, #edb368 37px 37px, #edb368 38px 38px, #edb368 39px 39px, #edb368 40px 40px, #edb368 41px 41px, #edb368 42px 42px",
        },
      ],
    };
  },
  methods: {
      makeModalOpen() {
          this.makeModal = true
      },
      openModal(banner) {
          this.banner = banner
          this.modal = true
      },
      openMainModal(usecaseId) {
          this.usecaseId = usecaseId
          this.mainModal = true
      },
      closeModal() {
          this.modal = false
          this.mainModal = false
          this.makeModal = false
      },
      async patchBanner(bannerData) {
          const bodyFormData = new FormData();

          bodyFormData.append("upper_text", bannerData.upper_text)
          bodyFormData.append("bottom_text", bannerData.bottom_text)
          bodyFormData.append("banner_image", bannerData.banner_image)

        await axios.patch("https://new-api.closing119.com/api/banner/" + bannerData.id + "/", bodyFormData).then(res => {
            this.modal = false
            alert("정상적으로 수정되었습니다!")
        })
      },
      async patchMainNum() {
          await axios.patch("https://new-api.closing119.com/api/main-num/1/", this.main_num).then(res => {
              alert("정상적으로 수정되었습니다!")
          })
      },
      async makeMainModal(usecase) {
          const bodyFormData = new FormData();

            bodyFormData.append("reg_code", usecase.reg_code);
            bodyFormData.append("business_name", usecase.business_name);
            bodyFormData.append("address", usecase.address);
            bodyFormData.append("sector", usecase.sector);
            bodyFormData.append("content", usecase.content);
            bodyFormData.append("py", usecase.py);
            bodyFormData.append("partners_num", usecase.partners_num);
            bodyFormData.append("avg_est", usecase.avg_est);
            bodyFormData.append("min_est", usecase.min_est);
            bodyFormData.append("fund", usecase.fund);

            for (var i = 0; i < usecase.images.length; i++) {
              let file = usecase.images[i];

              bodyFormData.append("modal_image", file);
            }

          await axios.post("https://new-api.closing119.com/api/main-modal/", bodyFormData).then(res=> {
              alert("정상적으로 생성되었습니다!")
              this.closeModal()
          })
      },
      async patchMainModal(usecase) {
          const bodyFormData = new FormData();

            bodyFormData.append("reg_code", usecase.main_modal.reg_code);
            bodyFormData.append("business_name", usecase.main_modal.business_name);
            bodyFormData.append("address", usecase.main_modal.address);
            bodyFormData.append("sector", usecase.main_modal.sector);
            bodyFormData.append("content", usecase.main_modal.content);
            bodyFormData.append("py", usecase.main_modal.py);
            bodyFormData.append("partners_num", usecase.main_modal.partners_num);
            bodyFormData.append("avg_est", usecase.main_modal.avg_est);
            bodyFormData.append("min_est", usecase.main_modal.min_est);
            bodyFormData.append("fund", usecase.main_modal.fund);

            for (var i = 0; i < usecase.images.length; i++) {
              let file = usecase.images[i];

              bodyFormData.append("modal_image", file);
            }

          await axios.patch("https://new-api.closing119.com/api/main-modal/" + usecase.main_modal.id + "/", bodyFormData).then(res=> {
              alert("정상적으로 수정되었습니다!")
              this.closeModal()
          })
      }
      
  },
  async mounted() {
        await axios.get("https://new-api.closing119.com/api/banner/").then(res => {
            this.bannerData = res.data
        })
        await axios.get("https://new-api.closing119.com/api/main-num/1").then(res => {
            this.main_num = res.data
        })
        await axios.get("https://new-api.closing119.com/api/main-modal/").then(res => {
            this.usecase = res.data.results
            console.log(this.usecase)
        })
        for(var i in this.usecase) {
            if(i % 3 == 0) {
                this.usecase[i].color = this.slideList[0].color
                this.usecase[i].subcolor = this.slideList[0].subcolor
            }
            else if(i % 3 == 1) {
                this.usecase[i].color = this.slideList[1].color
                this.usecase[i].subcolor = this.slideList[1].subcolor
            }
            else {
                this.usecase[i].color = this.slideList[2].color
                this.usecase[i].subcolor = this.slideList[2].subcolor
            }
        }
        this.loading = true
  },
  metaInfo: {
    title: "폐업119 - 관리자",
    htmlAttrs: {
      lang: "ko-KR",
      amp: true,
    },
  },
};
</script>
<style>
.admin-container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}
.usecase-container {
    padding-top: 30px;
}
.container-title {
    font-family: NotoSansKR-Bold;
    font-size: 32px;
    margin-bottom: 40px;
}
.numbers-input-title {
    font-size: 21px;
    margin-bottom: 20px;
}
.main-num-button {
    width: 200px;
    margin-top: 40px;
    margin-bottom: 200px;
    font-size: 24px;
    background-color: #f0542d;
    color: #fff;
    border: 0px;
    border-radius: 15px;
    padding: 10px;
}
.admin-main-modal-edit-button {
    width: 100%;
    font-size: 18px;
    padding: 5px 0px;
}
.admin-main-modal-button {
    width: 250px;
    font-size: 24px;
    margin-top: 40px;
    margin-bottom: 200px;
    background-color: #f0542d;
    color: #fff;
    border: 0px;
    border-radius: 15px;
    padding: 10px;
}
.admin-banner-link {
    font-size: 21px;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 5px;
}
.admin-banner-row-container {
    margin-top: 15px;
}
.admin-input-title {
    padding-top: 7px
}
.admin-banner-button {
    width: 70px;
    height: 35px;
    margin-left: 430px;
}
.head-swiper-section {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  text-align: left;
}
.head-swiper-container {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.head-swiper-wrapper {
  max-width: 1054px;
  margin: 0 auto;
}
.top-slide-headcircle {
  overflow: hidden;
  position: absolute;
  width: 98px;
  height: 98px;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid #fff;
  top: 0;
  left: 113.5px;
  color: #fff;
  text-align: center;
  padding-top: 26px;
  line-height: 22px;
  font-size: 16px;
}
.swiper {
  overflow: visible;
}
.swiper-slide {
  width: 388px;
  position: relative;
  border-radius: 15px;
}
.headcircle-bold-title {
  font-family: NotoSansKR-Bold;
  font-size: 21px;
  margin-right: 2px;
}
.top-slide-image {
  margin-top: 50px;
  border-radius: 5px 5px 0 0;
  width: 327px;
  height: 205px;
  object-fit: cover;
}
.top-slide-content-container {
  padding-top: 15px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 15px;
  border-radius: 0 0 5px 5px;
  border: 1px solid #dcdde0;
}
.top-slide-sector {
  font-size: 10.94px;
  line-height: 12px;
}
.top-slide-title {
  font-size: 15.14px;
}
.top-slide-address {
  font-size: 10.51px;
  color: #646464;
}
.top-slide-margin-right {
  margin-right: 20px;
}
.top-slide-margin-left {
  margin-left: 20px;
}
.top-slide-check-1 {
  position: absolute;
  top: 3.5px;
  left: -10px;
  width: 13px;
}
.top-slide-check-2 {
  position: absolute;
  top: 24px;
  left: -10px;
  width: 13px;
}
.top-slide-check-3 {
  position: absolute;
  top: 45px;
  left: -10px;
  width: 13px;
}
.top-slide-check-text-1 {
  font-size: 10.94px;
  line-height: 20px;
  padding-left: 10px;
}
.top-slide-check-text-2 {
  font-size: 10.94px;
  line-height: 20px;
  padding-left: 10px;
}
.top-slide-check-text-3 {
  font-size: 10.94px;
  line-height: 20px;
  padding-left: 10px;
}
</style>

<style lang="scss" scope>
.icon {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 .3rem;
  top: -.05rem;
  fill: currentColor;

  // &.has-align-fix {
  // 	top: -.1rem;
  // }

  &__svg {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

}

// svg sprite
body > svg,
.icon use > svg,
symbol {
  path,
  rect,
  circle,
  g {
    fill: currentColor;
    stroke: none;
  }

  *[d="M0 0h24v24H0z"] {
    display: none;
  }
}
  
</style>