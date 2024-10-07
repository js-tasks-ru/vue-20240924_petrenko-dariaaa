import { defineComponent } from 'vue/dist/vue.esm-bundler.js'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {
    const cities = getWeatherData()

    const weather_icons = WeatherConditionIcons

    function formatTempAsCelsium(temp) {
      return (temp - 273.15).toFixed(1)
    }

    function formatPressure(press) {
      return Math.round(press * 0.75)
    }

    return {
      cities,
      weather_icons,
      formatTempAsCelsium,
      formatPressure,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <ul  class="weather-list unstyled-list">
        <li v-for="city in cities" class="weather-card" 
        :class="{'weather-card--night': city.current.sunrise > city.current.dt && city.current.dt < city.current.sunset}">
          <div v-if="city.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">Королевская метеослужба короля Арагорна II: Предвещается наступление сильного шторма.</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ city.geographic_name }}
            </h2>
            <div class="weather-card__time">
            {{ city.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            
            <div class="weather-conditions__icon" :title="city.current.weather.description">{{ weather_icons[city.current.weather.id] }}</div>
            <div class="weather-conditions__temp">{{ formatTempAsCelsium(city.current.temp) }} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ formatPressure(city.current.pressure) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ city.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ city.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ city.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
