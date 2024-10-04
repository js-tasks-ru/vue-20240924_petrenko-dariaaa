import { defineComponent, computed, ref } from 'vue/dist/vue.esm-bundler.js'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    let operand_1 = ref(0)
    let operand_2 = ref(0)
    let operator = ref('')

    const result = computed(() => {
      switch (operator.value) {
        case 'sum':
          return operand_1.value + operand_2.value
        case 'subtract':
          return operand_1.value - operand_2.value
        case 'multiply':
          return operand_1.value * operand_2.value
        case 'divide':
          if (isNaN(operand_1.value / operand_2.value)) {
            return 'Неопределённость'
          } else if (isFinite(operand_1.value / operand_2.value)) {
            return operand_1.value / operand_2.value
          } else {
            return '∞'
          }
        default:
          return null
      }
    })

    return {
      operand_1,
      operand_2,
      operator,
      result,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="operand_1"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator"/>✖</label>
        <label><input type="radio" name="operator" value="divide"v-model="operator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="operand_2" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
