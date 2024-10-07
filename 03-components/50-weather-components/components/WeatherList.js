import { defineComponent } from 'vue'
import WeatherCard from './WeatherCard.js'

export default defineComponent({
  name: 'WeatherList',

  components: {
    WeatherCard,
  },

  props: {
    cities: {
      type: Array,
      required: true,
    },
  },

  template: `
      <ul class="weather-list unstyled-list">
        <li v-for="city in cities" class="weather-card" :class="{'weather-card--night': city.current.sunrise > city.current.dt && city.current.dt < city.current.sunset}">
          <WeatherCard :city />
        </li>
      </ul>

  `,
})
