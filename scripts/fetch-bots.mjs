import { writeFile } from 'node:fs/promises'
import pMap from 'p-map'

const cloudflare = path =>
  fetch(`https://api.cloudflare.com/client/v4/radar/${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.CLOUDFLARE_TOKEN}`
    }
  }).then(res => res.json())

const allBots = (await cloudflare('/bots?limit=999')).result.bots

let completed = 0

const percentage = completed =>
  `${Math.round((completed / allBots.length) * 100)}%`

const bots = await pMap(
  allBots,
  async ({ slug }) => {
    const details = await cloudflare(`/bots/${slug}`)
    process.stdout.write(`…${percentage(++completed)}`)

    const bot = details.result.bot
    if (bot.userAgentPatterns.length === 1 && bot.userAgentPatterns[0] === '') {
      bot.userAgentPatterns = []
    }

    return bot
  },
  { concurrency: 10 }
)

await writeFile('src/index.json', JSON.stringify(bots, null, 2))
