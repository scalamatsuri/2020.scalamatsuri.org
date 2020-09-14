<i18n>
## language=yaml
ja:
  overview: |
    ScalaMatsuriTシャツのオンラインショップが、期間限定でオープンしました！過去最多の7色展開です。
  ecshop_japan_link: 日本からのみ注文可能なショップはこちら
  ecshop_world_link: 全世界から注文可能なショップはこちら
en:
  overview: |
    ScalaMatsuri T-shirts online shop has been open for a limited period! There are seven color T-shirts. Please choose the one you like.
  ecshop_japan_link: Japan Domestic Orders
  ecshop_world_link: Worldwide Orders
</i18n>

<template>
  <section class="content pre-events">
    <div class="content_inner">
      <h2 class="content_title">
        ScalaMatsuri T-shirt shop
      </h2>
      <p class="content_text">
        <span v-html="$t('overview')" />
      </p>
      <p class="content_link">
        <a href="https://scalamatsuri.official.ec/" target="_blank" rel="noopener">{{ $t('ecshop_japan_link') }}</a><img v-lazy="require('~/assets/img/common/arrow-next-b.svg')">
      </p>
      <p class="content_link">
        <a href="https://scalamatsuri.myshopify.com/collections/all" target="_blank" rel="noopener">{{ $t('ecshop_world_link') }}</a><img v-lazy="require('~/assets/img/common/arrow-next-b.svg')">
      </p>
    </div>
  </section>
</template>
