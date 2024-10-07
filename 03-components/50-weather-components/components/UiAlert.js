import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiAlert',

  props: {
    icon: {
      type: String,
      default: '⚠️',
    },

    description: {
      type: String,
      default: 'Королевская метеослужба короля Арагорна II: Предвещается наступление сильного шторма.',
    },
  },

  template: `
    <div>
      <span class="weather-alert__icon">{{ icon }}</span>
      <span class="weather-alert__description">{{ description }}</span>
    </div>
  `,
})
