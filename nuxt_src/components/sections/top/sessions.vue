<i18n>
## language=yaml
en:
  session_overview: |
    3 days with over 40 sessions and workshops by Scala engineers!<br>
    The last day is an unconference day that everyone makes!
  day1_overview: |
    For those who are interested in Scala but feel that the threshold is a little high, Workshop Day will be held as a place to learn efficiently.
    Using Scala Bridge as a theme, you can learn not only the basics but also the places where beginners can easily trip.
  day2_overview: "Conference DAY in conference format (3 parallel sessions). Doors open at 9:00, scheduled to end at 20:00. Lunch and light refreshment will be served at the party."
  day3_overview: |
    Unconference day in unconference format<br>
    <a href="%{unconference_link}" target="_blank" rel="noopener">What is unconference?</a><br>
    Except for Room A. Doors open at 9:00, and scheduled to end at 18:00. Breakfast and lunch will be served.<br>
    <a href="https://scalabridge.org/" target="_blank" rel="noopener">ScalaBridge</a> Tokyo is an introductory Scala programming workshop for women and engineers from all underrepresented background (race, gender, age etc) to build more inclusive Scala community.
  goto_program: Program
ja:
  session_overview: |
    Scalaエンジニアたちによる、40以上のセッションとワークショップで開催する３日間！<br>
    最終日は、みんなで作るアンカンファレンスデー！
  day1_overview: |
    ワークショップデー<br>
    Scalaに興味があるけど少し敷居が高いと感じている人向けに、効率よく学べる場としてワークショップデーを開催します。
    Scala Bridgeを題材にして、基礎だけではなく初心者がつまずきやすいところを学ぶことができます。
  day2_overview: |
    カンファレンスデー<br>
    カンファレンス形式(3パラレルセッション) 9時00分入場開始 20時終了予定。 昼食および懇親会での軽食をご用意しています。
  day3_overview: |
    アンカンファレンスデー<br>
    アンカンファレンスについては<a href="%{unconference_link}" target="_blank" rel="noopener">コチラ</a><br>
    ただし会場Aはカンファレンス形式 9時00分入場開始 18:00時終了予定。朝食と昼食をご用意しています。<br>
    <a href="https://scalabridge.org/" target="_blank" rel="noopener">ScalaBridge</a>は、女性やマイノリティのエンジニア向けのワークショップとして海外で開催されてきたワークショッププログラムです。
  goto_program: プログラム
</i18n>
<template>
  <section class="content sessions">
    <div class="content_inner">
      <h2 class="content_title">
        Sessions
      </h2>
      <p class="content_text">
        <span v-html="$t('session_overview')" />
      </p>
      <div class="content_days">
        <div class="content_days_col">
          <h3 class="content_days_title">
            <span class="content_days_tag">Day 1</span> Workshop
          </h3>
          <img v-lazy="require('~/assets/img/top/img-days1.jpg?resize&size=414&lqip')" class="content_days_img">
          <p class="content_days_text" v-html="$t('day1_overview')" />
          <p class="content_link">
            <nuxt-link :to="localePath('program')+'#day1'">
              {{ $t('goto_program') }}<img v-lazy="require('~/assets/img/common/arrow-next-b.svg')" alt="">
            </nuxt-link>
          </p>
        </div>
        <div class="content_days_col">
          <h3 class="content_days_title">
            <span class="content_days_tag">Day 2</span> Conference
          </h3>
          <img v-lazy="require('~/assets/img/top/img-days2.jpg?resize&size=414&lqip')" alt="" class="content_days_img">
          <p class="content_days_text" v-html="$t('day2_overview')" />
          <p class="content_link">
            <nuxt-link :to="localePath('program')+'#day2'">
              {{ $t('goto_program') }}<img v-lazy="require('~/assets/img/common/arrow-next-b.svg')" alt="">
            </nuxt-link>
          </p>
        </div>
        <div class="content_days_col">
          <h3 class="content_days_title">
            <span class="content_days_tag">Day 3</span> Unconference
          </h3>
          <img v-lazy="require('~/assets/img/top/img-days3.jpg?resize&size=414&lqip')" alt="" class="content_days_img">
          <p class="content_days_text">
            <span v-html="$t('day3_overview', { unconference_link: localePath('unconference') } )" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
