<template>
    <div class="main-container">

        <Header />

        <Breadcrumb :items="items" title="Contact Us" />

        <div class="page-wrapper section-space--inner--120">
        <!--Contact section start-->
        <div class="conact-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-12">
                        <div class="contact-information">
                            <h3>{{ data.contactInfo.title }}</h3>
                            <ul>
                                <li>
                                    <span class="icon">
                                        <i :class="data.contactInfo.address.icon"></i>
                                    </span>
                                    <span class="text">
                                        {{ data.contactInfo.address.location }}
                                    </span>
                                </li>
                                <li>
                                    <span class="icon">
                                        <i :class="data.contactInfo.telephone.icon"></i>
                                    </span>
                                    <span class="text">
                                        <a href="tel:123456789">{{ data.contactInfo.telephone.no_1 }}</a>
                                        <a href="tel:123456789">{{ data.contactInfo.telephone.no_1 }}</a>
                                    </span>
                                </li>
                                <li>
                                    <span class="icon"><i :class="data.contactInfo.mail.icon"></i></span>
                                    <span class="text">
                                        <a href="mailto:infor@example.com">{{ data.contactInfo.mail.email }}</a>
                                        <a href="#">{{ data.contactInfo.mail.web }}</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8 col-12">
                        <div class="contact-form">
                            <h3>Leave Your Message</h3>
                            <form id="contact-form">
                                <div class="row row-10">
                                    <div class="col-md-6 col-12 section-space--bottom--20">
                                        <input name="con_name" type="text" placeholder="Your Name">
                                    </div>
                                    <div class="col-md-6 col-12 section-space--bottom--20">
                                        <input name="con_email" type="email" placeholder="Your Email">
                                    </div>
                                    <div class="col-12">
                                        <textarea name="con_message" placeholder="Your Message"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button>Send Message</button>
                                    </div>
                                </div>
                            </form>
                            <p class="form-message"></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!--Contact section end-->
    </div>

        <BrandCarousel addClass="grey-bg" />

        <Footer />

        <OffCanvasMobileMenu />

        <!-- back to top start -->
        <back-to-top class="scroll-top" bottom="60px">
            <i class="ion-android-arrow-up"></i>
        </back-to-top>
        <!-- back to top end -->
    </div>
</template>

<script>

    import Header from '@/components/Header';
    import Breadcrumb from '../components/Breadcrumb'
    import BrandCarousel from '../components/BrandCarousel'
    import Footer from '../components/Footer'
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    import data from '../data/contact.json'
    import axios from 'axios'
    export default {
        components: {
            Header,
            Breadcrumb,
            BrandCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                data,
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Contact',
                        active: true
                    }
                ],
                clientData: []
            }
        },
        async mounted() {
            const res = await axios.get(
                `http://tmdgud1112.pythonanywhere.com/api/user`, {
                    data: this.clientData
                }, {
                    withCredentials: true,
                }
            );
            
            console.log(this.clientData)
        },
        metaInfo: {
            title: 'Castro - Contact Us',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

