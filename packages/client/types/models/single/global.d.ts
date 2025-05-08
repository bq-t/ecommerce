import type { Link } from '@/types/shared/link'
import type { Media } from '@/types/shared/media'
import type { Social } from '@/types/shared/social'

export interface Global {
  header: GlobalHeader
  navbar: GlobalNavbar
  footer: GlobalFooter
  settings: GlobalSettings
}

export interface GlobalHeader {
  logotype: Media
}

export interface GlobalNavbar {
  items: Link[]
}

export interface GlobalFooter {
  logotype: Media
  description?: string
  linkGroups: GlobalFooterLinkGroup[]
  socials: Social[]
}

export interface GlobalFooterLinkGroup {
  label: string
  links: Link[]
}

export interface GlobalSettings {
  appName: string
  features: {
    favorites: boolean
    cart: boolean
    authorization: boolean
  }
}
