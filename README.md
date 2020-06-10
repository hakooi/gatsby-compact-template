# Hakooi Gatsby Compact

A starter skeleton with advanced features for [Gatsby](https://github.com/gatsbyjs/gatsby/).

## Lighthouse Audit Score

<div align="center">
    <a href="https://developers.google.com/web/tools/lighthouse/">
      <img src="docs/pwa-score.png" alt="Lighthouse Score" />
    </a>
</div>

Check out the [Features](#features) to read about all [Progressive Web App](https://developers.google.com/web/progressive-web-apps) capabilities of this starter in detail.

You can see the demo site on this link:
[Hakooi Compact](http://compact-hakooi.netlify.app/)

## Features

- Gatsby v2 support
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Posts in Markdown
  - Code syntax highlighting
  - Embed YouTube videos
  - Embed Tweets
- Pagination
  - Configurable via `SiteConfig.js`
- Tags
  - Separate page for posts under each tag
- Categories
  - Separate page for posts under each category
- [Disqus](https://disqus.com/) support
  - Notifications about new disqus comments
- `/static/` and content folders are available to use with [gatsby-image](https://www.gatsbyjs.org/docs/gatsby-image/) out of the box for optimized image generation
- High configurability
- Separate components for everything:
  - User social profiles
  - Copyright information
  - More!
- [NetlifyCMS](https://www.netlifycms.org) support out of the box
- PWA features
  - Offline support
  - Web App Manifest support
  - Loading progress for slow networks
- SEO
  - [Google Analytics](https://marketingplatform.google.com/about/analytics/) support
  - Sitemap generation
  - robots.txt
  - General description tags
  - [Schema.org JSONLD (Google Rich Snippets)](https://schema.org/)
  - [OpenGraph Tags (Facebook/Google+/Pinterest)](https://ogp.me/)
  - [Twitter Tags (Twitter Cards)](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup)
- RSS feeds
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - LinkedIn share button
  - Telegram share button
- Development tools
  - [ESLint](https://eslint.org/) for linting
  - [Prettier](https://prettier.io/) for code formatting
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - [Netlify](https://www.netlify.com/) deploy configuration
  - [CodeClimate](https://codeclimate.com/) configuration file and badge

NOTE: This repo is based on [Gatsby Material Starter](https://github.com/Vagr9K/gatsby-advanced-starter)

## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed and updated) by running from your CLI:

```sh
gatsby new YourProjectName https://github.com/Vagr9K/gatsby-advanced-starter
npm run develop # or gatsby develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```sh
git clone https://github.com/hakooi/gatsby-compact-template YourProjectName # Clone the project
cd YourProjectname
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn install
npm run develop # or gatsby develop
```

## Configuration

Edit the export object in `data/SiteConfig`:

```js
module.exports = {
  siteTitle: 'Gatsby Advanced Starter', // Site title.
  siteTitleShort: 'GA Starter', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'GatsbyJS Advanced Starter', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'http://compact-hakooi.netlify.app/', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'A GatsbyJS stater with Advanced design in mind.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: 'Gatsby Advanced Starter RSS feed', // Title of the RSS feed
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  disqusShortname: 'hakooi', // Disqus shortname.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page. Set to zero to disable paging. See the "Pagination" section.
  userName: 'Advanced User', // Username to display in the author segment.
  userEmail: 'AdvancedUser@example.com', // Email used for RSS feed's author segment
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'North Pole, Earth', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/hakooi/gatsby-compact-template',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/Vagr9K',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:mail@hakooi.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2019. Advanced User', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
}
```

If want to customize Netlify CMS, e.g. registering custom widgets or styling the preview pane, you can do so by editing `src/netlifycms/index.js`:

```js
import CMS from 'netlify-cms-app'

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
    },
  },
})
```

You can also optionally set `pathPrefix`:

```js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: '/gatsby-advanced-starter', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
}
```

WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!

## Pagination

By default the starter will show 4 posts per page. The landing page is the first page located on `/` (controlled by the `Listing` component).

You can control the amount of posts via `SiteConfig` by setting the `postsPerPage: ${NUMBER}`.

NOTE: You can also disable the pagination by setting the `postsPerPage: 0`. In this case the landing page will be controlled by the `Landing` component.

## NetlifyCMS

First of all, make sure to edit `static/admin/config.yml` and add your [GitHub/GitLab/NetlifyId credentials](https://www.netlifycms.org/docs/authentication-backends/):

```yml
backend:
  name: github # Refer to https://www.netlifycms.org/docs/authentication-backends/ for auth backend list and instructions
  branch: master # Branch to update
  repo: vagr9k/gatsby-material-starter # Repo for pushing new commits. Make sure to replace with your repo!
```

You can visit `/admin/` after and will be greeted by a login dialog (depending on the auth provider you ave chosen above).

For NetlifyCMS specific issues visit the [official documentation](https://www.netlifycms.org/docs/intro/).
