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
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          blogTitle: 'Resources',
          blogSidebarTitle: 'Resources',
          blogSidebarCount: 1,
          path: 'resources',
          routeBasePath: 'resources',
          showReadingTime: false,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/enarx/docs/blob/main',
        },
        resources: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/enarx/resources/blob/main',
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
      navbar: {
        title: 'Enarx',
        logo: {
          alt: 'Enarx',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Start/Introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/resources',
            label: 'Resources',
            position: 'left'
          },
          {
            href: 'https://github.com/enarx/enarx',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: '/meetings',
            label: 'Meetings',
            position: 'left',
          },
          {
            href: '/events',
            label: 'Events',
            position: 'left',
          },
          {
            href: 'https://chat.enarx.dev',
            label: 'Chat',
            position: 'left',
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
                label: 'Contributing Guide',
                to: '/docs/Contributing/Introduction',
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
                label: 'Resources',
                to: '/resources',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/enarx/enarx',
              },
              {
                label: 'Blog',
                to: 'https://blog.enarx.dev',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Meetings',
                to: '/meetings',
              },
              {
                label: 'Events',
                to: '/events',
              },
              {
                label: 'Chat',
                href: 'https://chat.enarx.dev',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/enarxproject',
              },
            ],
          },
        ],
        copyright: `Enarx - ${new Date().getFullYear()} - Creative Commons`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
