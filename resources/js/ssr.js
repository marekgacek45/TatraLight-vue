
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'

import { createInertiaApp,Link,Head } from '@inertiajs/vue3';

import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';


import VueSilentbox from 'vue-silentbox'
import 'vue-silentbox/dist/style.css'

import NavBar from "@/Pages/Shared/Navigation/NavBar.vue"
import Footer from "@/Pages/Shared/Footer.vue"
import HeadingBox from '@/Components/HeadingBox.vue'

createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
      return pages[`./Pages/${name}.vue`]
    },
    setup({ App, props, plugin }) {
    
      return createSSRApp({
        render: () => h(App, props),
      }).use(plugin)
      .use(ZiggyVue)
      .use(VueSilentbox)
     
      .component('Link',Link)
      
      .component('Head',Head)
      
      .component('NavBar',NavBar)
      .component('Footer',Footer)
      .component('HeadingBox',HeadingBox)
    },
  }),
)