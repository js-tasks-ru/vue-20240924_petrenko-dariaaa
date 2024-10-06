import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'EmailListItem',

  props: {
    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['remove'],

  setup(props, { emit }) {
    function removeEmail() {
      emit('remove')
    }

    return {
      removeEmail,
    }
  },

  template: `
    <li :class="{ marked }">
      {{ email }}
      <button type="button" aria-label="Удалить" @click="removeEmail">❌</button>
    </li>
  `,
})
