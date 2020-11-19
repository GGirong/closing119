<template>
    <div class="page-wrapper section-space--inner--60">
            <div class="project-section">
                <div class="container">
                    <div v-if="loading">
                        <div @click="goProfile()" class="client-edit-container" >
                            <b-icon-pencil-square></b-icon-pencil-square><span style="margin-left: 7px;">견적요청서 수정하기</span>
                        </div>
                        <div class="col-12" style="overflow: hidden">
                        <carousel
                        class="main-modal-image-container"
                        :items="1"
                        :margin="3"
                        :loop="false"
                        :dots="false"
                        :nav="false"
                        :autoplay="false"
                        >
                        <div v-for="image in clientData.images" :key="image.id">
                            <img
                            :src="'https://new-api.closing119.com' + image.image"
                            alt="thumbnail"
                            class="main-modal-image"
                            />
                        </div>
                        </carousel>
                        </div>
                        <div class="main-modal-head-container">
                        <div class="main-modal-head-title">{{ clientData.business_name }}</div>
                        <div class="main-modal-head-subtitle">{{ clientData.district}} | {{ sectorShort(clientData.sector) }}</div>
                        </div>
                        <div class="main-modal-info-container">
                            <div class="main-modal-info-wrapper">
                                <div class="main-modal-info-section">
                                <div class="main-modal-info-light">매장평수</div>
                                <div class="main-modal-info-bold">
                                    <ICountUp :endVal="clientData.py"/>평
                                </div>
                                </div>
                                <div class="main-modal-info-section-divider"></div>
                                <div class="main-modal-info-section">
                                <div class="main-modal-info-light">파트너스</div>
                                <div class="main-modal-info-bold">0개 업체</div>
                                </div>
                                <div class="main-modal-info-section-divider"></div>
                                <div class="main-modal-info-section">
                                <div class="main-modal-info-light">최종견적</div>
                                <div class="main-modal-info-bold" v-if="estimateDone"><ICountUp :endVal="numberWithThree(total_price)"/>만원</div>
                                <div class="main-modal-info-bold" v-if="!estimateDone">입찰중</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="project-item-wrapper">
                                <div class="row">
                                    <div class="col-lg-12 col-sm-12 col-12 section-space--bottom--20" style="height:25px"></div>
                                    <div class="col-lg-4 col-sm-6 col-12 section-space--bottom--40" style="margin: 0 auto; text-align: center">
                                        아직 들어온 견적이 없습니다.
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
import axios from "axios";
import ICountUp from "vue-countup-v2";
import carousel from "vue-owl-carousel2";
import ClientProfileVue from '../views/ClientProfile.vue';

    export default {
        components: {
            carousel,
            ICountUp,
        },
        props: ['estData'],
        data() {
            return {
                eventbt: '1234',
                loading: false,
                clientData: {},
                estimateDone: false
            }
        },
        methods: {
            goProfile() {
                this.$router.push({name: "ClientProfile", params: { clientId: this.clientData.id}})
            },
            async getClient() {
                await axios.get('https://new-api.closing119.com/api/clientimage/', {params: {client: this.estData.client.id}}).then(res=>{
                    var images = [];
                    for (var j in res.data.results.client_image) {
                        images[j] = res.data.results.client_image[j];
                    }
                    this.clientData.images = images;
                    this.loading = true
                })
            },
            sectorShort(sector) {
                if (sector == "음식점 (식당/카페/호프/패스트푸드 등)") {
                    return "음식점";
                } else if (
                    sector ==
                    "도소매 (편의점/문구사무/애견/화장품/기타잡화 등)"
                ) {
                    return "도소매";
                } else if (
                    sector == "서비스업 (학원/미용/주유소/세탁/기타서비스업)"
                ) {
                    return "서비스업";
                } else if (
                    sector == "여가 오락(pc방/노래방/당구장/골프장/헬스/기타)"
                ) {
                    return "여가 오락";
                }
            },
            numberWithThree(x) {
            x += " "
            if(x.length == 8 ) {
                return Number(x.substr( 0 , 3 ))
            }
            else if( x.length == 9) {
                return Number(x.substr( 0 , 4 ))
            }
            else if( x.length == 10) {
                return Number(x.substr( 0 , 5 ))
            }
            
            },
        },
        mounted() {
            this.clientData = this.estData.client
            this.getClient()
        }
    };
</script>

<style lang="scss">
.client-edit-container {
    width: 425px;
    margin: 0 auto;
    padding-bottom: 20px;
    font-size: 15px;
    text-align: right;
    cursor: pointer;
}
</style>