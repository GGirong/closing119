<template>
  <div class="page-wrapper section-space--inner--60">
    <div class="project-section">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-lg-12">
            <div class="project-item-wrapper">
              <div style="border: 1px solid #d4d4d4; padding: 25px">
                <div
                  style="font-size:24px; font-weight:500; margin-bottom:15px"
                >
                  {{ estData.client.client_name }}님의 견적 요청서
                </div>
                <div class="est-detail-content-container">
                  <div class="est-detail-content-title">
                    <div style="margin-left:10px">
                      연락처:
                    </div>
                    <div style="margin-left:10px">
                      상호:
                    </div>
                    <div style="margin-left:10px">
                      주소:
                    </div>
                    <div style="margin-left:10px">
                      평수:
                    </div>
                  </div>
                  <div class="est-detail-content">
                    <div style="margin-left:45px">
                      {{ estData.client.phone_num }}
                    </div>
                    <div style="margin-left:45px">
                      {{ estData.client.business_name }}
                    </div>
                    <div style="margin-left:45px">
                      {{ estData.client.address }}
                    </div>
                    <div style="margin-left:45px">
                      {{ estData.client.py }} 평
                    </div>
                  </div>
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

import axios from "axios";

export default {
  props: ["estData"],
  components: {
    EstimatingGrid,
  },
  data() {
    return {
      modal: null,
    };
  },
  methods: {},
  async mounted() {},
};
</script>

<style>
.est-detail-content-container {
  display: flex;
}
.est-detail-content-title {
  color: rgb(94, 84, 84);
}
</style>
