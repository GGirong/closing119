<template>
    <div class="page-wrapper section-space--inner--60">
        <!--Contact section start-->
        <div class="conact-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-12">
                        <div class="contact-form">
                            <div style="height: 25px;"></div>
                            <h4>업체 정보</h4>
                            <div style="height: 20px;"></div>
                                <div class="row row-10">
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        업체명
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input class="form-control" name="con_name" type="text" placeholder="" v-model="partnersData.partner_name">
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        대표자명
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input class="form-control" name="con_name" type="text" placeholder="" v-model="partnersData.ceo">
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        신청인 이름
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input class="form-control" name="con_name" type="text" placeholder="" v-model="partnersData.applicant">
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        연락처 (숫자만 입력)
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input class="form-control" name="up2" type="text" placeholder="" v-model="partnersData.phone_num">
                                        <div v-if="numeric()" class="password-validation">연락처는 숫자로만 이루어져야 합니다.</div>
                                        <div v-if="!numeric() && length()" class="password-validation">연락처는 11자리 숫자로 이루어져야 합니다.</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        이메일
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input class="form-control" name="up2" type="email" placeholder=" " v-model.lazy="partnersData.email">
                                        <div v-if="this.email && !this.validEmail(this.email)" class="password-validation">올바른 이메일 양식이 아닙니다.</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space">
                                        서비스 가능 지역
                                    </div>
                                    <div class="col-md-3 col-12  section-space" style="padding-top:15px">
                                        <input style="width: auto; height: auto" type="checkbox" id="checkbox" v-model="checked_1">
                                        <label for="checkbox" style="margin-left: 15px">서울/경기/인천</label>
                                    </div>
                                    <div class="col-md-2 col-12  section-space" style="padding-top:15px">
                                        <input style="width: auto; height: auto" type="checkbox" id="checkbox" v-model="checked_2">
                                        <label for="checkbox" style="margin-left: 15px">강원도</label>
                                    </div>
                                    <div class="col-md-2 col-12  section-space" style="padding-top:15px">
                                        <input style="width: auto; height: auto" type="checkbox" id="checkbox" v-model="checked_3">
                                        <label for="checkbox" style="margin-left: 15px">충청도</label>
                                    </div>
                                    <div class="input-title col-md-4 col-12  section-space">
                                        
                                    </div>
                                    <div class="col-md-2 col-12  section-space--bottom--20" style="padding-top:15px">
                                        <input style="width: auto; height: auto" type="checkbox" id="checkbox" v-model="checked_4">
                                        <label for="checkbox" style="margin-left: 15px">경상도</label>
                                    </div>
                                    <div class="col-md-2 col-12  section-space--bottom--20" style="padding-top:15px">
                                        <input style="width: auto; height: auto" type="checkbox" id="checkbox" v-model="checked_5">
                                        <label for="checkbox" style="margin-left: 15px">전라도</label>
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        주소
                                    </div>
                                    <div class="col-md-3 col-12  section-space--bottom--20">
                                        <input class="form-control" name="up" type="text" placeholder="" :value="partnersData.address" readonly @click="openModal">
                                    </div>
                                    <div class="col-md-2 col-12  section-space--bottom--20">
                                        <button style="margin-top:0px;" @click="openModal">찾기</button>
                                    </div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        상세 주소
                                    </div>
                                    <div class="col-md-5 col-12  section-space--bottom--20">
                                        <input name="up" type="text" placeholder="" v-model="partnersData.detail_address">
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        업체 설명
                                    </div>
                                    <div class="col-md-6 col-12  section-space--bottom--20">
                                        <textarea class="form-control" aria-label="With textarea" v-model="partnersData.partner_info"></textarea>
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        사업자등록증
                                    </div>
                                    <div class="col-md-6 col-12  section-space--bottom--20" v-if="registration_image_url != null">
                                        <img
                                        :src="'http://tmdgud1112.pythonanywhere.com' + registration_image_url"
                                        style="width: 150px; height: 150px"
                                        alt="사업자등록증"
                                        />
                                    </div>
                                    <div class="input-title col-md-4 col-12" v-if="registration_image_url != null"></div>
                                    <div class="col-md-6 col-12  section-space--bottom--20">
                                        <input type="file" class="form-control-file" style="padding-top:10px" id="reg_image" ref="reg_image" v-on:change="handleRFileUpload()">
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        업체 프로필 사진
                                    </div>
                                    <div class="col-md-6 col-12  section-space--bottom--20" v-if="profile_image_url != null">
                                        <img
                                        :src="'http://tmdgud1112.pythonanywhere.com' + profile_image_url"
                                        style="width: 150px; height: 150px"
                                        alt="프로필사진"
                                        />
                                    </div>
                                    <div class="input-title col-md-4 col-12" v-if="profile_image_url != null"></div>
                                    <div class="col-md-6 col-12  section-space--bottom--20">
                                        <input type="file" class="form-control-file" id="pro_image" style="padding-top:10px" ref="pro_image" v-on:change="handlePFileUpload()">
                                    </div>
                                    <div class="line"></div>
                                </div>
                                <div style="height: 25px;"></div>
                                <h4>로그인 정보</h4>
                                <h5>정보를 변경하기 위해 비밀번호를 입력해주세요.</h5> 
                                <div style="height: 20px;"></div>
                                    <div class="row row-10">
                                        <div class="line"></div>
                                        <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                            아이디
                                        </div>
                                        <div class="col-md-3 col-12  section-space--bottom--20">
                                            <input class="form-control" name="up" type="text" readonly placeholder="" v-model="partnersData.username">
                                        </div>
                                        <div class="line"></div>
                                        <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                            비밀번호
                                        </div>
                                        <div class="col-md-3 col-12  section-space--bottom--20">
                                            <input class="form-control" name="con_name" type="password" placeholder="" v-model="partnersData.password">
                                        </div>
                                        <div class="col-md-3 col-12  section-space--bottom--20">
                                            <button style="margin-top:0px;" @click="passwordChange">비밀번호 변경</button>
                                        </div>
                                        <div class="line"></div>
                                    </div>
                                
                            <p class="form-message"></p>
                    
                            <div style="margin:0 auto; text-align: center">
                                <button class="hero-slider__btn" style="width:350px; height:60px; font-size:21px; font-weight: 400"
                                @click="checkPassword"
                                >업체 정보 변경하기</button>
                            </div>
                            <MyModal 
                                @close="closeModal"
                                @confirm="confirmModal"
                                v-if="modal"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!--Contact section end-->
    </div>
