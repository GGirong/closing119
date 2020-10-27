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
                <div class="map-wrapper" id="dmap">
                    <div id="mainmap" style="width: 1000px; height:400px"></div>
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
        name: 'dmap',
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
                isInitialized: false,
                positions: [],
                imageUrl: 'https://new-api.closing119.com/media/client/default.jpg'
            }
        },
        methods: {
            async getClientImg(i) {
                await axios.get('https://new-api.closing119.com/api/clientimage/', {params: {client: this.clientData[i].id}}).then(res=>{
                    this.clientData[i].imageurl = res.data.results.client_image[0].image
                    if(this.clientData.length - 1 == i) {
                        this.isInitialized = true
                    }
                })
            },
        },
        async mounted() {
            await axios.get('https://new-api.closing119.com/api/client/').then(res=>{
                this.clientData = res.data
                
            }) 

            for(var i in this.clientData) {
                this.getClientImg(i)
            }

            var container = document.getElementById('mainmap');
            var mapOptions = {
                center: new daum.maps.LatLng(37.6526164, 127.0366073),
                level: 13 //지도의 레벨(확대, 축소 정도)
            };
            var map = new daum.maps.Map(container, mapOptions);

            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

            var markerImageSrc = 'https://i.ibb.co/j4TcTKF/image-set.png';  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
            
            var imageSize = new kakao.maps.Size(30, 35),
                SimageOptions = {  
                    spriteOrigin: new kakao.maps.Point(16, 0),    
                    spriteSize: new kakao.maps.Size(50, 135)  
                }; 
            var DimageOptions = {   
                    spriteOrigin: new kakao.maps.Point(16, 50),    
                    spriteSize: new kakao.maps.Size(50, 135)  
                };
            var CimageOptions = {   
                    spriteOrigin: new kakao.maps.Point(16, 100),    
                    spriteSize: new kakao.maps.Size(50, 135)  
                };  
            var SmarkerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize, SimageOptions);
            var DmarkerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize, DimageOptions);
            var CmarkerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize, CimageOptions);

            var SMarkers = [], // 커피숍 마커 객체를 가지고 있을 배열입니다
            DMarkers = [], // 편의점 마커 객체를 가지고 있을 배열입니다
            CMarkers = [];

            await axios.get('https://new-api.closing119.com/api/mainmap/').then(res=>{
                for(var i in res.data){
                    this.positions[i] = {}
                    this.positions[i].lat = res.data[i].lat
                    this.positions[i].lng = res.data[i].lng
                    //this.positions[i].title = res.data[i].verify_code
                    this.positions[i].title = res.data[i].id
                    this.positions[i].status = res.data[i].status
                }
            })

            
            for(var i in this.positions) {
                if(this.positions[i].status == 'S') {
                    var marker = new kakao.maps.Marker({
                        title: this.positions[i].title,
                        position: new kakao.maps.LatLng(this.positions[i].lat, this.positions[i].lng),
                        image: SmarkerImage,
                        map: map
                    })
                }
                else if(this.positions[i].status == 'D') {
                    var marker = new kakao.maps.Marker({
                        title: this.positions[i].title,
                        position: new kakao.maps.LatLng(this.positions[i].lat, this.positions[i].lng),
                        image: DmarkerImage,
                        map: map
                    })
                }
                else {
                    var marker = new kakao.maps.Marker({
                        title: this.positions[i].title,
                        position: new kakao.maps.LatLng(this.positions[i].lat, this.positions[i].lng),
                        image: CmarkerImage,
                        map: map
                    })
                }
                

                // var info_name
                // var info_address
                // var info_py

                // await axios.get('https://new-api.closing119.com/api/clientshortinfo/', {params: {client: this.positions[i].title}}).then(res=>{
                //     info_name = res.data.results.business_name
                //     info_address = res.data.results.address
                //     info_py = res.data.results.py
                // })
                // // 인포윈도우를 생성합니다
                // var infowindow = new kakao.maps.InfoWindow({
                //     content : "&nbsp;&nbsp;" + '상호명 : ' + info_name + '<br>' + "&nbsp;&nbsp;" + '평수 : ' + info_py + '평'
                // });
                
                // kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
                // kakao.maps.event.addListener(marker, 'mouseout', makeOutListner(infowindow));

                if(this.positions[i].status == 'S') {
                    SMarkers.push(marker)
                }
                else if(this.positions[i].status == 'D') {
                    DMarkers.push(marker)
                }
                else {
                    CMarkers.push(marker)
                }
            }

            

            // 커피숍 마커들의 지도 표시 여부를 설정하는 함수입니다
            function setCoffeeMarkers(map) {        
                for (var i = 0; i < SMarkers.length; i++) {  
                    SMarkers[i].setMap(map);
                }        
            }
            function setStoreMarkers(map) {        
                for (var i = 0; i < DMarkers.length; i++) {  
                    DMarkers[i].setMap(map);
                }        
            }
            function setCarparkMarkers(map) {        
                for (var i = 0; i < CMarkers.length; i++) {  
                    CMarkers[i].setMap(map);
                }        
            }
            // 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
            function changeMarker(type){
                
                var coffeeMenu = document.getElementById('coffeeMenu');
                var storeMenu = document.getElementById('storeMenu');
                var carparkMenu = document.getElementById('carparkMenu');
                
                // 커피숍 카테고리가 클릭됐을 때
                if (type === 'coffee') {
                
                    // 커피숍 카테고리를 선택된 스타일로 변경하고
                    coffeeMenu.className = 'menu_selected';
                    
                    // 편의점과 주차장 카테고리는 선택되지 않은 스타일로 바꿉니다
                    storeMenu.className = '';
                    carparkMenu.className = '';
                    
                    // 커피숍 마커들만 지도에 표시하도록 설정합니다
                    setCoffeeMarkers(map);
                    setStoreMarkers(null);
                    setCarparkMarkers(null);
                    
                } else if (type === 'store') { // 편의점 카테고리가 클릭됐을 때
                
                    // 편의점 카테고리를 선택된 스타일로 변경하고
                    coffeeMenu.className = '';
                    storeMenu.className = 'menu_selected';
                    carparkMenu.className = '';
                    
                    // 편의점 마커들만 지도에 표시하도록 설정합니다
                    setCoffeeMarkers(null);
                    setStoreMarkers(map);
                    setCarparkMarkers(null);
                    
                } else if (type === 'carpark') { // 주차장 카테고리가 클릭됐을 때
                
                    // 주차장 카테고리를 선택된 스타일로 변경하고
                    coffeeMenu.className = '';
                    storeMenu.className = '';
                    carparkMenu.className = 'menu_selected';
                    
                    // 주차장 마커들만 지도에 표시하도록 설정합니다
                    setCoffeeMarkers(null);
                    setStoreMarkers(null);
                    setCarparkMarkers(map);  
                }    
            }
            function makeOverListener(map, marker, infowindow) {
                return function() {
                    infowindow.open(map, marker);
                };
            }
            function makeOutListner(infowindow) {
                return function() {
                    infowindow.close();
                };
            }
            
        }
    };
</script>