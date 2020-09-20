<template>
    <div class="page-wrapper section-space--inner--60">
        <!--Contact section start-->
        <div class="conact-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-12">
                        <div class="contact-form">
                            <h4>업주정보</h4>
                            <h5>견적서 등록시에 연락처로 알림이 가게 됩니다. 차후 견적 요청서를 확인할 때 요구되는 정보입니다.</h5>
                                <div class="row row-10">
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        이름
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input class="form-control" name="con_name" type="text" placeholder="" v-model="reqData.client_name">
                                    </div>
                                    <div class="line"></div>
                                     <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                         연락처 (숫자만 입력)
                                     </div>
                                     <div class="col-md-4 col-12  section-space--bottom--20">
                                         <input class="form-control" name="con_name" type="text" placeholder="" v-model="reqData.phone_num">
                                        <div v-if="numeric()" class="password-validation">연락처는 숫자로만 이루어져야 합니다.</div>
                                        <div v-if="!numeric() && length()" class="password-validation">연락처는 11자리 숫자로 이루어져야 합니다.</div>
                                     </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        비밀번호
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input class="form-control" name="up" type="password" placeholder="" v-model="reqData.password">
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        비밀번호 확인
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20" style="position: relative">
                                        <input class="form-control" name="up2" type="password" placeholder="" v-model.lazy="passwordCheck">
                                        <div v-if="passwordCheck && reqData.password != passwordCheck" class="password-validation">비밀번호 확인이 일치하지 않습니다.</div>
                                    </div>
                                    <div class="line"></div>
                                </div>
                            <div style="height: 25px;"></div>
                            <h4>가게정보</h4>
                            <div style="height: 20px;"></div>
                                <div class="row row-10">
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        상호명
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input class="form-control" name="con_name" type="text" placeholder="" v-model="reqData.business_name">
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        업종
                                    </div>
                                    <div class="col-md-3 col-12  section-space--bottom--20">
                                        <input class="form-control" name="con_name" type="text" placeholder="직접 입력" v-model="reqData.sector">
                                    </div>
                                    <b-dropdown id="dropdown-1" text="선택해주세요" class="m-md-2" toggle-class="bdd-toggle" style="margin-top:0 !important">
                                        <b-dropdown-item v-for="option in options"
                                        :key="option.value"
                                        :value="option.value"
                                        @click="reqData.sector = option.value"
                                        >{{ option.text }}
                                        </b-dropdown-item>
                                        <b-dropdown-divider></b-dropdown-divider>
                                        <b-dropdown-item>직접 입력</b-dropdown-item>
                                    </b-dropdown>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        주소
                                    </div>
                                    <div class="col-md-3 col-12  section-space--bottom--20">
                                        <input class="form-control" name="up" type="text" readonly :value="reqData.address" @click="openModal">
                                    </div>
                                    <div class="col-md-2 col-12  section-space--bottom--20">
                                        <button style="margin-top:0px;" @click="openModal">찾기</button>
                                    </div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        상세 주소
                                    </div>
                                    <div class="col-md-5 col-12  section-space--bottom--20">
                                        <input name="up" type="text" placeholder="" v-model="reqData.detail_address">
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        평수
                                    </div>
                                    <div class="col-md-2 col-12  section-space--bottom--20">
                                        <input class="form-control" name="up2" type="number" placeholder="0" v-model="reqData.py">
                                    </div>
                                    <div class="input-title col-md-2 col-12  section-space--bottom--20" style="font-size:18px; padding-top: 9px;">
                                        평
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        현장 사진 (실내 1장, 외부 1장)
                                    </div>
                                    <div class="col-md-4 col-12  section-space--bottom--20">
                                        <input type="file" class="form-control-file" multiple id="files" ref="files" style="padding-top:10px" v-on:change="handleFilesUpload()">
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        견적 마감일
                                    </div>
                                    <div class="col-md-3 col-12  section-space--bottom--20">
                                        <vc-date-picker :min-date="minVal()" v-model="reqData.expire_date"/>
                                    </div>
                                    <div class="line"></div>
                                    <div class="input-title col-md-4 col-12  section-space--bottom--20">
                                        기타 요청사항
                                    </div>
                                    <div class="col-md-6 col-12  section-space--bottom--20">
                                        <textarea class="form-control" aria-label="With textarea" v-model="reqData.request"></textarea>
                                    </div>
                                    <div class="line"></div>
                                </div>
                            <p class="form-message"></p>
                            <div style="margin:0 auto; text-align: center">
                                <button type="button" class="hero-slider__btn" style="width:350px; height:60px; font-size:21px; font-weight: 400"
                                @click="sendRegisterData"
                                >견적 요청 보내기</button>
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
    import MyModal from '../components/MyModal'

    import axios from "axios";
    export default {
        components: {
            MyModal,
        },
        data () {
            return {
                passwordCheck: null,
                reqData: {
                    "client_name" : "",
                    "password" : "",
                    "phone_num" : "",
                    "business_name" : "",
                    "sector" : "",
                    "address" : "",
                    "detail_address": "",
                    "py" : "",
                    "request" : "",
                    "expire_date": ""
                },
                modal: false,
                message: '',
                numericTrue: false,
                files: '',
                options: [
                    {
                        value: '음식점 (식당/카페/호프/패스트푸드 등)',
                        text: '음식점 (식당/카페/호프/패스트푸드 등)'
                    },
                    {
                        value: '도소매 (편의점/문구사무/애견/화장품/기타잡화 등)',
                        text: '도소매 (편의점/문구사무/애견/화장품/기타잡화 등)'
                    },
                    {
                        value: '서비스업 (학원/미용/주유소/세탁/기타서비스업)',
                        text: '서비스업 (학원/미용/주유소/세탁/기타서비스업)'
                    },
                    {
                        value: '여가 오락(pc방/노래방/당구장/골프장/헬스/기타)',
                        text: '여가 오락(pc방/노래방/당구장/골프장/헬스/기타)'
                    },
                    {
                        value: '제조',
                        text: '제조'
                    },
                    
                ],
                images: null,
                clientPk: null,
                clientVC: null,
                today: new Date()
            }
        },
        methods: {
            minVal() {
                var result = new Date(this.today)
                result.setDate(result.getDate() + 4)
                return result
            },
            handleFilesUpload() {
                console.log(this.$refs.files.files)
                this.images = this.$refs.files.files
            },
            async sendRegisterData() {
                console.log(this.reqData)

                await axios.post(
                    'http://tmdgud1112.pythonanywhere.com/api/client/', this.reqData
                ).then(res=> {
                    console.log(res.data)
                    this.clientPk = res.data.id
                    this.clientVC = res.data.verify_code
                    
                }).catch(err=> {
                    alert("기존에 철거를 진행하셨던 연락처로는 견적 진행이 불가능합니다. 관리자에게 문의해주세요.")
                });

                const bodyFormData = new FormData();
                if(this.images != null) {
                    for( var i = 0; i < this.images.length; i++ ){
                        let file = this.images[i];

                        bodyFormData.append('client_image', file); 
                    }
                }
                bodyFormData.append('client', this.clientPk);

                await axios.post('http://tmdgud1112.pythonanywhere.com/api/clientimage/', bodyFormData, { headers: { 'Content-Type': 'multipart/form-data' }}).then(res=>{
                    alert("정상적으로 신청되었습니다. 견적서 등록시 연락처로 안내 될 예정입니다.")
                    this.$emit('register', this.clientVC)
                }).catch(err=>{
                    alert("정상적으로 신청되었습니다. 견적서 등록시 연락처로 안내 될 예정입니다.")
                    this.$emit('register', this.clientVC)
                })
                
            },
            openModal() {
                this.modal = true
            },
            confirmModal(data) {
                this.reqData.address = data.roadAddress
            },
            closeModal() {
                this.modal = false
            },
            numeric() {
                if(/\D/.test(this.reqData.phone_num)) {
                    return true
                }
                else {
                    return false
                }
            },
            length() {
                if( this.reqData.phone_num && this.reqData.phone_num.length != 11) {
                    return true
                }
                else {
                    return false
                }
            },
            pickSector(sector) {
                this.reqData.sector = sector
            }
        },
    };
</script>

<style>
.bdd-toggle {
    margin-top: 0 !important
}


</style>