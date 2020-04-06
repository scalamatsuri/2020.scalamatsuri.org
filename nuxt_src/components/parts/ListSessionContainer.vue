<template>
  <div class="schedule schedule-thin">
    <div class="schedule_content">
      <div class="schedule_events">
        <div v-for="program in programs" :key="program.id" @click="$emit('program-clicked', program)">
          <table-row :program="program" :locale="$i18n.locale" :on-vote="onVote" :on-unvote="onUnVote" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    programs: {
      type: Array,
      required: false,
      default: () => { return [] }
    }
  }
}
</script>
