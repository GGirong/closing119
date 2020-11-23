import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import {
    BootstrapVue,
    BootstrapVueIcons
} from 'bootstrap-vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import VueMeta from 'vue-meta'
import VueSilentbox from 'vue-silentbox'
import BackToTop from 'vue-backtotop'
import SimpleVueValidation from 'simple-vue-validator';
import VCalendar from 'v-calendar';
import {
    store
} from "./store";
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
import VueLazyload from 'vue-lazyload'
import browserDetect from "vue-browser-detect-plugin";

Vue.use(browserDetect);
Vue.use(VueLazyload)
Vue.use(VueQuillEditor, /* { default global options } */)
Vue.use(SimpleVueValidation);
Vue.use(VueSilentbox)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(BackToTop)
Vue.use(VueAwesomeSwiper)
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})
Vue.use(VCalendar, {
    componentPrefix: 'vc', // Use <vc-calendar /> instead of <v-calendar />
});

const EventBus = new Vue({
    methods: {
        clientEdited(data) {
            this.$emit('clientData', data)
        }
    },
});

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/font-awesome.min.css'
import '../src/assets/css/material-design-iconic-font.min.css'
import '../src/assets/css/ionicons.min.css'
import '../src/assets/css/flaticon.min.css'
import 'swiper/css/swiper.min.css'
import '../src/assets/css/animate.min.css'
import '../src/assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
    router,
    store: store,
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
    render: h => h(App)
}).$mount('#app')

export default EventBus