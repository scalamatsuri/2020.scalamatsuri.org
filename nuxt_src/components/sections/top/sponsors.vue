<i18n>
## language=yaml
en:
  sponsor_overview: |
    We are looking for sponsors who can support ScalaMatsuri, Asia's largest international Scala conference.<br>
    For details, please see the <a href="%{sponsor_link}">sponsor recruitment page</a>.
  syogun: "Syogun Sponsor"
  tairou: "Tairo Sponsor"
  daimyo: "Daimyo Sponsor"
  samurai: "Samurai Sponsor"
  bugyo: "Bugyo Sponsor"
  bugyo_kintone: "Kintone Bugyo"
  bugyo_cacoo: "Ukiyo-e Bugyo"
  bugyo_hatena: "Kawara-ban Bugyo"
  bugyo_sentry: "Metsuke Bugyo"
  bugyo_nextbeat: "Lullaby Bugyo"
ja:
  sponsor_overview: |
    アジア最大級の国際Scalaカンファレンスである、ScalaMatsuriに協賛いただけるスポンサー様を募集しています。<br>
    詳細は<a href="%{sponsor_link}">スポンサー募集ページ</a> をご覧ください。
  syogun: "将軍スポンサー"
  tairou: "大老スポンサー"
  daimyo: "大名スポンサー"
  samurai: "侍スポンサー"
  bugyo: "奉行スポンサー"
  bugyo_kintone: "筋斗雲奉行"
  bugyo_cacoo: "浮世絵奉行"
  bugyo_hatena: "瓦版奉行"
  bugyo_sentry: "目付奉行"
  bugyo_nextbeat: "子守奉行"
</i18n>
<template>
  <section class="sponsors">
    <div class="sponsors_inner">
      <h2 class="sponsors_title">
        Sponsors
      </h2>
      <p class="content_text">
        <span v-html="$t('sponsor_overview', { sponsor_link: localePath('sponsorship') } )" />
      </p>
      <h3 class="sponsors_subtitle sponsors_subtitle-em">
        {{ $t('syogun') }}
      </h3>
      <ul class="sponsors_list">
        <li v-for="sponsor in syoguns" :key="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url"><img v-lazy="sponsor.logo" :alt="sponsor.name"></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('tairou') }}
      </h3>
      <ul class="sponsors_list">
        <li v-for="sponsor in tairos" :key="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url"><img v-lazy="sponsor.logo" :alt="sponsor.name"></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('daimyo') }}
      </h3>
      <ul class="sponsors_list">
        <li v-for="sponsor in daimyos" :key="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url"><img v-lazy="sponsor.logo" :alt="sponsor.name"></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('samurai') }}
      </h3>
      <ul class="sponsors_list">
        <li v-for="sponsor in samurais" :key="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url"><img v-lazy="sponsor.logo" :alt="sponsor.name"></a>
        </li>
      </ul>
      <ul class="sponsors_list">
        <li v-for="sponsor in tairos" :key="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url"><img v-lazy="sponsor.logo" :alt="sponsor.name"></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('bugyo') }}
      </h3>
      <ul class="sponsors_list">
        <li v-for="sponsor in bugyos" :key="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url"><img v-lazy="sponsor.logo" :alt="sponsor.name"></a>
          <p> {{ sponsor.display_name }} </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import syoguns from '@/data/sponsors/syogun'
import tairos from '@/data/sponsors/tairo'
import daimyos from '@/data/sponsors/daimyo'
import samurais from '@/data/sponsors/samurai'

export default {
  data() {
    return {
      syoguns: [],
      tairos: [],
      daimyos: [],
      samurais: [],
      bugyos: [
        {
          'name': 'kintone',
          'logo': '/img/sponsors/kintone.png',
          'url': 'https://kintone.cybozu.com/jp/',
          'display_name': this.$i18n.t('bugyo_kintone')
        },
        {
          'name': 'cacoo',
          'logo': '/img/sponsors/cacoo.png',
          'url': 'https://cacoo.com/',
          'display_name': this.$i18n.t('bugyo_cacoo')
        },
        {
          'name': 'hatena',
          'logo': '/img/sponsors/hatena.svg',
          'url': 'http://hatenacorp.jp/',
          'display_name': this.$i18n.t('bugyo_hatena')
        },
        {
          'name': 'sentry',
          'logo': '/img/sponsors/sentry.svg',
          'url': 'https://sentry.io/',
          'display_name': this.$i18n.t('bugyo_sentry')
        },
        {
          'name': 'nextbeat',
          'logo': '/img/sponsors/kidsnasitter.png',
          'url': 'https://sitter.kidsna.com/',
          'display_name': this.$i18n.t('bugyo_nextbeat')
        }
      ]
    }
  },
  mounted() {
    function notDummy(sponsor) {
      return sponsor.logo && !sponsor.logo.includes('dummy')
    }
    this.syoguns = this.shuffle(syoguns.filter(s => notDummy(s)))
    this.tairos = this.shuffle(tairos.filter(s => notDummy(s)))
    this.daimyos = this.shuffle(daimyos.filter(s => notDummy(s)))
    this.samurais = this.shuffle(samurais.filter(s => notDummy(s)))
  }
}
</script>
