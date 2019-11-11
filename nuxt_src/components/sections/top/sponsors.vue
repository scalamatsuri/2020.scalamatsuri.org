<i18n>
## language=yaml
en:
  sponsor_overview: |
    We are looking for sponsors who can support ScalaMatsuri, Asia's largest international Scala conference.<br>
    For details, please see the <a href="%{suponsor_link}">sponsor recruitment page</a>.
  syogun: "Syogun Sponsor"
  tairou: "Tairo Sponsor"
  daimyo: "Daimyo Sponsor"
  samurai: "Samurai Sponsor"
  ninja: "Ninja Sponsor"
  bugyo: "Bugyo Sponsor"
ja:
  sponsor_overview: |
    アジア最大級の国際Scalaカンファレンスである、ScalaMatsuriに協賛いただけるスポンサー様を募集しています。<br>
    詳細は<a href="%{suponsor_link}">スポンサー募集ページ</a> をご覧ください。
  syogun: "将軍スポンサー"
  tairou: "大老スポンサー"
  daimyo: "大名スポンサー"
  samurai: "侍スポンサー"
  ninja: "忍者スポンサー"
  bugyo: "奉公スポンサー"
</i18n>
<template>
  <section class="sponsors">
    <div class="sponsors_inner">
      <h2 class="sponsors_title">
        Sponsors
      </h2>
      <p class="content_text">
        <span v-html="$t('sponsor_overview', { suponsor_link: localePath('sponsorship') } )" />
      </p>
      <h3 class="sponsors_subtitle sponsors_subtitle-em">
        {{ $t('syogun') }}
      </h3>
      <ul class="sponsors_list">
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('tairou') }}
      </h3>
      <ul class="sponsors_list">
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('daimyo') }}
      </h3>
      <ul class="sponsors_list">
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('samurai') }}
      </h3>
      <ul class="sponsors_list">
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('ninja') }}
      </h3>
      <ul class="sponsors_list">
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
      </ul>
      <h3 class="sponsors_subtitle">
        {{ $t('bugyo') }}
      </h3>
      <ul class="sponsors_list sponsors_list-houkou">
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
        <li class="sponsors_item">
          <a href="/"><img v-lazy="'/img/dummy/bnr-sponsor.jpg'" alt=""></a>
        </li>
      </ul>
    </div>
  </section>
</template>
