<i18n>
## language=yaml
ja:
  title: プログラム
  overview: |
    10月17日はカンファレンス、10月18日はアンカンファレンスを開催します。
  link_text: タイムテーブルはこちら
en:
  title: Program
  overview: |
    18th Oct. is a conference day. 18th Oct. is an unconference day.
  link_text: Here is our timetable.

</i18n>

<template>
  <section class="content pre-events">
    <div class="content_inner">
      <h2 class="content_title">
        <nuxt-link :to="localePath('program')">
          {{ $t('title') }}
        </nuxt-link>
      </h2>
      <p class="content_text">
        <span v-html="$t('overview')" />
      </p>
      <p>
        <nuxt-link :to="localePath('program')">
          {{ $t('link_text') }}
        </nuxt-link>
      </p>
    </div>
  </section>
</template>
