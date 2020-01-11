<i18n>
## language=yaml
  en:
    lang: "Language of the"
    audience_level: "Audience level"
    contribute: "Contribute"
    suggestion: "Target audience"
  ja:
    lang: "発表言語"
    audience_level: "難易度"
    contribute: "貢献度"
    suggestion: "こんな人におすすめ"
</i18n>

<template>
  <div ref="modalKeyListener" class="modal_inner" tabindex="0" @keyup.escape="$emit('close')">
    <h2 class="modal_title">
      {{ program[$i18n.locale].title }}
    </h2>
    <ul class="modal_speakers">
      <li v-for="speaker in program.speakers" :key="speaker.id" class="modal_speaker">
        <div class="modal_speaker_icon" :style="{ backgroundImage: 'url(' + speaker[$i18n.locale].icon + ')' }" />
        <p class="modal_speaker_name">
          {{ speaker[$i18n.locale].name }}
        </p>
        <p class="modal_speaker_id">
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
    <div class="modal_text">
      <p v-text="program[$i18n.locale].detail" />
    </div>
    <div class="modal_scopeArea">
      <dl class="modal_scope">
        <dt>{{ $t('lang') }}</dt>
        <dd>{{ program[$i18n.locale].language }}</dd>
      </dl>
      <dl class="modal_scope">
        <dt>{{ $t('audience_level') }}</dt>
        <dd>{{ program[$i18n.locale].audience }}</dd>
      </dl>
      <dl v-for="suggestion in program[$i18n.locale].suggestions" :key="suggestion" class="modal_scope">
        <dt>{{ $t('suggestion') }}</dt>
        <dd>{{ suggestion }}</dd>
      </dl>
      <!-- TODO: Design dose not considered for multiple speakers. -->
      <!-- <dl v-for="contribute in program.speakers[0].contributes" :key="contribute" class="modal_scope">
        <dt>{{ $t('contribute') }}</dt>
        <dd v-html="contribute" />
      </dl> -->
    </div>
    <div class="modal_close" @click="$emit('close')">
      閉じる
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
  },
  mounted: function () {
    // For closing modal by pushing ESC key.
    this.$nextTick(this.$refs.modalKeyListener.focus())
  }
}
</script>
