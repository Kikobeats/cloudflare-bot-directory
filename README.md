# cloudflare-bot-directory

<p align="center">
  <br>
  <img src="https://i.imgur.com/mXwNCvH.png" alt="cloudflare-bot-directory">
  <br>
</p>

> The CloudFlare Radar Bot Directory as a JSON. Check [index.json](/src/index.json)

## Install

```bash
$ npm install cloudflare-bot-directory --save
```

## Usage

```js
const cloudflareBotDirectory = require('cloudflare-bot-directory')


console.log(cloudflareBotDirectory.map(item => item.slug))

> console.log(cloudflareBotDirectory.map(item => item.slug))
// [
//   '2checkout',
//   '360monitoring',
//   'aasa',
//   'accessible-web-bot',
//   'accessstatus',
//   'acquia-optimize-monsido',
//   'activecomply-bot',
//   'adagiobot',
//   'addsearchbot',
//   'addthis',
//   'adidxbot',
//   'adstxtcrawler',
//   ... 502 more items
// ]
```

## License

**cloudflare-bot-directory** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/kikobeats/cloudflare-bot-directory/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/kikobeats/cloudflare-bot-directory/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/kikobeats) · Twitter [@kikobeats](https://twitter.com/kikobeats)
