<template>
  <div class="page-wrapper section-space--inner--60">
    <!--Contact section start-->
    <div class="conact-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12">
            <div class="contact-form">
              <h4>개인정보수집동의</h4>
              <div style="height: 20px;"></div>
              <div class="privacy-container">
                개인정보 제공 받는자 <br />
                -폐업119 <br />
                <br />
                개인정보 수집범위 <br />
                -고객명, 연락처, 이메일 <br />
                <br />
                개인정보 수집 및 이용목적 <br />
                -폐업119 홈페이지 문의에 활용 (전화, SMS) <br />
                <br />
                개인정보 보유 및 이용기간<br />
                -개인정보는 수집 및 이용 목적 달성 시까지 보유하며, 이용목적
                달성 후 파기하는 것을 원칙으로함
              </div>
              <div style="height: 10px;"></div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline1"
                  name="customRadioInline1"
                  value="Yes"
                  class="custom-control-input"
                  v-model="privacy"
                />
                <label class="custom-control-label" for="customRadioInline1"
                  >동의합니다.</label
                >
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  value="No"
                  class="custom-control-input"
                  v-model="privacy"
                />
                <label class="custom-control-label" for="customRadioInline2"
                  >동의하지 않습니다.</label
                >
              </div>
              <div v-if="privacy == 'No'" class="password-validation">
                개인정보수집에 동의하셔야 파트너스 등록이 가능합니다.
              </div>

              <div style="height: 25px;"></div>
              <h4>업체 정보</h4>
              <div style="height: 20px;"></div>
              <div class="row row-10">
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  업체명
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20">
                  <input
                    class="form-control"
                    name="con_name"
                    type="text"
                    placeholder=""
                    v-model="partnersData.partner_name"
                  />
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  대표자명
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20">
                  <input
                    class="form-control"
                    name="con_name"
                    type="text"
                    placeholder=""
                    v-model="partnersData.ceo"
                  />
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  신청인 이름
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20">
                  <input
                    class="form-control"
                    name="con_name"
                    type="text"
                    placeholder=""
                    v-model="partnersData.applicant"
                  />
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  연락처 (숫자만 입력)
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20">
                  <input
                    class="form-control"
                    name="up2"
                    type="text"
                    placeholder=""
                    v-model="partnersData.phone_num"
                  />
                  <div v-if="numeric()" class="password-validation">
                    연락처는 숫자로만 이루어져야 합니다.
                  </div>
                  <div
                    v-if="!numeric() && length()"
                    class="password-validation"
                  >
                    연락처는 11자리 숫자로 이루어져야 합니다.
                  </div>
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  이메일
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20">
                  <input
                    class="form-control"
                    name="up2"
                    type="email"
                    placeholder=" "
                    v-model.lazy="partnersData.email"
                  />
                  <div
                    v-if="this.email && !this.validEmail(this.email)"
                    class="password-validation"
                  >
                    올바른 이메일 양식이 아닙니다.
                  </div>
                </div>
                <div class="line"></div>
                <div class="input-title col-md-4 col-12  section-space">
                  서비스 가능 지역
                </div>
                <div
                  class="col-md-3 col-12  section-space"
                  style="padding-top:15px"
                >
                  <input
                    style="width: auto; height: auto"
                    type="checkbox"
                    id="checkbox"
                    v-model="checked_1"
                  />
                  <label for="checkbox" style="margin-left: 15px"
                    >서울/경기/인천</label
                  >
                </div>
                <div
                  class="col-md-2 col-12  section-space"
                  style="padding-top:15px"
                >
                  <input
                    style="width: auto; height: auto"
                    type="checkbox"
                    id="checkbox"
                    v-model="checked_2"
                  />
                  <label for="checkbox" style="margin-left: 15px">강원도</label>
                </div>
                <div
                  class="partner-reg-checkbox col-md-2 col-12  section-space"
                >
                  <input
                    style="width: auto; height: auto"
                    type="checkbox"
                    id="checkbox"
                    v-model="checked_3"
                  />
                  <label for="checkbox" style="margin-left: 15px">충청도</label>
                </div>
                <div class="input-title col-md-4 col-12  section-space"></div>
                <div class="col-md-2 col-12  section-space--bottom--20">
                  <input
                    style="width: auto; height: auto"
                    type="checkbox"
                    id="checkbox"
                    v-model="checked_4"
                  />
                  <label for="checkbox" style="margin-left: 15px">경상도</label>
                </div>
                <div class="col-md-2 col-12  section-space--bottom--20">
                  <input
                    style="width: auto; height: auto"
                    type="checkbox"
                    id="checkbox"
                    v-model="checked_5"
                  />
                  <label for="checkbox" style="margin-left: 15px">전라도</label>
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  주소
                </div>
                <div class="col-md-3 col-8  section-space--bottom--20">
                  <input
                    class="form-control"
                    name="up"
                    type="text"
                    placeholder=""
                    :value="partnersData.address"
                    readonly
                    @click="openModal"
                  />
                </div>
                <div class="col-md-2 col-4  section-space--bottom--20">
                  <button style="margin-top:0px;" @click="openModal">
                    찾기
                  </button>
                </div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  상세 주소
                </div>
                <div class="col-md-5 col-12  section-space--bottom--20">
                  <input
                    name="up"
                    type="text"
                    placeholder=""
                    v-model="partnersData.detail_address"
                  />
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  업체 설명
                </div>
                <div class="col-md-6 col-12  section-space--bottom--20">
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                    v-model="partnersData.partner_info"
                  ></textarea>
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  사업자등록증
                </div>
                <div class="col-md-6 col-12  section-space--bottom--20">
                  <input
                    type="file"
                    class="form-control-file"
                    style="padding-top:10px"
                    id="reg_image"
                    ref="reg_image"
                    v-on:change="handleRFileUpload()"
                  />
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  업체 프로필 사진
                </div>
                <div class="col-md-6 col-12  section-space--bottom--20">
                  <input
                    type="file"
                    class="form-control-file"
                    id="pro_image"
                    style="padding-top:10px"
                    ref="pro_image"
                    v-on:change="handlePFileUpload()"
                  />
                </div>
                <div class="line"></div>
              </div>
              <div style="height: 25px;"></div>
              <h4>로그인 정보</h4>
              <h5>파트너스 로그인에 필요한 정보입니다.</h5>
              <div style="height: 20px;"></div>
              <div class="row row-10">
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  아이디
                </div>
                <div
                  class="col-md-3 col-7  section-space--bottom--20"
                  v-if="!idConfirmed"
                >
                  <input
                    class="form-control"
                    name="up"
                    type="text"
                    placeholder=""
                    v-model="partnersData.username"
                  />
                </div>
                <div
                  class="col-md-3 col-7  section-space--bottom--20"
                  v-if="idConfirmed"
                >
                  <input
                    class="form-control"
                    name="up"
                    type="text"
                    placeholder=""
                    readonly
                    v-model="partnersData.username"
                  />
                </div>
                <div class="col-md-2 col-5  section-space--bottom--20">
                  <button style="margin-top:0px;" @click="idCheck">
                    중복확인
                  </button>
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  비밀번호
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20">
                  <input
                    class="form-control"
                    name="con_name"
                    type="password"
                    placeholder=""
                    v-model="partnersData.password"
                  />
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  비밀번호 확인
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20">
                  <input
                    class="form-control"
                    name="con_name"
                    type="password"
                    placeholder=""
                    v-model.lazy="passwordCheck"
                  />
                  <div
                    v-if="
                      passwordCheck && partnersData.password != passwordCheck
                    "
                    class="password-validation"
                  >
                    비밀번호 확인이 일치하지 않습니다.
                  </div>
                </div>

                <div class="line"></div>
              </div>

              <p class="form-message"></p>

              <div style="margin:0 auto; text-align: center">
                <button
                  class="hero-slider__btn"
                  style="width:350px; height:60px; font-size:21px; font-weight: 400"
                  @click="sendRegisterData"
                >
                  파트너스 신청하기
                </button>
              </div>
              <MyModal
                @close="closeModal"
                @confirm="confirmModal"
                v-if="modal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Contact section end-->
    <Loading :active.sync="isLoading" :is-full-page="fullPage" />
  </div>
