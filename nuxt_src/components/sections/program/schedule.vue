<template>
  <div v-if="fillRow()" class="schedule_event">
    <p class="empty_room">
      ROOM A
    </p>
    <div class="schedule_detail">
      <p class="schedule_title">
        {{ schedule[locale].title }}
      </p>
      <div class="schedule_tags">
        <p class="schedule_tag">
          {{ schedule.time.started_at }} - {{ schedule.time.ended_at }}
        </p>
      </div>
    </div>
  </div>
  <div
    v-else-if="isProgram()"
    class="js-modal schedule_event"
    data-target="modal0-0-0"
    data-name="taro"
  >
    <p class="schedule_room">
      ROOM {{ schedule.room }}
    </p>
    <!-- 内容 ここから -->
    <div class="schedule_detail">
      <p class="schedule_title">
        {{ schedule.program.title }}
      </p>
      <div class="schedule_tags">
        <p class="schedule_tag">
          {{ schedule.time.started_at }} - {{ schedule.time.ended_at }}
        </p>
        <p class="schedule_tag">
          {{ schedule.program.lang }}
        </p>
        <p class="schedule_tag">
          {{ schedule.program.audience }}
        </p>
      </div>
      <ul class="schedule_function">
        <li v-for="item in schedule.program.links" :key="item" class="schedule_function">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="item" />
        </li>
      </ul>
    </div>
    <!-- 内容 ここまで -->
    <!-- 登壇者 ここから -->
    <div class="schedule_speakers">
      <div class="schedule_speaker">
        <div
          class="schedule_speaker_icon"
          style="background-image: url('/img/dummy/icon-user2.jpg')"
        />
        <p class="schedule_speaker_name">
          {{ schedule.speaker.name }}
        </p>
        <p class="schedule_speaker_id">
          <!-- TODO id ってpropertyでよいのかな…？ -->
          {{ schedule.speaker.id }}
        </p>
      </div>
    </div>
    <!-- 登壇者 ここまで -->
    <!-- お気に入り ここから -->
    <div class="schedule_fav js-anc">
      <!-- お気に入りは親にcallbackするような仕組みも多分必要-->
      <input
        id="favCheck0-0-0"
        type="checkbox"
        name="favCheck0-0-0"
        class="schedule_fav_checkbox js-fav"
      >
      <label for="favCheck0-0-0" class="schedule_fav_icon js-favLabel" />
    </div>
    <!-- お気に入り ここまで -->
  </div>
  <div v-else class="schedule_event">
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
  </div>
</template>

<script lang="ts">
import { Session } from '~/models/sessions'

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
    fillRow() {
      return this.schedule.room === ''
    },
    useRoom() {
      return !this.fillRow()
    },
    isProgram() {
      return this.useRoom() && this.schedule.speaker && this.schedule.speaker.id !== ''
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
