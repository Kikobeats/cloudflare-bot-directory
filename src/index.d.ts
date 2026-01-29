/**
 * Bot category types from CloudFlare Radar
 */
export type BotCategory =
  | 'ACCESSIBILITY'
  | 'ADVERTISING'
  | 'AI_CRAWLER'
  | 'ARCHIVING'
  | 'FEED_FETCHER'
  | 'MONITORING_AND_ANALYTICS'
  | 'ONLINE_PAYMENTS'
  | 'OTHER'
  | 'PAGE_PREVIEW'
  | 'SEARCH_ENGINE_CRAWLER'
  | 'SECURITY'
  | 'SEO'
  | 'SOCIAL_MEDIA_MARKETING'
  | 'WEBHOOKS'

/**
 * Bot kind types
 */
export type BotKind = 'BOT'

/**
 * A verified bot entry from CloudFlare Radar Bot Directory
 */
export interface Bot {
  /** URL-friendly unique identifier */
  slug: string
  /** Human-readable bot name */
  name: string
  /** Bot kind classification */
  kind: BotKind
  /** Company or organization operating the bot */
  operator: string
  /** URL to operator's documentation or website */
  operatorUrl: string
  /** Bot category classification */
  category: BotCategory
  /** Description of what the bot does */
  description: string
  /** Whether the bot respects robots.txt */
  followsRobotsTxt: boolean
  /** User agent pattern(s) for matching */
  userAgentPatterns: string[]
  /** Known user agent string(s) */
  userAgents: string[]
}

/**
 * Array of all verified bots from CloudFlare Radar Bot Directory
 */
declare const bots: Bot[]

export default bots
