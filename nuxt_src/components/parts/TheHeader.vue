<i18n>
## language=yaml
  en:
    sponsor: "Sponsor"
    access: "Access"
    code-of-conduct: "Code of Conduct"
    program: "Program"
    outline: "Outline"
    login: "Login"
    ticket: "Ticket"
    cfp: "CFP"
  ja:
    sponsor: "スポンサー"
    access: "アクセス"
    code-of-conduct: "行動規範"
    program: "プログラム"
    outline: "開催概要"
    login: "Login"
    ticket: "チケット購入"
    cfp: "CFP"
</i18n>

<template>
  <header>
    <!-- グローバルナビ PC ここから -->
    <div ref="header" class="header is_pc" :class="{ 'is_active': isHeaderActivePC, 'is_fixed': isHeaderFixedPC }">
      <div class="header_inner">
        <p class="logo">
          <nuxt-link :to="localePath('index')">
            <img src="~/assets/img/common/logo.svg" alt="ScalaMatsuri 2020" width="42" height="32">
          </nuxt-link>
        </p>
        <div class="menu">
          <ul class="gnav">
            <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/') }">
              <nuxt-link :to="localePath('index')">
                <span>{{ $t('outline') }}</span>
              </nuxt-link>
            </li>
            <!--            <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/program') }">-->
            <!--              <nuxt-link :to="localePath('program')">-->
            <!--                <span>{{ $t('program') }}</span>-->
            <!--              </nuxt-link>-->
            <!--            </li>-->
            <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/code-of-conduct') }">
              <nuxt-link :to="localePath('code-of-conduct')">
                <span>{{ $t('code-of-conduct') }}</span>
              </nuxt-link>
            </li>
            <!--            <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/sponsor') }">-->
            <!--              <nuxt-link :to="localePath('sponsor')">-->
            <!--                <span>{{ $t('sponsor') }}</span>-->
            <!--              </nuxt-link>-->
            <!--            </li>-->
            <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/#access') }">
              <nuxt-link :to="locale_access_link()">
                <span>{{ $t('access') }}</span>
              </nuxt-link>
            </li>
            <li class="gnav_item">
              <LangSwitcher />
            </li>
          </ul>
          <!--  ログイン前 ここから -->
          <ul class="function">
            <!--              <div class="function_item function_item-application">-->
            <!--                TODO jsな気がするのでlocale path じゃない？-->
            <!--                <nuxt-link :to="localePath('login')">{{ $t('login') }}</nuxt-link>-->
            <!--              </div>-->
            <!--              <div class="function_item function_item-application">-->
            <!--                TODO locale pathじゃない？(外部サイト？)-->
            <!--                <nuxt-link :to="localePath('ticket')">{{ $t('ticket') }}</nuxt-link>-->
            <!--              </div>-->
            <li class="function_item function_item-login">
              <nuxt-link :to="localePath('cfp')">
                {{ $t('cfp') }}
              </nuxt-link>
            </li>
          </ul>
          <!-- ログイン前 ここまで -->
          <!-- ログイン後 ここから -->
          <!-- <ul class="function">
            <li class="function_item function_item-userIcon">
                <div class="userMenu js-myMenu">
                  <div class="function_userIcon js-myMenuIcon" style="background-image: url('/img/dummy/icon-user2.jpg')"></div>
                  <ul class="userMenu_list js-myMenuList">
                    <li class="userMenu_list_item"><a href="#">メニュー1</a></li>
                    <li class="userMenu_list_item"><a href="#">メニュー2</a></li>
                    <li class="userMenu_list_item"><a href="#">メニュー3</a></li>
                  </ul>
                </div>
            </li>
            <li class="function_item function_item-application"><a href="">チケット申込</a></li>
          </ul> -->
          <!-- ログイン後 ここまで -->
        </div>
      </div>
    </div>
    <!-- グローバルナビ PC ここまで -->
    <!-- グローバルナビ SP ここから -->
    <transition name="fade">
      <div v-if="menuActive" class="shadow" @click.self="toggleMenu()" />
    </transition>
    <div class="header is_sp">
      <div class="header_inner">
        <transition name="fade">
          <p v-if="!menuActive" class="logo">
            <a
              href="/"
            ><img
              src="~/assets/img/common/logo.svg"
              alt="ScalaMatsuri 2020"
              height="24"
            ><span class="logo_type">ScalaMatsuri 2020</span></a>
          </p>
        </transition>
        <transition name="expand-v">
          <div v-if="menuActive" class="menu">
            <ul class="gnav">
              <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/') }" @click="toggleMenu()">
                <nuxt-link :to="localePath('index')">
                  <span>{{ $t('outline') }}</span>
                </nuxt-link>
              </li>
              <!--              <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/program') }" @click="toggleMenu()">-->
              <!--                <nuxt-link :to="localePath('program')">-->
              <!--                  <span>{{ $t('program') }}</span>-->
              <!--                </nuxt-link>-->
              <!--              </li>-->
              <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/code-of-conduct') }" @click="toggleMenu()">
                <nuxt-link :to="localePath('code-of-conduct')">
                  <span>{{ $t('code-of-conduct') }}</span>
                </nuxt-link>
              </li>
              <!--              <li class="gnav_item" :class="{ 'gnav_item-current': current_path('/sponsor') }" @click="toggleMenu()">-->
              <!--                <nuxt-link :to="localePath('sponsor')">-->
              <!--                  <span>{{ $t('sponsor') }}</span>-->
              <!--                </nuxt-link>-->
              <!--              </li>-->
              <li class="gnav_item" :class="{ 'gnav_item-current': current_path('#access') }" @click="toggleMenu()">
                <nuxt-link :to="locale_access_link()">
                  <span>{{ $t('access') }}</span>
                </nuxt-link>
              </li>
            </ul>
            <!--  ログイン前 ここから -->
            <div class="function">
              <!--              <div class="function_item function_item-login">-->
              <!--                TODO jsな気がするのでlocale path じゃない？-->
              <!--                <nuxt-link :to="localePath('login')">{{ $t('login') }}</nuxt-link>-->
              <!--              </div>-->
              <!--              <div class="function_item function_item-application">-->
              <!--                TODO locale pathじゃない？(外部サイト？)-->
              <!--                <nuxt-link :to="localePath('ticket')">{{ $t('ticket') }}</nuxt-link>-->
              <!--              </div>-->
              <div class="function_item function_item-login" @click="toggleMenu()">
                <nuxt-link :to="localePath('cfp')">
                  {{ $t('cfp') }}
                </nuxt-link>
              </div>
            <!--  ログイン前 ここまで -->
            <!--  ログイン後 ここから -->
            <!-- <div class="function_item-userIcon">
              <div class="userMenu">
                <div class="function_userInfo js-accordion">
                  <div class="function_userIcon" style="background-image: url('/img/dummy/icon-user2.jpg')"></div>
                  <p class="function_userName">ポプテピピック氏</p>
                </div>
                <ul class="userMenu_list js-accordionTarget">
                  <li class="userMenu_list_item"><a href="#">メニュー1</a></li>
                  <li class="userMenu_list_item"><a href="#">メニュー2</a></li>
                  <li class="userMenu_list_item"><a href="#">メニュー3</a></li>
                </ul>
              </div>
            </div> -->
            <!--  ログイン後 ここまで -->
            </div>
            <LangSwitcherSp />
            <a class="menuCloseBtn is_sp" @click="toggleMenu()">閉じる</a>
          </div>
        </transition>
        <a class="menuBtn" :class="{ 'is_active': menuActive }" @click.capture="toggleMenu()">
          <span />
          <span />
          <span />
        </a>
      </div>
      <!-- グローバルナビ SP ここまで -->
    </div>
  </header>
