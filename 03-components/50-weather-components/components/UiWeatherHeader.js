import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiWeatherHeader',

  props: {
    city: {
      type: Object,
      require: true,
    },
  },

  template: `
            <div>
              <h2 class="weather-card__name">
                {{ city.geographic_name }}
              </h2>
              <div class="weather-card__time">
                {{ city.current.dt }}
              </div>
            </div>
  `,
})
