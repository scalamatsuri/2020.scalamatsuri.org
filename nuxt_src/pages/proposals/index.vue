<i18n>
## language=yaml
  en:
    title: "Proposals"
    en_100: "100-minute sessions in English"
    en_40: "40-minute sessions in English"
    ja_100: "100-minute sessions in Japanese"
    ja_40: "40-minute sessions in Japanese"
  ja:
    title: "応募セッション一覧"
    en_100: "100分英語"
    en_40: "40分英語"
    ja_100: "100分日本語"
    ja_40: "40分日本語"
</i18n>
<template>
  <div id="candidates">
    <div class="main">
      <div class="main_inner">
        <h1 class="main_title">
          {{ $t('title') }}
        </h1>
      </div>
    </div>
    <ul class="js-tags tagIndex" />

    <!-- 100分英語 ここから -->
    <div class="program">
      <h2 class="program_title">
        {{ $t('en_100') }}
      </h2>
      <div class="schedule schedule-thin">
        <!-- schedule 1コマ ここから -->
        <div class="schedule_content">
          <div class="schedule_events">
            <ProposalSkelton v-if="isLoading()" />
            <div v-for="program in filterProposalsByIdAndLang(90, 'en')" :key="program.id" @click="openModal(program)">
              <table-row :program="program" :locale="$i18n.locale" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 100分英語 ここまで -->

    <!-- 100分日本語 ここから -->
    <div class="program">
      <h2 class="program_title">
        {{ $t('ja_100') }}
      </h2>
      <div class="schedule schedule-thin">
        <!-- schedule 1コマ ここから -->
        <div class="schedule_content">
          <div class="schedule_events">
            <ProposalSkelton v-if="isLoading()" />
            <div v-for="program in filterProposalsByIdAndLang(90, 'ja')" :key="program.id" @click="openModal(program)">
              <table-row :program="program" :locale="$i18n.locale" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 90分日本語 ここまで -->

    <!-- 40分英語 ここから -->
    <div class="program">
      <h2 class="program_title">
        {{ $t('en_40') }}
      </h2>
      <div class="schedule schedule-thin">
        <!-- schedule 1コマ ここから -->
        <div class="schedule_content">
          <div class="schedule_events">
            <ProposalSkelton v-if="isLoading()" />
            <div v-for="program in filterProposalsByIdAndLang(40, 'en')" :key="program.id" @click="openModal(program)">
              <table-row :program="program" :locale="$i18n.locale" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 40分日本語 ここまで -->

    <!-- 40分日本語 ここから -->
    <div class="program">
      <h2 class="program_title">
        {{ $t('ja_40') }}
      </h2>
      <div class="schedule schedule-thin">
        <!-- schedule 1コマ ここから -->
        <div class="schedule_content">
          <div class="schedule_events">
            <ProposalSkelton v-if="isLoading()" />
            <div v-for="program in filterProposalsByIdAndLang(40, 'ja')" :key="program.id" @click="openModal(program)">
              <table-row :program="program" :locale="$i18n.locale" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 40分日本語 ここまで -->

    <!-- modal -->
    <transition name="fade">
      <div v-if="showModal" class="modal is_active fadeIn animated" tabindex="0" @click.self="closeModal" @keyup.escape="closeModal()">
        <modal :program="selectProgram" @close="closeModal" />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import TableRow from '@/components/sections/candidates/tableRow'
import Modal from '@/components/parts/SessionDetailModal.vue'
import ProposalSkelton from '@/components/parts/ProposalSkelton.vue'
import * as mTypes from '@/store/mutation-types'

export default {
  components: {
    Modal,
    TableRow,
    ProposalSkelton
  },
  data() {
    return {
      selectProgram: null,
      showModal: false
    }
  },
  computed: {
    ...mapGetters({
      filterProposalsByIdAndLang: 'proposals/filterByLengthAndLang',
      isLoading: 'proposals/isLoading'
    })
  },
  created() {
    this.fetchProposals()
  },
  methods: {
    ...mapActions({
      fetchProposals: 'proposals/fetch'
    }),
    ...mapMutations(
      { setIsLoading: mTypes.SET_IS_LOADING }
    ),
    openModal(item) {
      this.selectProgram = item
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  },
  head() {
    const $t = this.$t.bind(this)
    return {
      title: $t('title'),
      meta: [
        { name: 'og:title', content: `${$t('title')} | ScalaMatsuri 2020` }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// animations
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
