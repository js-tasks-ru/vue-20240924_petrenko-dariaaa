import { defineComponent } from 'vue'
import UiAlert from './UiAlert'
import UiWeatherDetails from './UiWeatherDetails'
import './../WeatherApp.css'

function formatTempAsCelsium(temp) {
  return (temp - 273.15).toFixed(1)
}

export default defineComponent({
  name: 'WeatherCard',

  components: {
    UiAlert,
    UiWeatherDetails,
  },

  props: {
    city: {
      type: Object,
      require: true,
    },

    weatherIcons: {
      type: Object,
      require: true,
    },
  },

  setup(props) {
    const cels = formatTempAsCelsium(props.city.current.temp)

    return {
      cels,
    }
  },

  template: `
            <UiAlert v-if="city.alert" />
            <div>
              <h2 class="weather-card__name">
                {{ city.geographic_name }}
              </h2>
              <div class="weather-card__time">
                {{ city.current.dt }}
              </div>
            </div>
            <div class="weather-conditions">
              <div class="weather-conditions__icon" :title="city.current.weather.description">{{ weatherIcons[city.current.weather.id] }}</div>
              <div class="weather-conditions__temp">{{ cels }} °C</div>
            </div>
            <UiWeatherDetails :city="city.current"/>
  `,
})
