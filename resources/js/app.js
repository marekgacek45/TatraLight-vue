
import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp,Link,Head } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { VueReCaptcha,useReCaptcha } from 'vue-recaptcha-v3'

import VueSilentbox from 'vue-silentbox'
import 'vue-silentbox/dist/style.css'



import NavBar from "@/Pages/Shared/Navigation/Navbar.vue"
import Footer from "@/Pages/Shared/Footer.vue"
import HeadingBox from '@/Components/HeadingBox.vue'

const appName = import.meta.env.VITE_APP_NAME || 'TatraLight';

createInertiaApp({
    title: (title) => `${appName} - ${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const captcheKey = props.initialPage.props.recaptcha_site_key;
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(VueSilentbox)
            .use(VueReCaptcha, { siteKey: captcheKey,loaderOptions: {useRecaptchaNet: true}})
            .component('Link',Link)
            
            .component('Head',Head)
            
            .component('NavBar',NavBar)
            .component('Footer',Footer)
            .component('HeadingBox',HeadingBox)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});