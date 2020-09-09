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
                                <div class="logo">
                                    <router-link to="/">
                                        <img src="assets/img/logo/closing_logo.png" class="img-fluid" alt="Brand Logo" width="75px">
                                    </router-link>
                                </div>

                                <!-- header contact info -->
                                <div class="header-contact-info">
                                    <div class="header-info-single-item">
                                        <div class="header-info-single-item__content">
                                            <p class="header-info-single-item__subtitle">
                                                <a href="tel:989875596854">견적작성</a>
                                            </p>
                                        </div>
                                        <div class="header-info-single-item__content">
                                            <p class="header-info-single-item__subtitle">
                                                <a href="tel:989875596854">견적확인</a>
                                            </p>
                                        </div>
                                        <div class="header-info-single-item__content">
                                            <p class="header-info-single-item__subtitle">
                                                <a href="tel:989875596854">고객후기</a>
                                            </p>
                                        </div>
                                        <div class="header-info-single-item__content">
                                            <p class="header-info-single-item__subtitle">
                                                <a href="tel:989875596854">파트너스 신청</a>
                                            </p>
                                        </div>
                                    </div>
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
                                                <li class="has-children has-children--multilevel-submenu">
                                                    <router-link to="/">HOME</router-link>
                                                    <ul class="submenu">
                                                        <li>
                                                            <router-link to="/">Home One</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/home-two">Home Two</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/home-three">Home Three</router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <router-link to="/about">ABOUT</router-link>
                                                </li>

                                                <li class="has-children has-children--multilevel-submenu">
                                                    <router-link to="/service">SERVICE</router-link>
                                                    <ul class="submenu">
                                                        <li>
                                                            <router-link to="/service">Service</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/service-details">Service Details</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/service-details-right">Service Details Right Sidebar</router-link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li class="has-children has-children--multilevel-submenu">
                                                    <router-link to="/project">PROJECT</router-link>
                                                    <ul class="submenu">
                                                        <li>
                                                            <router-link to="/project">Project</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/project-details">Project Details</router-link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li class="has-children has-children--multilevel-submenu">
                                                    <router-link to="/blog-left-sidebar">BLOG</router-link>
                                                    <ul class="submenu">
                                                        <li>
                                                            <router-link to="/blog-left-sidebar">Blog Left Sidebar</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/blog-right-sidebar">Blog Right Sidebar</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/blog-details">Blog Details</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link to="/blog-details-right-sidebar">Blog Details Right Sidebar</router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <router-link to="/contact">CONTACT</router-link>
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