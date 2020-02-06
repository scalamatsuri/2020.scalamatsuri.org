<i18n>
## language=yaml
en:
  event_overview: |
    It is packed with fun and memorable events such as sponsored exhibits, Japanese food stalls and social gatherings.<br>
    Please drop in between the sessions.
  photo_caption1: TEXTTEXTTEXTTEXTTEXT
  photo_caption2: TEXTTEXTTEXTTEXTTEXT
  photo_caption3: TEXTTEXTTEXTTEXTTEXT
ja:
  event_overview: |
    スポンサーによる展示や日本ならではの屋台や交流会など、思い出に残る楽しい企画が満載です。<br>
    セッションの合間に是非お立ち寄りください！
  photo_caption1: テキストテキストテキストテキストテキストテキストテキストテキストテキストテキ
  photo_caption2: テキストテキストテキストテキストテキストテキストテキストテキストテキストテキ
  photo_caption3: テキストテキストテキストテキストテキストテキストテキストテキストテキストテキ
</i18n>

<template>
  <section class="content events">
    <div class="content_inner">
      <h2 class="content_title">
        Events
      </h2>
      <p class="content_text">
        <span v-html="$t('event_overview')" />
      </p>
      <div class="content_contents">
        <figure v-for="(image, idx) in images" :key="image.src" :class="[idx === 0 ? 'content_img-big' : '', 'content_img']">
          <img v-lazy="image.src" :alt="image.caption">
          <figcaption v-if="image.caption" class="content_imgcaption">
            {{ $t(image.caption) }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require('~/assets/img/top/img-events1.jpg'), caption: '' },
        { src: require('~/assets/img/top/img-events2.jpg'), caption: '' },
        { src: require('~/assets/img/top/img-events3.jpg'), caption: '' },
        { src: require('~/assets/img/top/img-events4.jpg'), caption: '' },
        { src: require('~/assets/img/top/img-events5.jpg'), caption: '' },
        { src: require('~/assets/img/top/img-events6.jpg'), caption: '' },
        { src: require('~/assets/img/top/img-events7.jpg'), caption: '' },
        { src: require('~/assets/img/top/img-events8.jpg'), caption: '' },
        { src: require('~/assets/img/top/img-events9.jpg'), caption: '' },
        { src: require('~/assets/img/top/img-events10.jpg'), caption: '' },
        { src: require('~/assets/img/top/img-events11.jpg'), caption: '' },
        { src: require('~/assets/img/top/img-events12.jpg'), caption: '' },
        { src: require('~/assets/img/top/img-events13.jpg'), caption: '' }
      ]
    }
  },
  mounted() {
    this.images = this.shuffle(this.images)
  }
}
</script>

<style lang="scss" scoped>
// For preventing content from reflow by maintaining image height.
img:not([lazy='loaded']) {
  padding-top: 68.9%;
}
</style>
