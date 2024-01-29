import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp,Link,Head } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import Header from "./Pages/Shared/Header.vue"
import NavBar from "./Pages/Shared/Navigation/NavBar.vue"
import Footer from "./Pages/Shared/Footer.vue"


const appName = import.meta.env.VITE_APP_NAME || 'TatraLight';

createInertiaApp({
    title: (title) => `${appName} - ${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('Link',Link)
            .component('Head',Head)
            .component("Header",Header)
            .component('NavBar',NavBar)
            .component('Footer',Footer)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});