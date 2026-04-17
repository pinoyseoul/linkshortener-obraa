export default defineAppConfig({
  title: 'a',
  coffee: 'https://www.obraa.org/p/contact.html',
  twitter: 'https://twitter.com/obraaorg',
  facebook: 'https://facebook.com/obraaorg',
  description: 'Link shortener for OBRAA',
  image: 'https://a.obraa.org/banner.png',
  previewTTL: 300,
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
