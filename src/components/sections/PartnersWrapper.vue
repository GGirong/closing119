<template>
    <div class="partners-section">
        <WrapperHeader /> 
        <div class="main-section">
            <div class="map-section">
                <div class="map-wrapper" id="dmap">
                    <div id="map" style="width:100%; height:100%"></div>
                </div>
                <div class="list-wrapper">
                    <div class="list-title">
                        지역 맞춤 견적 요청서보기
                    </div>
                    <div class="list-filter">
                        지역
                        <select v-model="sectorselec" style="margin-left:5px; padding-left:10px; width: 130px; ">
                            <option>서울/경기/인천</option>
                            <option>강원도</option>
                            <option>충청도</option>
                            <option>전라도</option>
                            <option>경상도</option>
                        </select>
                        <select v-model="alignselect" style="margin-left:15px; width: 100px; padding-left:10px">
                            <option value="">최신순</option>
                            <option>마감일자순</option>
                        </select>
                    </div>
                    <div class="clientlist-wrapper">
                        <div class="clientlist-container" v-for="client in clientList.slice().reverse()" :key="client.id">
                            <MapListItem 
                            :source="client"
                            @setClientData="setClientData"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from '../Breadcrumb'
    import WrapperHeader from '../WrapperHeader'
    import VirtualList from 'vue-virtual-scroll-list'
    import MapListItem from '../MapListItem'

    import axios from 'axios'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            Breadcrumb,
            WrapperHeader,
            MapListItem
        },
        name: 'dmap',
        data() {
            return {
                itemComponent: MapListItem,
                positions: [],
                modal: false,
                id: null,
                mapList: {
                    chungcheong: [],
                    gangwon: [],
                    gyeongsang: [],
                    jeolla: [],
                    seoul: []
                },
                sector: {
                    chungcheong: false,
                    gangwon: false,
                    gyeongsang: false,
                    jeolla: false,
                    seoul: false
                },
                clientList: [],
                sectorselec: '',
                alignselect: ''
            }
        },
        methods: {
            setClientData(data) {
                console.log("확인")
                this.$emit('setClientData', data)
            }
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

.list-title {
    border-bottom: 1px solid rgba(225,225,225,1.00);
    height: 45px;
    padding-top: 4px;
    padding-left: 20px;
    font-size: 18px;
}
.list-filter {
    padding-top: 8px;
    padding-left: 20px;
    height: 45px;
    border-bottom: 1px solid #777;
}
.clientlist-wrapper {
    height: 70vh;
    overflow: scroll;
}
.clientlist-container {
    height: 200px;
    
}
</style>