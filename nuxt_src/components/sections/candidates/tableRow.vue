<template>
  <div class="js-modal schedule_event schedule_event-disabled" data-target="program.id">
    <!-- 内容 ここから -->
    <div class="schedule_detail">
      <p class="schedule_title">
        {{ program[locale].title }}
      </p>
      <!--      <p class="schedule_division">-->
      <!--        {{ program[locale].audience }}-->
      <!--      </p>-->
      <div class="schedule_tags">
        <div v-for="tag in program[locale].tags" :key="tag" class="js-tag schedule_tag" data-tag="tag">
          <span>{{ tag }}</span>
        </div>
      </div>
    </div>
    <!-- 内容 ここまで -->
    <!-- 登壇者 ここから -->
    <div v-for="speaker in program[locale].speakers" :key="speaker.name" class="schedule_speakers">
      <div class="schedule_speaker">
        <div class="schedule_speaker_icon" :style="`background-image: url('${speaker.icon}')`" />
        <p class="schedule_speaker_name">
          {{ speaker.name }}
        </p>
        <!--TODO githubとtwitter -->
        <p class="schedule_speaker_id">
          <a v-if="speaker.twitter" class="modal_speaker_sns" :href="`https://twitter.com/${speaker.twitter}`">
            <img v-lazy="require('~/assets/img/common/icon-sns-tw.svg')">
            {{ speaker.twitter }}
          </a>
          <a v-if="speaker.github" class="modal_speaker_sns" :href="`https://github.com/${speaker.github}`">
            <img v-lazy="require('~/assets/img/common/icon-sns-git.svg')">{{ speaker.github }}
          </a>
        </p>
      </div>
    </div>
    <!-- 登壇者 ここまで -->
  </div>
</template>
<script>
export default {
  props: {
    program: {
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
  }
}
</script>
