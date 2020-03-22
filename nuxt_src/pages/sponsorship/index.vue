<template>
  <div id="sponsorship">
    <div class="main">
      <div class="main_inner">
        <h1 class="main_title">
          スポンサー募集
        </h1>
      </div>
    </div>
    <div class="notification">
      2020/2/12 ご好評につき常設ブースは<strong>完売いたしました。</strong>
    </div>

    <!-- sponsorship ここから -->
    <div class="sponsorship">
      <h2 class="sponsorship_title">
        Scalaコミュニティ 日本最大のイベント<br class="is_pc">ScalaMatsuriのスポンサーを募集しています。
      </h2>
      <p class="sponsorship_text">
        様々な特典をご用意しています。詳細は以下の資料を参照してください。
      </p>
      <div class="sponsorship_btnArea">
        <a href="/pdf/sponsorship.pdf" class="sponsorship_btn sponsorship_btn-pdf">スポンサーシップのご案内</a>
        <a href="https://forms.gle/jz29vPswF52yUnZB8" class="sponsorship_btn sponsorship_btn-form">お申込みフォーム</a>
      </div>
      <!--
      <p class="sponsorship_note">
        年末年始は、2019年12月28日(土)から2020年1月5日(日)までスポンサー窓口はお休みです。<br>2019年12月26日(木)23:59JSTまでにスポンサーのお申し込みいただいた場合は、請求書を年内にご送付いたします。
      </p>
      -->
    </div>
    <!-- sponsorship ここまで -->
    <!-- recruit ここまで -->
    <section class="section recruit">
      <h2 class="section_title">
        <span class="section_title_inner">特別企画 - 私、ScalaMatsuriで転職しました -</span>
      </h2>
      <p class="section_text">
        ScalaMatsuriがきっかけで、ScalaMatsuri協賛企業に就職または転職された方々のインタビュー記事です。
      </p>
      <ul class="recruit_recruit">
        <li v-for="r in recruit_recruits" :key="r.url">
          <img :src="r.image" :alt="r.title" class="recruit_recruit_img">
          <p class="recruit_recruit_title">
            <a :href="r.url">{{ r.title }}</a>
          </p>
        </li>
      </ul>
    </section>
    <!-- recruit ここまで -->
    <!-- plan ここから -->
    <section class="section plan">
      <h2 class="section_title">
        <span class="section_title_inner">スポンサープラン</span>
      </h2>
      <div class="section_scroll">
        <table class="section_table2 section_table2-wide">
          <thead>
            <tr>
              <th colspan="3" />
              <th>
                <p class="color color_shogun">
                  将軍<span>ショーグン</span>
                </p>
              </th>
              <th>
                <p class="color color_tairou">
                  大老<span>タイロウ</span>
                </p>
              </th>
              <th>
                <p class="color color_daimyo">
                  大名<span>ダイミョー</span>
                </p>
              </th>
              <th>
                <p class="color color_samurai">
                  侍<span>サムライ</span>
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colspan="3">
                金額
              </th>
              <td>¥1,250,000</td>
              <td>¥750,000</td>
              <td>¥300,000</td>
              <td>¥100,000</td>
            </tr>
            <tr>
              <th colspan="3">
                招待枠
              </th>
              <td>10名様</td>
              <td>8名様</td>
              <td>6名様</td>
              <td>2名様</td>
            </tr>
            <tr>
              <th rowspan="2">
                Webサイト掲載
              </th>
              <th>ロゴ画像</th>
              <th />
              <td>◎<br>ファーストビュー</td>
              <td>○</td>
              <td>○</td>
              <td>○</td>
            </tr>
            <tr>
              <th>広告ページ</th>
              <th><span>サービス紹介や<br>リクルーティング</span></th>
              <td>○</td>
              <td>○</td>
              <td>○</td>
              <td>─</td>
            </tr>
            <tr>
              <th rowspan="3">
                印刷物ロゴ掲載
              </th>
              <th>スピーカーバックパネル</th>
              <th>登壇者<br>写真スポット</th>
              <td>A会場</td>
              <td>B会場</td>
              <td>─</td>
              <td>─</td>
            </tr>
            <tr>
              <th>日除けのれん</th>
              <th>来場者<br>写真スポット</th>
              <td>○</td>
              <td>○</td>
              <td>─</td>
              <td>─</td>
            </tr>
            <tr>
              <th>Tシャツ</th>
              <th>来場者<br>プレゼント</th>
              <td>○</td>
              <td>-</td>
              <td>─</td>
              <td>─</td>
            </tr>
            <tr>
              <th rowspan="2">
                スライド掲載
              </th>
              <th>会場内ディスプレイ</th>
              <th>休憩時間向け<br>ブース誘導にも◎</th>
              <td>1ページ</td>
              <td>1ページ</td>
              <td>1/2ページ</td>
              <td>─</td>
            </tr>
            <tr>
              <th>オープニング</th>
              <th>注目が集まる場面</th>
              <td>ロゴ掲載・<br>読み上げ</td>
              <td>ロゴ掲載・<br>読み上げ</td>
              <td>ロゴ掲載</td>
              <td>─</td>
            </tr>
            <tr>
              <th colspan="3">
                常設ブース(別売) 申し込み可能数
              </th>
              <td>最大2枠</td>
              <td>最大1枠</td>
              <td>最大1枠</td>
              <td>最大1枠</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!-- plan ここまで -->
    <!-- booth ここから -->
    <section class="section booth">
      <h2 class="section_title">
        <span class="section_title_inner">常設ブース</span>
      </h2>
      <table class="section_table2 section_table2-alignL">
        <tr>
          <th>金額</th>
          <td>¥250,000</td>
        </tr>
        <tr>
          <th>上限枠数</th>
          <td>11枠</td>
        </tr>
        <tr>
          <th>招待枠</th>
          <td>2名様</td>
        </tr>
      </table>
      <p class="section_text">
        常設ブースには2名様分の招待枠が付きます。この招待枠は通常プランに付いて来るものと同じ扱いで、カンファレンスや懇親会にご参加頂けますが、常設ブースの設営及び運営をされる方も招待枠を使用してご入場ください。<br>
      </p>
    </section>
    <!-- sponsorship ここから -->
    <div class="sponsorship">
      <h2 class="sponsorship_title">
        Scalaコミュニティ 日本最大のイベント<br class="is_pc">ScalaMatsuriのスポンサーを募集しています。
      </h2>
      <p class="sponsorship_text">
        様々な特典をご用意しています。詳細は以下の資料を参照してください。
      </p>
      <div class="sponsorship_btnArea">
        <a href="/pdf/sponsorship.pdf" class="sponsorship_btn sponsorship_btn-pdf">スポンサーシップのご案内</a>
        <a href="https://forms.gle/jz29vPswF52yUnZB8" class="sponsorship_btn sponsorship_btn-form">お申込みフォーム</a>
      </div>
      <!--
      <p class="sponsorship_note">
        年末年始は、2019年12月28日(土)から2020年1月5日(日)までスポンサー窓口はお休みです。<br>2019年12月26日(木)23:59JSTまでにスポンサーのお申し込みいただいた場合は、請求書を年内にご送付いたします。
      </p>
      -->
    </div>
    <!-- sponsorship ここまで -->
    <section class="inquiry">
      <h3 class="inquiry_title">
        スポンサーのお申込みに関するお問い合わせ
      </h3>
      <p class="inquiry_text">
        <a href="">本年度スポンサーシップのご案内</a> をご参照の上、不明点などがございましたら <a href="" target="_blank" rel="noopener">お問い合わせフォーム</a> よりお問い合わせください。
      </p>
    </section>
  </div>
