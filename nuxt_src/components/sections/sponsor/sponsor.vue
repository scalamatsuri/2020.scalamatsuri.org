<template>
  <section class="sponsor_item">
    <div class="sponsor_logo">
      <img :src="sponsor.logo" :alt="sponsor.company_name">
    </div>
    <section class="sponsor_content">
      <h3 class="sponsor_name">
        {{ sponsor.company_name }}
      </h3>
      <p class="sponsor_url">
        <a :href="sponsor.url" target="_blank" rel="noopener">{{ sponsor.url }}</a>
      </p>
      <div class="sponsor_text">
        <p>{{ sponsor.text_1 }}</p>
        <ul>
          <li v-for="link in sponsor.links" :key="link.url">
            <a :href="link.url" target="_blank" rel="noopener">{{ link.url }}</a>
          </li>
        </ul>
        <p>{{ sponsor.text_2 }}</p>
      </div>
      <a :href="sponsor.recruit_link" class="sponsor_btn" target="_blank" rel="noopener">エンジニア採用ページ</a>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    sponsor: {
      // Object{}である
      type: Object,
      // 必須である
      required: true,
      // デフォルト値
      default: () => { return {} }
    }
  }
}
</script>
