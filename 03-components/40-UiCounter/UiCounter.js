import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true,
    },

    min: {
      type: Number,
      default: () => 0,
    },

    max: {
      type: Number,
      default: () => Infinity,
    },
  },

  setup(props, { emit }) {
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    const getIncrement = () => {
      emit('update:count', props.count + 1)
    }
    const getDecrement = () => {
      emit('update:count', props.count - 1)
    }

    return {
      getIncrement,
      getDecrement,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" @click="getDecrement" :disabled="count <= min">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" @click="getIncrement" :disabled="count >= max">➕</UiButton>
    </div>
  `,
})
