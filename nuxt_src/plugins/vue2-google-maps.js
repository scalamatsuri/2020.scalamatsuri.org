import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDUWjurZjk0GfzAYRej78ZW-0JrJJfcUDw',
    libraries: 'places'
  }
})
