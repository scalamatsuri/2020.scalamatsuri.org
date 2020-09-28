<template>
  <div v-if="!useRoom()" class="schedule_event">
    <p class="empty_room">
      {{ schedule.room }}
    </p>
    <div class="schedule_detail">
      <p class="schedule_title">
        {{ schedule.title }}
      </p>
      <div class="schedule_tags">
        <p class="schedule_tag">
          {{ getTimeStr(schedule.startAt) }} - {{ getTimeStr(schedule.endAt) }}
        </p>
      </div>
    </div>
  </div>
  <div
    v-else-if="isProgram()"
    class="schedule_event"
  >
    <p class="schedule_room">
      {{ schedule.room }}
    </p>
    <!-- 内容 ここから -->
    <div class="schedule_detail">
      <p class="schedule_title">
        {{ schedule.proposal[locale].title }}
      </p>
      <div class="schedule_tags">
        <p class="schedule_tag">
          {{ getTimeStr(schedule.startAt) }} - {{ getTimeStr(schedule.endAt) }}
        </p>
        <p class="schedule_tag">
          {{ schedule.proposal[locale].language }}
        </p>
        <p class="schedule_tag">
          {{ schedule.proposal[locale].tags.join() }}
        </p>
      </div>
      <ul class="schedule_function">
        <li v-for="item in schedule.proposal[locale].tags" :key="item" class="schedule_function">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <!-- <span v-html="item" /> -->
        </li>
      </ul>
    </div>
    <!-- 内容 ここまで -->
    <!-- 登壇者 ここから -->
    <div class="schedule_speakers">
      <div v-for="speaker in schedule.proposal[locale].speakers" :key="speaker.name" class="schedule_speaker">
        <img
          v-lazy="speaker.icon"
          class="schedule_speaker_icon"
          style="background-image: url('/img/dummy/icon-user2.jpg')"
        >
        <p class="schedule_speaker_name">
          {{ speaker.name }}
        </p>
        <p class="schedule_speaker_id">
          {{ speaker.id }}
        </p>
      </div>
    </div>
    <!-- 登壇者 ここまで -->
    <!-- お気に入り ここから -->
    <!-- <div class="schedule_fav js-anc">
      <input
        id="favCheck0-0-0"
        type="checkbox"
        name="favCheck0-0-0"
        class="schedule_fav_checkbox js-fav"
      >
      <label for="favCheck0-0-0" class="schedule_fav_icon js-favLabel" />
    </div> -->
    <!-- お気に入り ここまで -->
  </div>
  <!-- <div v-else class="schedule_event">
    <p class="schedule_room">
      ROOM {{ schedule.room }}
    </p>
    <div class="schedule_detail">
      <p class="schedule_title">
        {{ schedule.program.title }}
      </p>
      <div class="schedule_tags">
        <p class="schedule_tag">
          {{ schedule.started_at }} - {{ schedule.ended_at }}
        </p>
      </div>
    </div>
  </div> -->
</template>

<script>
import { DateTime } from 'luxon'

// ちょっと場当たり的な気がするが、一旦…
export default {
  props: {
    schedule: {
      // Object{}である
      type: Object,
      // 必須である
      required: true,
      // デフォルト値
      default: () => {
        return {}
      }
    },
    locale: {
      type: String,
      required: true,
      defualt: 'en'
    }
  },
  // 場当たり的な対応だが…
  methods: {
    useRoom() {
      return this.schedule && !!this.schedule.room
    },
    isProgram() {
      return this.useRoom() && !!this.schedule.proposal
    },
    getTimeStr(time) {
      return DateTime.fromSeconds(time).toFormat('HH:mm')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
.empty_room {
  @extend .schedule_room;
  color: rgba(0, 0, 0, 0);
  border-right: none !important;
}
</style>
