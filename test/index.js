'use strict'

const test = require('ava')

const bot = require('cloudflare-bot-directory')

test('there is not empty string on arrays', t => {
  t.false(bot.some(bot => bot.userAgents.some(userAgent => userAgent === '')))
  t.false(
    bot.some(bot =>
      bot.userAgentPatterns.some(userAgentPattern => userAgentPattern === '')
    )
  )
})

test('there is no values starting with whitespace on arrays', t => {
  t.false(
    bot.some(bot => bot.userAgents.some(userAgent => userAgent.startsWith(' ')))
  )
  t.false(
    bot.some(bot =>
      bot.userAgentPatterns.some(userAgentPattern =>
        userAgentPattern.startsWith(' ')
      )
    )
  )
})
