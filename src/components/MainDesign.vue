<template>
    <div class="main-design-container">
        <!--====================  텍스트와 이미지 ====================-->
        <div class="main-container" style="width: 1135px;">
            <div class="row section-space--inner--60">
                <div class="col-lg-6">
                    <div style="font-size: 30px; font-weight: 700; line-height:32px; padding-left: 65px">
                        보다 빠르고 효율적인 매장정리를 위한<br>
                        폐업119만의 비교견적 시스템!
                    </div>
                    <div style="font-size: 15px; margin-top: 8px; line-height: 20px; padding-left: 65px">
                        전국 272개의 검증된 폐업119 전문협력업체를 통해 최적의 공사비용을 제공!<br>
                        보다 빠르고 정확한 철거·원상복구를 시행할 수 있도록 지원합니다.
                    </div>
                </div>
                <div class="col-lg-6">
                    <img 
                    src="../../public/assets/img/main_graph.jpg"
                    />
                </div>
            </div>
        </div>
        <!--====================  헤더 슬라이더 ====================-->
        <div style="width: 1464px; margin: 0 auto; position:relative">
        <div style="width: 1464px; margin: 0 auto; overflow: hidden;">
            <div style="width: 1203px; margin: 0 auto">
                    <div 
                    class="swiper"
                    v-swiper:swiper="swiperOption"
                    >
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in slideList" :key="item.id">
                            <div class="top-slide-headcircle" :style="{ backgroundColor: item.color, textShadow: item.subcolor}">
                                <div class="headcircle-title"><span style="font-size: 24px; margin-right: 2px">-{{item.number}}</span>만원 <br>절감</div>
                            </div>
                            <img src="../../public/assets/img/ex_1.png"
                            class="top-slide-image"
                            />
                            <div class="top-slide-content-container row">
                                <div class="col-8">
                                    <div style="font-size: 13px; line-height:12px">
                                        상가/매장
                                    </div>
                                    <div style="font-size: 18px">
                                        아뜰리에 코스메틱 양재점
                                    </div>
                                    <div style="font-size: 12.5px; color: #646464;">
                                        <span style="margin-right:20px">서울특별시 양재동</span> | <span style="margin-left:20px">30평</span>
                                    </div>
                                </div>
                                <div class="col-4" style="position: relative">
                                    <img src="../../public/assets/img/check_btn.png" style="position: absolute; top: 3.5px; left: -10px; width:13px"/>
                                    <img src="../../public/assets/img/check_btn.png" style="position: absolute; top: 24px; left: -10px; width:13px"/> 
                                    <img src="../../public/assets/img/check_btn.png" style="position: absolute; top: 45px; left: -10px; width:13px"/>  
                                    <div class="row text-left">
                                        <div class="col-12" style="font-size: 13px; line-height:20px">
                                            정부지원금 적용
                                        </div>
                                        <div class="col-12" style="font-size: 13px; line-height:20px">
                                            {{item.partners}}개업체 비교견적
                                        </div>
                                        <div class="col-12" style="font-size: 13px; line-height:20px">
                                            책임공사제 시행
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
        </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        </div>
        <!--====================  배너  ====================-->
        <div class="main-container">
            <div class="banner-one">
                배너 자리
            </div>
        </div>

        <!--====================  새로 올라온 매장  ====================-->
        <div class="main-container">
            <div class="new-board-title">
                <span style="color:#1574fe">NEW</span> 새로 올라온 매장
            </div>
            <div class="row" v-for="list in boardList" :key="list">
                <div class="col-3">
                    <div class="board-item-container">
                        <div class="board-d-day">
                            D-{{list.number}}
                        </div>
                        <img src="../../public/assets/img/ex_3.jpg"
                        class="board-item-image"
                        />
                        <div class="board-content-container">
                            <div style="font-size: 17.76px;">
                                상가/매장
                            </div>
                            <div style="font-size: 21.85px;">
                                아뜰리에 코스메틱 양재점
                            </div>
                            <div style="font-size: 17.07px; color: #646464;">
                                <span style="margin-right:10px">서울특별시 양재동</span> | <span style="margin-left:10px">30평</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="board-item-container">
                        <div class="board-d-day">
                            D-{{list.number}}
                        </div>
                        <img src="../../public/assets/img/ex_3.jpg"
                        class="board-item-image"
                        />
                        <div class="board-content-container">
                            <div style="font-size: 17.76px;">
                                상가/매장
                            </div>
                            <div style="font-size: 21.85px;">
                                아뜰리에 코스메틱 양재점
                            </div>
                            <div style="font-size: 17.07px; color: #646464;">
                                <span style="margin-right:10px">서울특별시 양재동</span> | <span style="margin-left:10px">30평</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="board-item-container">
                        <div class="board-d-day">
                            D-{{list.number}}
                        </div>
                        <img src="../../public/assets/img/ex_3.jpg"
                        class="board-item-image"
                        />
                        <div class="board-content-container">
                            <div style="font-size: 17.76px;">
                                상가/매장
                            </div>
                            <div style="font-size: 21.85px;">
                                아뜰리에 코스메틱 양재점
                            </div>
                            <div style="font-size: 17.07px; color: #646464;">
                                <span style="margin-right:10px">서울특별시 양재동</span> | <span style="margin-left:10px">30평</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="board-item-container">
                        <div class="board-d-day">
                            D-{{list.number}}
                        </div>
                        <img src="../../public/assets/img/ex_3.jpg"
                        class="board-item-image"
                        />
                        <div class="board-content-container">
                            <div style="font-size: 17.76px;">
                                상가/매장
                            </div>
                            <div style="font-size: 21.85px;">
                                아뜰리에 코스메틱 양재점
                            </div>
                            <div style="font-size: 17.07px; color: #646464;">
                                <span style="margin-right:10px">서울특별시 양재동</span> | <span style="margin-left:10px">30평</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" style="margin-top: 15px; margin-bottom: 25px">
                <ul class="page-pagination">
                    <li @click="pagedown()" ><a><i class="fa fa-angle-left"></i> Prev</a></li>
                    <li v-for="item in pagination" 
                    :key="item.num"
                    :class="{ active : item.selected}"
                    @click="paginate(item.num)"
                    >
                        <a>{{ item.num }}</a>
                    </li>
                    <li @click="pageup()"><a><i class="fa fa-angle-right"></i> Next</a></li>
                </ul>
            </div>
        </div>
        <!--====================  하단 배너 ====================-->
        <swiper class="swiper2" :options="swiperOption2">
            <swiper-slide class="banner-swiper">배너자리 1</swiper-slide>
            <swiper-slide class="banner-swiper">배너자리 2</swiper-slide>
            <swiper-slide class="banner-swiper">배너자리 3</swiper-slide>
            <swiper-slide class="banner-swiper">배너자리 4</swiper-slide>
            <swiper-slide class="banner-swiper">배너자리 5</swiper-slide>
            <swiper-slide class="banner-swiper">배너자리 6</swiper-slide>
            <swiper-slide class="banner-swiper">배너자리 7</swiper-slide>
            <swiper-slide class="banner-swiper">배너자리 8</swiper-slide>
            <swiper-slide class="banner-swiper">배너자리 9</swiper-slide>
            <swiper-slide class="banner-swiper">배너자리 10</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data () {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOption2: {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true
                    }
                },
                slideList: [
                    {
                        id: 1,
                        color: '#58bdb5',
                        subcolor: '#009a8d 1px 1px, #009a8d 2px 2px, #009a8d 3px 3px,#009a8d 3px 3px,#009a8d 4px 4px,#009a8d 5px 5px,#009a8d 6px 6px,#009a8d 7px 7px,#009a8d 8px 8px, #009a8d 9px 9px,#009a8d 10px 10px,#009a8d 11px 11px,#009a8d 12px 12px,#009a8d 13px 13px,#009a8d 14px 14px,#009a8d 15px 15px,#009a8d 16px 16px,#009a8d 17px 17px,#009a8d 18px 18px,#009a8d 19px 19px,#009a8d 20px 20px, #009a8d 21px 21px, #009a8d 22px 22px, #009a8d 23px 23px,#009a8d 24px 24px,#009a8d 25px 25px,#009a8d 26px 26px,#009a8d 27px 27px,#009a8d 28px 28px, #009a8d 29px 29px, #009a8d 30px 30px, #009a8d 31px 31px, #009a8d 32px 32px, #009a8d 33px 33px, #009a8d 34px 34px,#009a8d 35px 35px,#009a8d 36px 36px, #009a8d 37px 37px, #009a8d 38px 38px, #009a8d 39px 39px, #009a8d 40px 40px, #009a8d 41px 41px, #009a8d 42px 42px',
                        number: 170,
                        partners: 5,
                    },
                    {
                        id: 2,
                        color: '#1574fe',
                        subcolor: '#1052bf 1px 1px, #1052bf 2px 2px, #1052bf 3px 3px,#1052bf 3px 3px,#1052bf 4px 4px,#1052bf 5px 5px,#1052bf 6px 6px,#1052bf 7px 7px,#1052bf 8px 8px, #1052bf 9px 9px,#1052bf 10px 10px,#1052bf 11px 11px,#1052bf 12px 12px,#1052bf 13px 13px,#1052bf 14px 14px,#1052bf 15px 15px,#1052bf 16px 16px,#1052bf 17px 17px,#1052bf 18px 18px,#1052bf 19px 19px,#1052bf 20px 20px, #1052bf 21px 21px, #1052bf 22px 22px, #1052bf 23px 23px,#1052bf 24px 24px,#1052bf 25px 25px,#1052bf 26px 26px,#1052bf 27px 27px,#1052bf 28px 28px, #1052bf 29px 29px, #1052bf 30px 30px, #1052bf 31px 31px, #1052bf 32px 32px, #1052bf 33px 33px, #1052bf 34px 34px,#1052bf 35px 35px,#1052bf 36px 36px, #1052bf 37px 37px, #1052bf 38px 38px, #1052bf 39px 39px, #1052bf 40px 40px, #1052bf 41px 41px, #1052bf 42px 42px',
                        number: 150,
                        partners: 6,
                    },
                    {
                        id:3,
                        color: '#f9db6d',
                        subcolor: '#edb368 1px 1px, #edb368 2px 2px, #edb368 3px 3px,#edb368 3px 3px,#edb368 4px 4px,#edb368 5px 5px,#edb368 6px 6px,#edb368 7px 7px,#edb368 8px 8px, #edb368 9px 9px,#edb368 10px 10px,#edb368 11px 11px,#edb368 12px 12px,#edb368 13px 13px,#edb368 14px 14px,#edb368 15px 15px,#edb368 16px 16px,#edb368 17px 17px,#edb368 18px 18px,#edb368 19px 19px,#edb368 20px 20px, #edb368 21px 21px, #edb368 22px 22px, #edb368 23px 23px,#edb368 24px 24px,#edb368 25px 25px,#edb368 26px 26px,#edb368 27px 27px,#edb368 28px 28px, #edb368 29px 29px, #edb368 30px 30px, #edb368 31px 31px, #edb368 32px 32px, #edb368 33px 33px, #edb368 34px 34px,#edb368 35px 35px,#edb368 36px 36px, #edb368 37px 37px, #edb368 38px 38px, #edb368 39px 39px, #edb368 40px 40px, #edb368 41px 41px, #edb368 42px 42px',
                        number: 75,
                        partners: 4,
                    },
                    {
                        id: 4,
                        color: '#58bdb5',
                        subcolor: '#009a8d 1px 1px, #009a8d 2px 2px, #009a8d 3px 3px,#009a8d 3px 3px,#009a8d 4px 4px,#009a8d 5px 5px,#009a8d 6px 6px,#009a8d 7px 7px,#009a8d 8px 8px, #009a8d 9px 9px,#009a8d 10px 10px,#009a8d 11px 11px,#009a8d 12px 12px,#009a8d 13px 13px,#009a8d 14px 14px,#009a8d 15px 15px,#009a8d 16px 16px,#009a8d 17px 17px,#009a8d 18px 18px,#009a8d 19px 19px,#009a8d 20px 20px, #009a8d 21px 21px, #009a8d 22px 22px, #009a8d 23px 23px,#009a8d 24px 24px,#009a8d 25px 25px,#009a8d 26px 26px,#009a8d 27px 27px,#009a8d 28px 28px, #009a8d 29px 29px, #009a8d 30px 30px, #009a8d 31px 31px, #009a8d 32px 32px, #009a8d 33px 33px, #009a8d 34px 34px,#009a8d 35px 35px,#009a8d 36px 36px, #009a8d 37px 37px, #009a8d 38px 38px, #009a8d 39px 39px, #009a8d 40px 40px, #009a8d 41px 41px, #009a8d 42px 42px',
                        number: 170,
                        partners: 5,
                    },
                    {
                        id: 5,
                        color: '#1574fe',
                        subcolor: '#1052bf 1px 1px, #1052bf 2px 2px, #1052bf 3px 3px,#1052bf 3px 3px,#1052bf 4px 4px,#1052bf 5px 5px,#1052bf 6px 6px,#1052bf 7px 7px,#1052bf 8px 8px, #1052bf 9px 9px,#1052bf 10px 10px,#1052bf 11px 11px,#1052bf 12px 12px,#1052bf 13px 13px,#1052bf 14px 14px,#1052bf 15px 15px,#1052bf 16px 16px,#1052bf 17px 17px,#1052bf 18px 18px,#1052bf 19px 19px,#1052bf 20px 20px, #1052bf 21px 21px, #1052bf 22px 22px, #1052bf 23px 23px,#1052bf 24px 24px,#1052bf 25px 25px,#1052bf 26px 26px,#1052bf 27px 27px,#1052bf 28px 28px, #1052bf 29px 29px, #1052bf 30px 30px, #1052bf 31px 31px, #1052bf 32px 32px, #1052bf 33px 33px, #1052bf 34px 34px,#1052bf 35px 35px,#1052bf 36px 36px, #1052bf 37px 37px, #1052bf 38px 38px, #1052bf 39px 39px, #1052bf 40px 40px, #1052bf 41px 41px, #1052bf 42px 42px',
                        number: 150,
                        partners: 6,
                    },
                    {
                        id: 6,
                        color: '#f9db6d',
                        subcolor: '#edb368 1px 1px, #edb368 2px 2px, #edb368 3px 3px,#edb368 3px 3px,#edb368 4px 4px,#edb368 5px 5px,#edb368 6px 6px,#edb368 7px 7px,#edb368 8px 8px, #edb368 9px 9px,#edb368 10px 10px,#edb368 11px 11px,#edb368 12px 12px,#edb368 13px 13px,#edb368 14px 14px,#edb368 15px 15px,#edb368 16px 16px,#edb368 17px 17px,#edb368 18px 18px,#edb368 19px 19px,#edb368 20px 20px, #edb368 21px 21px, #edb368 22px 22px, #edb368 23px 23px,#edb368 24px 24px,#edb368 25px 25px,#edb368 26px 26px,#edb368 27px 27px,#edb368 28px 28px, #edb368 29px 29px, #edb368 30px 30px, #edb368 31px 31px, #edb368 32px 32px, #edb368 33px 33px, #edb368 34px 34px,#edb368 35px 35px,#edb368 36px 36px, #edb368 37px 37px, #edb368 38px 38px, #edb368 39px 39px, #edb368 40px 40px, #edb368 41px 41px, #edb368 42px 42px',
                        number: 75,
                        partners: 4,
                    }
                ],
                boardList: [ 
                    {
                        number: 15
                    },
                    {
                        number: 10
                    },
                    {
                        number: 7
                    },
                    {
                        number: 3
                    }
                ],
                pagination: [
                    {
                        num: '01',
                        selected: true
                    },
                    {
                        num: '02',
                        selected: false
                    },
                    {
                        num: '03',
                        selected: false
                    }
                ]
            }
        },
        methods: {
            paginate(page) {
                for(var i in this.pagination) {
                    if(this.pagination[i].num == page) {
                        this.pagination[i].selected = true
                    }
                    else {
                        this.pagination[i].selected = false
                    }
                }
            },
            pageup() {
                console.log(this.pagination)
                for(var i in this.pagination) {
                    if(this.pagination[i].selected) {
                        if(this.pagination[i].num != '03'){
                            this.pagination[i].selected = false
                            this.pagination[++i].selected = true
                            break;
                        }
                    }
                }
            },
            pagedown() {
                for(var i in this.pagination) {
                    if(this.pagination[i].selected) {
                        if(this.pagination[i].num != '01'){
                            this.pagination[i].selected = false
                            this.pagination[--i].selected = true
                            break;
                        }
                    }
                }
            }
        }
    };
