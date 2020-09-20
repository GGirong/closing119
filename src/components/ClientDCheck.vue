<template>
    <div class="page-wrapper section-space--inner--60">
            <div class="project-section">
                <div class="container"> 
                    <div style="border: 1px solid #d4d4d4; padding: 25px">
                        <div style="font-size:24px; font-weight:500; margin-bottom:15px">선정한 견적서</div>
                        <div style="margin-left:15px">이름: <span style="margin-left:45px">{{ estData.Estimate.partner.partner_name}}</span></div>
                        <div style="margin-left:15px">대표 이름: <span style="margin-left:45px">{{ estData.Estimate.partner.ceo}}</span></div>
                        <div style="margin-left:15px">주소: <span style="margin-left:45px">{{ estData.Estimate.partner.address}}</span></div>
                        <div style="margin-left:15px">연락처: <span style="margin-left:45px">{{ estData.Estimate.partner.phone_num}}</span></div>
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
            setClientData(code) {
                console.log("레퍼에서 선정")
                this.$emit('setstatus', code)
            }
        },
        mounted() {
            console.log(this.estData)
        }
        

    };
</script>

<style lang="scss">

</style>