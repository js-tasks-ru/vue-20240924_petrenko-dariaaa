import { defineComponent, ref } from 'vue/dist/vue.esm-bundler.js'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const result = ref(0)

    return {
      result,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="result <= 0"
        @click="result -= 1"
      >➖</button>

      <span class="count" data-testid="count">{{ result }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="result >= 5"
        @click="result += 1"
      >➕</button>
    </div>
  `,
})
