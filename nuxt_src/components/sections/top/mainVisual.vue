<i18n>
## language=yaml
en:
  alt: ScalaMatsuri 2020 The largest international Scala conference in Asia on 15th-16th May 2020 Tokyo International Exchange Center
ja:
  alt: ScalaMatsuri 2020 アジア最大級のScalaカンファレンス 2020年5月15日(金), 16日(土) 開催 東京国際交流館 プラザ平成
</i18n>

<template>
  <main class="main">
    <div class="main_inner">
      <div class="main__container">
        <div class="main__logo">
          <img v-if="$mq === 'lg'" class="logo--pc" :src="require(`~/assets/img/top/${$i18n.locale}/img-main_logo-pc.png?resize&size=200`)" alt="ScalaMatsuri2020">
          <img v-if="$mq === 'sm'" class="logo--sp" :src="require(`~/assets/img/top/${$i18n.locale}/img-main_logo-sp.png?resize&size=314`)" alt="ScalaMatsuri2020">
        </div>
        <h1 class="main__title">
          <img v-if="$mq === 'lg'" class="title--pc" :src="require(`~/assets/img/top/${$i18n.locale}/img-main_title-pc.png?resize&size=772`)" :alt="`${$t('alt')}`">
          <img v-if="$mq === 'sm'" class="title--sp" :src="require(`~/assets/img/top/${$i18n.locale}/img-main_title-sp.png?resize&size=314`)" :alt="`${$t('alt')}`">
        </h1>
      </div>
      <!-- <div class="main_sponsor">
        <ul class="main_sponsor_inner">
          <li v-for="syogun in syogun_sponsors" :key="syogun.id" class="main_sponsor_item">
            <a :href="syogun.url"><img :src="syogun.logo" :alt="syogun.company_name"></a>
          </li>
        </ul>
      </div> -->
    </div>
  </main>
</template>

<script>
// import sponsers from '~/data/sponsors/syogun'
// export default {
//   data() {
//     return {
//       syogun_sponsors: []
//     }
//   },
//   mounted() {
//     this.syogun_sponsors = sponsers
//   }
// }
</script>

<style lang="scss" scoped>
.main__container {
  display: flex;
}
.main__logo {
  flex: 1 1 33%;

  @media screen and (max-width: 600px - 1) {
    & > .logo--pc { display: none; }
    & > .logo--sp {
      display: block;
      width: 56%;
      margin-left: 50%;
      padding-top: 26%;
    }
  }
  @media screen and (min-width: 600px) {
    & > .logo--pc {
      display: block;
      width: 42%;
      margin-left: 49%;
      padding: 13% 0;
    }
    & > .logo--sp { display: none; }
  }
}

.main__title {
  flex: 1 1 67%;

@media screen and (max-width: 600px - 1) {
    & > .title--pc { display: none; }
    & > .title--sp {
      display: block;
      width: 80%;
      margin: 0 2% 0 auto;
      padding: 14.4% 0;
      box-sizing: border-box;
    }
  }
  @media screen and (min-width: 600px) {
    & > .title--pc {
      display: block;
      width: 80%;
      margin: 14.4% auto 17.6%;
    }
    & > .title--sp { display: none; }
  }
}
</style>
