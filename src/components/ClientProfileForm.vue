<template>
  <div class="page-wrapper section-space--inner--60">
    <!--Contact section start-->
    <div class="conact-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12">
            <div class="contact-form">
              <h4 style="margin-top: 20px;">업주정보</h4>
              <h5>
                견적서 수정을 진행해주세요.
              </h5>
              <div class="row row-10">
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  이름
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20">
                  <input
                    class="form-control"
                    disabled
                    name="con_name"
                    type="text"
                    placeholder=""
                    v-model="reqData.client_name"
                  />
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  연락처 (숫자만 입력)
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20" v-if="!authDone">
                  <input
                    class="form-control"
                    disabled
                    name="con_name"
                    type="text"
                    placeholder=""
                    v-model="reqData.phone_num"
                  />
                  <div v-if="numeric()" class="password-validation">
                    연락처는 숫자로만 이루어져야 합니다.
                  </div>
                  <div
                    v-if="!numeric() && length()"
                    class="password-validation"
                  >
                    연락처는 10자리 또는 11자리 숫자로 이루어져야 합니다.
                  </div>
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20" v-if="authDone">
                  <input
                    class="form-control"
                    readonly
                    name="con_name"
                    type="text"
                    placeholder=""
                    v-model="reqData.phone_num"
                  />
                </div>
                <!-- <div class="col-md-2 col-8  section-space--bottom--20" v-if="!authDone">
                  <button style="margin-top:0px;" @click="openAuthModal">
                    본인인증
                  </button>
                </div> -->
                <div class="line"></div>
              </div>
              <div style="height: 25px;"></div>
              <h4>가게정보</h4>
              <div style="height: 20px;"></div>
              <div class="row row-10">
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  상호명
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20">
                  <input
                    class="form-control"
                    name="con_name"
                    type="text"
                    placeholder=""
                    v-model="reqData.business_name"
                  />
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  업종
                </div>
                <div class="col-md-3 col-12  section-space--bottom--20">
                  <input
                    class="form-control"
                    name="con_name"
                    type="text"
                    placeholder="직접 입력"
                    v-model="reqData.sector"
                  />
                </div>
                <b-dropdown
                  id="dropdown-1"
                  text="선택해주세요"
                  class="m-md-2"
                  toggle-class="bdd-toggle"
                  style="margin-top:0 !important; margin-bottom: 15px; margin-left: 15px"
                >
                  <b-dropdown-item
                    v-for="option in options"
                    :key="option.value"
                    :value="option.value"
                    @click="reqData.sector = option.value"
                    >{{ option.text }}
                  </b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item>직접 입력</b-dropdown-item>
                </b-dropdown>
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
                    readonly
                    :value="reqData.address"
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
                    v-model="reqData.detail_address"
                  />
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  평수
                </div>
                <div class="col-md-2 col-6  section-space--bottom--20">
                  <input
                    class="form-control"
                    name="up2"
                    type="number"
                    placeholder="0"
                    v-model="reqData.py"
                  />
                </div>
                <div
                  class="input-title col-2  section-space--bottom--20"
                  style="font-size:18px; padding-top: 9px;"
                >
                  평
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  희망 견적 마감일<br>
                  <span class="alert-date">견적 마감일은 신청일로부터 4일 이후부터 가능합니다.</span>
                </div>
                <div class="col-md-3 col-6  section-space--bottom--20" @click="alertDate()">
                  <vc-date-picker
                    :min-date="minVal()"
                    v-model="reqData.expire_date"
                  />
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  기타 요청사항
                </div>
                <div class="col-md-6 col-12  section-space--bottom--20">
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                    v-model="reqData.request"
                  ></textarea>
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  폐업119 원스탑 매장정리 서비스
                </div>
                <div class="col-md-3 col-6  section-space--bottom--20">
                  <input
                    style="width: auto; height: auto; margin-top: 17px"
                    type="radio"
                    id="true"
                    value="true"
                    v-model="reqData.one_stop"
                  />
                  <label for="true" style="margin-left: 10px"
                    >신청하겠습니다.</label
                  >
                </div>
                <div class="col-md-3 col-6  section-space--bottom--20">
                  <input
                    style="width: auto; height: auto; margin-top: 17px"
                    type="radio"
                    id="false"
                    value="false"
                    v-model="reqData.one_stop"
                  />
                  <label for="false" style="margin-left: 10px"
                    >신청하지 않겠습니다.</label
                  >
                </div>
                <div class="line"></div>
              </div>
              <p class="form-message"></p>
              <div style="margin:0 auto; text-align: center">
                <button
                  type="button"
                  class="hero-slider__btn"
                  style="width:350px; height:60px; font-size:21px; font-weight: 400"
                  @click="validateRegisterData"
                >
                  견적 수정하기
                </button>
              </div>
              <MyModal
                @close="closeModal"
                @confirm="confirmModal"
                v-if="modal"
              />
              <AuthModal
              :authCode="authCode"
              @close="selfAuthClose"
              @confirm="selfAuth"
              v-if="authModal"
              />
              <UserModal @close="closeModal" v-if="userModal" />
              <PrivacyModal @close="closeModal" v-if="privacyModal" />
              <loading
                :active.sync="isLoading"
                :is-full-page="fullPage"
              ></loading>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Contact section end-->
  </div>
