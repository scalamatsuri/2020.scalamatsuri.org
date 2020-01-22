<i18n>
## language=yaml
  en:
    lang: "Language of the"
    contribute: "OSS Contribution"
    keywords: "Keywords"
    tag: "Categories"
    speaker_experience: "Speaker Experience"
  ja:
    lang: "発表言語"
    contribute: "OSS 貢献"
    keywords: "キーワード"
    tag: "カテゴリ"
    speaker_experience: "スピーカー経験"
</i18n>

<template>
  <div ref="modalKeyListener" class="modal_inner" tabindex="0" @keyup.escape="$emit('close')">
    <h2 class="modal_title">
      {{ program[$i18n.locale].title }}
    </h2>
    <ul class="modal_speakers">
      <li v-for="speaker in program[$i18n.locale].speakers" :key="speaker.id" class="modal_speaker">
        <div class="modal_speaker_icon" :style="`backgroundImage: url('${speaker.icon}') }`" />
        <p class="modal_speaker_name">
          {{ speaker.name }}
        </p>
        <p class="modal_speaker_id">
          <a v-if="speaker.twitter" class="modal_speaker_sns" :href="`https://twitter.com/${speaker.twitter}`">
            <img v-lazy="require('~/assets/img/common/icon-sns-tw.svg')">
            {{ speaker.twitter }}
          </a>
          <a v-if="speaker.github" class="modal_speaker_sns" :href="`https://github.com/${speaker.github}`">
            <img v-lazy="require('~/assets/img/common/icon-sns-git.svg')">{{ speaker.github }}
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
        <dt>{{ $t('keywords') }}</dt>
        <dd>
          <ul>
            <li v-for="kw in program[$i18n.locale].keywords" :key="kw">
              {{ kw }}
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="modal_scope">
        <dt>{{ $t('tag') }}</dt>
        <dd>
          <ul>
            <li v-for="tag in program[$i18n.locale].tags" :key="tag">
              {{ tag }}
            </li>
          </ul>
        </dd>
      </dl>
      <div v-for="speaker in program[$i18n.locale].speakers" :key="speaker.name">
        <dl class="modal_scope">
          <dt v-if="program[$i18n.locale].speakers.length === 1">
            {{ $t('contribute') }}
          </dt>
          <dt v-else>
            {{ speaker.name }} <br> {{ $t('contribute') }}
          </dt>
          <dd v-html="speaker.contributes" />
        </dl>
        <dl class="modal_scope">
          <dt v-if="program[$i18n.locale].speakers.length === 1">
            {{ $t('speaker_experience') }}
          </dt>
          <dt v-else>
            {{ speaker.name }} <br> {{ $t('speaker_experience') }}
          </dt>
          <dd v-html="speaker.speaker_experience" />
        </dl>
      </div>
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
