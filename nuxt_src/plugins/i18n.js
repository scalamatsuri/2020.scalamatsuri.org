export default ({ app }) => {
  app.i18n.onLanguageSwitched = (_, __) => {
    delete window.FB
    const localeIso = app.i18n.t('locale_iso')
    let rootNuxtAppEl = document.getElementById('root-nuxt-app')
    if (!rootNuxtAppEl) {
      rootNuxtAppEl = document.getElementsByTagName('script')[0]
      rootNuxtAppEl.id = 'root-nuxt-app'
    }
    let facebookJsSdkEl = document.getElementById('facebook-jssdk')
    if (facebookJsSdkEl) {
      facebookJsSdkEl.previousSibling.remove()
      facebookJsSdkEl.remove()
    }
    facebookJsSdkEl = document.createElement('script')
    facebookJsSdkEl.id = 'facebook-jssdk'
    facebookJsSdkEl.src = `https://connect.facebook.net/${localeIso}/sdk.js#xfbml=1&version=v3.0`
    rootNuxtAppEl.parentNode.insertBefore(facebookJsSdkEl, rootNuxtAppEl)
    if (window.FB) {
      window.FB.XFBML.parse()
    }
  }
}
