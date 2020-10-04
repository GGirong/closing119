<template>
    <!--====================  fun fact area ====================-->
    <div class="belive-section" style="padding-top: 60px;">
        <div class="low-container">
            <div>
                <div style="background-color: #1666fe; border-radius: 5px; color: #fff; padding-left: 10px; width: 170px">
                    폐업지원컨설팅 무료지원
                </div>
                <div style="font-size: 30px; font-weight:700; color: #000">
                    폐업119는 신뢰할 수 있어요!
                </div>
                <div style="font-size: 16px; line-height: 20px; color: #555; margin-bottom: 45px;">
                    국내 최초 폐업재기 박람회 개최! 소상공인시장공단 폐업지원컨설팅 분야 지정 교육 기관!<br>
                    고민 끝에 결정하신 폐업, 신뢰할 수 있는 폐업119에게 맡겨주세요!
                </div>
                <div class="row text-center">
                    <div class="col-2">
                        <div class="believe-left-title">
                            국내최초 폐업재기<br>
                            박람회 개최
                        </div>
                        <img src="../../public/assets/img/blv-1.png" style="margin-top: 100px;">
                    </div>
                    <div class="col-3">
                        <div class="believe-left-title">
                            소상공인시장공단<br>
                            지정 교육 기관
                        </div>
                        <div class="believe-subtitle" style="margin-top:19px">(*폐업컨설팅 분야, 2019~2020)</div>
                        <img src="../../public/assets/img/blv-2.png" style="margin-top: 54px;">
                    </div>
                    <div class="col-2">
                        <div class="believe-right-title">
                            상담완료건수
                        </div>
                        <div class="believe-subtitle">누적접수건수(*2015~)</div>
                        <div class="believe-title">
                            <span class="believe-title-bold" v-if="countOn"><ICountUp :endVal="3568" /></span>개
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="believe-right-title">
                            서비스 수행건수
                        </div>
                        <div class="believe-subtitle">누적접수건수(*2015~)</div>
                        <div class="believe-title">
                            <span class="believe-title-bold" v-if="countOn"><ICountUp :endVal="3210" /></span>개
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="believe-right-title">
                            협력 업체 수
                        </div>
                        <div class="believe-subtitle">전국 가맹 업체 수</div>
                        <div class="believe-title">
                            <span class="believe-title-bold" v-if="countOn"><ICountUp :endVal="272" /></span>개
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--====================  End of fun fact area  ====================-->
</template>

<script>
    import ICountUp from 'vue-countup-v2';
    export default {
        components: {
            ICountUp
        },
        data () {
            return {
                delay: 300,
                countOn: false,
            }
        },
        methods: {
            handleScroll() {
                const scrollY =
                document.documentElement.scrollTop

                if (scrollY > 3000){
                    this.countOn = true
                }
                else {
                    this.countOn = false
                }
            }
        },
        created: function () {
            // 핸들러 등록하기
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy: function () {
            // 핸들러 제거하기(컴포넌트 또는 SPA의 경우 절대 잊지 말아 주세요!)
            window.removeEventListener('scroll', this.handleScroll)
        },
    };
</script>

<style>
.belive-section {
    background-color: #f6fcfb;
    height: 580px
}
.believe-left-title {
    position: relative;
    font-size: 21.68px;
    line-height: 24px;
    font-weight: 600;
    color: #383838;
}
.believe-subtitle {
    font-size: 13px;
    color: #383838;
    margin-top: 23px;
}
.believe-right-title {
    font-size: 26.94px;
    font-weight: 600;
}
.believe-title {
    margin-top: 80px;
    font-size: 32px;
    margin-right: 10px;
}
.believe-title-bold {
    font-size: 54px; 
    font-weight:700; 
    color: #1666fe;
}
</style>