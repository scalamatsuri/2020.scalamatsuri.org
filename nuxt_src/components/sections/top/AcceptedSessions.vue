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
        <list-session-container :programs="sessions" @program-clicked="openModal" />
      </div>
    </div>
    <!-- modal -->
    <transition name="fade">
      <div v-if="showModal" class="modal" tabindex="0" @click.self="closeModal" @keyup.escape="closeModal()">
        <modal :program="selectedProgram" @close="closeModal" />
      </div>
    </transition>
  </section>
</template>

<script>
import ListSessionContainer from '@/components/parts/ListSessionContainer'
import Modal from '@/components/parts/SessionDetailModal.vue'

// accepted sessions json
import sessions from '~/data/top/acceptedSessions.json'

export default {
  components: {
    Modal,
    ListSessionContainer
  },
  data() {
    return {
      sessions,
      selectedProgram: null,
      showModal: null
    }
  },
  methods: {
    openModal(item) {
      this.selectedProgram = item
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  pointer-events: auto;
  position: fixed;
  background: rgba(0,0,0,.6);
  justify-content:center;
  align-items: center;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  animation-duration: .1s;
  &.is_active {
  display: flex;
  }
}
.modal_inner {
  z-index: 4;
  max-width: 740px;
  width: 90%;
  margin: 0 auto;
  background-color: #FFF;
  border-radius: 10px;
  padding: 50px 60px 40px;

  .modal_title {
    font-weight: bold;
    line-height: 39px;
    font-size: 24px;
    letter-spacing: 0.1em;
  }
  .modal_speaker {
    display: inline-block;
    margin-top: 10px;
    margin-right: 18px;
  }
  .modal_speaker_icon {
    width: 40px;
    height: 40px;
    box-shadow:0px 0px 1px 1px rgba(0,0,0,0.1) inset;
    background-size: cover;
    border-radius: 20px;
    float: left;
  }
  .modal_speaker_name {
    font-weight: bold;
    line-height: 20px;
    font-size: 12px;
    letter-spacing: 0.1em;
    margin-left: 50px;
  }
  .modal_speaker_id {
    font-weight: bold;
    line-height: 20px;
    font-size: 12px;
    letter-spacing: 0.1em;
    margin-left: 50px;
    >a {
      color: #00A4DE;
    }

    > a > img {
      width: 16px;
      height: 16px;
      margin-top: .24em;
      margin-right: 4px;
    }
  }
  .modal_text {
    line-height: 26px;
    font-size: 16px;
    letter-spacing: 0.1em;
    margin-top: 30px;
  }
  .modal_close {
    font-weight: bold;
    line-height: 23px;
    font-size: 14px;
    text-align: center;
    width: 80px;
    height: 30px;
    border-radius: 15px;
    border: 2px solid #000000;
    line-height: 25px;
    margin: 40px auto 0;
    cursor: pointer;
  }
  .modal_scopeArea {
    margin-top: 37px;
  }
  .modal_scope {
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    letter-spacing: 0.1em;
    display: flex;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    & + .modal_scope {
      border-top: none;
    }
    dt,dd {
      padding: 15px 0;
    }
    dt {
      width: 34%;
    }
  }
}
// SP
@media screen and (max-width: 820px - 1) {
  .modal_inner {
    height:  calc(100% - 40px);
    padding: 40px 40px 0;
  }
  .modal_content {
    max-height: calc(100% - 70px);
    overflow: auto;

  }
  .modal_close {
    margin-top: 20px;
  }
}
</style>
