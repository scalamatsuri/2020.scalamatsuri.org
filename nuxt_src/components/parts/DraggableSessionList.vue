<template>
  <div class="session-list">
    <div class="list__drag-point" />
    <div class="list__title">
      <span class="centered">
        {{ program[$i18n.locale].title }}
      </span>
    </div>
    <div class="list__speakers">
      <ul class="schedule_speaker">
        <!-- <div class="schedule_speaker_icon" :style="{ backgroundImage: 'url(' + speaker[$i18n.locale].icon + ')' }" />
        <p class="schedule_speaker_name">
          {{ speaker[$i18n.locale].name }}
        </p>
        <p class="schedule_speaker_id" /> -->
        <li v-for="speaker in program.speakers" :key="speaker.id">
          <div class="schedule_speaker_icon" :style="{ backgroundImage: 'url(' + speaker[$i18n.locale].icon + ')' }" />
          <p class="schedule_speaker_name">
            {{ speaker[$i18n.locale].name }}
          </p>
          <!--TODO githubとtwitter -->
          <p class="schedule_speaker_id">
            <a v-if="speaker[$i18n.locale].twitter" class="modal_speaker_sns" :href="`https://twitter.com/${speaker[$i18n.locale].twitter}`">
              <img v-lazy="require('~/assets/img/common/icon-sns-tw.svg')">
              {{ speaker[$i18n.locale].twitter }}
            </a>
            <a v-if="speaker[$i18n.locale].github" class="modal_speaker_sns" :href="`https://github.com/${speaker[$i18n.locale].github}`">
              <img v-lazy="require('~/assets/img/common/icon-sns-git.svg')">{{ speaker[$i18n.locale].github }}
            </a>
          </p>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    program: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .session-list {
    display: flex;
    max-width: 100%;
    background-color: white;
    border-radius: 2px;
    min-height: 80px;

    .list__drag-point {
      flex: 0 0 40px;
      position: relative;
      width: 8px;
      margin: 4px 10px;
      margin: 0 auto;
      cursor: grab;

      &::after {
        content: '';
        position: absolute;
        width: 8px;
        top: 24px;
        bottom: 24px;
        left: 16px;
        right: 16px;
        background-size: 4px 4px;
        background-color: #ffffff;
        background-image: radial-gradient(#BCBCBC 33%, transparent 46%);
        background-repeat: repeat;      }
    }
    .list__title {
      flex: 1 1 calc(100% - 40px - 200px);
      max-width: 100%;
      font-weight: bold;
      text-align: left;
      word-break: break-all;
      padding: 6px;
      display: flex;
      align-items: center;

      & > span.centered {
        display: table-cell;
        vertical-align: middle;
        line-height: 2em;
      }
    }
    .list__speakers {
      flex: 1 0 200px;
      padding: 6px;
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }
</style>
