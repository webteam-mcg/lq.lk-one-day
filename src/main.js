import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import OneSignal from "onesignal-vue";
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(OneSignal);

new Vue({
  router,
  vuetify,
  render: h => h(App),
  beforeMount() {
    this.$OneSignal.init({
      appId: "62e9d952-ba0f-4373-9ceb-99609004d5d6",
      allowLocalhostAsSecureOrigin: true,
    });
  },
}).$mount('#app')
