<template>
    <div class="service-grid-item service-grid-item--style2">
        <div class="service-grid-item__content">
            <h3 class="title">
                <div to="/project-details">
                    {{ estData.partner.partner_name }} 
                </div>
            </h3>
            <p class="subtitle">{{ estData.partner.address }}</p>
            <p class="subtitle">{{ estData.total_price * 1.1 }}만원</p>
            <div class="see-more-link" @click="openModal">자세히 보기</div>
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
                selectEstData: {}
            }
        },
        methods: {
            openModal() {
                console.log(this.modal)
                this.modal = true
            },
            closeModal() {
                console.log("모달 종료")
                this.modal = false
            },
            async selectEst() {
                console.log("버튼 클릭")
                this.selectEstData.client_id = this.clientId
                this.selectEstData.estimate_id = this.estData.id
                await axios.post('http://tmdgud1112.pythonanywhere.com/api/clientselect/', this.selectEstData).then(res=>{
                    console.log("정상 선정")
                    this.$emit('setclientstatus', 'D')
                }).catch(err=>{
                    console.log("선정 실패")
                })
            }
        }
    };
</script>

<style lang="scss">

</style>