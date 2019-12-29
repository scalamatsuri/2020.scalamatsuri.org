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
  <div v-if="program && program[$i18n.locale]" ref="modalKeyListener" class="modal_inner" tabindex="0" @keyup.escape="$emit('close')">
    <h2 class="modal_title">
      {{ program[$i18n.locale].title }}
    </h2>
    <div class="modal_speakers">
      <div class="modal_speaker">
        <div class="modal_speaker_icon" :style="{ backgroundImage: 'url(' + program[$i18n.locale] + ')' }" />
        <p class="modal_speaker_name">
          {{ program[$i18n.locale].detail }}
        </p>
        <p class="modal_speaker_id">
          <!--TODO twitterとgithub-->
          <a href="">{{ program[$i18n.locale].twitter }}</a>
        </p>
      </div>
    </div>
    <div class="modal_text">
      <!--TODO 調整-->
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
      <!--TODO きれいな形にしたい-->
      <dl v-for="suggestion in program[$i18n.locale].suggestions" :key="suggestion" class="modal_scope">
        <dt>{{ $t('suggestion') }}</dt>
        <dd>{{ suggestion }}</dd>
      </dl>
      <!-- TODO 複数形に対応する -->
      <!-- <dl v-for="contribute in program.candidate.contributes" :key="contribute" class="modal_scope">
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
    console.log(this.program)
    console.log(this.program[this.$i18n.locale])
    this.$nextTick(this.$refs.modalKeyListener.focus())
  }
}
</script>
