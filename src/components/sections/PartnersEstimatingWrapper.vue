<template>
  <div class="page-wrapper section-space--inner--60">
    <div class="project-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="project-item-wrapper">
              <div class="estimating-list-filter-container">
                견적 진행 상태
                <select
                  v-model="status"
                  class="estimating-list-filter"
                  @change="rearrList()"
                >
                  <option value="all">모두 보기</option>
                  <option value="before">견적서 작성 전</option>
                  <option value="selecting">선정 진행중</option>
                  <option value="destroying">공사 진행중</option>
                </select>
              </div>
              <div class="row" v-if="loading">
                <div
                  class="col-lg-12 col-sm-12 col-12 section-space--bottom--30"
                  v-for="est in estData.slice().reverse()"
                  :key="est.id"
                >
                  <EstimatingGrid :estData="est" @go-detail="goDetail" />
                </div>
                <div
                  class="col-lg-4 col-sm-6 col-12 section-space--bottom--30"
                  v-if="emptyEsting"
                  style="margin: 0 auto; text-align: center"
                >
                  진행 중인 견적이 없습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EstimatingGrid from "../EstimatingGrid";
import EventBus from "../../main.js";
import FixFooter from "../FixFooter";

import axios from "axios";
import { mapGetters } from "vuex";

export default {
  components: {
    EstimatingGrid,
    FixFooter,
  },
  data() {
    return {
      allestData: null,
      estData: null,
      emptyEsting: false,
      status: "all",
      loading: false
    };
  },
  methods: {
    goDetail(estId) {
      this.$router.push({ name: "EstimatingDetail", params: { estId: estId } });
    },
    rearrList() {
      if(this.status == "all") {
        this.estData = this.allestData
      }
      else if(this.status == "before") {
        this.estData = []
        for(let i in this.allestData) {
          if(this.allestData[i].status == "B") {
            this.estData.push(this.allestData[i])
          }
        }
      }
      else if(this.status == "selecting") {
        this.estData = []
        for(let i in this.allestData) {
          if(this.allestData[i].status == "S") {
            this.estData.push(this.allestData[i])
          }
        }
      }
      else {
        this.estData = []
        for(let i in this.allestData) {
          if(this.allestData[i].status == "D") {
            this.estData.push(this.allestData[i])
          }
        }
      }
    }
  },
  computed: mapGetters(["getPartner"]),
  async mounted() {
    await axios
      .get("https://new-api.closing119.com/api/estimating/", {
        params: { partner: this.getPartner },
      })
      .then((res) => {
        this.estData = res.data;
        this.allestData = res.data;
        if (res.data.length == 0) {
          this.emptyEsting = true;
        }
        this.loading = true
      });
  },
};
</script>

<style>
.estimating-list-filter-container {
  font-size: 24px;
  font-family: NotoSansKR-Bold;
  padding-left: 10px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #777;
}

.estimating-list-filter {
  font-size: 21px;
  font-family: NotoSansKR-Medium;
  margin-left:5px; 
  padding-left:10px; 
  width: 180px;
}

@media (max-width: 1141px) {
  .estimating-list-filter-container {
    font-size: 18px;
    font-family: NotoSansKR-Bold;
    padding-left: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .estimating-list-filter {
    font-size: 16px;
    font-family: NotoSansKR-Medium;
    margin-left:5px; 
    padding-left:10px; 
    width: 140px;
  }
}
</style>
