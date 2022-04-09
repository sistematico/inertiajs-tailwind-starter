import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import BaseLayout from './Layouts/Base'

createInertiaApp({
  resolve: name => {
    const page = require(`./Pages/${name}`).default
    if (page.layout === undefined && !name.startsWith('Public/')) {
      page.layout = BaseLayout
    }
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})