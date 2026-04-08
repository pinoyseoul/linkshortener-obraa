export default defineAppConfig({
  title: 'a',
  coffee: 'https://www.obraa.org/contact',
  twitter: 'https://twitter.com/obraa',
  facebook: 'https://facebook.com/obraa',
  description: 'Link shortener for OBRAA',
  image: 'https://a.obraa.org/banner.png',
  previewTTL: 300,
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
