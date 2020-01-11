<i18n>
  en:
    title: "programs you voted"
    description: "Please order by drag & drop.\nThe screening will take into account the ranking."
  ja:
    title: "投票済みセッション"
    description: "ドラッグ&ドロップで順位付けをしてください。\n順位も考慮されて選考されます。"
</i18n>

<template>
  <section class="section__voted-programs">
    <h1 class="voted-program__title">
      {{ $t('title') }} ({{ programs.length }}/5)
    </h1>

    <div class="voted-program__description">
      <p>{{ $t('description') }}</p>
    </div>

    <ul class="voted-program__programs-list">
      <draggable v-model="programs" handle=".list__drag-point">
        <transition-group>
          <li v-for="(program, index) in programs" :key="program.id" class="program-list__list-container">
            <div class="list__rank">
              {{ index + 1 }}
            </div>
            <div class="list__body">
              <div class="program-list">
                <div class="list__drag-point" />
                <div class="list__title">
                  <span class="centered">
                    {{ program[$i18n.locale].title }}
                  </span>
                </div>
                <div class="list__speakers">
                  <ul class="schedule_speaker">
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
          </li>
        </transition-group>
      </draggable>
    </ul>
  </section>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  props: {
    programs: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  .section__voted-programs {
    background-color: #F1F1F1;
    text-align: center;
    padding: 48px 0;
  }
  .voted-program__title {
    padding: 8px 48px;
    font-weight: bold;
    line-height: 49px;
    font-size: 30px;
    font-weight: normal;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFF;
    background: #333;
    display: inline-block;
  }
  .voted-program__description {
    padding: 48px 0;
    line-height: 2rem;
    font-weight: bold;
    white-space: pre-line;
  }
  .program-list__list-container {
    display: flex;
    margin: 0 auto;
    max-width: 980px;
    padding: 0 10px;
    box-sizing: border-box;
    justify-content: center;
    .list__rank {
      flex: 0 0 30px;
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: bold;

    }
    .list__body {
      flex: 1 0 calc(100% - 30px);
      padding: 2px;
    }
  }
  .program-list {
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
