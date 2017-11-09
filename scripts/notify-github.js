const GitHub = require('github')
const isRunningInsideCI = require('is-ci')
const isUrl = require('is-url')
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

if (!argv.hasOwnProperty('msg') && isUrl(argv.msg)) {
  console.log('You should provide a --msg argument')
  process.exit(1)
}

const repository = process.env.TRAVIS_REPO_SLUG.split('/')
const bodyMessage = `
**NOW URL**
  Preview this PR here: ${argv.msg}
`

const Message = {
  owner: repository[0],
  repo: repository[1],
  number: process.env.TRAVIS_PULL_REQUEST,
  body: argv.msg
}

github.issues.createComment(Message)
