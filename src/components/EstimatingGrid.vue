<template>
  <div class="service-grid-item service-grid-item--style2">
    <div class="service-grid-item__content" style="position: relative">
      <div class="estimating-grid-status" :style="{ color: statuscolor }">
        {{ statusMsg }}
      </div>
      <h3 class="title">
        <div @click="$emit('go-detail', estData.id)">
          {{ estData.client.business_name }}
        </div>
      </h3>

      <div class="row">
        <div class="col-sm-12 col-lg-4">
          <div class="estimating-grid-title">등록번호</div>
          <div class="estimating-grid-subtitle">
            {{ estData.client.reg_code }}
          </div>
        </div>
        <div class="col-sm-12 col-lg-8">
          <div class="estimating-grid-title">주소</div>
          <div class="estimating-grid-subtitle">
            {{ estData.client.address }}
          </div>
        </div>
        <div class="col-sm-12 col-lg-2">
          <div class="estimating-grid-title">연락처</div>
          <div class="estimating-grid-subtitle">
            {{ formatPhoneNumber(estData.client.phone_num) }}
          </div>
        </div>
        <div class="col-sm-12 col-lg-4" >
        </div>
      </div>
      <div class="estimating-button-container" v-if="clientStatus == 'B'">
        <div class="estimating-grid-notice">연락처를 통해 미팅을 진행한 후 견적서 작성을 진행해주세요!→</div>
        <div class="estimating-grid-notice-mobile">연락처를 통해 미팅을 진행한 후 견적서 작성을 진행해주세요.</div>

        <div
          class="estimating-button"
          @click="$emit('go-detail', estData.id)"
        >          견적서 작성하기
        </div>
      </div>
      <div class="estimating-button-container" v-if="clientStatus == 'D'">
        <div
          class="estimating-button"
          @click="$emit('go-detail', estData.id)"
        >
          공사 완료하기
        </div>
      </div>
      <div class="estimating-image-container">
        <img
        :src="'https://new-api.closing119.com' + imageURL.image"
        class="estimating-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ["estData"],
  components: {},
  data() {
    return {
      modal: false,
      clientStatus: "",
      statusMsg: "",
      statuscolor: "",
      loading: false,
      clientId: 0,
      imageURL: "/media/default.jpg"
    };
  },
  methods: {
    formatPhoneNumber(str) {
      //Filter only numbers from the input

      //Check if the input is of correct length
      let match = str.match(/^([\S]{3})([\S]{4})([\S]{4})$/);

      if (match) {
        return match[1] + "-" + match[2] + "-" + match[3];
      }

      return null;
    },
  },
  async mounted() {
    this.clientStatus = this.estData.status;
    if (this.clientStatus == "D") {
      this.statusMsg = "공사 진행 중";
      this.statuscolor = "red";
    } else if (this.clientStatus == "B") {
      this.statusMsg = "견적서 작성 전";
      this.statuscolor = "grey";
    } else {
      this.statusMsg = "선정 대기 중";
      this.statuscolor = "blue";
    }
    this.clientId = this.estData.client.id
    await axios.get('https://new-api.closing119.com/api/clientimage/', {params: {client: this.clientId}}).then(res=>{
        this.imageURL = res.data.results.client_image[0]
    })
    this.loading = true
  },
};
</script>

<style>
.estimating-grid-title {
  margin-top: 15px;
  font-size: 14px;
  color: rgb(94, 84, 84);
  margin-bottom: 5px;
}
.estimating-grid-subtitle {
  margin-bottom: 5px !important;
}
.estimating-grid-status {
  margin-bottom: 5px;
  font-weight: 600;
}
.estimating-button-container {
  display: flex;
  justify-content: flex-end;
}
.estimating-image-container {
  position: absolute;
  top: 20px;
  right: 20px;
}
.estimating-image {
  height: 165px;
  width: 229px;
  object-fit: cover;
  object-position: 50%;
}
.estimating-button {
  height: 35px;
  padding: 10px;
  padding-right: 15px;
  padding-lefT: 15px;
  background-color: #f0542d;
  border-radius: 5px;
  color: #fff;
  font-family: NotoSansKR-Bold;
  margin-top: 15px;
  cursor: pointer;
}
.estimating-grid-notice {
  margin-top: 15px;
  margin-bottom: 5px;
  font-family: NotoSansKR-Medium;
  font-size: 14px;
  padding: 10px;
  padding-left: 20px;
  line-height: 18px;
  border-radius: 5px;
  color: #f0542d;
}
.estimating-grid-notice-mobile {
  display: none;
}
@media (max-width: 1141px) {
  .estimating-image-container {
    position: absolute;
    top: 100px;
    right: 20px;
  }
  .estimating-image {
    height: 80px;
    width: 120px;
    object-fit: cover;
    object-position: 50%;
  }
  .estimating-button-container {
    justify-content: center;
    flex-wrap: wrap;
  }
  .estimating-grid-notice {
    display: none;
  }
  .estimating-grid-notice-mobile {
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: center;
    color: #f0542d;
    display: block;
    position: relative;
width: 180px;
height: 55px;
padding: 0px;
background: #FFFFFF;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 5px;
border: #f0542d solid 1px;
    font-family: NotoSansKR-Bold;
    padding: 8px;
    padding-top: 10px;
    font-size: 12px;
    line-height: 16px;
  }
  .estimating-grid-notice-mobile:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 15px 10px 0;
    border-color: #FFFFFF transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -15px;
    left: 80px;

  }
  .estimating-grid-notice-mobile:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 15px 10px 0;
    border-color: #f0542d transparent;
    display: block;
    width: 0;
    z-index: 0;
    bottom: -16px;
    left: 80px;
  }
}
</style>
