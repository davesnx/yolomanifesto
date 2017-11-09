const GitHub = require('github')
const isRunningInsideCI = require('is-ci')
const argv = require('minimist')(process.argv.slice(2))

const github = new GitHub()

github.authenticate({
  type: 'token',
  token: process.env.GH_TOKEN
})

if (!isRunningInsideCI) {
  console.log('This script only runs inside Travis')
  process.exit(1)
}

if (!argv.hasOwnProperty('msg')) {
  console.log('You should provide a --msg argument')
  process.exit(1)
}

const repository = process.env.TRAVIS_REPO_SLUG.split('/')

const Message = {
  owner: repository[0],
  repo: repository[1],
  number: process.env.TRAVIS_PULL_REQUEST,
  body: argv.msg
}

github.issues.createComment(Message)
