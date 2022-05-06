/** @type {import('next').NextConfig} */
module.exports = {
  exportPathMap: async function () {
    return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/facility': { page: '/facility'},
        '/location': { page: 'location' },
        '/apply': { page: '/apply' },
        '/events': { page: '/events'},
        '/faq': { page: 'faq' },
        '/meals': { page: '/meals' },
        '/messages': { page: '/messages' },
        '/404': { page: '/404' }, 
      }
  },
  trailingSlash: true,
  unstable_runtimeJS: false,
  config: {
    unstable_runtimeJS: false
  },
  images: {
    loader: "custom"
  }
}