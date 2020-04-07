<i18n>
## language=yaml
en:
ja:
</i18n>

<template>
  <section class="content sessions">
    <div class="content_inner">
      <h2 class="content_title">
        Accepted Sessions
      </h2>
      <div>
        <list-session-container :programs="sessions" />
      </div>
    </div>
  </section>
</template>

<script>
import ListSessionContainer from '@/components/parts/ListSessionContainer'

// accepted sessions json
import sessions from '~/data/top/acceptedSessions.json'

export default {
  components: {
    ListSessionContainer
  },
  data() {
    return { sessions }
  }
}
</script>
