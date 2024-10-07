import { defineComponent, createApp } from 'vue/dist/vue.esm-bundler.js'

const App = defineComponent({
  name: 'App',

  setup() {
    function formatAsLocalDate(timestamp) {
      return new Date(timestamp).toLocaleString(navigator.language, {
        dateStyle: 'long',
      })
    }

    return { formatAsLocalDate }
  },

  template: `<div>Сегодня {{ formatAsLocalDate(new Date()) }}</div>`,
})

createApp(App).mount('#app')
