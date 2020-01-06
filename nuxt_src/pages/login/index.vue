<template>
  <div>
    <div v-if="isUnknown">
      Loading...
    </div>

    <div v-show="isLoggedOut" id="firebaseui-container" />

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
.photo {
    width: 200px;
    height: 200px;
}
</style>
