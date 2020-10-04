<template>
    <!--====================  footer area ====================-->
    <div class="footer-area dark-bg">
        <div class="container" style="width:1100px">
            <div class="row">
                <div class="col-lg-8" style="padding: 30px">
                    <div style="font-size: 16px; font-weight: 300; color: #fff">
                        이용약관 | 개인정보취급방침 | <router-link to="/partners">파트너스·제휴 신청</router-link>
                    </div>
                    <div style="margin-top: 35px;color: #fff; font-size: 14px; opacity: 0.5;">
                        상호명:주)동행365&nbsp;&nbsp;&nbsp;&nbsp;사업자등록번호:855-87-00885&nbsp;&nbsp;&nbsp;&nbsp;통신판매업 신고:제2019-서울서초-0203호<br>
                        주소:서울특별시 서초구 양재천로 93 정원빌딩 5F <br>
                        대표자: 고경수&nbsp;&nbsp;&nbsp;&nbsp;정보보호책임자: 이근표
                    </div>
                    <div style="font-size: 14px; font-weight: 300;color: #fff; opacity: 0.3; margin-top:10px">
                        COPYRIGHT (C) 2019 CLOSING119. ALLRIGHT RESERVED
                    </div>
                </div>
                <div class="col-lg-4" style="text-align: right; margin-top:50px">
                    <img src="../../public/assets/img/share_facebook.png" style="margin-right: 10px"/>
                    <img src="../../public/assets/img/share_blog.png" />
                    <div style="opacity: 0.7; color:#fff; font-size: 35px;">
                        1800.7886
                    </div>
                    <div style="color: #fff; font-size: 14px; opacity: 0.5;">
                        고객센터: 월~금 09:00~18:00 / 공휴일, 일요일 휴무 <br>
                        팩스: 02-3461-7886 이메일: jae037@with365.co.kr
                    </div>
                </div>
            </div> 
        </div>
    </div>
    <!--====================  End of footer area  ====================-->
</template>

<script>
    import FooterAbout from '@/components/FooterAbout.vue';
    import FooterLink from '@/components/FooterLink.vue';
    import ContactWidget from '@/components/ContactWidget.vue';

    import data from '../data/footer.json'
    export default {
        components: {
            FooterAbout,
            FooterLink,
            ContactWidget
        },
        data () {
            return {
                data
            }
        }
    };
</script>

<style lang="scss">

</style>