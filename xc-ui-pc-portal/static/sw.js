importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "xc-portal",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.ffdf66a35960189f283e.js",
    "revision": "cc205f4c0c74fe25bab22cecdf459490"
  },
  {
    "url": "/_nuxt/layouts_default.715617be41bd635136d6.js",
    "revision": "02b86cd6b3c1f956d66d7d0f8318fa34"
  },
  {
    "url": "/_nuxt/layouts_default1.468aa23a5b2532c09cd7.js",
    "revision": "e734716f5e84cb950ecbf07be2a89cf7"
  },
  {
    "url": "/_nuxt/layouts_empty-page.e7682fe58ac95e7b8dbb.js",
    "revision": "2005b3ece1fac1361feaa73f2ef22577"
  },
  {
    "url": "/_nuxt/layouts_test.fa8771d38b379aa92c92.js",
    "revision": "7fc5b2a5fbd723ead6db2ffc8972d99d"
  },
  {
    "url": "/_nuxt/manifest.3125bde3e7f50bfd6f0e.js",
    "revision": "58786b7f90270eda5df30ac3b682eb18"
  },
  {
    "url": "/_nuxt/pages_about.3821abeda36f745fd52f.js",
    "revision": "5583f2ffe8815f3db45897244e70f7cf"
  },
  {
    "url": "/_nuxt/pages_course_search_index.3839368327ec7a65cbee.js",
    "revision": "f9c24215e8d6dd5eb94b71976d81443b"
  },
  {
    "url": "/_nuxt/pages_user__id.c6e9d79c65af8b9e37f1.js",
    "revision": "64875c0bf533872a14809fac31fb0a18"
  },
  {
    "url": "/_nuxt/pages_user_index.05dddd1008bc4b5cd52a.js",
    "revision": "26360c42619746c4273898ebf172643c"
  },
  {
    "url": "/_nuxt/pages_user_one.3b9d7bbe5129704bd4b3.js",
    "revision": "58652df9d04d36fed412dc076ef81932"
  },
  {
    "url": "/_nuxt/pages_user.dd970ef5d1b2587c96b1.js",
    "revision": "f9a99f9ebb9aeadbf9ea79c5b4a003e5"
  },
  {
    "url": "/_nuxt/vendor.432827a019a2be39ea3e.js",
    "revision": "82a9f5d8c590af70c0b7db9d60dff4b2"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