</template>

<script>
// import Page404NotFoundMixin from '@/mixins/page/Page404NotFound.js'

export default {
  // TODO: スポンサーが決定し次第、404表示を解除する
  // mixins: [Page404NotFoundMixin],
  data() {
    return {
      recruit_recruits: [
        {
          image: require('~/assets/img/sponsorship/img-recruit1.jpg'),
          url: 'https://blog.scalamatsuri.org/entry/2019/12/18/141705',
          title: 'マーベリック株式会社さまへ転職された リチャード伊真岡さん(@RichardImaokaJP)'
        },
        {
          image: require('~/assets/img/sponsorship/img-recruit3.jpg'),
          url: 'https://blog.scalamatsuri.org/entry/2018/01/17/173447',
          title: '株式会社FOLIOさまへ転職された 横田紋奈さん（@ihcomega）'
        },
        {
          image: require('~/assets/img/sponsorship/img-recruit2.jpg'),
          url: 'https://blog.scalamatsuri.org/entry/2017/10/30/150859',
          title: '株式会社セプテーニ・オリジナルさまへ転職された 河内崇さん（@kawachi）'
        }
      ]
    }
  },
  head() {
    return {
      title: 'スポンサー募集',
      meta: [{ name: 'og:title', content: 'スポンサー募集 | ScalaMatsuri 2020' }]
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
  text-align: center;
  font-size: 20px;
  width: 100%;
  padding: 100px 20px .1em;

  & > strong {
    border-bottom: 2px solid #EBA808;
    padding-bottom: .1em;
  }
}
</style>
