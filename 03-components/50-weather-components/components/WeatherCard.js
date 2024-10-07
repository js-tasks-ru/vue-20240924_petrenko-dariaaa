import { defineComponent } from 'vue'

import UiAlert from './UiAlert'
import UiWeatherHeader from './UiWeatherHeader'
import UiWeatherDetails from './UiWeatherDetails'
import UiWeatherConditions from './UiWeatherConditions'

export default defineComponent({
  name: 'WeatherCard',

  components: {
    UiAlert,
    UiWeatherHeader,
    UiWeatherDetails,
    UiWeatherConditions,
  },

  props: {
    city: {
      type: Object,
      require: true,
    },
  },

  template: `
  <div>
            <UiAlert v-if="city.alert" class="weather-alert"/>
            <UiWeatherHeader :city />
            <UiWeatherConditions :city="city.current"/>
            <UiWeatherDetails :city="city.current"/>
</div>
  `,
})
