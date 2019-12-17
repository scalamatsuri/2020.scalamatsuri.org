<i18n>
## language=yaml
en:
  sponsorship: "Sponsorship"
  cfp: "Call for proposals"
ja:
  sponsorship: "スポンサー募集"
  cfp: "セッションに応募する"
</i18n>
<template>
  <div class="banner">
    <div class="banner_list">
      <nuxt-link :to="localePath('sponsorship')" class="banner_item banner_item-sponsor">
        <span>{{ $t('sponsorship') }} </span>
      </nuxt-link>
      <nuxt-link :to="localePath('cfp')" class="banner_item banner_item-staff">
        <span>{{ $t('cfp') }}</span>
      </nuxt-link>
    </div>
  </div>
</template>
