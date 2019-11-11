import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCgjX7v2q71aNfdp3VVF2fNoOdVfWBgks0',
    libraries: 'places'
  }
})