</template>

<script>
import data from "../data/contact.json";
import MyModal from "../components/MyModal";
import Multiselect from "vue-multiselect";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import axios from "axios";

export default {
  components: {
    MyModal,
    Multiselect,
    Loading,
  },
  data() {
    return {
      data,
      password: "",
      passwordCheck: "",
      email: "",
      partnersData: {
        phone_num: "",
        address: "",
        detail_address: "",
        username: "",
        password: "",
        partner_name: "",
        ceo: "",
        applicant: "",
        email: "",
        partner_info: "",
        service_area_array: [],
      },
      modal: false,
      privacy: "",
      idConfirmed: false,
      options: [
        {
          value: "seoul",
          name: "서울/경기/인천",
        },
        {
          value: "gangwon",
          name: "강원도",
        },
        {
          value: "chungcheong",
          name: "충청도",
        },
        {
          value: "gyeongsang",
          name: "경상도",
        },
        {
          value: "jeolla",
          name: "전라도",
        },
      ],
      checked_1: false,
      checked_2: false,
      checked_3: false,
      checked_4: false,
      checked_5: false,
      profile_image: null,
      registration_image: null,
      partnerPk: null,
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    handlePFileUpload() {
      this.profile_image = this.$refs.pro_image.files[0];
    },
    handleRFileUpload() {
      this.registration_image = this.$refs.reg_image.files[0];
    },
    async sendRegisterData() {
      this.isLoading = true;
      if (this.checked_1) {
        this.partnersData.service_area_array.push("seoul");
      }
      if (this.checked_2) {
        this.partnersData.service_area_array.push("gangwon");
      }
      if (this.checked_3) {
        this.partnersData.service_area_array.push("chungcheong");
      }
      if (this.checked_4) {
        this.partnersData.service_area_array.push("gyeongsang");
      }
      if (this.checked_5) {
        this.partnersData.service_area_array.push("jeolla");
      }
      console.log(this.partnersData);
      await axios
        .post("https://new-api.closing119.com/api/partner/", this.partnersData)
        .then((res) => {
          this.partnerPk = res.data.id;
        });
      const bodyFormData = new FormData();

      bodyFormData.append("profile_image", this.profile_image);
      bodyFormData.append("registration_image", this.registration_image);
      bodyFormData.append("partner", this.partnerPk);

      await axios
        .post(
          "https://new-api.closing119.com/api/partnerimage/",
          bodyFormData,
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then((res) => {
          this.isLoading = false;
          alert(
            "신청이 완료 되었습니다. 관리자의 승인 후 파트너스 페이지를 이용하실 수 있습니다."
          );
          this.$router.push("/partners");
        });
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    numeric() {
      if (/\D/.test(this.partnersData.phone_num)) {
        return true;
      } else {
        return false;
      }
    },
    length() {
      if (
        this.partnersData.phone_num &&
        this.partnersData.phone_num.length != 11
      ) {
        return true;
      } else {
        return false;
      }
    },
    openModal() {
      this.modal = true;
    },
    confirmModal(data) {
      this.partnersData.address = data.roadAddress;
    },
    closeModal() {
      this.modal = false;
    },
    idReset() {
      this.partnersData.username = "";
    },
    idConfirm() {
      this.idConfirmed = true;
    },
    async idCheck() {
      var username = { username: "" };
      username.username = this.partnersData.username;
      await axios
        .post("https://new-api.closing119.com/api/checkid/", username)
        .then((res) => {
          alert("사용가능한 아이디입니다.");
          this.idConfirm();
        })
        .catch((err) => {
          alert("중복된 아이디가 있습니다.");
          this.idReset();
        });
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.partner-reg-checkbox {
  padding-top: 15px;
}
@media (max-width: 1141px;) {
  .partner-reg-checkbox {
    padding-top: 0px;
  }
}
</style>
