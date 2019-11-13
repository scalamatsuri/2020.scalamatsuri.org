<i18n>
## language=yaml
  en:
    add_hatena_bookmark: "Add this entry to Hatena bookmark"
    locale_full_code: "en_US"
  ja:
    add_hatena_bookmark: "このエントリーをはてなブックマークに追加"
    locale_full_code: "ja_JP"
</i18n>

<template>
  <section class="sns">
    <a class="twitter-share-button sns_item" href="https://twitter.com/intent/tweet">Tweet</a>
    <div class="fb-share-button sns_item" data-layout="button_count" data-size="small" data-mobile-iframe="true">
      <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore" rel="noopener">Share</a>
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
    <script type="text/javascript" src="https://platform.twitter.com/widgets.js" defer />
    <script type="text/javascript" :src="`https://connect.facebook.net/${ $t('locale_full_code') }/sdk.js#xfbml=1&version=v3.2`" defer />
    <script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" defer />
  </section>
</template>

<script>
export default {
  onLanguageSwitched(oldLocale, newLocale) {
    debugger
  }
}
</script>
