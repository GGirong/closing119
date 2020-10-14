<template>
  <div class="partners-section">
    <WrapperHeader :screen="'partners'" />
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
            <select
              v-model="area"
              style="margin-left:5px; padding-left:10px; width: 130px; "
              @change="rearrList()"
            >
              <option value="all">모두 보기</option>
              <option v-if="sector.seoul" value="seoul">서울/경기/인천</option>
              <option v-if="sector.gangwon" value="gangwon">강원도</option>
              <option v-if="sector.chungcheong" value="chungcheong"
                >충청도</option
              >
              <option v-if="sector.jeolla" value="jeolla">전라도</option>
              <option v-if="sector.gyeongsang" value="gyeongsang"
                >경상도</option
              >
            </select>
            <select
              v-model="order_filter"
              style="margin-left:15px; width: 100px; padding-left:10px"
              @change="rearrList()"
            >
              <option value="created">최신순</option>
              <option value="expire">마감일자순</option>
            </select>
          </div>
          <div class="clientlist-wrapper" v-if="!loading">
            <div
              class="clientlist-container"
              v-for="client in clientList.slice().reverse()"
              :key="client.id"
            >
              <MapListItem :source="client" @setClientData="setClientData" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <loading :active.sync="loading" :is-full-page="fullPage"></loading>
  </div>
</template>

<script>
import Breadcrumb from "../Breadcrumb";
import WrapperHeader from "../WrapperHeader";
import MapListItem from "../MapListItem";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import axios from "axios";
import { mapGetters } from "vuex";

export default {
  components: {
    Breadcrumb,
    WrapperHeader,
    MapListItem,
    Loading,
  },
  name: "dmap",
  data() {
    return {
      itemComponent: MapListItem,
      positions: [],
      modal: false,
      id: null,
      service_area: [],
      sector: {
        chungcheong: false,
        gangwon: false,
        gyeongsang: false,
        jeolla: false,
        seoul: false,
      },
      clientList: [],
      sectorselec: "",
      alignselect: "",
      order_filter: "created",
      area: "all",
      loading: true,
      fullPage: true,
    };
  },
  methods: {
    setClientData(data) {
      this.$emit("setClientData", data);
    },
    async setClient(data, i) {
      await axios
        .get("https://new-api.closing119.com/api/clientimage/", {
          params: { client: data[i].id },
        })
        .then((res) => {
          this.clientList.unshift(res.data.results.client);
          let images = [];
          for (var j in res.data.results.client_image) {
            images[j] = res.data.results.client_image[j];
          }
          this.clientList[0].images = images;
        });
      if (data.length - 1 == i) {
        this.loading = false;
      }
    },
    async rearrList() {
      this.loading = true;
      this.clientList = [];
      console.log(this.area);
      var data;
      await axios
        .get("https://new-api.closing119.com/api/partnermaplist/", {
          params: {
            partner: this.getPartner,
            order_filter: this.order_filter,
            area: this.area,
          },
        })
        .then((res) => {
          data = res.data.results;
        });
      for (var i in data) {
        this.setClient(data, i);
      }
    },
  },
  computed: mapGetters(["getPartner", "getPartnerLogin"]),
  async mounted() {
    var container = document.getElementById("map");
    var mapOptions = {
      center: new daum.maps.LatLng(37.6526164, 127.0366073),
      level: 10, //지도의 레벨(확대, 축소 정도)
    };
    var map = new daum.maps.Map(container, mapOptions);

    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        var locPosition = new kakao.maps.LatLng(lat, lon);

        displayMarker(locPosition);
      });
    } else {
      var lat = 37.6526164, // 위도
        lon = 127.0366073; // 경도

      var locPosition = new kakao.maps.LatLng(lat, lon);

      displayMarker(locPosition);
    }

    function displayMarker(locPosition) {
      map.setCenter(locPosition);
    }

    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

    await axios
      .get("https://new-api.closing119.com/api/partnermap/", {
        params: { partner: this.getPartner },
      })
      .then((res) => {
        for (var i in res.data) {
          this.positions[i] = {};
          this.positions[i].lat = res.data[i].lat;
          this.positions[i].lng = res.data[i].lng;
          //this.positions[i].title = res.data[i].verify_code
          this.positions[i].title = res.data[i].id;
        }
      });

    for (var i in this.positions) {
      var marker = new kakao.maps.Marker({
        map: map,
        title: this.positions[i].title,
        position: new kakao.maps.LatLng(
          this.positions[i].lat,
          this.positions[i].lng
        ),
      });

      var info_name;
      var info_address;
      var info_py;

      await axios
        .get("https://new-api.closing119.com/api/clientimage/", {
          params: { client: this.positions[i].title },
        })
        .then((res) => {
          info_name = res.data.results.client.business_name;
          info_address = res.data.results.client.address;
          info_py = res.data.results.client.py;
        });
      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content:
          "&nbsp;&nbsp;" +
          "상호명 : " +
          info_name +
          "<br>" +
          "&nbsp;&nbsp;" +
          "평수 : " +
          info_py +
          "평",
      });

      kakao.maps.event.addListener(marker, "click", clickMarker(marker, this));
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListner(infowindow)
      );
    }
    function clickMarker(marker, me) {
      return function() {
        var id = marker.getTitle();
        axios
          .get("https://new-api.closing119.com/api/clientimage/", {
            params: { client: id },
          })
          .then((res) => {
            let clientData = res.data.results.client;
            let images = [];
            for (var i in res.data.results.client_image) {
              images[i] = res.data.results.client_image[i];
            }
            clientData.images = images;
            me.$emit("setClientData", clientData);
          });
      };
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
    await axios
      .get("https://new-api.closing119.com/api/partner/" + this.getPartner)
      .then((res) => {
        this.service_area = res.data.service_area;
      });
    for (var i in this.service_area) {
      if (this.service_area[i] == "chungcheong") {
        this.sector.chungcheong = true;
      }
      if (this.service_area[i] == "gangwon") {
        this.sector.gangwon = true;
      }
      if (this.service_area[i] == "gyeongsang") {
        this.sector.gyeongsang = true;
      }
      if (this.service_area[i] == "jeolla") {
        this.sector.jeolla = true;
      }
      if (this.service_area[i] == "seoul") {
        this.sector.seoul = true;
      }
    }
    var data;
    await axios
      .get("https://new-api.closing119.com/api/partnermaplist/", {
        params: {
          partner: this.getPartner,
          order_filter: this.order_filter,
          area: this.area,
        },
      })
      .then((res) => {
        data = res.data.results;
      });
    for (var i in data) {
      this.setClient(data, i);
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
  border-bottom: 1px solid rgba(225, 225, 225, 1);
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
  height: calc(100vh - 205px);
  overflow: scroll;
}
.clientlist-container {
  height: 200px;
  cursor: pointer;
}

@media (max-width: 1141px) {
  .main-section {
    min-width: 0px;
  }
  .map-section {
    display: block;
  }
  .map-wrapper {
    display: none;
  }
  .list-wrapper {
    width: 100%;
  }
}
</style>
