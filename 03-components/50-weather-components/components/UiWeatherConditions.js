import { defineComponent } from 'vue'
import { WeatherConditionIcons } from '../weather.service'

function formatTempAsCelsium(temp) {
  return (temp - 273.15).toFixed(1)
}

export default defineComponent({
  name: 'UiWeatherConditions',

  props: {
    city: {
      type: Object,
      require: true,
    },
  },

  setup(props) {
    const weatherIcons = WeatherConditionIcons
    const cels = formatTempAsCelsium(props.city.temp)

    return {
      weatherIcons,
      cels,
    }
  },

  template: `
            <div class="weather-conditions">
              <div class="weather-conditions__icon" :title="city.weather.description">{{ weatherIcons[city.weather.id] }}</div>
              <div class="weather-conditions__temp">{{ cels }} °C</div>
            </div>
  `,
})
