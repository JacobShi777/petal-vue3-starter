import { createI18n } from 'vue-i18n'
import commonZhCn from './common/zh-cn'
import commonEn from './common/en'
import businessZhCn from './business/zh-cn'
import businessEn from './business/en'

function getLocaleFromLocalStorage() {
  try {
    const lsLocale = localStorage.getItem('locale')
    const localesObj = JSON.parse(lsLocale as any)
    return localesObj.locale
  } catch (err) {
    return 'zh-cn'
  }
}

const i18n = createI18n({
  legacy: false, // 确保 legacy 设置为 false
  locale: getLocaleFromLocalStorage(), // 设置默认语言, 从localStorage中获取
  fallbackLocale: 'zh-cn', // 设置备用语言
  messages: {
    'zh-cn': { ...commonZhCn, ...businessZhCn },
    en: { ...commonEn, ...businessEn },
  },
})

export default i18n
