<template>
    <div class="hero-alider-area">
        <div class="hero-slider__container-area">
            <div class="swiper-container hero-slider__container">
                <div class="swiper-wrapper hero-slider__wrapper">
                    <swiper :options="swiperOption">
                        <!--=======  single slider item  =======-->
                        <div class="swiper-slide hero-slider__single-item" :style="{ backgroundImage: `url(${item.image})` }" v-for="item in sliderData" :key="item.id">
                            <div class="hero-slider__content-wrapper"> 
                                <div class="main-container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="hero-slider__content" :class="[item.addClass]">
                                                <h2 class="hero-slider__title">업계 1위 폐업119의<br>믿고 맡기는 폐업 절차</h2>
                                                <p class="hero-slider__text">견적 제공부터 건설까지 빠짐없이 제공되는 폐업 119만의 매니지먼트 서비스를 체험해보세요.<br>전국 어디에서나 믿을 수 있는 건설 업체의 견적을 받고 폐업절차를 진행하세요!</p>
                                               <router-link to="/client" class="hero-slider__mainbtn">견적서 요청하기</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--=======  End of single slider item  =======-->
                        <div class="ht-swiper-button-prev ht-swiper-button-prev-13 ht-swiper-button-nav d-none d-xl-block"><i class="ion-ios-arrow-left"></i></div>
                        <div class="ht-swiper-button-next ht-swiper-button-next-13 ht-swiper-button-nav d-none d-xl-block"><i class="ion-ios-arrow-forward"></i></div>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        props: ['sliderData'],
        data() {
            return {
                swiperOption: {
                    speed: 1500,
                    loop: true,
                    effect: 'fade',
                    autoplay: false,
                    spaceBetween : 30,
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                },
            };
        },
    };
</script>

<style lang="scss">

</style>