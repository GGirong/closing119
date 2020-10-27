<template>
  <div class="service-grid-item ">
    <div class="service-grid-item__content service-grid-item--style3">
      <div class="main-estimate-grid-text-container">
        <div class="row">
           <div class="main-estimate-grid-text right-border col-6">
            <div class="main-estimate-grid-title">업체명</div>
            <div class="main-estimate-grid-subtitle">
              {{ maskingName(estData.partner.partner_name) }}
            </div>
          </div>
          <div class="main-estimate-grid-text left-padding col-6">
            <div class="main-estimate-grid-title">견적 가격</div>
            <div class="main-estimate-grid-subtitle">
              {{ numberWithThree((estData.total_price * 1.1).toFixed(0)) }}원
            </div>
          </div>
        </div>
      </div>
      <div class="main-estimate-divider"></div>
        <div class="main-estimate-detail-container">
          <div class="main-estimate-detail-title">견적 세부사항</div>
          <div class="main-estimate-detail-content">{{ estData.detail }}</div>
        </div>
    </div>
  </div>
</template>

<script>
import EstimateModal from "../components/EstimateModal";

import axios from "axios";

export default {
  props: ["estData", "status"],
  components: {
    EstimateModal,
    
  },
  data() {
    return {
      modal: false,
      selectEstData: {},
      profile_image_url: "",
    };
  },
  methods: {
    numberWithThree(x) {
      x += " "
      var maskingName = "";
      if(!this.status) {
        for(var i in x) {
          if(i != 0) {
            maskingName += "*";
          }
        }
        return maskingName;
      }
      else {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },
    maskingName(name) {
      var maskingName = "";

      for (var i in name) {
        if (i == 0) {
          maskingName += name[0];
        } else {
          maskingName += "*";
        }
      }
      return maskingName;
    },
  },
  mounted() {
  }
};
</script>

<style>
.right-border {
  border-right: 1px solid #000;
}
.left-padding {
  padding-left: 30px;
}
.main-estimate-grid-text-container {
  padding-left: 20px;
  margin-bottom: 18px;
}
.main-estimate-grid-text {
  margin-top: 15px;
}
.main-estimate-grid-title {
  font-size: 16px;
  color: #383838;
}
.main-estimate-grid-subtitle {
  font-family: NotoSansKR-bold;
  margin-top: 5px;
  font-size: 18px;
}
.main-estimate-divider {
  width: calc(100% - 50px);
  height: 1px;
  background-color: #a9a9a9;
  margin: 0 auto;
}
.main-estimate-detail-container {
  margin-top: 14px;
  padding: 0px 20px;
  margin-bottom: 22px;
}
.main-estimate-detail-title {
  color: #8e8e8e;
  margin-bottom: 7px;
}
@media (max-width: 1141px) {
  .main-estimate-grid-text-container {
    padding-left: 5px;
    padding-bottom: 10px;
  }
  .main-estimate-grid-text {
    margin-top: 10px;
  }
  .main-estimate-grid-title {
    font-size: 10px;
    color: rgb(94, 84, 84);
  }
  .main-estimate-grid-subtitle {
    margin-left: 5px;
    margin-top: 5px;
    font-size: 14px;
  }
  .main-estimate-grid-text-container {
    padding-left: 10px;
    margin-bottom: 5px;
  }
  .left-padding {
    padding-left: 10px;
  }
  .main-estimate-detail-title {
    color: #8e8e8e;
    font-size: 10px;
    margin-bottom: 7px;
  }
  .main-estimate-detail-container {
    margin-top: 14px;
    padding: 0px 10px;
    margin-bottom: 22px;
  }
  .main-estimate-detail-content {
    font-size: 12px;
  }
}
</style>
