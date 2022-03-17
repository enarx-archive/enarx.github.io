// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Enarx',
  tagline: 'WebAssembly + Confidential Computing',
  url: 'https://enarx.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  organizationName: 'enarx', // Usually your GitHub org/user name.
  projectName: 'enarx', // Usually your repo name.
  scripts: [
    'https://buttons.github.io/buttons.js',
    {
      src: 'https://buttons.github.io/buttons.js',
      async: true,
    }
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          blogTitle: 'Resources',
          blogSidebarTitle: 'Resources',
          blogSidebarCount: 10,
          path: 'resources',
          routeBasePath: 'resources',
          showReadingTime: false,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/enarx/enarx.github.io/blob/main',
          remarkPlugins: [require('mdx-mermaid')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '2R4MLGYJE6',
        apiKey: 'bba347a8f20881dc32ec2b1eccb47f5e',  
        indexName: 'enarx',
        contextualSearch: true,
        searchPagePath: 'search',
      },
      navbar: {
        title: 'Enarx',
        logo: {
          alt: 'Enarx',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Docs',
            to: '/docs/Start/Introduction',
            position: 'left',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/Start/Introduction',
              },
              {
                label: 'Installation Guide',
                to: '/docs/Installation/Introduction',
              },
              {
                label: 'WebAssembly Guide',
                to: '/docs/WebAssembly/Introduction',
              },
              {
                label: 'Networking Guide',
                to: '/docs/Networking/Introduction',
              },
              {
                label: 'Contributing Guide',
                to: '/docs/Contributing/Introduction',
              },
              {
                label: 'Fellowship Guide',
                to: '/docs/Fellowship/Introduction',
              },
              {
                label: 'Technical Overview',
                to: '/docs/Technical/Introduction',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Resources',
            to: '/resources',
            position: 'left',
            items: [
              {
                label: 'All Resources',
                to: '/resources',                
              },
              {
                label: 'Blog',
                to: '/resources/tags/enarxs-blog',                
              },
              {
                label: 'Articles',
                to: '/resources/tags/article',                
              },
              {
                label: 'Releases',
                to: '/resources/tags/release',
              },
              {
                label: 'Events',
                to: '/resources/tags/event',                
              },
              {
                label: 'Webinars',
                to: '/resources/tags/webinar',                
              },
              {
                label: 'Meetings',
                to: '/resources/tags/meeting',                
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/enarx/enarx',
              },
              {
                label: 'Chat',
                href: 'https://chat.enarx.dev',
              },
              {
                label: 'Blog',
                href: 'https://blog.enarx.dev',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/enarxproject',
              },
              {
                label: 'Upcoming Events',
                to: '/events',
              },
              {
                label: 'Upcoming Webinars',
                to: '/webinars',
              },
              {
                label: 'Upcoming Meetings',
                href: '/meetings',
              },
            ],
          },
          {
            href: 'https://github.com/enarx/enarx',
            label: 'Star',
            position: 'right',
            className: 'github-button',
            'data-icon': 'octicon-star',
            'data-size': 'large',
            'data-show-count': 'true',
            'aria-label': "Star enarx/enarx on GitHub"
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/Start/Introduction',
              },
              {
                label: 'Installation Guide',
                to: '/docs/Installation/Introduction',
              },
              {
                label: 'WebAssembly Guide',
                to: '/docs/WebAssembly/Introduction',
              },
              {
                label: 'Networking Guide',
                to: '/docs/Networking/Introduction',
              },
              {
                label: 'Contributing Guide',
                to: '/docs/Contributing/Introduction',
              },
              {
                label: 'Fellowship Guide',
                to: '/docs/Fellowship/Introduction',
              },
              {
                label: 'Technical Overview',
                to: '/docs/Technical/Introduction',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'All Resources',
                to: '/resources',                
              },
              {
                label: 'Blog',
                to: '/resources/tags/enarxs-blog',                
              },
              {
                label: 'Articles',
                to: '/resources/tags/article',                
              },
              {
                label: 'Releases',
                to: '/resources/tags/release',
              },
              {
                label: 'Events',
                to: '/resources/tags/event',                
              },
              {
                label: 'Webinars',
                to: '/resources/tags/webinar',                
              },
              {
                label: 'Meetings',
                to: '/resources/tags/meeting',                
              },
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/enarx/enarx',
              },
              {
                label: 'Chat',
                href: 'https://chat.enarx.dev',
              },
              {
                label: 'Blog',
                href: 'https://blog.enarx.dev',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/enarxproject',
              },
              {
                label: 'Upcoming Events',
                to: '/events',
              },
              {
                label: 'Upcoming Webinars',
                to: '/webinars',
              },
              {
                label: 'Upcoming Meetings',
                href: '/meetings',
              },
            ],
          },
        ],
        copyright: `Enarx - ${new Date().getFullYear()} - <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons</a> - <a href="https://enarx.dev/sponsors">Sponsors</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
