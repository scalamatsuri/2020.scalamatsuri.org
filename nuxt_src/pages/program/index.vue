<i18n>
## language=yaml
en:
  title: Program
  day1_header: "6/27 Workshop Day"
  day2_header: "6/28 Conference Day"
  day3_header: "6/29 Unconference Day"
  to_candidates: "To Proposals"
  bookmark_only: "BookMark Only"
  day1_description: |
    ScalaMatsuri has the important goal of expanding the Scala community by helping more people know the attraction of Scala and helping those who want to get started with Scala. <br>
    At ScalaMatsuri 2019, we will hold a "Scala lesson by drawing" at the workshop DAY on the first day.
  day2_description: "Conference DAY in conference format (3 parallel sessions). Doors open at 9:00, scheduled to end at 20:00. Lunch and light refreshment will be served at the party."
  day3_description: |
    Unconference DAY in unconference format, except for Room A. Doors open at 9:00, and scheduled to end at 18:00. Breakfast and lunch will be served.<br><br>
    <a href="%{unconference_link}" target="_blank" rel="noopener">What is unconference?</a><br><br>
    <a href="https://scalabridge.org/" target="_blank" rel="noopener">ScalaBridge</a> Tokyo is an introductory Scala programming workshop for women and engineers from all underrepresented background (race, gender, age etc) to build more inclusive Scala community.
ja:
  title: プログラム
  day1_header: "6/27 Workshop Day"
  day2_header: "6/28 Conference Day"
  day3_header: "6/29 Unconference Day"
  to_candidates: "応募セッション一覧を表示する"
  bookmark_only: "ブックマークのみ表示"
  day1_description:  |
    ScalaMatsuri では、Scala の魅力をより多くの人に知ってもらったり、Scala に入門したい人の手助けをすることで、Scalaコミュニティの裾野を広げていくという大事な目標があります。
    ScalaMatsuri 2019 では、初日のワークショップDAYにて、「お絵かきで学ぶScala教室」を開催することになりました。
  day2_description: カンファレンス DAY カンファレンス形式(3パラレルセッション) 9時00分入場開始 20時終了予定。 昼食および懇親会での軽食をご用意しています。
  day3_description: |
    アンカンファレンス DAY ただし会場Aはカンファレンス形式 9時00分入場開始 18:00時終了予定。<br>
    朝食と昼食をご用意しています。<br><br>
    アンカンファレンスについては<a href="%{unconference_link}" target="_blank" rel="noopener">コチラ</a><br><br>
    <a href="https://scalabridge.org/" target="_blank" rel="noopener">ScalaBridge</a>は、女性やマイノリティのエンジニア向けのワークショップとして海外で開催されてきたワークショッププログラムです。
</i18n>

<template>
  <!-- TODO Table構造なので上手にComponentとして切り出したりしたいぞ！！！ -->
  <!-- 開始時刻が正となるため、例えば、13:00〜14:00のものと13:30〜14:00があったら、左の列が区切られるImage -->
  <!-- google io 2018 参考 https://events.google.com/io2018/schedule/?section=may-8 -->
  <div id="program">
    <div class="main js-subNav">
      <div class="main_inner">
        <h1 class="main_title">
          {{ $t('title') }}
        </h1>
        <ul class="main_index">
          <li class="main_item">
            <a href="#day1">{{ $t('day1_header') }}</a>
          </li>
          <li class="main_item">
            <a href="#day2">{{ $t('day2_header') }}</a>
          </li>
          <li class="main_item">
            <a href="#day3">{{ $t('day3_header') }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="btnArea programCtrl">
      <p class="content_link candidatesBtn">
        <nuxt-link :to="localePath('proposals')">
          {{ $t('to_candidates') }}
          <img v-lazy="require('~/assets/img/common/arrow-next-b.svg')" alt>
        </nuxt-link>
      </p>
      <a class="js-changeView favBtn" href="javascript:void(0) ">{{ $t('bookmark_only') }}</a>
    </div>

    <div id="day1" class="program">
      <h2 class="program_title">
        {{ $t('day1_header') }}
      </h2>
      <p class="program_text">
        <span v-html="$t('day1_description')" />
      </p>
      <div class="schedule">
        <div v-for="(v,k) in getProgram(1, 'ja')" :key="k">
          <div class="schedule_content">
            <p class="schedule_time">
              {{ k }}
            </p>
            <div class="schedule_events">
              <div v-for="schedule in v" :key="schedule.id" @click="openModal(schedule)">
                <schedule :schedule="schedule" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="day2" class="program">
      <h2 class="program_title">
        {{ $t('day2_header') }}
      </h2>
      <p class="program_text">
        <span v-html="$t('day2_description')" />
      </p>
      <div class="schedule">
        <div v-for="(v,k) in getProgram(2, 'ja')" :key="k">
          <div class="schedule_content">
            <p class="schedule_time">
              {{ k }}
            </p>
            <div class="schedule_events">
              <div v-for="schedule in v" :key="schedule.id" @click="openModal(schedule)">
                <schedule :schedule="schedule" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="day3" class="program">
      <h2 class="program_title">
        {{ $t('day3_header') }}
      </h2>
      <p class="program_text">
        <span v-html="$t('day3_description', { unconference_link: localePath('unconference') })" />
      </p>
      <div class="schedule">
        <div v-for="(v,k) in getProgram(3, 'ja')" :key="k">
          <div class="schedule_content">
            <p class="schedule_time">
              {{ k }}
            </p>
            <div class="schedule_events">
              <div v-for="schedule in v" :key="schedule.id" @click="openModal(schedule)">
                <schedule :schedule="schedule" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="showModal" class="modal is_active fadeIn animated" tabindex="0" @click.self="closeModal()" @keyup.escape="closeModal()">
        <modal :schedule="selectProgram" @close="closeModal" />
      </div>
    </transition>
  </div>
</template>
<script>
import Modal from '@/components/sections/program/modal.vue'
import Schedule from '@/components/sections/program/schedule.vue'

export default {
  components: {
    Modal,
    Schedule
  },
  data() {
    return {
      program_list: {
        day1: [
          require('@/data/program/day1/sample.yaml'),
          require('@/data/program/day1/sample2.yaml'),
          require('@/data/program/day1/sample3.yaml')
        ],
        day2: [
          require('@/data/program/day2/1-0-0_registration.yaml'),
          require('@/data/program/day2/1-1-0_opening.yaml'),
          require('@/data/program/day2/sample.yaml')
        ],
        day3: [require('@/data/program/day3/sample.yaml')]
      },
      selectProgram: null,
      showModal: false
    }
  },
  methods: {
    /**
     * 開始時刻をキーに、Programの詳細のListをValueに持つMapを返す
     * @param day
     * @param lang
     * @returns {*}
     */
    getProgram(day, lang) {
      let candidate = []
      switch (day) {
        case 1:
          candidate = this.program_list.day1
          break
        case 2:
          candidate = this.program_list.day2
          break
        case 3:
          candidate = this.program_list.day3
          break
      }

      // TODO starの状態は本当はDBから引く…というのがある
      return candidate
        .map((a) => {
          const program = a[lang]
          program.id = a.id
          program.time = a.time
          program.room = a.room
          program.star = a.star
          return program
        })
        .reduce((acc, p) => {
          if (acc[p.time.started_at] === undefined) {
            acc[p.time.started_at] = []
          }
          acc[p.time.started_at].push(p)
          return acc
        }, {})
    },
    openModal(item) {
      if (item.speaker.id === '') {
        return
      }
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
