import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/Alert'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAe02PzVRiyII0Qnu87_sKfN8E2c8bc58k',
      authDomain: 'devmeetup-vue-30509.firebaseapp.com',
      databaseURL: 'https://devmeetup-vue-30509.firebaseio.com',
      projectId: 'devmeetup-vue-30509',
      storageBucket: 'devmeetup-vue-30509.appspot.com',
      messagingSenderId: '189808114025'
    })
    this.$store.dispatch('loadMeetups')
  }
})
