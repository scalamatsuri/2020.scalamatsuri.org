<template>
  <div class="schedule_event schedule_event-disabled" data-target="program.id">
    <!-- 内容 ここから -->
    <div class="schedule_detail">
      <p class="schedule_title">
        {{ program[locale].title }}
      </p>
      <!--      <p class="schedule_division">-->
      <!--        {{ program[locale].audience }}-->
      <!--      </p>-->
      <div class="schedule_tags">
        <div v-for="kw in program[locale].keywords" :key="kw" class="schedule_tag" data-tag="tag">
          <span>{{ kw }}</span>
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
        <p class="schedule_speaker_id">
          <a v-if="speaker.twitter" class="modal_speaker_sns" :href="`https://twitter.com/${speaker.twitter}`">
            <img v-lazy="require('~/assets/img/common/icon-sns-tw.svg')">{{ speaker.twitter }}
          </a>
          <a v-if="speaker.github" class="modal_speaker_sns" :href="`https://github.com/${speaker.github}`">
            <img v-lazy="require('~/assets/img/common/icon-sns-git.svg')">{{ speaker.github }}
          </a>
        </p>
      </div>
    </div>
    <!-- 登壇者 ここまで -->
    <div class="schedule__vote">
      <button class="vote__button" @click.stop.once="onVote(program)">
        投票する
      </button>
    </div>
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
    },
    onVote: {
      type: Function,
      default: () => {
        return () => { console.log('fuga') }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.schedule__vote {
  display: flex;
  align-items: center;
}
.vote__button {
  border: 1px solid #E6E6E6;
  background-color: #eeeeee;
  color: #272B4E;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 10px 24px;
  border-radius: 24px;
  outline:none;
}
</style>
