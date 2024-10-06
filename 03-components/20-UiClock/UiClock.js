import { defineComponent, computed, onMounted, onBeforeUnmount, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const time = ref(new Date())

    const updateTime = () => {
      time.value = new Date()
    }

    const formattedTime = computed(() => {
      return new Intl.DateTimeFormat('default', { timeStyle: 'medium' }).format(time.value)
    })

    onMounted(() => {
      updateTime()
      const intervalId = setInterval(updateTime, 1000)

      onBeforeUnmount(() => {
        clearInterval(intervalId)
      })
    })

    return {
      formattedTime,
    }
  },

  template: `<div class="clock">{{ formattedTime }}</div>`,
})
