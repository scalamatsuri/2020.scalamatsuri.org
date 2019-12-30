<i18n>
## language=yaml
  en:
    title: "Proposals"
    en_90: "90-minute sessions in English"
    en_40: "40-minute sessions in English"
    ja_90: "90-minute sessions in Japanese"
    ja_40: "40-minute sessions in Japanese"
  ja:
    title: "応募セッション一覧"
    en_90: "90分英語"
    en_40: "40分英語"
    ja_90: "90分日本語"
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

    <!-- 90分英語 ここから -->
    <div class="program">
      <h2 class="program_title">
        {{ $t('en_90') }}
      </h2>
      <div class="schedule schedule-thin">
        <!-- schedule 1コマ ここから -->
        <div class="schedule_content">
          <div class="schedule_events">
            <div v-if="!isLoading" class="skelton__container">
              <div class="skelton__text">
                <div class="shcedule_skelton skelton__title" />
                <div class="shcedule_skelton skelton__description" />
              </div>
              <div class="skelton__speaker">
                <div class="skelton__avator" />
                <div class="skelton__speaker-info">
                  <div class="shcedule_skelton skelton__speaker-name" />
                  <div class="shcedule_skelton skelton__speaker-sns" />
                </div>
              </div>
            </div>
            <div v-for="program in filterProposalsByIdAndLang(90, 'en')" v-else :key="program.id" @click="openModal(program)">
              <table-row :program="program" :locale="$i18n.locale" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 90分英語 ここまで -->

    <!-- 90分日本語 ここから -->
    <div class="program">
      <h2 class="program_title">
        {{ $t('ja_90') }}
      </h2>
      <div class="schedule schedule-thin">
        <!-- schedule 1コマ ここから -->
        <div class="schedule_content">
          <div class="schedule_events">
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
import { mapActions, mapGetters } from 'vuex'
import TableRow from '@/components/sections/candidates/tableRow'
import Modal from '@/components/parts/SessionDetailModal.vue'

export default {
  components: {
    Modal,
    TableRow
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
    }),
    isLoading: function () {
      return !(this.filterProposalsByIdAndLang && this.filterProposalsByIdAndLang.length > 0)
    }
  },
  mounted() {
    this.fetchProposals()
  },
  methods: {
    ...mapActions({
      fetchProposals: 'proposals/fetch'
    }),
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
.shcedule_skelton {
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, rgba(#fff, 0.5), transparent);
    position: absolute;
    top: 0;
    left: 0;
    animation: skeleton-animation 1.2s linear infinite;
  }
}
.skelton__container {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.skelton__text {
  flex: 0 1 70%;
}
.skelton__title {
  width: 100%;
  height: 22px;
  border-radius: 2px;
  background: #d9d9d9;
}
.skelton__description {
  width: 80%;
  height: 14px;
  border-radius: 2px;
  margin-top: .5em;
  background: #d9d9d9;
}

.skelton__speaker {
  flex: 0 1 15%;
  height: 100%;
  display: flex;
}

.skelton__avator {
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #d9d9d9;
}

.skelton__speaker-info {
  flex: 0 0 calc(100% - 40px);
  align-content: space-around
}

.skelton__speaker-name {
  height: 14px;
  width: 100%;
  border-radius: 2px;
  margin-left: 10px;
  margin-top: 4px;
  background: #d9d9d9;
}
.skelton__speaker-sns {
  height: 10px;
  width: 80%;
  border-radius: 2px;
  margin-left: 8px;
  margin-top: 8px;
  background: #d9d9d9;
}

// animations
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@keyframes skeleton-animation {
  0% {transform: translateX(-100%)}
  100%{ transform: translateX(100%)}
}
</style>
