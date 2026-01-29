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
  async bot => {
    const details = await cloudflare(`/bots/${bot.slug}`)
    process.stdout.write(`…${percentage(++completed)}`)
    return details.result.bot
  },
  { concurrency: 10 }
)

await writeFile('src/index.json', JSON.stringify(bots, null, 2))
