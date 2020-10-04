<template>
    <!--====================  header area ====================-->
    <div class="header-area">
        <div class="header-area__desktop header-area__desktop--default">

            <!--=======  header top bar  =======-->
            <!--=======  End of header top bar  =======-->

            <!--=======  header info area  =======-->
            <div class="header-info-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="header-info-wrapper align-items-center">
                                <!-- logo -->
                                <div style="margin: 0 auto">
                                    <router-link to="/partners">
                                        <img src="../../public/assets/img/logo/closing_logo.png" class="img-fluid" alt="Brand Logo" width="75px">
                                    파트너스 페이지
                                    </router-link>
                                </div>

                                <!-- mobile menu -->
                                <div class="mobile-navigation-icon" id="mobile-menu-trigger" @click="mobiletoggleClass('addClass', 'active')">
                                    <i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--=======  End of header info area =======-->
            
            <!--=======  header navigation area  =======-->
            <fixed-header>
                <div class="header-navigation-area default-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <!-- header navigation -->
                                <div class="header-navigation header-navigation--header-default position-relative">
                                    <div class="header-navigation__nav position-static">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <router-link to="/partners">견적 요청서 확인</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/estimating" >진행중인 견적 확인</router-link>
                                                </li>

                                                <li>
                                                    <router-link to="/done">완료된 견적 확인</router-link>
                                                </li>

                                                <li>
                                                    <router-link to="/profile">프로필 수정</router-link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fixed-header>
            <!--=======  End of header navigation area =======-->
        </div>
    </div>
    <!--====================  End of header area  ====================-->
</template>

<script>
    import FixedHeader from 'vue-fixed-header'
    export default {
        props: ['id'],
        components: {
            FixedHeader
        },
        methods: {
            // offcanvas mobilemenu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>

<style lang="scss">
    .vue-fixed-header--isFixed {
        left: 0;
        top: 0;
        width: 100vw;
        z-index: 999;
        position: fixed;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
        animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running fadeInDown;
    }
</style>