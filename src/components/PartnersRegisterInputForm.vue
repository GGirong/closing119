<template>
  <div class="page-wrapper section-space--inner--60">
    <!--Contact section start-->
    <div class="conact-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12">
            <div class="contact-form">
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
                    v-if="partnersData.email && !validEmail(partnersData.email)"
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
                  업체 프로필 사진 (선택)
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
                  비밀번호 (4자 이상)
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
              <div style="height: 20px;"></div>
              <input
                style="width: auto; height: auto"
                type="checkbox"
                v-model="selectAll"
              />
              <label for="false" style="margin-left: 15px">모두 동의</label>
              <div class="line" style="margin-top: 20px"></div>

              <div>
                <input
                  style="width: auto; height: auto"
                  type="checkbox"
                  v-model="selected"
                  :value="users[0].id"
                />
                <label
                  style="margin-left: 15px; text-decoration: underline; cursor:pointer"
                  @click="agree(0)"
                  >{{ users[0].name }}</label
                ><span> 동의</span>
              </div>
              <div>
                <input
                  style="width: auto; height: auto"
                  type="checkbox"
                  v-model="selected"
                  :value="users[1].id"
                />
                <label
                  style="margin-left: 15px; text-decoration: underline; cursor:pointer"
                  @click="agree(1)"
                  >{{ users[1].name }}</label
                ><span> 동의</span>
              </div>
              <div v-if="false" class="password-validation">
                개인정보수집에 동의하셔야 파트너스 등록이 가능합니다.
              </div>
              <p class="form-message"></p>

              <div style="margin:0 auto; text-align: center">
                <button
                  class="hero-slider__btn"
                  style="width:350px; height:60px; font-size:21px; font-weight: 400"
                  @click="validateRegisterData"
                >
                  파트너스 신청하기
                </button>
              </div>
              <MyModal
                @close="closeModal"
                @confirm="confirmModal"
                v-if="modal"
              />
              <UserModal @close="closeModal" v-if="userModal" />
              <PrivacyModal @close="closeModal" v-if="privacyModal" />
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
import UserModal from "../components/UserModal";
import PrivacyModal from "../components/PrivacyModal";
import Multiselect from "vue-multiselect";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import axios from "axios";

export default {
  components: {
    MyModal,
    UserModal,
    PrivacyModal,
    Multiselect,
    Loading,
  },
  data() {
    return {
      data,
      users: [
        { id: 1, name: "이용약관" },
        { id: 2, name: "개인정보 처리방침" },
      ],
      password: "",
      passwordCheck: "",
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
      selected: [],
      userModal: false,
      privacyModal: false,
    };
  },
  methods: {
    handlePFileUpload() {
      this.profile_image = this.$refs.pro_image.files[0];
    },
    handleRFileUpload() {
      this.registration_image = this.$refs.reg_image.files[0];
    },
    validateRegisterData() {
      let user = true
      let privacy = true
      for(let i in this.selected) {
        if(this.selected[i] == 1) {
          user = false
        }
        else if(this.selected[i] == 2) {
          privacy = false
        }
      }
      let re = /[~!@\#$%^&*\()\-=+_']/gi;

      if(this.partnersData.partner_name.length == 0) {
        alert('업체명을 입력해주세요!')
      }
      else if(re.test(this.partnersData.partner_name))
      {
        alert("업체명에 특수문자는 입력하실 수 없습니다.");
      }
      else if(this.partnersData.ceo.length == 0) {
        alert('대표자명을 입력해주세요!')
      }
      else if(this.partnersData.applicant.length == 0) {
        alert('신청인 이름을 입력해주세요!')
      }
      else if(this.partnersData.phone_num.length == 0) {
        alert('연락처를 입력해주세요!')
      }
      else if(this.numeric()) {
        alert('연락처는 숫자로만 이루어져야 합니다!')
      }
      else if(this.length()) {
        alert('연락처는 11자리 숫자로 이루어져야 합니다!')
      }
      else if(this.partnersData.email.length == 0) {
        alert('이메일을 입력해주세요!')
      }
      else if(!this.validEmail(this.partnersData.email)) {
        alert('올바른 이메일 양식이 아닙니다!')
      }
      else if(!this.checked_1 && !this.checked_2 && !this.checked_3 && !this.checked_4 && !this.checked_5 ) {
        alert('서비스 가능 지역을 1개 이상 선택해주세요!')
      }
      else if(this.partnersData.address.length == 0) {
        alert('주소를 입력해주세요!')
      }
      else if(this.partnersData.detail_address.length == 0) {
        alert('상세 주소를 입력해주세요!')
      }
      else if(this.partnersData.partner_info.length == 0) {
        alert('업체 설명을 작성해주세요!')
      }
      else if(this.registration_image == null) {
        alert('사업자등록증을 업로드 해주세요!')
      }
      else if(!this.idConfirmed) {
        alert('아이디 중복확인을 진행해주세요!')
      }
      else if(this.partnersData.password.length < 4) {
        alert('비밀번호는 4자 이상이어야 합니다!')
      }
      else if(this.partnersData.password != this.passwordCheck) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다!')
      }
      else if(user) {
        alert('이용약관에 동의하셔야 진행할 수 있습니다.')
      }
      else if(privacy) {
        alert('개인정보 처리방침에 동의하셔야 진행할 수 있습니다.')
      }
      else {
        this.sendRegisterData()
      }
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
      this.userModal = false;
      this.privacyModal = false;
    },
    idReset() {
      this.partnersData.username = "";
    },
    idConfirm() {
      this.idConfirmed = true;
    },
    agree(num) {
      if(num == 0) {
        this.userModal = true
      }
      else {
        this.privacyModal = true
      }
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
  computed: {
    selectAll: {
      get: function() {
        return this.users ? this.selected.length == this.users.length : false;
      },
      set: function(value) {
        var selected = [];

        if (value) {
          this.users.forEach(function(user) {
            selected.push(user.id);
          });
        }

        this.selected = selected;
      },
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.partner-reg-checkbox {
  padding-top: 15px;
}
@media (max-width: 1141px) {
  .partner-reg-checkbox {
    padding-top: 0px;
  }
}
</style>
