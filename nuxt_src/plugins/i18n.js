import { loadFacebookShareButton } from '@/utils/socialMediaUtils'

export default ({ app }) => {
  app.i18n.onLanguageSwitched = (_, newLocaleCode) => {
    delete window.FB
    const newLocale = app.i18n.locales.filter(locale => locale.code === newLocaleCode)
    if (!newLocale || newLocale.length === 0) throw new Error(`Not found a valid locale object for code ${newLocaleCode}`)
    loadFacebookShareButton(newLocale[0])
  }
}
