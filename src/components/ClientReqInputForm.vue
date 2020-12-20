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
                견적서 등록시에 연락처로 알림이 가게 됩니다. 차후 견적 요청서를
                확인할 때 요구되는 정보입니다.
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
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  비밀번호 (8자 이상)
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20">
                  <input
                    class="form-control"
                    name="up"
                    type="password"
                    placeholder=""
                    v-model="reqData.password"
                  />
                </div>
                <div class="line"></div>
                <div
                  class="input-title col-md-4 col-12  section-space--bottom--20"
                >
                  비밀번호 확인
                </div>
                <div
                  class="col-md-4 col-12  section-space--bottom--20"
                  style="position: relative"
                >
                  <input
                    class="form-control"
                    name="up2"
                    type="password"
                    placeholder=""
                    v-model.lazy="passwordCheck"
                  />
                  <div
                    v-if="passwordCheck && reqData.password != passwordCheck"
                    class="password-validation"
                  >
                    비밀번호 확인이 일치하지 않습니다.
                  </div>
                </div>
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
                  현장 사진 (최소 실내 1장, 외부 1장)
                </div>
                <div class="col-md-4 col-12  section-space--bottom--20">
                  <vue-upload-multiple-image
                  @upload-success="uploadImageSuccess"
                  @before-remove="beforeRemove"
                  :dragText="'클릭해서 업로드 하세요'"
                  :browseText="'최대 5장'"
                  :primaryText="'업로드 완료'"
                  :showEdit="false"
                  :showPrimary="false"
                  ></vue-upload-multiple-image>
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
                  폐업119 원스탑 매장정리 서비스<div class="mobile-br"></div><span class="input-title-small">(무료)</span>
                  <div class="help-tip">
                    <p>철거·원상복구/중고집기매각서비스/정부·지자체의 각종 지원 제도 연계 등 폐업의 전 과정을 일괄 처리 할 수 있도록 폐업119 원스탑 매장 정리 서비스를 제공해드립니다.</p>
                  </div>
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
              <p class="form-message"></p>
              <div style="margin:0 auto; text-align: center">
                <button
                  type="button"
                  class="hero-slider__btn"
                  style="width:350px; height:60px; font-size:21px; font-weight: 400"
                  @click="validateRegisterData"
                >
                  견적 요청 보내기
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
      passwordCheck: null,
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
      else if(this.reqData.password.length < 8) {
        alert('비밀번호는 8자 이상이어야 합니다!')
      }
      else if(this.reqData.password != this.passwordCheck) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다!')
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
      else if(this.images.length == 0) {
        alert('사진을 최소 1장 이상 등록해주세요!')
      }
      else if(this.reqData.expire_date.length == 0) {
        alert('희망 견적 마감일을 선택해주세요!')
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
    async sendRegisterData() {
      this.isLoading = true;

      await axios
        .post("https://new-api.closing119.com/api/client/", this.reqData)
        .then((res) => {
          this.clientPk = res.data.id;
          this.clientVC = res.data.verify_code;

          const bodyFormData = new FormData();

          if (this.images != null) {
            for (let i in this.images) {
              let file = this.images[i];

              bodyFormData.append("file", file);
            }
          }
          bodyFormData.append("client", this.clientPk);

          axios.post(
              "https://new-api.closing119.com/api/clientimage/",
              bodyFormData,
              { headers: { "Content-Type": "multipart/form-data" } }
            )
            .then((res) => {
              this.isLoading = false;
              alert(
                "정상적으로 신청되었습니다. 견적서 등록시 연락처로 안내 될 예정입니다."
              );
              this.$emit("register", this.clientVC, this.clientPk);
            })
          
        })
        .catch((err) => {
          this.isLoading = false;
          alert(
            "기존에 철거를 진행하셨던 연락처로는 견적 진행이 불가능합니다. 관리자에게 문의해주세요."
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

<style scoped>
.input-title-small{
  font-size: 12.5px;
  margin-left: 2px;
  padding-bottom: 3px;
}
.help-tip {
    position: absolute;
    top: 18px;
    left: 240px;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid #000;
    text-align: center;
    line-height: 14px;
    cursor: pointer;
}
.help-tip:before {
    content: '?';
    font-size: 12.5px;
}
.help-tip:hover p {
    display: block;
    transform-origin: 100% 0%;
    -webkit-animation: fadeIn 0.3s ease-in-out;
    animation: fadeIn 0.3s ease-in-out;
}

.help-tip p {
    display: none;
    text-align: left;
    background-color: #deebf7;
    padding: 10px;
    width: 640px;
    position: absolute;
    border-radius: 3px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    top: -70px;
    left: -240px;
    color: #2f5597;
    font-size: 13px;
    line-height: 1.4;
    z-index:50;
}
.help-tip p:before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-top-color: #deebf7;
    left: 242px;
    bottom: -12px;

}
.help-tip p:after {
    width: 100%;
    height: 40px;
    content: '';
    position: absolute;
    bottom: -40px;
    left: 0;

}
.mobile-br {
  display: none;
}
@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
        transform: scale(0.6);
    }

    100% {
        opacity: 100%;
        transform: scale(1);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
}
@media (min-width: 768px) {
  .input-title-small{
    margin-left: 0px;
  }
  .mobile-br {
    display: block;
  }
  .help-tip {
    left: 205px
  }
  .help-tip p {
    left: -205px
  }
  .help-tip p:before {
    left: 207px
  }
}
@media (max-width: 768px) {
  .help-tip p {
    width: 80vw;
  }
}
@media (max-width: 660px) {
  .help-tip p {
    width: 90vw;
  }
}
</style>
