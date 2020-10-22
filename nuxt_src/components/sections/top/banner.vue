<i18n>
## language=yaml
en:
  sponsorship: "Sponsorship(ja)"
  tshirt: "Get a T-Shirt"
  tshirt_url: "https://scalamatsuri.myshopify.com/collections/all"
  cfp: "Call for proposals"
  ticket: "Ticket"
  doorkeeper: "Doorkeeper"
ja:
  sponsorship: "スポンサー募集"
  tshirt: "Tシャツ購入"
  tshirt_url: "https://scalamatsuri.official.ec/"
  cfp: "セッションに応募する"
  ticket: "チケット購入"
  doorkeeper: "Doorkeeper"
</i18n>
<template>
  <div class="banner">
    <div class="banner_list">
      <!--
      <nuxt-link :to="localePath('sponsorship')" class="banner_item banner_item-sponsor">
        <span>{{ $t('sponsorship') }} </span>
      </nuxt-link>
      -->
      <a :href="$t('tshirt_url')" class="banner_item banner_item-tshirt">
        <span>{{ $t('tshirt') }} </span>
      </a>
      <!--
      <nuxt-link :to="localePath('cfp')" class="banner_item banner_item-staff">
        <span>{{ $t('cfp') }}</span>
      </nuxt-link>
      -->
      <a href="https://scalaconfjp.doorkeeper.jp/events/103550" target="_blank" rel="noopener" class="banner_item banner_item-staff">
        <span>{{ $t('doorkeeper') }}</span>
      </a>
    </div>
  </div>
</template>
