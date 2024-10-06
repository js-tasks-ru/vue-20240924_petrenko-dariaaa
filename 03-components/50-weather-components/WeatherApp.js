import { defineComponent } from 'vue'
import './WeatherApp.css'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import WeatherList from './components/WeatherList.js'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherList,
  },

  setup() {
    const cities = getWeatherData()

    const weatherIcons = WeatherConditionIcons

    return {
      cities,
      weatherIcons,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <WeatherList :cities :weatherIcons/>
    </div>
  `,
})
