import Firebase from 'firebase'

function createAPI({ config, version }) {
  Firebase.initializeApp(config)
  return Firebase.database().ref(version)
}

const api = createAPI({
  version: '/v0',
  config: {
    databaseURL: 'https://hacker-news.firebaseio.com'
  }
})

export default api
