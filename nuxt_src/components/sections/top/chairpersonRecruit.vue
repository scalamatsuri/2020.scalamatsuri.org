<i18n>
## language=yaml
ja:
  title: 座長公募中！
  overview: |
    ScalaMatsuri 2021 以降の座長（総合プロデューサー）を公募しています。<br/>
    詳細は、<a href="https://blog.scalamatsuri.org/entry/2021/04/12/125916">ブログ記事</a>をご覧ください。質問は<a href="https://peing.net/ja/scala_jp">質問箱</a>までどうぞ。
en:
  title: Looking for new chairperson!
  overview: |
    We're looking for people who're interested in being the chairperson of ScalaMatsuri.<br/>
    Please refer to <a href="https://blog.scalamatsuri.org/entry/2021/04/12/125916">the blog post</a> for more detail, which is written in Japanese <br/>
    since it is mandatory to communicate our stakeholders, especially the majority of sponsors in Japan.
</i18n>
<template>
  <section class="content pre-events">
    <div class="content_inner">
      <h2 class="content_title">
        {{ $t('title') }}
      </h2>
      <p class="content_text">
        <span v-html="$t('overview')" />
      </p>
    </div>
  </section>
</template>
