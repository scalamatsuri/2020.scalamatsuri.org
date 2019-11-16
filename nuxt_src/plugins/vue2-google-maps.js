import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAiIiIytGetRUV12U-jIqWlIdmWn0n1Z1Y',
    libraries: 'places'
  }
})