</template>

<script>
    import MyModal from '../MyModal'
    import Multiselect from 'vue-multiselect'

    import axios from "axios";
    import { mapGetters } from 'vuex'

    export default {
        components: {
            MyModal,
            Multiselect
        },
        data () {
            return {
                password : "",
                passwordCheck: "",
                email: "",
                partnersData: {
                    "phone_num": "",
                    "address": null,
                    "detail_address": null,
                    "username": null,
                    "password": null,
                    "partner_name": null,
                    "ceo": null,
                    "applicant": null,
                    "email": null,
                    "partner_info": null,
                    "service_area_array" : [],
                },
                modal: false,
                privacy: "",
                idConfirmed: false,
                options: [
                    {
                        value: 'seoul',
                        name: '서울/경기/인천'
                    },
                    {
                        value: 'gangwon',
                        name: '강원도'
                    },
                    {
                        value: 'chungcheong',
                        name: '충청도'
                    },
                    {
                        value: 'gyeongsang',
                        name: '경상도'
                    },
                    {
                        value: 'jeolla',
                        name: '전라도'
                    },
                    
                ],
                checked_1: false,
                checked_2: false,
                checked_3: false,
                checked_4: false,
                checked_5: false,
                profile_image: null,
                registration_image: null,
                partnerPk: null,
                profile_check: false,
                registration_check: false,
                profile_image_url: '',
                registration_image_url: '',
            }
        },
        computed: mapGetters([
            'getPartner',
            'getPartnerLogin',
        ]),
        methods: {
            handlePFileUpload() {
                this.profile_image = this.$refs.pro_image.files[0]
                this.profile_check = true
            },
            handleRFileUpload() {
                this.registration_image = this.$refs.reg_image.files[0]
                this.registration_check = true
            },
            passwordChange() {
                this.$router.push({name: 'PwChange', params:{username: this.partnersData.username, find: false}})
            },
            async checkPassword() {
                var loginData = {}
                loginData.username = this.partnersData.username
                loginData.password = this.partnersData.password
                await axios.post('http://tmdgud1112.pythonanywhere.com/api/login/', loginData).then(res => {
                    this.sendRegisterData()
                })
                .catch((err) => {
                    if(err.response.data.code=="WRONG_PASSWORD") {
                        alert("비밀번호가 틀렸습니다. 다시 한 번 확인해주세요.")
                    }
                })
            },
            async sendRegisterData() {
                if(this.checked_1) {
                    this.partnersData.service_area_array.push('seoul')
                }
                if(this.checked_2) {
                    this.partnersData.service_area_array.push('gangwon')
                }
                if(this.checked_3) {
                    this.partnersData.service_area_array.push('chungcheong')
                }
                if(this.checked_4) {
                    this.partnersData.service_area_array.push('gyeongsang')
                }
                if(this.checked_5) {
                    this.partnersData.service_area_array.push('jeolla')
                }
                
                console.log(this.partnersData)
                await axios.patch('http://tmdgud1112.pythonanywhere.com/api/partner/' + this.getPartner + '/', this.partnersData).then(res=>{
                    this.partnerPk = res.data.id
                });
                const bodyFormData = new FormData();
                
                if(this.profile_check) {
                    bodyFormData.append('profile_image', this.profile_image)
                }
                if(this.registration_check) {
                    bodyFormData.append('registration_image', this.registration_image)
                }
                bodyFormData.append('partner', this.partnerPk)


                await axios.patch('http://tmdgud1112.pythonanywhere.com/api/partnerimage/', bodyFormData,{ headers: { 'Content-Type': 'multipart/form-data' }}).then(res=>{
                    alert("프로필 변경이 완료되었습니다.")
                    this.$router.push('/partners')
                });
                
            },
            validEmail: function(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            numeric() {
                if(/\D/.test(this.partnersData.phone_num)) {
                    return true
                }
                else {
                    return false
                }
            },
            length() {
                if( this.partnersData.phone_num && this.partnersData.phone_num.length != 11) {
                    return true
                }
                else {
                    return false
                }
            },
            openModal() {
                this.modal = true
            },
            confirmModal(data) {
                this.partnersData.address = data.roadAddress
            },
            closeModal() {
                this.modal = false
            },
        },
        async mounted() {
            await axios.get('http://tmdgud1112.pythonanywhere.com/api/partner/' + this.getPartner + '/').then(res=>{
                console.log(res)
                this.partnersData = res.data
            })
            for( var i in this.partnersData.service_area) {
                if(this.partnersData.service_area[i] == 'seoul') {
                    this.checked_1 = true
                }
                if(this.partnersData.service_area[i] == 'gangwon') {
                    this.checked_2 = true
                }
                if(this.partnersData.service_area[i] == 'chungcheong') {
                    this.checked_3 = true
                }
                if(this.partnersData.service_area[i] == 'gyeongsang') {
                    this.checked_4 = true
                }
                if(this.partnersData.service_area[i] == 'jeolla') {
                    this.checked_5 = true
                }
            }
            delete this.partnersData.service_area
            this.partnersData.service_area_array = []

            await axios.get('http://tmdgud1112.pythonanywhere.com/api/partnerimage/', {params: {partner: this.getPartner}}).then(res=>{
                this.profile_image_url = res.data.results.profile_image
                this.registration_image_url = res.data.results.registration_image
            })
        }
    };
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>