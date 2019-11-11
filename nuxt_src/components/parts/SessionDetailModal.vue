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
      {{ program.program.title }}
    </h2>
    <div class="modal_speakers">
      <div class="modal_speaker">
        <div class="modal_speaker_icon" :style="{ backgroundImage: 'url(' + program.candidate.icon + ')' }" />
        <p class="modal_speaker_name">
          {{ program.candidate.name }}
        </p>
        <p class="modal_speaker_id">
          <!--TODO twitterとgithub-->
          <a href="">{{ program.candidate.twitter }}</a>
        </p>
      </div>
    </div>
    <div class="modal_text">
      <!--TODO 調整-->
      <p v-text="program.program.detail" />
    </div>
    <div class="modal_scopeArea">
      <dl class="modal_scope">
        <dt>{{ $t('lang') }}</dt>
        <dd>{{ program.program.language }}</dd>
      </dl>
      <dl class="modal_scope">
        <dt>{{ $t('audience_level') }}</dt>
        <dd>{{ program.program.audience }}</dd>
      </dl>
      <!--TODO きれいな形にしたい-->
      <dl v-for="suggestion in program.program.suggestions" :key="suggestion" class="modal_scope">
        <dt>{{ $t('suggestion') }}</dt>
        <dd>{{ suggestion }}</dd>
      </dl>
      <dl v-for="contribute in program.candidate.contributes" :key="contribute" class="modal_scope">
        <dt>{{ $t('contribute') }}</dt>
        <dd v-html="contribute" />
      </dl>
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
      // Object{}である
      type: Object,
      // 必須である
      required: true,
      // デフォルト値
      default: () => { return {} }
    }
  },
  mounted: function () {
    // For closing modal by pushing ESC key.
    this.$nextTick(this.$refs.modalKeyListener.focus())
  }
}
</script>
