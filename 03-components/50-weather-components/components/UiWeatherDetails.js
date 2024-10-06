import { defineComponent } from 'vue'
import './../WeatherApp.css'

function formatPressure(press) {
  return Math.round(press * 0.75)
}

export default defineComponent({
  name: 'UiWeatherDetails',

  props: {
    city: {
      type: Object,
      require: true,
    },
  },

  setup(props) {
    const press = formatPressure(props.city.pressure)

    const detailsOptions = [
      { label: 'Давление, мм рт. ст.', value: press },
      { label: 'Влажность, %', value: props.city.humidity },
      { label: 'Облачность, %', value: props.city.clouds },
      { label: 'Ветер, м/с', value: props.city.wind_speed },
    ]

    return {
      detailsOptions,
    }
  },

  template: `
      <div class="weather-details">
            <div class="weather-details__item" v-for="option in detailsOptions">
              <div class="weather-details__item-label">{{ option.label }}</div>
              <div class="weather-details__item-value">{{ option.value }}</div>
            </div>
      </div>
  `,
})
