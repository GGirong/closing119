<template>
    <div class="service-grid-item service-grid-item--style2">
        <div class="service-grid-item__content">
            <div class="row">
                <div class="col-sm-12 col-lg-3">
                    <div class="estimate-grid-title">
                        <img
                        :src="'https://new-api.closing119.com' + profile_image_url"
                        height="150px"
                        width="150px"
                        />
                    </div>
                </div>
                <div class="col-sm-12 col-lg-8 row">
                    <div class="col-sm-12 col-lg-4">
                        <div class="estimate-grid-title">업체명</div>
                        <div class="estimate-grid-subtitle">
                            {{ estData.partner.partner_name }}
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-4">
                        <div class="estimate-grid-title">견적 가격</div>
                        <div class="estimate-grid-subtitle">
                            {{ numberWithCommas((estData.total_price * 1.1).toFixed(0)) }}원
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="estimate-grid-title">세부사항</div>
                        <div class="estimate-grid-text">
                            {{ estData.detail }}
                        </div>
                    </div>
                </div>
                
            </div>
            
            <p class="subtitle"></p>
            <div class="see-more-link" @click="openModal">업체 선정하기</div>
        </div>
        <EstimateModal
        @close="closeModal"
        :estData="estData"
        @select="selectEst" 
        v-if="modal"
        />
    </div>
</template>

<script>
    import EstimateModal from '../components/EstimateModal'

    import axios from 'axios'

    export default {
        props: ['estData', 'clientId'],
        components: {
            EstimateModal
        },
        data(){
            return {
                modal: false,
                selectEstData: {},
                profile_image_url: ''
            }
        },
        methods: {
            openModal() {
                console.log(this.modal)
                this.modal = true
            },
            closeModal() {
                this.modal = false
            },
            async selectEst() {
                this.selectEstData.client_id = this.clientId
                this.selectEstData.estimate_id = this.estData.id
                await axios.post('https://new-api.closing119.com/api/clientselect/', this.selectEstData).then(res=>{
                    this.$emit('setclientstatus', 'D')
                }).catch(err=>{
                })
            },
            numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
        },
        async mounted() {
            await axios.get('https://new-api.closing119.com/api/partnerimage/', {params: {partner: this.estData.partner.id}}).then(res=>{
                this.profile_image_url = res.data.results.profile_image
            })
        }
    };
</script>

<style>
.estimate-grid-title {
    font-size: 14px;
    color: rgb(94, 84, 84);
    margin-top: 15px;
}
.estimate-grid-subtitle {
    margin-top: 5px;
    font-size: 18px;
}
</style>