<template>
    <div class="partners-section">
        <WrapperHeader /> 
        <div class="main-section">
            <div class="map-section">
                <div class="map-wrapper" id="dmap">
                    <div id="map" style="width:100%; height:100%"></div>
                </div>
                <div class="list-wrapper">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from '../Breadcrumb'
    import WrapperHeader from '../WrapperHeader'

    import axios from 'axios'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            Breadcrumb,
            WrapperHeader
        },
        name: 'dmap',
        data() {
            return {
                positions: [],
                modal: false,
                id: null,
            }
        },
        methods: {

        },
        computed: mapGetters([
            'getPartner',
            'getPartnerLogin',
        ]),
        async mounted() {
            var container = document.getElementById('map');
            var mapOptions = {
                center: new daum.maps.LatLng(37.6526164, 127.0366073),
                level: 4 //지도의 레벨(확대, 축소 정도)
            };
            var map = new daum.maps.Map(container, mapOptions);

            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

            

            await axios.get('http://tmdgud1112.pythonanywhere.com/api/partnermap/', {params: {partner: this.getPartner}}).then(res=>{
                console.log(res)
                for(var i in res.data){
                    this.positions[i] = {}
                    this.positions[i].lat = res.data[i].lat
                    this.positions[i].lng = res.data[i].lng
                    //this.positions[i].title = res.data[i].verify_code
                    this.positions[i].title = res.data[i].id
                }
            })

            
            for(var i in this.positions) {
                var marker = new kakao.maps.Marker({
                    map: map,
                    title: this.positions[i].title,
                    position: new kakao.maps.LatLng(this.positions[i].lat, this.positions[i].lng)
                })

                var info_name
                var info_address
                var info_py

                await axios.get('http://tmdgud1112.pythonanywhere.com/api/clientimage/', {params: {client: this.positions[i].title}}).then(res=>{
                    console.log(res)
                    info_name = res.data.results.client.business_name
                    info_address = res.data.results.client.address
                    info_py = res.data.results.client.py
                })
                // 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content : "&nbsp;&nbsp;" + '상호명 : ' + info_name + '<br>' + "&nbsp;&nbsp;" + '평수 : ' + info_py + '평'
                });

                kakao.maps.event.addListener(marker, 'click', clickMarker(marker, this))
                kakao.maps.event.addListener(marker, 'mouseover', function() {
                // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                    infowindow.open(map, marker);
                });

                // 마커에 마우스아웃 이벤트를 등록합니다
                kakao.maps.event.addListener(marker, 'mouseout', function() {
                    // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                    infowindow.close();
                });
            }
            function clickMarker(marker, me) {
                return function() {
                    this.id = marker.getTitle()
                    axios.get('http://tmdgud1112.pythonanywhere.com/api/clientimage/', {params: {client: this.id}}).then(res=>{
                        console.log(res)
                        let clientData = res.data.results.client
                        let images = []
                        for( var i in res.data.results.client_image) {
                            images[i] = res.data.results.client_image[i]
                        }
                        console.log(images)
                        clientData.images = images
                        console.log(clientData.images)
                        me.$emit('setClientData', clientData)
                    })
                }
            }
        },
    };
</script>

<style>
.partners-section {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    height: 100%;
}
.main-section {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    min-width: 1200px;
}
.map-section {
    flex: 1 1 0%;
    display: flex;
}
.list-wrapper {
    flex: 0 0 400px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
}
.map-wrapper {
    flex: 1 1 0%;
    background-color: rgb(241, 241, 241);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-right: 1px solid rgb(225, 225, 225);
}
</style>