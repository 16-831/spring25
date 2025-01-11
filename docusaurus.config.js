// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Introduction to Robot Learning',
  tagline: '',
  favicon: 'img/ri_logo_jpg.jpg',

  // Set the production url of your site here
  url: 'https://16-831.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/fall24',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '16-831', // Usually your GitHub org/user name.
  projectName: 'fall24', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ri_logo_jpg.jpg',
      navbar: {
        title: '16-831',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ri_logo_jpg.jpg',
        },
        items: [
          {to: '/logistics', label: 'Logistics', position: 'left'},
          {to: '/lectures', label: 'Lectures', position: 'left'},
          {to: 'https://piazza.com/class/lz80ucdscem787', label: 'Piazza', position: 'left'},
          // {to: '/projects', label: 'Project Gallery', position: 'left'},
          {to: '/previous', label: 'Previous Offerings', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        disableSwitch: true
      }
    }),
};

export default config;