</script>

<style>
.swiper2 {
    height: 200px;
    background-color:#3255cf;
}
.swiper-pagination {
    top: 170px;
    left: 550px;
}
.banner-swiper {
    padding-left: 200px;
    padding-top: 50px;
    color: #fff;
    font-size: 32px;
    font-weight: 400;
}
.swiper {
    overflow: visible;
}
.swiper-slide {
    width: 388px;
    position: relative;
    border-radius: 15px;
}
.top-slide-headcircle {
    overflow: hidden;
    position: absolute;
    width: 118px;
    height: 118px;
    border-radius: 50%;
    display: inline-block;
    border: 2px solid #fff;
    top: 0;
    left: 135px;
    color: #fff;
    text-align: center;
    padding-top: 36px;
    line-height: 22px;
    font-weight: 600;
    font-size: 18px;
}
.top-slide-image {
    margin-top: 50px;
    border-radius: 15px 15px 0 0;
    width: 388px;
    height: 263px;
    object-fit: cover;
}
.top-slide-content-container {
    padding-top: 15px; 
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 15px;
    border-radius: 0 0 15px 15px;
    border: 1px solid #dcdde0;
}
.swiper-button-prev {
    left: -35px;
    color: #000
}
.swiper-button-next {
    right: -35px;
    color: #000
}
.banner-one {
    height: 100px;
    background-color: #f9db6d;
    font-size: 33px;
    color:#fff;
    padding: 25px
}
.new-board-title {
    margin-top: 25px;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 24px;
}
.board-item-container {
    width: 337px;
    position: relative;
}
.board-d-day {
    position: absolute;
    top: 8px;
    right: 10px;
    background-color: #1665fe;
    color: #fff;
    border-radius: 5px;
    font-size: 19px;
    padding-left: 10px;
    padding-right: 10px;
}
.board-item-image {
    border-radius: 5px 5px 0 0;
    width: 337px;
    height: 259px;
    object-fit: cover;
}
.board-content-container {
    padding-top: 10px;
    padding-left: 15px;
    padding-bottom: 15px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 25px;
    border-radius: 0 0 5px 5px;
    border: 1px solid #dcdde0;
}
</style>