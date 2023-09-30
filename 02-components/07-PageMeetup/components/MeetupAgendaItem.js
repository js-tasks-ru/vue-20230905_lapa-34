import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  data: function () {
    return {
      agendaItemDefaultTitles,
      agendaItemIcons
    }
  },

  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },

  computed: {
    title() {
      return this.agendaItem.title ?? agendaItemDefaultTitles[this.agendaItem.type]
    },
    key() {
      return agendaItemIcons[this.agendaItem.type];
    },
    iconSrc() {
      return `/assets/icons/icon-${this.key}.svg`
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="iconSrc" class="icon" :alt="key" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title"> {{ title }} </h3>
        <p v-if="agendaItem.type === 'talk'" class="agenda-item__talk">
          <span> {{ agendaItem.speaker }} </span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang"> {{ agendaItem.language }} </span>
        </p>
        <p v-if="agendaItem.description != null" > {{ agendaItem.description }} </p>
      </div>
    </div>`,
});
