import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import _ from 'lodash-es'

const store = createPinia()
store.use(piniaPluginPersistedstate)

const setting = localStorage.getItem('setting')
const tabPersist = _.get(setting, 'tabPersist')
if (!tabPersist) {
  localStorage.removeItem('tab')
}

export default store