</template>

<script>
import LangSwitcher from '@/components/parts/LangSwitcher'
import LangSwitcherSp from '@/components/parts/LangSwitcherSp'

export default {
  components: {
    LangSwitcher,
    LangSwitcherSp
  },
  data: () => {
    return {
      menuActive: false,
      lastScrollPos: 0,
      isHeaderActivePC: true, // PC only.toggle css classes on header in conditions.Default true for initial rendering.
      isHeaderFixedPC: true // Same as above.
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateHeaderClassAssignmentByScrollPos)
    if (this.$route.hash.match(/^#/)) {
      document.getElementById(this.$route.hash.replace(/^#/, '')).scrollIntoView()
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateHeaderClassAssignmentByScrollPos)
  },
  methods: {
    current_path(path) {
      return this.$route.fullPath.endsWith(path)
    },
    locale_access_link() {
      // ページ内リンクの時は、フルパスではなく "#access" で飛ばしたい
      return this.$route.fullPath.endsWith('ja') || this.$route.fullPath.endsWith('en') ? '#access' : this.localePath('index') + '#access'
    },
    toggleMenu() {
      this.menuActive = !this.menuActive
    },
    /**
     * Determin the header css class assignment by scroll position.
     */
    updateHeaderClassAssignmentByScrollPos() {
      const headerHeight = this.$refs.header.clientHeight || 0
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop

      // Whether the scroll direction is up
      const isScrollUp = currentScrollPos < this.lastScrollPos
      // will be true when user scrolled down more than header height
      const isHeaderOutOfView = currentScrollPos > headerHeight

      // Update each css class assignment
      this.isHeaderActivePC = !isHeaderOutOfView || (isHeaderOutOfView && isScrollUp)
      this.isHeaderFixedPC = isHeaderOutOfView || (this.isHeaderFixedPC && currentScrollPos > 0)

      // update the last scroll position.
      this.lastScrollPos = currentScrollPos
    }
  }
}
</script>

<style lang="scss" scoped>
// Animation definition
.fade {
  &-enter-active, &-leave-active {
    transition: opacity .3s ease-out;
    will-change: opacity;
  }
  &-enter, &-leave-to {
    opacity: 0;
  }
}
.expand-v {
  &-enter-active {
    max-height: calc(100vh - 40px);
    transition: max-height .6s ease;
  }
  &-leave-active {
    max-height: calc(100vh - 40px);
    transition: max-height .3s ease;
  }
  &-enter, &-leave-to {
    max-height: 0;
  }
}
</style>
