<i18n>
## language=yaml
en:
  title: "Sponssors"
  sponsorType:
    syogun: Shogun Sponsor
    tairou: Tairo Sponsor
    daimyo: Daimyo Sponsor
    samurai: Samurai Sponsor
  inquiry:
    title: Inquiry about Sponsorship
    text1: Posting of job postings on this page is provided to sponsor companies over certain sponsors.
    text2: ScalaMatsuri management
ja:
  title: スポンサー
  sponsorType:
    syogun: 将軍スポンサー
    tairou: 大老スポンサー
    daimyo: 大名スポンサー
    samurai: 侍スポンサー
  inquiry:
    title: 掲載に関するお問い合わせ
    text1: このページでの求人情報の掲載は侍スポンサー以上のスポンサー企業様に提供させていただいております。
    text2: ScalaMatsuri 事務局 スポンサー担当
</i18n>

<template>
  <div id="sponsor">
    <div class="main">
      <div class="main_inner">
        <h1 class="main_title">
          {{ $t('title') }}
        </h1>
      </div>
    </div>
    <!-- sponsor ここから -->
    <div class="sponsor">
      <h2 class="sponsor_title">
        {{ $t('sponsorType.syogun') }}
      </h2>
      <div class="sponsor_list">
        <div v-for="sponsor in syogun_sponsors" :key="sponsor.url">
          <sponsor :sponsor="sponsor" />
        </div>
      </div>
      <h2 class="sponsor_subtitle">
        {{ $t('sponsorType.tairou') }}
      </h2>
      <div class="sposor_list">
        ここに大老Sponsor一覧
      </div>
      <h2 class="sponsor_subtitle">
        {{ $t('sponsorType.daimyo') }}
      </h2>
      <div class="sposor_list">
        ここに大名Sponsor一覧
      </div>
      <h2 class="sponsor_subtitle">
        {{ $t('sponsorType.samurai') }}
      </h2>
      <div class="sposor_list">
        ここに侍Sponsor一覧
      </div>
      <section class="inquiry">
        <h3 class="inquiry_title">
          {{ $t('inquiry.title') }}
        </h3>
        <p class="inquiry_text">
          {{ $t('inquiry.text1') }} <br><br>
          {{ $t('inquiry.text2') }} <br>
          <a href="mailto:sponsor@scalaconf.jp">sponsor@scalaconf.jp</a>
        </p>
      </section>
    </div>
  <!-- sponsor ここまで -->
  </div>
</template>

<script>
import Sponsor from '@/components/sections/sponsor/sponsor.vue'
import syoguns from '@/data/sponsors/syogun'

import Page404NotFoundMixin from '@/mixins/page/Page404NotFound.js'

export default {
  components: {
    Sponsor
  },
  // TODO: スポンサーが決定し次第、404表示を解除する
  mixins: [Page404NotFoundMixin],
  data() {
    return {
      syogun_sponsors: []
    }
  },
  mounted() {
    this.syogun_sponsors = syoguns
  },
  head() {
    const $t = this.$t.bind(this)
    return {
      title: $t('title'),
      meta: [
        { name: 'og:title', content: `${$t('title')} | ScalaMatsuri 2020` }
      ]
    }
  }
}
</script>
