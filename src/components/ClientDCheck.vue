<template>
    <div class="page-wrapper section-space--inner--60">
            <div class="project-section">
                <div class="container"> 
                    <div style="border: 1px solid #d4d4d4; padding: 25px">
                        <div style="font-size:24px; font-weight:500; margin-bottom:15px">선정한 견적서</div>
                        <div class="row">
                            <div class="est-title col-sm-2 col-12" style="margin-left:15px">
                                업체명
                            </div>
                            <div class="col-8" style="margin-left:15px">
                                {{ estData.Estimate[0].partner.partner_name}}
                            </div>
                            <div class="est-title col-sm-2 col-12" style="margin-left:15px">
                                대표
                            </div>
                            <div class="col-8" style="margin-left:15px">
                                {{ estData.Estimate[0].partner.ceo}}
                            </div>
                            <div class="est-title col-sm-2 col-12" style="margin-left:15px">
                                연락처
                            </div>
                            <div class="col-8" style="margin-left:15px">
                                {{ formatPhoneNumber(estData.Estimate[0].partner.phone_num)}}
                            </div>
                            <div class="est-title col-sm-2 col-12" style="margin-left:15px">
                                견적 금액
                            </div>
                            <div class="col-8" style="margin-left:15px">
                                {{ numberWithCommas((estData.Estimate[0].total_price * 1.1).toFixed(0))}}
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="project-item-wrapper">
                                <div class="row">
                                    <div class="col-lg-12 col-sm-12 col-12 section-space--bottom--20" style="height:25px"></div>
                                    <div class="col-lg-4 col-sm-6 col-12 section-space--bottom--40" style="margin: 0 auto; text-align: center">
                                        아직 공사가 진행 중 입니다.
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

    export default {
        props: ['estData'],
        data() {
            return {
                eventbt: '1234'
            }
        },
        methods: {
            numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
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

    };
</script>

<style>
.est-title {
    color: #777;
}
</style>