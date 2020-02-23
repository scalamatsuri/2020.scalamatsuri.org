<i18n>
  en:
    voted: "voted"
    vote: "vote"
  ja:
    voted: "投票済み"
    vote: "投票する"
</i18n>

<template>
  <div :id="program.id" class="schedule_event schedule_event-disabled" data-target="program.id">
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
    <!-- <div class="schedule__vote">
      <button v-if="voted" class="vote__button--voted" @click.stop="onUnvote(program)">
        {{ $t('voted') }}
      </button>
      <button v-else class="vote__button" :disabled="exceededVoteLimit" @click.stop="onVote(program)">
        {{ $t('vote') }}
      </button>
    </div> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

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
        return () => {}
      }
    },
    onUnvote: {
      type: Function,
      default: () => {
        return () => {}
      }
    },
    voted: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      exceededVoteLimit: 'vote/exceededVoteLimit'
    })
  }
}
</script>

<style lang="scss" scoped>
.schedule__vote {
  display: flex;
  align-items: center;
  min-width: 150px;

  @media screen and (max-width: 819px) {
    width: 100%;
    padding: 7px 7px 14px;
  }
}
.vote__button {
  border: 1px solid #E6E6E6;
  background-color: #eeeeee;
  color: #272B4E;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 10px 24px;
  margin: 0 10px;
  border-radius: 24px;
  outline:none;
  cursor: pointer;
  transition: background-color .1s ease, color .1s ease;

  &:hover:not(:disabled) {
    opacity: .8;
    transition: opacity .1s ease;
  }

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    background-color: #E0E0E0;
    color: #A6A6A6;
  }

  &--voted {
    border: 1px solid #CC293E;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
    padding: 10px 24px;
    margin: 0 10px;
    border-radius: 24px;
    outline:none;
    color: white;
    background-color: #CC293E;
    cursor: pointer;
    transition: background-color .1s ease, color .1s ease;

    &:hover {
      opacity: .8;
      transition: opacity .1s ease;
    }
  }
}
</style>
