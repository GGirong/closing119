<template>
    <!--====================  project slider area ====================-->
    <div class="project-slider-area grey-bg section-space--inner--120">
        <div class="low-container">
                <div style="background-color: #1666fe; border-radius: 5px; color: #fff; padding-left: 10px; width: 170px">
                    폐업지원컨설팅 무료지원
                </div>
                <div style="font-size: 30px; font-weight:700; color: #000">
                    책임공사제 시행! 깐깐한 기준을 통과한 검증된 파트너 군단 !
                </div>
                <div style="font-size: 16px; line-height: 20px; color: #555; margin-bottom: 45px;">
                    폐업119만의 깐깐한 기준을 통과한 파트너업체들을 통해 보다 신속하고 깔끔한 시공을 도와드립니다.
                </div>
            <div class="row">
                <div class="col-lg-12">
                    <carousel class="partner-banner-container" 
                    :items="1" 
                    :margin="15"
                    :loop="true"
                    :dots="false"
                    :nav="false"
                    :autoplay="true"
                    :autoplayTimeout="5000"
                    :autoplayHoverPause="true"
                    >
                        <img src="../../../public/assets/img/parnter_1.jpeg" class="partner-banner-item">

                        <img src="../../../public/assets/img/partner_2.jpeg" class="partner-banner-item">

                        <img src="../../../public/assets/img/partner_3.jpeg" class="partner-banner-item">

                        <img src="../../../public/assets/img/partner_4.jpeg" class="partner-banner-item">

                        <img src="../../../public/assets/img/partner_5.jpeg" class="partner-banner-item">
                    </carousel>
                </div>
            </div>
        </div>
    </div>
    <!--====================  End of project slider area  ====================-->
</template>

<script>
    import carousel from 'vue-owl-carousel2'

    export default {
        components: { carousel },
        data () {
            return {
                swiperOption: {
                    speed: 1500,
                    loop: true,
                    autoplay: true,
                    slidesPerView: 1,
                    spaceBetween : 30,
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                },
                partnerList: [
                    {   id: 1,
                        title1: '저의 긍정에너지를',
                        title2: '가득 채워드리고 싶어요.',
                        sector: '서울/경기/인천',
                        business_name: '그린철거'
                    },
                    {
                        id: 2,
                        title1: '비결이요?',
                        title2: '정답은 친절입니다.',
                        sector: '강원도',
                        business_name: '재영건설'
                    },
                    {
                        id: 3,
                        title1: '늘어나는 스킬과 함께',
                        title2: '제 자신도 레벨업 중이에요.',
                        sector: '경상도',
                        business_name: '명구철거'
                    },
                    {
                        id: 4,
                        title1: '제자리에 머무르지 않고',
                        title2: '계속 성장해야죠.',
                        sector: '전라도',
                        business_name: '호중무역'
                    },
                    {
                        id: 5,
                        title1: '신뢰란 사소한 것에서',
                        title2: '부터 만들어지는 것이죠.',
                        sector: '충청도',
                        business_name: '성장철거'
                    }
                ]
            }
        }
    };
</script>

<style lang="scss">
.partner-banner-container {
    overflow: visible !important;
}
.partner-banner-item {
    width: 945px;
}
.owl-stage-outer {
    overflow: visible !important;
}
.owl-item {
    opacity: .4;
}
.owl-item.active {
    opacity: 1;
}
</style>