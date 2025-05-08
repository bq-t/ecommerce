import type { Schema, Struct } from '@strapi/strapi'

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers'
  info: {
    description: ''
    displayName: 'Footer'
    icon: 'layout'
  }
  attributes: {
    description: Schema.Attribute.String
    linkGroups: Schema.Attribute.Component<'global.footer-link-group', true> &
      Schema.Attribute.Required
    logotype: Schema.Attribute.Media<'images'> & Schema.Attribute.Required
    socials: Schema.Attribute.Component<'shared.social', true> &
      Schema.Attribute.Required
  }
}

export interface GlobalFooterLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_global_footer_link_groups'
  info: {
    displayName: 'FooterLinkGroup'
    icon: 'bulletList'
  }
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required
    links: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.Required
  }
}

export interface GlobalHeader extends Struct.ComponentSchema {
  collectionName: 'components_global_headers'
  info: {
    description: ''
    displayName: 'Header'
    icon: 'layout'
  }
  attributes: {
    logotype: Schema.Attribute.Media<'images'> & Schema.Attribute.Required
  }
}

export interface GlobalNavbar extends Struct.ComponentSchema {
  collectionName: 'components_global_navbars'
  info: {
    description: ''
    displayName: 'Navbar'
    icon: 'layout'
  }
  attributes: {
    items: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.Required
  }
}

export interface GlobalSettings extends Struct.ComponentSchema {
  collectionName: 'components_global_settings'
  info: {
    description: ''
    displayName: 'Settings'
    icon: 'connector'
  }
  attributes: {
    appName: Schema.Attribute.String & Schema.Attribute.Required
    features: Schema.Attribute.Component<'global.settings-features', false> &
      Schema.Attribute.Required
  }
}

export interface GlobalSettingsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_global_settings_features'
  info: {
    displayName: 'SettingsFeatures'
    icon: 'connector'
  }
  attributes: {
    authorization: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>
    cart: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>
    favorites: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>
  }
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links'
  info: {
    description: ''
    displayName: 'Link'
    icon: 'link'
  }
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required
    target: Schema.Attribute.Enumeration<['_blank', '_self', '_parent', '_top']>
    url: Schema.Attribute.String
  }
}

export interface SharedSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials'
  info: {
    description: ''
    displayName: 'Social'
    icon: 'twitter'
  }
  attributes: {
    icon: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::strapi-plugin-iconhub.iconhub'>
    name: Schema.Attribute.String & Schema.Attribute.Required
    url: Schema.Attribute.String & Schema.Attribute.Required
  }
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.footer': GlobalFooter
      'global.footer-link-group': GlobalFooterLinkGroup
      'global.header': GlobalHeader
      'global.navbar': GlobalNavbar
      'global.settings': GlobalSettings
      'global.settings-features': GlobalSettingsFeatures
      'shared.link': SharedLink
      'shared.social': SharedSocial
    }
  }
}
