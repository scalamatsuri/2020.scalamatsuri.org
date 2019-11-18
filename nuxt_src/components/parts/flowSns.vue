<i18n>
## language=yaml
  en:
    share_with_friends: "Share it with your friends!"
    add_hatena_bookmark: "Add this entry to Hatena bookmark"
  ja:
    share_with_friends: "是非あなたの友達にもシェアしてください！"
    add_hatena_bookmark: "このエントリーをはてなブックマークに追加"
</i18n>

<template>
  <div>
    <section class="flowSns is_pc">
      <div class="flowSns_inner">
        <h2 class="flowSns_title">
          {{ $t('share_with_friends') }}
        </h2>
        <a class="twitter-share-button sns_item" href="https://twitter.com/intent/tweet">Tweet</a>
        <div class="fb-share-button sns_item" data-layout="button_count" data-size="small" data-mobile-iframe="true">
          <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore" rel="noopener">シェア</a>
        </div>
        <a
          href="http://b.hatena.ne.jp/entry/"
          class="hatena-bookmark-button sns_item"
          data-hatena-bookmark-layout="touch"
          data-hatena-bookmark-width="20"
          data-hatena-bookmark-height="20"
          :title="$t('add_hatena_bookmark')"
        ><img
          src="https://b.st-hatena.com/images/entry-button/button-only.png"
          :alt="$t('add_hatena_bookmark')"
          width="20"
          height="20"
          style="border: none;"
        ></a>
        <script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" defer />
        <script type="text/javascript" src="https://platform.twitter.com/widgets.js" defer />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }
}
</script>
