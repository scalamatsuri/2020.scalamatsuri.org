const loadFacebookShareButton = (locale) => {
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
  facebookJsSdkEl.src = `https://connect.facebook.net/${locale.iso}/sdk.js#xfbml=1&version=v3.0`
  rootNuxtAppEl.parentNode.insertBefore(facebookJsSdkEl, rootNuxtAppEl)
  if (window.FB) {
    window.FB.XFBML.parse()
  }
}

export {
  loadFacebookShareButton
}
