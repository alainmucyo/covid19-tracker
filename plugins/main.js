import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts);
// import "@babel/polyfill/dist/polyfill"
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD3jw_q2QpJsuVg-k_vbPrTztLP4KfPVVk',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
  installComponents: true
});
