<template>
    <div class="service-grid-item service-grid-item--style2">
        <div class="service-grid-item__content">
            <div class="estimating-grid-status" :style="{ color : statuscolor }">
                {{statusMsg}}
            </div>
            <h3 class="title">
                <div @click="$emit('go-detail', estData.id)">
                    {{ estData.client.business_name }}
                </div>
            </h3>
            
            <div class="row"> 
                <div class="col-sm-12 col-lg-4">
                    <div class="estimating-grid-title">연락처</div>
                    <div class="estimating-grid-subtitle">{{ formatPhoneNumber(estData.client.phone_num)}}</div>
                </div>
                <div class="col-sm-12 col-lg-4">
                    <div class="estimating-grid-title">주소</div>
                    <div class="estimating-grid-subtitle">{{ estData.client.address }}</div>
                </div>
            </div>
            
            <div v-if="clientStatus == 'B'" class="see-more-link" @click="$emit('go-detail', estData.id)">견적서 작성하기</div>
            <div v-if="clientStatus == 'D'" class="see-more-link" @click="$emit('go-detail', estData.id)">공사 완료하기</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['estData'],
        components: {
        },
        data(){
            return {
                modal: false,
                clientStatus: '',
                statusMsg: '',
                statuscolor: ''
            }
        },
        methods: {
            formatPhoneNumber(str){
            //Filter only numbers from the input
            
            //Check if the input is of correct length
            let match = str.match(/^([\S]{3})([\S]{4})([\S]{4})$/);

            if (match) {
                return match[1] + '-' + match[2] + '-' + match[3]
            };

            return null
            },
        },
        mounted() {
            this.clientStatus = this.estData.status
            if(this.clientStatus == 'D') {
                this.statusMsg = '공사 진행 중'
                this.statuscolor = 'red'
            }
            else if(this.clientStatus == 'B'){
                this.statusMsg = '견적서 작성 전'
                this.statuscolor = 'grey'
            }
            else {
                this.statusMsg = '선정 대기 중'
                this.statuscolor = 'blue'
            }
        }
    };
</script>

<style>
.estimating-grid-title {
    margin-top: 15px;
    font-size: 14px;
    color: rgb(94, 84, 84);
    margin-bottom: 5px
}
.estimating-grid-subtitle {
    margin-bottom: 5px !important
}
.estimating-grid-status {
    margin-bottom: 5px;
    font-weight: 600;
}
.see-more-link {
    margin-top: 20px
}
</style>