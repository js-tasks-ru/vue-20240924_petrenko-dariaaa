import { defineComponent, ref, watch } from 'vue/dist/vue.esm-bundler.js'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const meetup = ref(null)
    const selectId = ref(1)

    const fetchData = async id => {
      meetup.value = await getMeetup(id)
    }

    watch(
      selectId,
      (newId, oldId) => {
        if (newId !== oldId) {
          fetchData(newId)
        }
      },
      { immediate: true },
    )

    return {
      meetup,
      selectId,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" @click="selectId -= 1" :disabled="selectId <=1">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button">
            <input
              id="meetup-id-1"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="1"
              v-model.number="selectId"
            />
            <label for="meetup-id-1" class="radio-group__label">1</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-2"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="2"
              v-model.number="selectId"
            />
            <label for="meetup-id-2" class="radio-group__label">2</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-3"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="3"
              v-model.number="selectId"
            />
            <label for="meetup-id-3" class="radio-group__label">3</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-4"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="4"
              v-model.number="selectId"
            />
            <label for="meetup-id-4" class="radio-group__label">4</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-5"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="5"
              v-model.number="selectId"
            />
            <label for="meetup-id-5" class="radio-group__label">5</label>
          </div>
        </div>

        <button class="button button--secondary" type="button" @click="selectId += 1" :disabled="selectId >= 5">Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup?.title }}</h1>
        </div>
      </div>

    </div>
  `,
})
