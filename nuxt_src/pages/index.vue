<template>
  <div id="top">
    <main-visual />
    <news :posts="blogPosts" />
    <thankYou />
    <banner />
    <program />
    <events />
    <lazy-component>
      <info />
    </lazy-component>
    <topSponsors />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import mainVisual from '@/components/sections/top/mainVisual'
import news from '@/components/sections/top/news'
import thankYou from '@/components/sections/top/thankYou'
import banner from '@/components/sections/top/banner'
import events from '@/components/sections/top/events'
// import access from '@/components/sections/top/access'
import info from '@/components/sections/top/info'
import topSponsors from '@/components/sections/top/sponsors'
import program from '@/components/sections/top/program'

export default {
  components: {
    mainVisual,
    news,
    thankYou,
    banner,
    events,
    info,
    topSponsors,
    program
  },
  computed: {
    ...mapState({
      blogPosts: state => state.blogPosts.list.slice(0, 14) // get first 15 posts
    })
  },
  mounted() {
    this.fetchBlogRss({ locale: this.$i18n.locale })
  },
  methods: {
    ...mapActions({
      fetchBlogRss: 'blogPosts/fetch'
    })
  }
}
</script>
