<template>
    <div class="service-grid-item service-grid-item--style2">
        <div class="service-grid-item__content">
            <div class="estimating-grid-status" :style="{ color : statuscolor }">
                {{statusMsg}}
            </div>
            <h3 class="title">
                <router-link to="/project-details">
                    {{ estData.client.business_name }}
                </router-link>
            </h3>
            <div class="row"> 
                <div class="col-sm-12 col-lg-4">
                    <div class="estimating-grid-title">주소</div>
                    <div class="estimating-grid-subtitle">{{ estData.client.address }}</div>
                </div>
                <div class="col-sm-12 col-lg-4" v-if="estData.status == 'C'">
                    <div class="estimating-grid-title">공사완료일</div>
                    <div class="estimating-grid-subtitle">{{ complete_date }}</div>
                </div>
            </div>

            <div class="see-more-link" @click="$emit('go-detail', estData.client.id)">자세히 보기</div>
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
                statusMsg: '',
                statuscolor: '',
                complete_date: ''
            }
        },
        mounted() {
            this.complete_date = this.estData.client.complete_date.split('T')[0]
            this.complete_date = this.complete_date.split('-')[0] + '년 ' + this.complete_date.split('-')[1] + '월 ' +this.complete_date.split('-')[2] + '일'
            if(this.estData.status == "C") {
                this.statusMsg = "선정됨"
                this.statuscolor = 'blue'
            }
            else {
                this.statusMsg = "선정실패"
                this.statuscolor = 'red'
            }
        }
    };
</script>

<style>
</style>