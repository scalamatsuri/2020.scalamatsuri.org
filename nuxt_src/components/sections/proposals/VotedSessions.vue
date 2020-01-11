<i18n>
  en:
    title: "Sessions you voted"
    description: "Please order by drag & drop.\nThe screening will take into account the ranking."
  ja:
    title: "投票済みセッション"
    description: "ドラッグ&ドロップで順位付けをしてください。\n順位も考慮されて選考されます。"
</i18n>

<template>
  <section class="section__voted-sessions">
    <h1 class="voted-session__title">
      {{ $t('title') }} ({{ sessions.length }}/5)
    </h1>

    <div class="voted-session__description">
      <p>{{ $t('description') }}</p>
    </div>

    <ul class="voted-session__sessions-list">
      <li v-for="(session, index) in sessions" :key="session.title" class="session-list__list-container">
        <div class="list__rank">
          {{ index + 1 }}
        </div>
        <div class="list__body">
          <DraggableSessionList :program="session" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import DraggableSessionList from '@/components/parts/DraggableSessionList.vue'
export default {
  components: {
    DraggableSessionList
  },
  props: {
    sessions: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  .section__voted-sessions {
    background-color: #F1F1F1;
    text-align: center;
    padding: 48px 0;
  }
  .voted-session__title {
    padding: 8px 48px;
    font-weight: bold;
    line-height: 49px;
    font-size: 30px;
    font-weight: normal;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFF;
    background: #333;
    display: inline-block;
  }
  .voted-session__description {
    padding: 48px 0;
    line-height: 2rem;
    font-weight: bold;
    white-space: pre-line;
  }
  .session-list__list-container {
    display: flex;
    margin: 0 auto;
    max-width: 980px;
    padding: 0 10px;
    box-sizing: border-box;
    justify-content: center;
  .list__rank {
    flex: 0 0 30px;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;

  }
  .list__body {
    flex: 1 0 calc(100% - 30px);
    padding: 2px;
  }
  }
</style>
