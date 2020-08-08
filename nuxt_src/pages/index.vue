<template>
  <div id="top">
    <main-visual />
    <news :posts="blogPosts" />
    <banner />
    <pre-event />
    <events />
    <accepted-sessions />
    <access />
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
import banner from '@/components/sections/top/banner'
import events from '@/components/sections/top/events'
import access from '@/components/sections/top/access'
import info from '@/components/sections/top/info'
import topSponsors from '@/components/sections/top/sponsors'
import AcceptedSessions from '@/components/sections/top/AcceptedSessions'

import preEvent from '@/components/sections/top/preEvent'

export default {
  components: {
    mainVisual,
    news,
    preEvent,
    banner,
    events,
    access,
    info,
    topSponsors,
    AcceptedSessions
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
