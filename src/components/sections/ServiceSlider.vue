<template>
    <!--====================  service grid slider area ====================-->
    <div class="service-grid-slider-area section-space--inner--120">
        <div class="container" style="width: 100%">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area text-center">
                        <h2 class="section-title section-space--bottom--50">진행 중인 견적 보기<span class="title-icon"></span></h2>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="service-slider">
                        <div class="swiper-container service-slider__container">
                            <div class="swiper-wrapper service-slider__wrapper" v-if="isInitialized">
                                <swiper :options="swiperOption">
                                    <swiper-slide v-for="client in clientData" :key="client.id">
                                        <ServiceItem 
                                        :client="client"
                                        />
                                    </swiper-slide>
                                </swiper>
                            </div>
                            <div class="ht-swiper-button-prev ht-swiper-button-prev-16 ht-swiper-button-nav d-none d-lg-block"><i class="ion-ios-arrow-left"></i></div>
                            <div class="ht-swiper-button-next ht-swiper-button-next-16 ht-swiper-button-nav d-none d-lg-block"><i class="ion-ios-arrow-forward"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--====================  End of service grid slider area  ====================-->
</template>

<script>
    import ServiceItem from '@/components/ServiceItem.vue';
    import data from '../../data/service.json'

    import axios from 'axios'

    export default {
        components: {
            ServiceItem
        },
        data() {
            return {
                data,
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    watchSlidesVisibility: true,
                    spaceBetween : 30,
                    // Responsive breakpoints
                    breakpoints: {
                        1200:{
                            slidesPerView : 3
                        },

                        768:{
                            slidesPerView : 2
                        },

                        575:{
                            slidesPerView : 1
                        }
                    },
                    navigation: {
                        nextEl: '.ht-swiper-button-next',
                        prevEl: '.ht-swiper-button-prev'
                    },
                },
                clientData: [],
                isInitialized: false
            }
        },
        methods: {
            async getClientImg(i) {
                await axios.get('http://tmdgud1112.pythonanywhere.com/api/clientimage/', {params: {client: this.clientData[i].id}}).then(res=>{
                    this.clientData[i].imageurl = res.data.results.client_image[0].image
                    if(this.clientData.length - 1 == i) {
                        this.isInitialized = true
                    }
                })
            },
        },
        async mounted() {
            await axios.get('http://tmdgud1112.pythonanywhere.com/api/client/').then(res=>{
                this.clientData = res.data
                
            }) 

            for(var i in this.clientData) {
                this.getClientImg(i)
            }
            
        }
    };
</script>