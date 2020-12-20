<template>
    <div class="page-wrapper section-space--inner--120">
      <div class="project-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="project-item-wrapper">
                <div class="row" v-if="loading">
                    <div v-if="!emptyEsting" class="col-lg-12 col-sm-12 col-12 section-space--bottom--30">
                         <div
                            v-for="est in estData"
                            :key="est.id"
                        >
                            <DoneGrid :estData="est" @go-detail="goDetail(est)" />
                        </div>
                    </div>
                  <div
                    class="col-lg-4 col-sm-6 col-12 section-space--bottom--30"
                    v-if="emptyEsting"
                    style="margin: 0 auto; text-align: center"
                  >
                    완료된 견적이 없습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MainModal
            :clientId="clientId"
            :status="status"
            v-if="modal"
            @close="closeModal"
          />
        </div>
      </div>
    </div>
</template>

<script>
import DoneGrid from "../DoneGrid";
import MainModal from "../MainModal";

import axios from "axios";
import { mapGetters } from "vuex";

export default {
    components: {
        DoneGrid,
        MainModal,
    },
    data() {
        return {
            estData: {},
            emptyEsting: true,
            modal: false,
            status: "D",
            clientId: 0,
            loading: false,
        };
    },
    methods: {
        goDetail(est) {
            this.clientId= est.client.id
            this.modal = true;
        },
        closeModal() {
            this.modal = false;
        },
        color(est) {
            if(est.status == "C") {
                return "공사 완료"
            }
            else {
                return "선정 안됨"
            }
        }
    },
    async mounted() {
        await axios
        .get("https://new-api.closing119.com/api/complete/", {
            params: { partner: this.getPartner },
        })
        .then(res => {
            this.estData = res.data.reverse()
            if(this.estData.length > 0) {
                this.emptyEsting = false
            }
            this.loading = true
        });
    },
    computed: mapGetters(["getPartner"]),
}
</script>

<style scoped>

</style>