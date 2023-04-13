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
      <a
        href="https://scalaconfjp.doorkeeper.jp/events/103550"
        target="_blank"
        rel="noopener"
        class="banner_item banner_item_one banner_item-staff"
      >
        <span>{{ $t('doorkeeper') }}</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  margin-top: 40px;
}
.banner_list {
  margin: 0 auto;
  max-width: 834px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
// NOTE: バナー1つのとき
.banner_item_one {
  margin: 0 auto;
  max-width: 20rem;
  min-width: 20rem;
}
.banner_item {
  display: block;
  height: 88px;
  color: #fff;
  font-weight: bold;
  line-height: 46px;
  font-size: 28px;
  text-align: center;
  letter-spacing: 0.05em;
  text-align: center;
  position: relative;
  padding: 17px 0;
  &:after {
    content: '';
    width: 18px;
    height: 18px;
    display: block;
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-image: url('~assets/img/common/arrow-banner.svg');
  }
  span {
    background-position: center left;
    background-image: url('~assets/img/common/icon-happi.svg');
    padding-left: 70px;
    display: inline-block;
    height: 54px;
    line-height: 54px;
  }
  &-sponsor {
    background-color: #e4ae2f;
    span {
      background-image: url('~assets/img/common/icon-mikoshi.svg');
    }
  }
  &-ticket {
    background-color: #4f9ad5;
    span {
      background-image: url('~assets/img/common/logo.svg');
    }
  }
  &-staff {
    background-color: #4f9ad5;
    span {
      background-image: url('~assets/img/common/logo.svg');
    }
  }
  &-tshorts {
    background-color: #e4ae2f;
    span {
      background-image: url('~assets/img/common/icon-happi.svg');
    }
  }
}
</style>
