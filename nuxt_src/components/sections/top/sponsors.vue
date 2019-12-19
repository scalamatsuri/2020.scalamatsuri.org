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
ja:
  sponsor_overview: |
    アジア最大級の国際Scalaカンファレンスである、ScalaMatsuriに協賛いただけるスポンサー様を募集しています。<br>
    詳細は<a href="%{suponsor_link}">スポンサー募集ページ</a> をご覧ください。
  syogun: "将軍スポンサー"
  tairou: "大老スポンサー"
  daimyo: "大名スポンサー"
  samurai: "侍スポンサー"
  bugyo: "奉行スポンサー"
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
      <ul v-for="sponsor in syoguns" :key="sponsor.logo" class="sponsors_list">
        <li v-if="sponsor.logo && !sponsor.logo.includes('dummy')" class="sponsors_item">
          <a :href="sponsor.url"><img v-lazy="sponsor.logo" :alt="sponsor.company_name"></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('tairou') }}
      </h3>
      <ul v-for="sponsor in tairos" :key="sponsor.logo" class="sponsors_list">
        <li v-if="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url"><img v-lazy="sponsor.logo" :alt="sponsor.company_name"></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('daimyo') }}
      </h3>
      <ul v-for="sponsor in daimyos" :key="sponsor.logo" class="sponsors_list">
        <li v-if="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url"><img v-lazy="sponsor.logo" :alt="sponsor.company_name"></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('samurai') }}
      </h3>
      <ul v-for="sponsor in samurais" :key="sponsor.logo" class="sponsors_list">
        <li v-if="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url"><img v-lazy="sponsor.logo" :alt="sponsor.company_name"></a>
        </li>
      </ul>
      <ul v-for="sponsor in tairos" :key="sponsor.logo" class="sponsors_list">
        <li v-if="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url"><img v-lazy="sponsor.logo" :alt="sponsor.company_name"></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('bugyo') }}
      </h3>
      <ul v-for="sponsor in bugyos" :key="sponsor.logo" class="sponsors_list sponsors_list-bugyo">
        <li v-if="sponsor.logo" class="sponsors_item">
          <a :href="sponsor.url"><img v-lazy="sponsor.logo" :alt="sponsor.company_name"></a>
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
import bugyos from '@/data/sponsors/bugyo'

export default {
  data() {
    return {
      syoguns: [],
      tairos: [],
      daimyos: [],
      samurais: [],
      bugyos: []
    }
  },
  mounted() {
    this.syoguns = syoguns
    this.tairos = tairos
    this.daimyos = daimyos
    this.samurais = samurais
    this.bugyos = bugyos
  }
}
</script>