</template>

<script>
import MyModal from "../components/MyModal";
import AuthModal from "../components/AuthModal";
import UserModal from "../components/UserModal";
import PrivacyModal from "../components/PrivacyModal";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import VueUploadMultipleImage from 'vue-upload-multiple-image'

import axios from "axios";
export default {
    props:["clientId"],
  components: {
    MyModal,
    AuthModal,
    Loading,
    UserModal,
    PrivacyModal,
    VueUploadMultipleImage,
  },
  data() {
    return {
      authModal: false,
      authDone: false,
      authCode: "",
      password: "",
      users: [
        { id: 1, name: "이용약관" },
        { id: 2, name: "개인정보 처리방침" },
      ],
      reqData: {
        one_stop: false,
        client_name: "",
        password: "",
        phone_num: "",
        business_name: "",
        sector: "",
        address: "",
        detail_address: "",
        district: "",
        py: "",
        request: "",
        expire_date: "",
      },
      modal: false,
      message: "",
      numericTrue: false,
      files: "",
      options: [
        {
          value: "음식점 (식당/카페/호프/패스트푸드 등)",
          text: "음식점 (식당/카페/호프/패스트푸드 등)",
        },
        {
          value: "도소매 (편의점/문구사무/애견/화장품/기타잡화 등)",
          text: "도소매 (편의점/문구사무/애견/화장품/기타잡화 등)",
        },
        {
          value: "서비스업 (학원/미용/주유소/세탁/기타서비스업)",
          text: "서비스업 (학원/미용/주유소/세탁/기타서비스업)",
        },
        {
          value: "여가 오락(pc방/노래방/당구장/골프장/헬스/기타)",
          text: "여가 오락(pc방/노래방/당구장/골프장/헬스/기타)",
        },
        {
          value: "제조",
          text: "제조",
        },
      ],
      selected: [],
      images: [],
      clientPk: null,
      clientVC: null,
      today: new Date(),
      isLoading: false,
      fullPage: true,
      userModal: false,
      privacyModal: false,
      loginData: {
                    phone_num: "",
                    password: ""
                },
    };
  },
  methods: {
    minVal() {
      var result = new Date(this.today);
      result.setDate(result.getDate() + 4);
      return result;
    },
    alertDate() {
      alert("견적 마감일은 신청일로부터 4일 이후부터 가능합니다.")
    },
    handleFilesUpload() {
      this.images = this.$refs.files.files;
    },
    validateRegisterData() {
      

      if(this.reqData.client_name.length == 0) {
        alert('이름을 입력해주세요!')
      }
      else if(this.reqData.phone_num.length == 0) {
        alert('연락처를 입력해주세요!')
      }
      else if(this.numeric()) {
        alert('연락처는 숫자로만 이루어져야 합니다!')
      }
      else if(this.length()) {
        alert('연락처는 10자리 또는 11자리 숫자로 이루어져야 합니다!')
      }
      else if(this.reqData.password.length < 4) {
        alert('비밀번호는 4자 이상이어야 합니다!')
      }
      else if(this.reqData.business_name.length == 0) {
        alert('상호명을 입력해주세요!')
      }
      else if(this.reqData.sector.length == 0) {
        alert('업종을 선택, 혹은 입력해주세요!')
      }
      else if(this.reqData.address.length == 0) {
        alert('주소를 입력해주세요!')
      }
      else if(this.reqData.detail_address.length == 0) {
        alert('상세 주소를 입력해주세요!')
      }
      else if(this.reqData.py < 1) {
        alert('평수를 입력해주세요!')
      }
      else if(this.reqData.expire_date.length == 0) {
        alert('희망 견적 마감일을 선택해주세요!')
      }
      else {
          this.loginData.phone_num = this.reqData.phone_num
          this.loginData.password = this.password
        this.sendRegisterData()
      }
    },
    uploadImageSuccess(formData, index, fileList) {
      for(let value of formData.values()) {
        this.images.push(value)
      }
    },
    beforeRemove (index, done, fileList) {
      var r = confirm("해당 이미지를 삭제하겠습니까?")
      if (r == true) {
        this.images.splice(index, 1)
        done()
      } else {
      }
    },
    async login() {
        await axios.post("https://new-api.closing119.com/api/clientlogin/", this.loginData).then(res=> {
            this.sendRegisterData()
        }).catch(err=> {
            alert("비밀번호가 틀렸습니다.")
        })
    },
    async sendRegisterData() {
      this.isLoading = true;

      await axios
        .patch("https://new-api.closing119.com/api/client/" + this.clientId + '/', this.reqData)
        .then((res) => {
            this.isLoading = false;
            alert(
            "정상적으로 변경되었습니다. 다시 로그인해주세요."
            );
            this.$router.push("/clientcheck/homepage")
        })
        .catch((err) => {
          this.isLoading = false;
          alert(
            "수정에 실패했습니다. 관리자에게 문의해주세요."
          );
        });
    },
    openModal() {
      this.modal = true;
    },
    async openAuthModal() {
      var kakaoData = {
        id: 4,
        phone_num: this.reqData.phone_num,
      };
      await axios
        .post("https://new-api.closing119.com/api/kakaoapi/", kakaoData, {
          headers: { "Content-Type": "application/json; charset=utf-8" },
        })
        .then((res) => {
          this.authCode = res.data.results.v_code
          this.authModal = true
        })
        .catch((err) => {
          alert("휴대폰 번호를 다시 확인해주세요.")
        });
    },
    selfAuthClose() {
      alert("본인인증에 실패 했습니다. 다시 시도해주세요.")
      this.authModal = false
    },
    selfAuth() {
      alert("본인 인증에 성공했습니다.")
      this.authDone = true
      this.authModal = false
    },
    confirmModal(data) {
      this.reqData.address = data.roadAddress;
      if (data.sido == "세종특별자치시") {
        this.reqData.district = "세종시";
      } else {
        this.reqData.district = data.sigungu;
      }
    },
    closeModal() {
      this.modal = false;
      this.userModal = false;
      this.privacyModal = false;
    },
    numeric() {
      if (/\D/.test(this.reqData.phone_num)) {
        return true;
      } else {
        return false;
      }
    },
    length() {
      if (this.reqData.phone_num && this.reqData.phone_num.length != 10 && this.reqData.phone_num.length != 11) {
        return true;
      } else {
        return false;
      }
    },
    pickSector(sector) {
      this.reqData.sector = sector;
    },
    agree(num) {
      if (num == 0) {
        this.userModal = true;
      } else {
        this.privacyModal = true;
      }
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
  async mounted() {
      await axios.get("https://new-api.closing119.com/api/client/" + this.clientId + '/').then(res => {
          this.reqData = res.data
      })
  },
};
</script>

<style>
.bdd-toggle {
  margin-top: 0 !important;
}
.underline_modal {
  text-decoration: underline;
  cursor: pointer;
}
.custom-control-label {
  font-size: 18px;
}
.alert-date {
  font-size: 12px;
  color: #777;
}

@media (max-width: 1141px) {
  .alert-date {
    display: none;
  }
}
</style>
