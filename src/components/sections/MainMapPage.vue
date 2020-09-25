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
                positions: []
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

            var container = document.getElementById('mainmap');
            var mapOptions = {
                center: new daum.maps.LatLng(37.6526164, 127.0366073),
                level: 4 //지도의 레벨(확대, 축소 정도)
            };
            var map = new daum.maps.Map(container, mapOptions);

            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

            

            await axios.get('http://tmdgud1112.pythonanywhere.com/api/mainmap/').then(res=>{
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
                var marker = new kakao.maps.Marker({
                    title: this.positions[i].title,
                    position: new kakao.maps.LatLng(this.positions[i].lat, this.positions[i].lng)
                })

                var info_name
                var info_address
                var info_py

                await axios.get('http://tmdgud1112.pythonanywhere.com/api/clientimage/', {params: {client: this.positions[i].title}}).then(res=>{
                    info_name = res.data.results.client.business_name
                    info_address = res.data.results.client.address
                    info_py = res.data.results.client.py
                })
                // 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content : "&nbsp;&nbsp;" + '상호명 : ' + info_name + '<br>' + "&nbsp;&nbsp;" + '평수 : ' + info_py + '평'
                });

                kakao.maps.event.addListener(marker, 'click', clickMarker(marker, this))
                kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
                kakao.maps.event.addListener(marker, 'mouseout', makeOutListner(infowindow));
            }
            var coffeePositions = [ 
                new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),];

            // 편의점 마커가 표시될 좌표 배열입니다
            var storePositions = [
                new kakao.maps.LatLng(37.497535461505684, 127.02948149502778),
                new kakao.maps.LatLng(37.49671536281186, 127.03020491448352),
                new kakao.maps.LatLng(37.496201943633714, 127.02959405469642),
                new kakao.maps.LatLng(37.49640072567703, 127.02726459882308),
                new kakao.maps.LatLng(37.49640098874988, 127.02609983175294),
                new kakao.maps.LatLng(37.49932849491523, 127.02935780247945),
                new kakao.maps.LatLng(37.49996818951873, 127.02943721562295)
            ];

            // 주차장 마커가 표시될 좌표 배열입니다
            var carparkPositions = [
                new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
                new kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
                new kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
                new kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
                new kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
                new kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
                new kakao.maps.LatLng(37.497680616783086, 127.02518427952202)                       
            ];   
            var markerImageSrc = '../../../public/assets/img/marker_set.png';  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
                coffeeMarkers = [], // 커피숍 마커 객체를 가지고 있을 배열입니다
                storeMarkers = [], // 편의점 마커 객체를 가지고 있을 배열입니다
                carparkMarkers = []; // 주차장 마커 객체를 가지고 있을 배열입니다

                
            createCoffeeMarkers(); // 커피숍 마커를 생성하고 커피숍 마커 배열에 추가합니다
            createStoreMarkers(); // 편의점 마커를 생성하고 편의점 마커 배열에 추가합니다
            createCarparkMarkers(); // 주차장 마커를 생성하고 주차장 마커 배열에 추가합니다

            changeMarker('coffee'); // 지도에 커피숍 마커가 보이도록 설정합니다    


            // 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
            function createMarkerImage(src, size, options) {
                var markerImage = new kakao.maps.MarkerImage(src, size, options);
                return markerImage;            
            }

            // 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
            function createMarker(position, image) {
                var marker = new kakao.maps.Marker({
                    position: position,
                    image: image
                });
                
                return marker;  
            }   
            
            // 커피숍 마커를 생성하고 커피숍 마커 배열에 추가하는 함수입니다
            function createCoffeeMarkers() {
                
                for (var i = 0; i < coffeePositions.length; i++) {  
                    
                    var imageSize = new kakao.maps.Size(22, 26),
                        imageOptions = {  
                            spriteOrigin: new kakao.maps.Point(10, 0),    
                            spriteSize: new kakao.maps.Size(36, 98)  
                        };     
                    
                    // 마커이미지와 마커를 생성합니다
                    var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
                        marker = createMarker(coffeePositions[i], markerImage);  
                    
                    // 생성된 마커를 커피숍 마커 배열에 추가합니다
                    coffeeMarkers.push(marker);
                }     
            }

            // 커피숍 마커들의 지도 표시 여부를 설정하는 함수입니다
            function setCoffeeMarkers(map) {        
                for (var i = 0; i < coffeeMarkers.length; i++) {  
                    coffeeMarkers[i].setMap(map);
                }        
            }

            // 편의점 마커를 생성하고 편의점 마커 배열에 추가하는 함수입니다
            function createStoreMarkers() {
                for (var i = 0; i < storePositions.length; i++) {
                    
                    var imageSize = new kakao.maps.Size(22, 26),
                        imageOptions = {   
                            spriteOrigin: new kakao.maps.Point(10, 36),    
                            spriteSize: new kakao.maps.Size(36, 98)  
                        };       
                
                    // 마커이미지와 마커를 생성합니다
                    var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
                        marker = createMarker(storePositions[i], markerImage);  

                    // 생성된 마커를 편의점 마커 배열에 추가합니다
                    storeMarkers.push(marker);    
                }        
            }

            // 편의점 마커들의 지도 표시 여부를 설정하는 함수입니다
            function setStoreMarkers(map) {        
                for (var i = 0; i < storeMarkers.length; i++) {  
                    storeMarkers[i].setMap(map);
                }        
            }

            // 주차장 마커를 생성하고 주차장 마커 배열에 추가하는 함수입니다
            function createCarparkMarkers() {
                for (var i = 0; i < carparkPositions.length; i++) {
                    
                    var imageSize = new kakao.maps.Size(22, 26),
                        imageOptions = {   
                            spriteOrigin: new kakao.maps.Point(10, 72),    
                            spriteSize: new kakao.maps.Size(36, 98)  
                        };       
                
                    // 마커이미지와 마커를 생성합니다
                    var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
                        marker = createMarker(carparkPositions[i], markerImage);  

                    // 생성된 마커를 주차장 마커 배열에 추가합니다
                    carparkMarkers.push(marker);        
                }                
            }

            // 주차장 마커들의 지도 표시 여부를 설정하는 함수입니다
            function setCarparkMarkers(map) {        
                for (var i = 0; i < carparkMarkers.length; i++) {  
                    carparkMarkers[i].setMap(map);
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
            function clickMarker(marker, me) {
                return function() {
                    var id = marker.getTitle()
                    axios.get('http://tmdgud1112.pythonanywhere.com/api/clientimage/', {params: {client: id}}).then(res=>{
                        let clientData = res.data.results.client
                        let images = []
                        for( var i in res.data.results.client_image) {
                            images[i] = res.data.results.client_image[i]
                        }
                        clientData.images = images
                        console.log(clientData.images)
                        me.$emit('setClientData', clientData)
                    })
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
            await axios.get('http://tmdgud1112.pythonanywhere.com/api/partnermaplist/', {params: {partner: this.getPartner}}).then(res=>{
                if(res.data.results.chungcheong.length > 0) {
                    this.mapList.chungcheong.push(res.data.results.chungcheong)
                    this.sector.chungcheong = true
                }
                if(res.data.results.gangwon.length > 0) {
                    this.mapList.gangwon.push(res.data.results.gangwon)
                    this.sector.gangwon = true
                }
                if(res.data.results.gyeongsang.length > 0) {
                    this.mapList.gyeongsang.push(res.data.results.gyeongsang)
                    this.sector.gyeongsang = true
                }
                if(res.data.results.jeolla.length > 0) {
                    this.mapList.jeolla.push(res.data.results.jeolla)
                    this.sector.jeolla = true
                }
                if(res.data.results.seoul.length > 0) {
                    this.mapList.seoul.push(res.data.results.seoul)
                    this.sector.seoul = true
                }
            })
            console.log(this.mapList)
            for ( var i in this.mapList.seoul[0]) {
                await axios.get('http://tmdgud1112.pythonanywhere.com/api/clientimage/', {params: {client: this.mapList.seoul[0][i].id}}).then(res=>{
                    this.clientList.push(res.data.results.client)
                    let images = []
                    for( var j in res.data.results.client_image) {
                        images[j] = res.data.results.client_image[j]
                    }
                    this.clientList[i].images = images
                })
            }
            
        }
    };
</script>