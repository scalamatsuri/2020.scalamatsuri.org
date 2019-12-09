<i18n>
  en:
    login: "Sign in to ScalaMatsuri2020"
  ja:
    login: "ScalaMatsuri2020にログイン"
</i18n>

<template>
  <div class="login">
    <div v-if="isLoggedOut" class="login__container">
      <div class="login__logo">
        <img v-if="$mq === 'lg'" class="logo--pc" :src="require(`~/assets/img/login/img-main_logo-pc.png?resize&size=200`)" alt="ScalaMatsuri2020">
        <img v-if="$mq === 'sm'" class="logo--sp" :src="require(`~/assets/img/login/img-main_logo-sp.png?resize&size=314`)" alt="ScalaMatsuri2020">
      </div>
      <div class="login__text">
        {{ $t('login') }}
      </div>
      <div class="login__firebase-container">
        <div v-show="isLoggedOut" id="firebaseui-container" />
      </div>
    </div>

    <div v-if="isLoggedIn">
      <img v-if="auth.profile.photoURL" :src="auth.profile.photoURL" class="photo">
      <ul>
        <li v-if="auth.profile.displayName">
          {{ auth.profile.displayName }}
        </li>
        <li v-if="auth.profile.email">
          {{ auth.profile.email }}
        </li>
      </ul>
      <button @click="logout">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import firebase from 'firebase/app'
import { auth } from '~/plugins/firebase'

export default {
  name: 'FirebaseAuth',
  computed: {
    ...mapState({
      auth: state => state.auth
    }),
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
      isLoggedOut: 'auth/isLoggedOut',
      isUnknown: 'auth/isUnknown'
    })
  },
  mounted() {
    this.$nextTick(function () {
      this.renderFirebaseUI()
    })
  },
  updated() {
    this.$nextTick(function () {
      this.renderFirebaseUI()
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
    renderFirebaseUI() {
      if (process.client) {
        require('firebaseui/dist/firebaseui.css')
        const firebaseui = require('firebaseui')
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)

        const config = {
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
          ],
          callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
              return false
            }
          },
          signInFlow: 'popup'
        }
        ui.start('#firebaseui-container', config)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  background-color: #F4F4F4;
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
}
.login__container {
  padding: 60px 0 20px;
}
.login__logo {
  text-align: center;

  & > img {
    width: 120px;
    max-width: 80vw;
  }
}

.login__text {
  font-size: 21px;
  padding: 20px 0 10px;
  text-align: center;
}

.login__firebase-container {
    padding: 20px 0;
    background: white;
    border-radius: 5px;
    margin: 20px auto 40px;
    width: 400px;
    max-width: 90vw;
}
</style>
