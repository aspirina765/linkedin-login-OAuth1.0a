require('dotenv').config()

module.exports = {
  'linkedinAuth': {
    'clientID': process.env.LINKEDIN_APP_CLIENT_ID, // your App ID
    'clientSecret': process.env.LINKEDIN_APP_CLIENT_SECRET, // your App Secret
    'callbackURL': 'http://127.0.0.1:8080/auth/linkedin/callback'
  }
}

