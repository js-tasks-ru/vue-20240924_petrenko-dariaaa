import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiAlert',

  template: `
    <div class="weather-alert">
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description"> Королевская метеослужба короля Арагорна II: Предвещается наступление сильного шторма.</span>
    </div>
  `,
})
